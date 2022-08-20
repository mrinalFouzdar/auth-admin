const encryptDecrypt = require("../CommonLib/encryption-decryption");
const UserModel = require("../Models/user");
async function createUser(req, res) {
  try {
    let userDetails = req.body;
    userDetails.role = "user";
    encryptPassword = encryptDecrypt.encryptPassword(userDetails.password);
    userDetails.password = encryptPassword;
    let response = await UserModel.insertMany([userDetails]);
    res.status(201).json({
      status: true,
      user: response,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      user: error,
    });
  }
}
async function loginUser(req, res) {
  try {
    let userDetails = req.body;
    let {password} = req.body
    console.log(userDetails);
    let searchobj = {};
    searchobj["email"] = userDetails.email;
    let response = await UserModel.findOne(searchobj);
    // response = response[0];

    if (response === undefined) {
      res.status(200).json({
        status: false,
        user: "You are Not user",
      });
    } else if (
      encryptDecrypt.decryptPassword(userDetails.password, response.password)
    ) {
     response = await UserModel.findOne(searchobj).select("-password");

      res.status(200).json({
        status: true,
        user: response,
      });
    } else {
      res.status(200).json({
        status: false,
        user: "password is not valid",
      });
    }
  } catch (error) {
    res.status();
  }
}
async function getUser(req, res, next) {
  try {
    let Data = await UserModel.find({}).select("-password");
    Data = Data.filter((each) => each.role == "user");
    res.status(200).json({
      status: true,
      data: Data,
    });
  } catch (error) {
    res.status(200).json({
      status: false,
    });
  }
}
module.exports = {
  createUser,
  loginUser,
  getUser,
};
