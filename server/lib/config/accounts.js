// Set up login services
Meteor.startup(function() {
    // Remove configuration entries in case service is already configured
    ServiceConfiguration.configurations.remove({$or: [
        {service: "google"},
    ]});

    // Add Google configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "client_email": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXX"
    });
});
