var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
//跳转到搜索页面
router.get('/search', (req, res) => {
  res.render('serach')
})
//发布笔记页面
router.get('/write', (req, res) => {
  res.render('write')
})
//显示笔记详情页面
router.get('/detail', (req, res) => {
  res.render('detail')
})

module.exports = router;