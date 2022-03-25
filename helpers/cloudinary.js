const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    return {
      folder: "profile-pictures",
      allowedFormats: ["png", "jpg", "jpeg"],
      fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
          return cb(new Error("File not supported"));
        }
        cb(null, file.originalname);
      },
      public_id: "app-${file.originalname}",
    };
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
