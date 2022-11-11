const cloudinary = require('cloudinary').v2
require('dotenv').config()

cloudinary.config(
    {

        cloud_name: process.env.CLOUD_NAME,
        api_key: '219615635789477',
        api_secret: 'OdmP-QoKDRmGihgxJNdTZGa_OOY',
        secure: true
    }
)

module.exports = { cloudinary }