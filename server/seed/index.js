import mongoose from 'mongoose';
import settings from '../config/environment/development';

// Import models
import User from '../data/models/user';
import Feature from '../data/models/feature';

// Connect to the mongoose database
mongoose.connect(settings.MONGO_URI);

// Import all the seed data to fill the database
import Users from './Users';
import Features from './Features';

// Write seed data to the database
User.create(
  Users,
  function(err, res) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('Users were added to the Mongo Database');
    }
  }
);

Feature.create(
  Features,
  function(err, res) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('Features were added to the Mongo Database');
    }
  }
);
