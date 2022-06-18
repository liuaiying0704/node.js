const express = require('express');
const router = express.Router();
//通过路由实例监听请求
router.get('/user', (req, res) => {
  res.send('get user');
});
router.post('/user', (req, res) => {
  res.send('post user');
});
module.exports = router;
