var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var articlesSchema = new mongoose.Schema({
    coverimg:String,
    title: String,
    content: String,
    contentext: String,
    avatar: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
    classes: {
        type: Array
    },
    rasting: {
        type: Number,
        default: 0
    },
    anser: {
        type: Number,
        default: 0
    },
    likenum: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false
}, {
    timestamps: {
        createdAt: 'createdTime',
        updatedAt: 'updateTime'

    }
});
const articlesData = mongoose.model('articles', articlesSchema)

module.exports = articlesData