import 'dotenv/config';
import App from './app';
import TimeRoute from './routes/time.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([new TimeRoute()]);

app.listen();
