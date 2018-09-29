var express = require('express');
var router = express.Router();
var usedata = require('../../model/user')
/* GET users listing. */
//用户登录
router.post('/login', (req, res) => {

    const {
        email,
        password
    } = req.body

    if (password) {
        usedata.findOne({
            email
        }).then(userdata => {
            console.log(userdata, password)
            if (password == userdata.password) {
                req.session.user = userdata
                res.json({
                    code: 200,
                    msg: 'denglusuccedful',
                    userdata
                })
            } else {
                res.json({
                    code: 400,
                    msg: '密码错误'
                })
            }
        }).catch(err => {
            res.json({
                code: 400,
                msg: '没有这个人',
                err
            })
        })
    }
});
//用户注册
router.post('/singup', async (req, res) => {
    try {
        let data = await usedata.create(req.body)
        res.json({
            code: 200,
            msg: '注册成功',
            data
        })
    } catch (err) {
        res.json({
            code: 400,
            msg: '缺少必要字段',
            err
        })
    }
})
//退出登录
router.get('/loginout', (req, res) => {
    if (req.session.user) {
        req.session.user = null
        res.json({
            code: 200,
            msg: '注销登陆成功！'
        })
    } else {
        res.json({
            code: 403,
            msg: '未登录状态'
        })
    }


})
//用户添加或删除喜欢的文章
// router.post('')
router.put('/addlike/:id', async (req, res) => {
    let _id = req.params.id
    var ardatas
    let {
        articleid
    } = req.body
    try {
        let usermes = await usedata.findOne({
            _id
        })
        let com = 0;
        if (usermes.likebooks[0]) {
            usermes.likebooks.forEach((element, index) => {
                if (element == articleid) {
                    com = 1
                    usedata.update({
                        _id
                    }, {
                        $pull: {
                            likebooks: element
                        }
                    }).then(datas => {
                        console.log("....")
                        ardatas = datas
                    })

                }
            });
            if (!com) {
                console.log(com);
                usedata.update({
                    _id
                }, {
                    $push: {
                        likebooks: articleid
                    }
                }).then(datas => {
                    ardatas = datas
                })
            }
            res.json({
                code: 200,
                msg: '修改成功',
                com
            })
        } else {
            console.log(articleid);
            usedata.update({
                _id
            }, {
                $push: {
                    likebooks: articleid
                }
            }).then(datas => {
                ardatas = datas
            })
            res.json({
                code: 200,
                msg: '修改成功',
                com
            })
        }
    } catch (error) {
        res.json({
            code: 400,
            error
        })
    }

})

module.exports = router;