module.exports = async (req, res) => {
  // TODO: 로그아웃 로직을 작성합니다.
  if (req) {
    return res.status(200).header({message:"Authorization"}).send({data:null, message:"로그아웃 성공"});
  }

  else if (req.body === null) {
    return res.status(401).send({message:"로그아웃 실패"});
  }

  else if (!req) {
  return res.status(500).send({message:"err"});
  }
};
