const Config = {
  appName: 'FormMailer',
  hrefs: {
    mailslurp: "https://www.mailslurp.com?utm=form-mailer"
  },
  form:  {
    action: "https://api.mailslurp.com/forms",
    method: "POST",
    enctype: "form/multi-part"
  }
};

export default Config;
