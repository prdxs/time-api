import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const secretToken = process.env.SECRET_TOKEN;
  const authorization = req.headers.authorization;

  if (secretToken !== authorization) {
    next(new HttpException(403, 'Authentication token missing'));
  }

  next();
}

export default authMiddleware;
