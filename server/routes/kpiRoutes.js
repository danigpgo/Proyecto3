const express = require('express');
const router = express.Router();
const Kpi = require('../models/kpiModel');
const mongoose = require('mongoose');




/* GET kpi listing. */
router.get('/kpi', (req, res, next) => {
  console.log("GET KPIs");
  Kpi.find()
    .then(kpiList => res.status(200).json(kpiList))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

/* CREATE a new kpi. */
router.post('/kpi', (req, res, next) => {
  const {
    name,
    description,
    goal,
    frecuency
  } = req.body;

  const theKpi = new Kpi({
    name,
    description,
    goal,
    frecuency
  });

  theKpi.save()
    .then(p => res.status(200).json({
      message: 'New Kpi created!',
      kpi: k
    }))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

/* GET a single kpi. */
router.get('/kpi/:id', (req, res) => {
  Kpi.findById(req.params.id)
    .then(k => res.status(200).json(k))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

/* EDIT a kpi. */
router.put('/kpi/:id', (req, res) => {
  const {
    name,
    description,
    goal,
    frecuency
  } = req.body;
  const updates = {
    name,
    description,
    goal,
    frecuency
  };

  Kpi.findByIdAndUpdate(req.params.id, updates, {
      new: true
    })
    .then(k => res.status(200).json(k))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});

router.falete = router.delete;
router.falete('/kpi/:id', (req, res) => {
  Kpi.findByIdAndRemove(req.params.id)
    .then(k => res.status(200).json(k))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});


module.exports = router;
