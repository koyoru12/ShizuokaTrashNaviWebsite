class Action {
    type = ''
}

export class MessageAction extends Action {
    type = 'message'
    text = ''
    constructor(args) {
        super();
        if (!args.text) throw new Error('message action > text property is required');
        this.text = args.text;
    }
}