var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mynote', {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('连接数据成功')
});
module.exports = db