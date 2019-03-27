/* eslint-disable no-case-declarations */
import {
    Terminal
} from 'xterm';
import {
    default as Repl,
    SPECIAL_INPUTS
} from './repl';
import winPtyCompat from 'xterm/lib/addons/winptyCompat/winptyCompat';
import fit from 'xterm/lib/addons/fit/fit';
import webLinks from 'xterm/lib/addons/webLinks/webLinks';
import ResizeObserver from 'resize-observer-polyfill';

import 'xterm/dist/xterm.css';
import './main.css';

Terminal.applyAddon(winPtyCompat);
Terminal.applyAddon(fit);
Terminal.applyAddon(webLinks);

let term = new Terminal({
    cursorBlink: true,
    convertEol: true
});
term.open(document.querySelector('#terminal'));

term.prompt = () => {
    term.write('\r\n\r\n$ ');
};


term.winptyCompatInit();
term.webLinksInit();
term.fit();


const repl = new Repl();
term.writeln(repl.helpstring());
term.prompt();


term.on('key', async (key, ev) => {
    try {
        switch (ev.key) {
        case 'Enter':
            const result = await repl.process(SPECIAL_INPUTS.end_command);
            term.write('\r\n' + result);
            term.prompt();
            break;
        case 'Backspace':
            term.write('\b \b');
            repl.process(SPECIAL_INPUTS.backspace);
            break;
        case 'ArrowUp':
        case 'ArrowDown':
            break;
        default:
            term.write(key);
            repl.process(key);
            break;
        }
    } catch (e) {
        term.write('\r\n' + e);
        term.prompt();
    }
});