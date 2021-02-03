import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
          
        },
         process.env.JWT_SECRET || 'secret',
        {
            expiresIn: '1d',
        }
    );
};

export const isAuth = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
   // const token = authorization.slice(7, authorization.length); 
   
    jwt.verify(
      token,
       process.env.JWT_SECRET ||'secret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};