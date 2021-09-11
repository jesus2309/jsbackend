const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all users
router.get('/', async (req, res) => {
    const testimonials = await sequelize.models.testimonials.findAndCountAll();
    return res.status(200).json({ data: testimonials });
});

router.post('/', async (req, res) => {
  const { body } = req;
  const testimonials = await sequelize.models.testimonials.create({
    name: body.name,
    ocupation: body.ocupation,
    message: body.message,
    image: body.image,
  });
  await testimonials.save();
  return res.status(201).json({ data: testimonials })
});

module.exports = router;