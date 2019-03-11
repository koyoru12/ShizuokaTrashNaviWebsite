class Message {
    type = undefined;
}

export class TextMessage extends Message {
    type = 'text'
    text = ''
    constructor(text) {
        super();
        this.text = text;
    }
}

export class FlexMessage extends Message {
    type = 'flex'
    contents = Object
    constructor(args) {
        super();
        switch (args.contents.type) {
            case 'bubble':
                this.contents = args.contents;
                break;

            default:
                throw new Error('invalid contents type of ' + args.contents.type);
        }
    }
}
