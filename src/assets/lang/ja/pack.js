import agreement from './agreement'

export default {
    hero: {
        heading: 'Naviに聞いてみよう。',
        subheading: 'しずおかごみ出しNaviは静岡県のごみ出しをサポートするチャットbotです',
        startWithWeb: 'Webで使ってみる'
    },
    footer: {
        about: '利用規約',
        contact: 'コンタクト'
    },
    about: {
        content: agreement
    },
    line_selectcity: {
        sub: '検索する市町村を変更する',
        desc: '情報を検索する市町村を変更することができます。\nご希望の市町村を選んでください。',
        submit: '登録する',
        submitFailed: '登録に失敗しました',
        submitSuccess: '登録しました',
        disabled: 'このページは無効か、有効期限が切れています。'
    },
    contact: {
        desc: '要望・質問・感想等を受け付けます。\n返信を希望される場合はメールアドレスを入力してください。',
        submit: '送信する',
        submitFailed: '送信に失敗しました',
        submitSuccess: '送信しました'
    },
    chat: {
        placeholder: '捨てたいごみの名前',
        error_server: 'ごめんなさい！\n接続に失敗しました😣'
    },
    chatconfig: {
        sub: '市町村の変更',
        submit: '変更する',
        submitFailed: '変更に失敗しました',
        submitSuccess: '変更しました',
    },
    notfound: {
        desc: 'お探しのページは見つかりませんでした。'
    }
}