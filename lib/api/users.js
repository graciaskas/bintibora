import { checkUserOnline, useFetch } from "../lib";

checkUserOnline;

export default class User {
  constructor(url) {}

  getAll({ limit, offset }) {}

  getById(id) {}

  async create(dict) {
    try {
      return await useFetch("POST", dict, "/users");
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async login(dict) {
    try {
      return await useFetch("POST", dict, "/users/login");
    } catch (e) {
      console.log(e);
      return {
        error: e.message,
      };
    }
  }
}
