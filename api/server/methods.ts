import { Profile } from './models';
import { Examples } from './collections/examples';
import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
  updateProfile(profile: Profile): void {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new chat');

    check(profile, {
      name: nonEmptyString
    });

    Meteor.users.update(this.userId, {
      $set: {profile}
    });
  },
  addEample(example) {
    if (!this.userId) throw new Meteor.Error('unauthorized',
      'User must be logged-in to create a new chat');

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
