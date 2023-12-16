const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, 'public');

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path), 'index.html');
});

// upload link
app.post('/upload', (req, res) => {
  let file = req.files.image;
  // image name
  let imagename = req.body.filename;
  // image upload path
  let path = 'public/uploads/' + imagename;

  // create upload
  file.mv(path, (err, result) => {
    if (err) {
      res.status(500)
      throw err;
    } else {
      // our image upload path
      res.status(200).send({path: `uploads/${imagename}`});
    }
  });
});

app.listen('3000', () => {
  console.log('listening......');
});
