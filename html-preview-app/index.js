
const express = require('express');
const path = require('path');

const app = express();

// HTMLファイルを静的ファイルとして提供する
app.use(express.static(path.join(__dirname, 'public')));

// HTMLファイルのプレビュー用のルート
app.get('/preview', (req, res) => {
  // 'index.html'ファイルを読み込み、その内容をレスポンスとして送信
  fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});