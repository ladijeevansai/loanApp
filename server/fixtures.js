// server/fixtures.js
import { Meteor } from 'meteor/meteor';
import { Roles } from '../imports/api/schemas';

Meteor.startup(() => {
  // Insert default roles if the Roles collection is empty
  if (Roles.find().count() === 0) {
    Roles.insert({ name: 'admin' });
    Roles.insert({ name: 'borrower' });
    Roles.insert({ name: 'lender' });
  }
});
