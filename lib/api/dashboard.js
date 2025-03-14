import { useFetch } from "../lib";

export default class Dashboard {
  constructor(url) {}

  async getAll({ limit, offset }) {
    try {
      return await useFetch("GET", null, "/dashboard");
    } catch (e) {
      console.log(e);
      return e;
    }
  }

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
      return e;
    }
  }
}
