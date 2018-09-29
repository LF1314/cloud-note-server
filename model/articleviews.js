var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var articleviewSchema = new mongoose.Schema({
    commonts: String,
    person: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    articleid: {
        type: Schema.Types.ObjectId,
        ref: 'articles'
    },
    thumbs: {
        type: Number,
        default: 0
    }
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
}, {
    versionKey: false
});
const articleviewData = mongoose.model('articleviews', articleviewSchema)

module.exports = articleviewData