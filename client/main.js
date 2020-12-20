import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/client/lib/routes'
import '../imports/client/templates/tab/tab'
import '../imports/client/templates/config/config'
import '../imports/client/templates/privacy/privacy'
import '../imports/client/templates/terms/terms'

import * as microsoftTeams from "@microsoft/teams-js";

import './main.html';

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
