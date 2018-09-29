var express = require('express');
var router = express.Router();
var classdata = require('../../model/class')
router.get('/', async (req, res) => {
    try {
        let cla = await classdata.find()
        res.json({
            code: 200,
            msg: 'successful',
            classes: cla
        })
    } catch (error) {
        res.json({
            code: 401,
            msg: 'fail',
            error
        })
    }
})

module.exports = router