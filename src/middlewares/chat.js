const ChatService = {}
export default ChatService;

import axios from 'axios'
import { TextMessage } from '../components/chat/models/messages'

// ChatService
ChatService._chatlogs = [];
ChatService.loading = false;
ChatService.appendChatLog = function (message, direction) {
    this._chatlogs.push({
        message,
        direction
    });
    if (this._hooks['chatLogChanged']) {
        this._hooks['chatLogChanged']()
    }
};
ChatService._hooks = {}
ChatService.on = function (lifecycle, cb) {
    this._hooks[lifecycle] = cb;
}
ChatService.getChatLogs = function() {
    return this._chatlogs;
}

ChatService._send = async function (req) {
    this.loading = true;
    let response;
    try {
        response = await axios.post(process.env.VUE_APP_API_SERVER, JSON.stringify(req));
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
            response = null;
        }
    } finally {
        this.loading = false;
    }
    return response;
};

ChatService.sendMessage = async function (message) {
    this.appendChatLog(message, 'left');
    let req = new Request({
        text: message.text
    });
    let response = await this._send(req);
    if (response) {
        for (let message of response.data) {
            this.appendChatLog(message, 'right');
        }    
    }
};

ChatService.sendAction = async function (action) {
    if (action.displayText) {
        this.appendChatLog(new TextMessage(action.displayText), 'left');
    }
    let req = new Request({
        action: action.data
    });
    let response = await this._send(req);
    if (response) {
        for (let message of response.data) {
            this.appendChatLog(message, 'right');
        }    
    }
};

ChatService._actionHandlers = {}
ChatService.addActionHandler = function(actionType, cb) {
    this._actionHandlers[actionType] = cb
};

ChatService.emitAction = function(action) {
    if (this._actionHandlers[action.type]) {
        this._actionHandlers[action.type](action);
    }
}

// Request
class Request {
    text = '';
    action = '';
    config = {};
    constructor(args) {
        this.text = args.text || '';
        this.action = args.action || '';
        this.config = args.config || {};
    }
}

// register action handlers
ChatService.addActionHandler('message', (action) => {
    ChatService.sendMessage(new TextMessage(action.text));
});
ChatService.addActionHandler('postback', (action) => {
    ChatService.sendAction(action);
});