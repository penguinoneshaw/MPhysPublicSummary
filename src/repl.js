
class Repl {
  constructor () {
    this.state = {
      history: [],
      input: '',
      programmePosition: 0
    }
  }

  _red(str) {
    return `\x1B[1;3;31m${str}\x1B[0m`
  }

  _commands (command) {
    const tokenized = command.split(' ');
    switch (tokenized[0].toLowerCase()) {
      case 'hello':
        return `Hello! This is my public summary for my Mathematical Physics MPhys Project entitled 'Singing in a Warming Ocean'.\r\nYou can do several things from this interface:\r\n${this._red("what is <concept>")}: Defines <concept>. Choose from 'SOFAR', 'Global Warming'`;
    
      default:
        throw new Error(`"${command}" not understood. Try saying ${this._red('Hello')}`);
    }
  }

  process (input) {
    return new Promise((resolve, reject) => {
      switch (input) {
        case SPECIAL_INPUTS.end_command:
          this.state.history.push(this.state.input.trim());
          this.state.input = '';
          try {
            resolve(this._commands(this.state.history.slice(-1)[0]));
          } catch (error) {
            reject(error)
          }
          break;
        case SPECIAL_INPUTS.backspace:
          this.state.input = this.state.input.slice(0,this.state.input.length - 1)
          resolve(false);
          break
        default:
          this.state.input += input;
          resolve(false);
          break;
      }
      reject();
    })
  }
}

export const SPECIAL_INPUTS = {
  end_command: 0,
  backspace: 1
};

export default Repl;