import { Meteor } from 'meteor/meteor';
import { Examples } from './collections/examples';

Meteor.startup(() => {
  if (Examples.find({}).cursor.count() === 0) {
    let exampleId;

    exampleId = Examples.collection.insert({
      prop1: 'name'
    });

  }
});
