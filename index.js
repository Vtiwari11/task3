const express = require('express');
const multer = require('multer');
const app = express();


const upload = multer({
    //multers functions
    storage: multer.diskStorage({
        destination: function (req, file, xy) {
            xy(null,"upload")
        },
        filename: function (req, file, xy) {
            xy(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file2");

app.post('/upload',upload, (req, resp) => {
    resp.send("file upload")
});
app.listen(5000);