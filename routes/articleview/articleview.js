var express = require('express')

var router = express.Router()

var articleviews = require('../../model/articleviews')
//添加评论
router.post('/', (req, res) => {
    //客户端判断用户是否登录了
    if (req.session.user) {
        let {
            commonts,
            articleid
        } = req.body
        let person = req.session.user._id
        articleviews.create({
            person,
            articleid,
            commonts
        }).then(com => {
            res.json({
                code: 200,
                msg: '评论成功！',
                com
            })
        })
    } else {
        res.json({
            code: 400,
            msg: ' 未登录不能评论'
        })
    }
})
//查看评论
router.get('/:id', (req, res) => {
    let articleid = req.params.id
    let {
        pn = 1, size = 20
    } = req.query
    articleviews.find({
            articleid
        })
        .skip((pn - 1) * 20)
        .limit(size)
        .populate({
            path: 'person',
            select: '-email -password'
        })
        .then(data => {
            res.json({
                code: 200,
                msg: 'succes',
                data
            })
        }).catch(err => {
            code: 400,
            err
        })
})

module.exports = router