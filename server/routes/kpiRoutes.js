const express = require('express');
const router = express.Router();
const Kpi = require('../models/kpiModel');
const User = require('../models/User');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');





/* GET kpi listing. */
router.get('/kpi', (req, res, next) => {
  console.log(req.user)
  Kpi.find({"id":req.user._id})
    .then(kpiList => res.status(200).json(kpiList))
    .catch(e => res.status(500).json({
      error: e.message
    }));
});




/* CREATE a new kpi. */
router.post('/kpi', (req, res, next) => {
  console.log("ENTRO EN CREATE KPI")
  console.log(req.body)
  const theKpi = new Kpi({
    id : req.body.formInfo.id,
    name : req.body.formInfo.name,
    description : req.body.formInfo.description,
    goal : req.body.formInfo.goal,
    kpidata : req.body.formInfo.kpidata
  });

  console.log("THE KPI", theKpi)

  theKpi.save()
    .then(p => res.status(200).json({
      message: 'New Kpi created!'
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
    kpidata
  } = req.body;
  const updates = {
    name,
    description,
    goal,
    kpidata
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
