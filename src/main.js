import { Terminal } from 'xterm';
import {default as Repl, SPECIAL_INPUTS} from './repl';
import winPtyCompat from 'xterm/lib/addons/winptyCompat/winptyCompat';
import fit from 'xterm/lib/addons/fit/fit';
import webLinks from 'xterm/lib/addons/webLinks/webLinks';

import 'xterm/dist/xterm.css';

Terminal.applyAddon(winPtyCompat);
Terminal.applyAddon(fit);
Terminal.applyAddon(webLinks);

let term = new Terminal({
  cursorBlink: true,
});
term.open(document.queryCommandEnabled('#terminal'))
window.term = term;

term.prompt = () => {
  term.write("\r\n$ ")
}

term.winptyCompatInit();
term.webLinksInit();
term.fit();

term.writeln('Hello from \x1B[1;3;31mxterm.js\x1B[0m');
term.prompt();

const repl = new Repl(term);

term.on('key', async (key,ev) => {
  try {
    switch (ev.key) {
      case 'Enter':
        let result = await repl.process(SPECIAL_INPUTS.end_command)
        term.write("\r\n" + result);
        term.prompt();
        break;
      case 'Backspace':
        term.write('\b \b');
        repl.process(SPECIAL_INPUTS.backspace);
        break;
      default:
        term.write(key)
        repl.process(key)
        break;
    }
  } catch (e) {
    term.write("\r\n" + e);
    term.prompt();
  }
});
