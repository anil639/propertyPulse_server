const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const {
  addProperty,
  getProperties,
  updateProperty,
  deleteProperty,
  getPropertyById,
} = require("../controllers/propertyController");

//create directory for images
const uploads = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploads)) {
  fs.mkdirSync(uploads);
}

//image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// routes
router.post("/add", upload.array("images", 5), addProperty);
router.get("/", getProperties);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;
