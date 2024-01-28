// server/main.js
import { Meteor } from 'meteor/meteor';
import { Users, Roles, Loans, Transactions } from '../imports/api/schemas';

Meteor.startup(() => {
  // Example: Inserting a user for testing
  if (Users.find().count() === 0) {
    Users.insert({ email: 'test@example.com' });
  }

  // Example: Inserting a loan for testing
  if (Loans.find().count() === 0) {
    Loans.insert({ borrowerId: 'someBorrowerId', amount: 1000, status: 'requested' });
  }

  // Example: Inserting a transaction for testing
  if (Transactions.find().count() === 0) {
    Transactions.insert({ lenderId: 'someLenderId', borrowerId: 'someBorrowerId', amount: 1000, status: 'confirmed' });
  }
});
