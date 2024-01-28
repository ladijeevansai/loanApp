// publications.js
import { Meteor } from 'meteor/meteor';
import { Users, Roles, Loans, Transactions } from '../imports/api/schemas';

// Publish Users collection
Meteor.publish('users', function () {
  return Users.find({}, { fields: { email: 1 } });
});

// Publish Roles collection
Meteor.publish('roles', function () {
  return Roles.find({}, { fields: { name: 1 } });
});

// Publish Loans collection
Meteor.publish('loans', function () {
  return Loans.find({}, { fields: { borrowerId: 1, amount: 1, status: 1 } });
});

// Publish Transactions collection
Meteor.publish('transactions', function () {
  return Transactions.find({}, { fields: { lenderId: 1, borrowerId: 1, amount: 1, status: 1 } });
});
