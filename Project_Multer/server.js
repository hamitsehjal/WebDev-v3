const express = require('express');
const app = express()


const upload = require('./utils/multer')
const { cloudinary } = require('./utils/cloudinary');

const path = require('path');
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs")

// Setting up the middleware
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: false }))

app.get('/', async (req, res, next) => {

    // getting a single resource
    //cloudinary.v2.api.resource(public_id, options).then(callback);
    // const retreiveResult = await cloudinary.api.resource('rkjllain3l9yvvlrwgat')
    // console.log("Hello!!\n")
    // console.log(retreiveResult)

    // getting all resources from cloudinary
    const retreiveAllImages=await cloudinary.api.resources();
    console.log("Images",retreiveAllImages);

    res.render('index')
})

app.post('/uploadFile', upload.single('file1'), async (req, res, next) => {

    console.log("File Details for Mr.Hamit:\n");
    console.log(req.file)
    console.log("Files Uploaded!!!!")

    //cloudinary.v2.uploader.upload(file, options).then(callback);
    const result = await cloudinary.uploader.upload(req.file.path)

    console.log("Result: ", result)
    const post_results = {
        title: req.body.fileTitle, // to access textual data of form, use req.body
        image: result.public_id
    }
    res.status(200).json({ post_results })

})



/************************
    USING LOCAL STORAGE
*************************/
// // using diskStorage method of multer
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./public/uploads")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// // // Here we are calling the multer constructor function with storage option
// var upload = multer({ storage: storage })

// // So now we need to distinguish which form field we are processing in multer so
// // that we have a special fields functions in multer

//  var uploadMultiple = upload.array([{ name: 'file1', maxCount: 10 }, { name: 'file2', maxCount: 10 }])



app.listen(PORT, function () {
    console.log("Express HTTPS Server listening on PORT: " + PORT)
})
