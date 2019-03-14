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

export class PostbackAction extends Action {
    type = 'postback'
    data = ''
    displayText = ''
    constructor(args) {
        super();
        if (!args.data) throw new Error('postback action > data property is required');
        this.data = args.data;
        this.displayText = args.displayText !== undefined ? args.displayText : this.displayText;
    }
}