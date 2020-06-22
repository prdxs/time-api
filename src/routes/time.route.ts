import { Router } from 'express';
import TimeController from '../controllers/time.controller';
import Route from '../interfaces/routes.interface';

class TimeRoute implements Route {
  public path = '/time';
  public router = Router();
  public timeController = new TimeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.timeController.index);
  }
}

export default TimeRoute;
