import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token tidak valid' });
    }
  } else {
    res.status(401).json({ message: 'Tidak ada token' });
  }
};

export default protect;
