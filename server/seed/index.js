/* eslint no-console: 0*/
/* eslint prefer-arrow-callback: 0*/
import mongoose from 'mongoose';
import settings from '../config/environment/development';

// Import models
import User from '../data/models/user';
import Feature from '../data/models/feature';

// Import all the seed data to fill the database
import Users from './Users';
import Features from './Features';

// Connect to the mongoose database
mongoose.connect(settings.MONGO_URI);

// Write seed data to the database
User.create(
  Users,
  function seed(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Users were added to the Mongo Database');
    }
  }
);

Feature.create(
  Features,
  function seed(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Features were added to the Mongo Database');
    }
  }
);
