var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    avatar: String,
    username: String,
    password: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    desc: String,
    likebooks: Array
}, {
    versionKey: false
}, {
    timestamps: {
        createdAt: 'createdTime',
        updatedAt: 'updateTime'

    }
});
const userData = mongoose.model('admin', userSchema)

module.exports = userData