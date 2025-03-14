import { useFetch } from "../lib";
export default class Cycle {
  constructor(url) {}

  async getAll({ limit = 250, offset = 0 }) {
    try {
      return await useFetch(
        "GET",
        null,
        `/cycles/?limit=${limit}&offset=${offset}`
      );
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async get(id) {
    try {
      return await useFetch("GET", null, "/cycles/" + id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async create(dict) {
    try {
      return await useFetch("POST", dict, "/cycles");
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async update(dict) {
    try {
      return await useFetch("PUT", dict, "/cycles/" + dict.id);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async deleteAll() {}

  async deleteById(id) {
    try {
      return await useFetch("DELETE", null, `/cycles/${id}`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
