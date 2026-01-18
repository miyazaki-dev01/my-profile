export const CONTACT_TEXT = {
  label: {
    name: "お名前",
    email: "メールアドレス",
    title: "タイトル",
    message: "お問い合わせの内容",
  },
  placeholder: {
    name: "お名前",
    email: "メールアドレス",
    title: "タイトル",
    message: "5000文字以内",
  },
  caption: {
    email: "返信メールをお送りします",
  },
  button: {
    confirme: "内容確認へ進む",
    edit: "修正する",
    submit: "送信する",
    confirmed: "確認しました",
  },
  description: {
    form:
      "下記の項目をご記入の上、お問い合わせください。内容を確認し、ご返答いたします。\n" +
      "お問い合わせへの返信メールをお受け取りいただくためには、no-reply@profileofmiyazaki.comからのメールを受信できるよう、設定をお願いいたします。",
    confirm:
      "入力内容をご確認いただき、内容に問題がなければ「送信する」を押してください。修正する場合は「修正する」から入力を行ってください。",
  },
  complete: {
    pageTitle: "送信しました",
    thanksMessage: "お問い合わせありがとうございます。",
    annotation:
      "お問い合わせいただきました内容につきましては、担当よりご返答させていただきます。なお、内容によりましては、返答できかねる場合もございますので、予めご了承ください。",
  },
  message: {
    submitError:
      "エラーが発生しました。\n" +
      "恐れ入りますが、もう一度送信をお願いします。",
  },
  validation: {
    required: "この項目は必須です",
    emailInvalid: "正しいメールアドレスを入力してください",
    max100: "全角半角100文字以内で入力してください",
    max300: "全角半角300文字以内で入力してください",
    max5000: "全角半角5000文字以内で入力してください",
  },
} as const;
