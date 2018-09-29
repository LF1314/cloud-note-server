var express = require('express');
var router = express.Router();
var articlesdata = require('../../model/articles')

router.post('/', async (req, res) => {
    if (req.session.user) {
        const {
            title,
            content,
            contentext,
            classes
        } = req.body
        const avatar = req.session.user._id
        console.log(req.body)
        try {
            const article = await articlesdata.create({
                title,
                content,
                contentext,
                classes,
                avatar
            })
            res.json({
                code: 200,
                msg: '文章发布成功！',
                article
            })
        } catch (error) {
            res.json({
                code: 400,
                msg: error
            })
        }

    } else {
        res.json({
            code: 403,
            msg: '登录状态失效'
        })
    }
})

router.get('/', (req, res) => {

    let {
        pn = 1, size = 10
    } = req.params
    articlesdata.find().skip((pn - 1) * size).limit(size)
        .populate({
            path: 'avatar',
            select: '-email -password'
        }).then(data => {
            res.json({
                code: 200,
                msg: 'succesful',
                data
            })
        })
})
//通过articleid获取文章如下
router.get('/art/:id', (req, res) => {
    let _id = req.params.id
    articlesdata.findById(_id)
        .populate({
            path: 'avatar',
            select: '-email -password'
        })
        .then(data => {
            res.json({
                code: 200,
                data
            })
        }).catch(err => {
            res.json({
                code: 401,
                msg: err
            })
        })
})

router.delete('/art/:id', (req, res) => {
    let _id = req.params.id

    articlesdata.remove({
        _id
    }).then(mes => {
        res.json({
            code: 200,
            msg: '删除成功',
        })
    }).catch(err => {
        code: 400,
        err
    })
})
//更改阅读数量
router.get('/rasting/:id', (req, res) => {

    let _id = req.params.id
    articlesdata.update({
        _id
    }, {
        $inc: {
            rasting: 1
        }
    }).then(mes => {
        res.json({
            code: 200,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            code: 400,
            msh: 'server err'
        })
    })
})
//更改评论数量
router.get('/anser/:id', (req, res) => {

    let _id = req.params.id
    articlesdata.update({
        _id
    }, {
        $inc: {
            anser: 1
        }
    }).then(mes => {
        res.json({
            code: 200,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            code: 400,
            msh: 'server err'
        })
    })
})
//更改喜欢的数量
router.get('/likenum/:id', (req, res) => {

    let _id = req.params.id
    let num = parseInt(req.query.num)
    if (num) {
        articlesdata.update({
            _id
        }, {
            $inc: {
                likenum: num
            }
        }).then(mes => {
            res.json({
                code: 200,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                code: 400,
                msh: 'server err'
            })
        })
    } else {
        res.json({
            code: 400,
            msg: '缺少参数'
        })
    }
})
module.exports = router