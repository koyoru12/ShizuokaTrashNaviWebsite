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
ChatService.sendMessage = async function (message) {
    this.appendChatLog(message, 'left');
    let req = {
        text: message.text
    }
    this.loading = true;
    try {
        let response = await axios.post(process.env.VUE_APP_API_SERVER, JSON.stringify(req));
        for (let message of response.data) {
            this.appendChatLog(message, 'right');
        }
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e.message);
        }
    } finally {
        this.loading = false;
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

ChatService.addActionHandler('message', (action) => {
    ChatService.sendMessage(new TextMessage(action.text));
});
