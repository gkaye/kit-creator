const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const Section = new Schema({
  title: {
    type: String,
  },
  
});

const Page = new Schema({
  title: {
    type: String,
  },
  sections: [Section],
});

const Kit = new Schema({
  title: String, // String is shorthand for {type: String}
  author: Types.ObjectId,
  description: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  pages: [Page],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

module.exports = {
  kitSchema: Kit,
  pageSchema: Page,
  sectionSchema: Section,
};