const cloudinary = require("cloudinary").v2;
const config = require("../config");

cloudinary.config({
  cloud_name: "dhqmlblsr",
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});
async function uploadImage(path) {
  const result = await cloudinary.uploader.upload(path, {
    folder: "Property",
  });
  const url = await cloudinary.url(result.public_id, {
    transformation: [
      {
        fetch_format: "auto",
        quality: "auto",
      },
      {
        width: 1200,
        height: 1200,
        crop: "fill",
        gravity: "auto",
      },
    ],
  });
  console.log(url);
  return url;
}

module.exports = { uploadImage };
