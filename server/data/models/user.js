import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    description: 'Name of user',
    type: String,
    default: null
  },
  username: {
    description: 'Username of user',
    type: String,
    default: null
  },
  website: {
    description: 'Website of user',
    type: String,
    default: null
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
