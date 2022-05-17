const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {

  if (!req.headers.cookie) return res.status(401).send({
    data: null, message: 'not authorized'
  })

  const accessTokenData = isAuthorized(req);

  const {email} = accessTokenData


  const userInfo = await user.findOne({
    where: {email}
  })

  delete userInfo.dataValues.password
  return res.status(200).json({data: {userInfo: userInfo.dataValues}, message: 'ok'})
};