const Property = require("../models/Property");

//Add property
exports.addProperty = async (req, res) => {
  const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
  try {
    const newProperty = new Property({
      name: req.body.name,
      location: req.body.location,
      price: req.body.price,
      description: req.body.description,
      propertyType: req.body.propertyType,
      images: imagePaths,
    });
    await newProperty.save();
    // console.log(newProperty);
    res.status(201).json(newProperty);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//get properties
exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update properties
exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get data by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
//delete property
exports.deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Property deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
