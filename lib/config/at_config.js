
//Routes
AccountsTemplates.configureRoute('changePwd', {
    template: "signIn",
    redirect: "messages.index"
});
AccountsTemplates.configureRoute('enrollAccount', {
    template: "signIn",
    redirect: "messages.index"
});
AccountsTemplates.configureRoute('forgotPwd', {
    template: "signIn",
    redirect: "atSignIn"
});
AccountsTemplates.configureRoute('resetPwd', {
    template: "signIn",
    redirect: "messages.index"
});
AccountsTemplates.configureRoute('signIn', {
    template: "signIn",
    redirect: "messages.index"
});
AccountsTemplates.configureRoute('signUp', {
    template: "signIn",
    redirect: "messages.index"
});
AccountsTemplates.configureRoute('verifyEmail', {
    template: "signIn",
    redirect: "messages.index"
});

AccountsTemplates.configureRoute('ensureSignedIn', {
    template: "signIn"
});

// Options
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: true,

    negativeValidation: false,
    negativeFeedback: false,
    positiveValidation: false,
    positiveFeedback: false,
});
