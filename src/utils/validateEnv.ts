import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    SECRET_TOKEN: str(),
    PORT: port(),
  });
}

export default validateEnv;
