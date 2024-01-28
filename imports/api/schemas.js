// schemas.js
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

const userSchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
});

const roleSchema = new SimpleSchema({
  name: {
    type: String,
  },
});

const loanSchema = new SimpleSchema({
  borrowerId: {
    type: String,
  },
  amount: {
    type: Number,
    min: 0,
  },
  status: {
    type: String,
    allowedValues: ['requested', 'approved', 'rejected'],
  },
});

const transactionSchema = new SimpleSchema({
  lenderId: {
    type: String,
  },
  borrowerId: {
    type: String,
  },
  amount: {
    type: Number,
    min: 0,
  },
  status: {
    type: String,
    allowedValues: ['confirmed', 'pending', 'rejected'],
  },
});

export const Users = new Mongo.Collection('users');
Users.attachSchema(userSchema);

export const Roles = new Mongo.Collection('roles');
Roles.attachSchema(roleSchema);

export const Loans = new Mongo.Collection('loans');
Loans.attachSchema(loanSchema);

export const Transactions = new Mongo.Collection('transactions');
Transactions.attachSchema(transactionSchema);
