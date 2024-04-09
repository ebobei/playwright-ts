import { config } from "dotenv";
config();

const loginData = {
  phonenumber: process.env.PHONE_NUMBER,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
  adminLogin: process.env.ADMIN_LOGIN,
  adminPassword: process.env.ADMIN_PASSWORD,
};

export default loginData;
