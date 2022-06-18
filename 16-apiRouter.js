const express = require('express');

const router = express.Router();

// get请求
router.get('/get', (req, res) => {
  res.send({
    status: 0,
    message: 'GET请求成功',
    data: req.query,
  });
});

// post请求
router.post('/post', (req, res) => {
  res.send({
    status: 0,
    message: 'post请求成功',
    data: req.body,
  });
});
// delete请求
router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    message: 'delete请求成功',
  });
});
module.exports = router;
