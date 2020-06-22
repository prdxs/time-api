import { NextFunction, Request, Response } from 'express';

import TimeService from '../services/time.service';

class TimeController {
  public timeService = new TimeService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      const serverTime = this.timeService.getServerTime();

      res.status(200).json({
        data: {
          epoch: serverTime,
        },
      });
    } catch (error) {
      next(error);
    }
  };
}

export default TimeController;
