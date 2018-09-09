import { Meteor } from 'meteor/meteor';
import * as moment from 'moment';
import { Examples } from './collections/examples';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Examples.find({}).cursor.count() === 0) {
    let exampleId;

    exampleId = Examples.collection.insert({
      prop1: 'name'
    });

  }
});
