import topics from './topics.js';
class Repl {
    constructor() {
        this.state = {
            history: [],
            input: '',
            topics
        };
    }

    _red(str) {
        return `\x1B[1;31m${str}\x1B[0m`;
    }

    _green(str) {
        return `\x1B[1;32m${str}\x1B[0m`;
    }

    _definitions(topic) {
        if (topic === ''){
            throw new Error(`Please choose a topic to be described. Usage: ${this._red('about <topic>')}.`);
        } else {
            if (!Object.keys(this.state.topics.keys).includes(topic)) throw new Error(`${topic} not understood`);
            const topicData = this.state.topics.topics[this.state.topics.keys[topic]];
            let outputstring = topicData.description;
            if (topicData.unlocked) {
                if (!topicData.visited) {
                    topicData.visited = true;
                    const toBeUnlocked = topicData.unlocks.filter((k)=> this.state.topics.topics[k].unlocked == false);
                    if (toBeUnlocked.length > 0) {
                        toBeUnlocked.forEach((key) => this.state.topics.topics[key].unlocked = true);
                        outputstring += `\r\n\r\nYou've unlocked: ${topicData.unlocks.map(this._green).join(', ')}`;
                    }
                }
                return outputstring;
            } else {
                throw new Error(`${this._green(topic)} not unlocked yet!`);
            }
        }
    }

    helpstring() {
        return `Hello! This is the public summary for my Mathematical Physics MPhys Project entitled 'Singing in a Warming Ocean' [but don't worry, there's no maths!].\r\n\r\nHave you ever wondered how sound travels in oceans? Do you wonder whether fish ever get deafened by loud noises? How does whale song carry over the vast distances involved in oceans?\n\r\r\nThere are several things you can do by typing the commands in red and pressing 'enter':\r\n${this._red('about <topic>')}: Defines <topic>.\r\n${this._red('available-topics')}: Shows the list of available topics. More are unlocked as you go through!\n${this._red('help')}: Shows this help message.\n\nStart by typing ${this._red('about')} ${this._green('sound')} below!`;
    }

    _commands(command) {
        const tokenized = command.toLowerCase().trim().split(' ');
        switch (tokenized[0]) {
        case 'hello':
        case 'help':
            return this.helpstring();
        case 'about':
            return this._definitions(tokenized.slice(1).join(' '));
        case 'available-topics':
        case 'avail':
            return '\nTopics\r\n======\r\n' + Object.keys(this.state.topics.topics).filter((k) => this.state.topics.topics[k].unlocked).map((k) => this.state.topics.topics[k].visited ? k + ' ✓': this._green(k)).join('\r\n');
        case '':
            return '';
        default:
            throw new Error(`"${command}" not understood. Try saying ${this._red('hello')}`);
        }
    }

    process(input) {
        return new Promise((resolve, reject) => {
            switch (input) {
            case SPECIAL_INPUTS.end_command:
                this.state.history.push(this.state.input.trim());
                this.state.input = '';
                try {
                    resolve(this._commands(this.state.history.slice(-1)[0]));
                } catch (error) {
                    reject(error);
                }
                break;
            case SPECIAL_INPUTS.backspace:
                this.state.input = this.state.input.slice(0, this.state.input.length - 1);
                resolve(false);
                break;
            default:
                this.state.input += input;
                resolve(false);
                break;
            }
            reject();
        });
    }
}

export const SPECIAL_INPUTS = {
    end_command: 0,
    backspace: 1
};

export default Repl;