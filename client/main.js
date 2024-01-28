// client/main.js
import { Meteor } from 'meteor/meteor';
import { Users, Roles, Loans, Transactions } from '../imports/api/schemas';

// Subscribe to collections
Meteor.subscribe('users');
Meteor.subscribe('roles');
Meteor.subscribe('loans');
Meteor.subscribe('transactions');
