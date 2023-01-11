const mongoose = require("mongoose")

const postShema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Post must have Title"]
    },
    body: {
        type: String,
        require: [true, "Post must have Body"]
    },
});

const Post = mongoose.model("Post", postShema);
module.exports = Post;