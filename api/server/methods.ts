import { Examples } from './collections/examples';
import { check, Match } from 'meteor/check';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  addEample(example) {
    check(example, nonEmptyString);

    const exampleExists = !!Examples.collection.find(example).count();

    if (!exampleExists) {
      throw new Meteor.Error('example-not-exists',
        'Chat doesn\'t exist');
    }

    return {
      example: Examples.collection.insert(example)
    };
  }
});
