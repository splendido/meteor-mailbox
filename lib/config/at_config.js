//Routes
var options = {
    template: "signIn",
    redirect: "messages.index"
};

AccountsTemplates.configureRoute("signIn", options);
AccountsTemplates.configureRoute("signUp", options);
AccountsTemplates.configureRoute("verifyEmail", options);
AccountsTemplates.configureRoute("resetPwd", options);

AccountsTemplates.configureRoute("forgotPwd", { template: "signIn", redirect: "atSignIn" });
AccountsTemplates.configureRoute("ensureSignedIn", { template: "signIn" });

// Options
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    sendVerificationEmail: true,
    // Trick to go back to sign in after logout
    homeRoutePath: "/sign-in",
});
