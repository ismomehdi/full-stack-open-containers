const express = require('express');
const { setAsync, getAsync } = require('../redis');
const router = express.Router();

/* GET todo count. */
router.get('/', async (_, res) => {
    const todoCount = await getAsync('added_todos')
    res.send({ "added_todos": todoCount});
});

module.exports = router;
