const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const {email, password} = req.body
  const userInfo=await user.findOne({where : {email,password}})

  // if(userInfo.email !==null && userInfo.password !== null) {
  //   return res.status(200).json()
  // }
  if (userInfo.email !== null && userInfo.password !== null) {
    return res.status(200).send('invalid user')
  }
  
  else if (userInfo.password === null) {
    return res.status(401).send("비밀번호가 일치하지 않습니다")
  }

  else if (userInfo.email === null) {
  return res.status(500).send(err)
  }

  delete userInfo.dataValues.password

  const accessToken = generateAccessToken(userInfo.dataValues)
  sendAccessToken(res,accessToken)
};
