require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, {expiresIn: '1m'})
  },
  sendAccessToken: (res, accessToken) => {
    return res.status(200).cookie('jwt', accessToken).json({data: {accessToken}, message: 'ok' });
  },
  isAuthorized: (req) => {
    try {
      return verify(req.cookies.jwt, process.env.ACCESS_SECRET) 
    }
    catch(err) {
      console.log(err)
    }
  }
};

// require('dotenv').config();
// const { sign, verify } = require('jsonwebtoken');

// module.exports = {
//   generateAccessToken: (data) => {
//     return sign(data, process.env.ACCESS_SECRET,{expiresIn: "15s"})
//   },
//   sendAccessToken: (res, accessToken) => {
//     return res.status(200).cookie('jwt',accessToken).json({ data:{accessToken}, message: 'ok' });
//   },
//   isAuthorized: (req) => {
//     const authorization = req.cookies.jwt
//     try{return verify(authorization,process.env.ACCESS_SECRET)}
//     catch(err) {return null}
//   }
// };
