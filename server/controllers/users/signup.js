const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const {email,password, password_confirm } = req.body

if(!email||!password||!username||!mobile) return res.status(422)
.send('insufficient parameters supplied')
  const accessToken = generateAccessToken(userInfo.dataValues)
  const [userInfo,created] =await user.findOrCreate({where:{email},defaults:{email,password}})

  if (userInfo) {
    res.status(200).send("회원가입 성공")
  }

  else if (email !== null && password === password_confirm) {
    delete userInfo.password
    delete req.body.password_confirm
    delete req.body.password
    return res.status(201).cookie('jwt',accessToken)
  }


  else if (req.email === userInfo.email) {
    res.status(409).send( "이미 존재하는 이메일 입니다")
  }

  else if (!created) {
    return res.status(500).send(err)
  }
};
