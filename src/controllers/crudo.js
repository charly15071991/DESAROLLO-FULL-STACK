const { tablamod } = require("../models/modelo");



const allinone = async (req, res) => {
  const todotabla = await tablamod.findAll();
  res.render("create" , { todotabla});
};



const createtabla = async (req, res) => {
  res.render("index");
};



const newupdate = async (req, res) => {
  const placeId = req.params.id;
  const place = await tablamod.findByPk(placeId);
  if (!place) {
    return res.redirect("/");
  }
  res.render("updates", { place });
};



const updatetabla = async (req, res) => {
  const { id, title, texto, imagen } = req.body;
  const place = await tablamod.findByPk(id);
  await place.update({ title, texto, imagen });
  res.redirect("/");
};



const  newtabla = async (req, res) => {
  const { title, texto, imagen } = req.body;
  await tablamod.create({ title, texto,imagen });
  res.redirect("/");
};



const deletetabla = async (req, res) => {
  const placeId = req.params.id;
  const place = await tablamod.findByPk(placeId);
  await place.destroy();
  res.redirect("/");
};

module.exports = {
    allinone,
    createtabla,
    updatetabla,
    newtabla,
    newupdate,
    deletetabla,

};
