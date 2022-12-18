const db = require('../models/index');
const CRUDServices = require('../services/CRUDservice');
const getHomePage = async (req, res) => {
    try {
        let dataUser = await db.User.findAll();
        return res.render('homepage.ejs', {
            dataUser: JSON.stringify(dataUser),
        });
    } catch (err) {
        console.log(e);
    }
};
const getCRUD = (req, res) => {
    return res.render('crud.ejs');
};
const postCRUD = async (req, res) => {
    let message = await CRUDServices.createUser(req.body);
    console.log(message);
    return res.send('Post CRUD');
};
const displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    return res.render('displayCRUD.ejs', {
        data,
    });
};

module.exports = { getHomePage, getCRUD, postCRUD, displayGetCRUD };
