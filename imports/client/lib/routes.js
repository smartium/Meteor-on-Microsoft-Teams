FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "home"});
    }
});

FlowRouter.route('/tab', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "tab"});
    }
});

FlowRouter.route('/config', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "config"});
    }
});

FlowRouter.route('/privacy', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "privacy"});
    }
});

FlowRouter.route('/terms', {
    action: function(params) {
        BlazeLayout.render("layout", {main: "terms"});
    }
});