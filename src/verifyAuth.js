import jsonwebtoken from 'jsonwebtoken';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  await jsonwebtoken.verify(authHeader, 'sdsdsdsdsds', (err, decoded) => {
    if (err) {
      return res.status(401).json({ errorMessage: err });
    } else {
      req.userId = decoded.id;
    }
    return next();
  });
};
