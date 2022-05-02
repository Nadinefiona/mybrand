import jwt from 'jsonwebtoken';

const authorization = function (req,res,next){
    const token = req.header('authorization');
    // if(!token) return  res.status(401).send('Access Denied');
    // try {
    //     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    //     req.user  =  verified;
    // } catch (err) {
    //     res.status(400).send('Invalid Token');
    // }
}

export default authorization;
