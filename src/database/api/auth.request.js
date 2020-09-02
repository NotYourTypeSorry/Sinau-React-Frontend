import axios from 'axios';
import { Config } from '../setup';

const url = Config.URL;

export const signIn = async ({ emailLogin, password }) => {
  const data = await axios.post(`${url}/api/users/login`, {
    email: emailLogin,
    password: password
  });
  const token = data.data.token;
  const user = data.data.data.user;
  return { token, user };
};

export const signUp = async ({
  email,
  password,
  passwordConfirm,
  kelas,
  major,
  name
}) => {
  const data = await axios.post(`${url}/api/users/signup`, {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    kelas: kelas,
    majors: major
  });
  const token = data.data.token;
  const user = data.data.data.user;
  return { token, user };
};

export const forgotPassword = async ({ emailReset }) => {
  const data = await axios.post(`${url}/api/users/forgotPassword`, {
    email: emailReset
  });
  return data.data.message;
};
