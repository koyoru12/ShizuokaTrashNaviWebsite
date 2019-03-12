import lang from '../assets/languagepack'

let langSettings = 'ja';
const langagePack = lang;

export function getMessages(context) {
    return langagePack[langSettings][context];
}