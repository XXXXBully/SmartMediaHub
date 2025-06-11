const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('欢迎使用智媒通（SmartMediaHub）API！');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`SmartMediaHub 后端服务已启动，端口：${PORT}`);
}); 