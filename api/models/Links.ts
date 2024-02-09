import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinksSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
  shortUrl:{
    type: String,
  }
});

const Links = mongoose.model('Links', LinksSchema);

export default Links;