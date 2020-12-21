import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/client/lib/routes'
import '../imports/client/templates/tab/tab'
import '../imports/client/templates/config/config'
import '../imports/client/templates/privacy/privacy'
import '../imports/client/templates/terms/terms'

// import * as msTeams from "@microsoft/teams-js";
msTeams = require('@microsoft/teams-js')

Meteor.startup(()=> {
  // msTeams.initialize((callback)=> {
  //   console.log(callback);
  // })
});

Tracker.autorun(()=> {
})

import './main.html';

Template.home.onCreated(function homeOnCreated() {
  this.teamsContext = new ReactiveVar('teamsContext')
  msTeams.initialize()
});

Template.home.onRendered(function homeOnRendered() {
  msTeams.getContext((context, error) => {
    if (context) {
      Template.instance().teamsContext.set(context);
    }
    else {
      Template.instance().teamsContext.set('ERROR');
    }
  });
});

Template.home.helpers({
  teamsContext() {
    return Template.instance().teamsContext.get();
  }
})

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
