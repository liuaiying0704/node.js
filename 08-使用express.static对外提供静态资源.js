const express = require('express');
const app = express();
app.use(express.static('clock'));
// app.use('/clock/abc', express.static('clock'));
app.listen(80, () => {
  console.log('server is running at port 80');
});
