class Container {
    type = ''
}

class Component {
    type = ''
}

export class BubbleContainer extends Container {
    type = 'bubble'
    body = Object
    constructor(args) {
        super();
        if (args.body) {
            this.body = args.body
        }
    }
}

export class BoxComponent extends Component {
    type = 'box'
    contents = []
    constructor(args) {
        super();
        if (args.contents) {
            this.contents = args.contents
        }
    }
}

export class TextComponent extends Component {
    type = 'text'
    text = ''
    action = Object
    color = 'inherit'
    constructor(args) {
        super();
        this.text = args.text;
        this.action = args.action;
        this.color = args.color;
    } 
}

export class SeparatorComponent extends Component {
    type = 'separator'
    constructor(args) {
        super();
    }
}