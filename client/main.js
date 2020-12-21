import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import '../imports/client/lib/routes'
import '../imports/client/templates/tab/tab'
import '../imports/client/templates/config/config'
import '../imports/client/templates/privacy/privacy'
import '../imports/client/templates/terms/terms'
import '../imports/client/templates/quiz/create'
import '../imports/client/templates/quiz/play'

import * as msTeams from "@microsoft/teams-js";

import './main.html';

teamsContext = new ReactiveVar()

Template.registerHelper('upper', function(string) {
  return string.toUpperCase()
});

Template.registerHelper('info', ()=> {
  return teamsContext.get()
});

Template.body.onCreated(function homeOnCreated() {
  msTeams.initialize()
  msTeams.getContext((context)=> {
    if (context) {
      teamsContext.set(context);
      // console.clear()
      // console.log(context);
    } else {
      alert('ERRO!')
    }
  })
});

Template.body.onRendered(function homeOnRendered() {});

Template.home.helpers({
});