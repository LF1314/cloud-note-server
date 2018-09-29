var mongoose = require('mongoose')

var classSchema = new mongoose.Schema({
    name: String
}, {
    versionKey: false
}, {
    timestamps: {
        createdAt: 'createdTime',
        updatedAt: 'updateTime'
    }
});
const classData = mongoose.model('classes', classSchema)

module.exports = classData