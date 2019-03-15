import lang from '../assets/lang/langpack'

let langSettings = 'ja';
const langagePack = lang;

export function getMessages(context) {
    return langagePack[langSettings][context];
}