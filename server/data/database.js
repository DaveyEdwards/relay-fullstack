import mongoose from 'mongoose';
import { getSchema } from '@risingstack/graffiti-mongoose';
import settings from '../config/environment';

// Import our mongoose models
import User from './models/user';
import Feature from './models/feature';

// Connect to the database
mongoose.connect(settings.MONGO_URI);

export default getSchema([
  User,
  Feature
]);
