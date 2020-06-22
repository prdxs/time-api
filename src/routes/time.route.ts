import { Router } from 'express';

import TimeController from '../controllers/time.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class TimeRoute implements Route {
  public path = '/time';
  public router = Router();
  public timeController = new TimeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.timeController.index);
  }
}

export default TimeRoute;
