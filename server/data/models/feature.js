import mongoose from 'mongoose';

const FeatureSchema = new mongoose.Schema({
  name: {
    description: 'Name of feature',
    type: String,
    default: null
  },
  description: {
    description: 'Description of feature',
    type: String,
    default: null
  },
  url: {
    description: 'Url of feature',
    type: String,
    default: null
  }
});

const Feature = mongoose.model('Feature', FeatureSchema);

export default Feature;
