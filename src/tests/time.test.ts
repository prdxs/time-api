import * as request from 'supertest';
import App from '../app';
import TimeRoute from '../routes/time.route';

const now = Date.now();
Date.now = jest.fn().mockReturnValue(now);

const secondsSinceEpoch = Math.round(Date.now() / 1000);

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
});

describe('Testing Time', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const timeRoute = new TimeRoute();
      const app = new App([timeRoute]);

      return request(app.getServer())
        .get(`${timeRoute.path}`)
        .expect(200, { data: { epoch: secondsSinceEpoch } });
    });
  });
});
