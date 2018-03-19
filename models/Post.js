const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'public',
    required: true,
  },
  allowComments: {
    type: Boolean,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Posts', PostSchema);
