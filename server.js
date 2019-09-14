// Bring in required Libraries/Files
const express = require('express');
const fileUpload = require('express-fileupload');


const PORT = process.env.port || 5000;
// Create our Express instance
const app = express();


// ---- MIDDLEWARE ----- //
app.use(fileUpload());

// Upload endpoint

app.post('upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No File Uploaded'});
    } 

    const files = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.json({fileName: file.name, filePath: `/uploads/$(file.name)`});
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
