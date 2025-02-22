const User = require('../models/userModel');

const Create = async (req, res) => {
  try {
    const { name, description,price,quantity } = req.body;
    const newUser = new User({
      name,
      description,
      price,
      quantity
    });

    await newUser.save();
    res.status(201).json({ message: 'created successfully' });
  } catch (error) {
    console.log("Error in is creating :", error);
    res.status(500).send(error.message);
  }
};


const getProducts = async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports={Create,getProducts};

