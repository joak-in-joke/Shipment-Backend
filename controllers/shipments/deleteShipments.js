const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;

const deleteShipments = async (req, res = response) => {
  var req = req.body.ids;
  console.log(req);
  try {
    await Embarque.destroy({ where: { id: req } });

    res.json({ resultado: true });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = deleteShipments;
