const bcrypt = require('bcryptjs');
const db = require('../models');
const salt = bcrypt.genSaltSync(10);

const createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordUser = await hasUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordUser,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            });
            resolve('oke create new user successfully');
        } catch (err) {
            reject(err);
        }
    });
};
const hasUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};
const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({ raw: true });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createUser,
    hasUserPassword,
    getAllUser,
};
