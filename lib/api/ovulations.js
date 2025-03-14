import {
  useFetch,
  saveJSONToFile,
  readJSONFromFile,
  checkUserOnline,
} from "../lib";

//  = "lib/db/json/ovulations.json"
export default class Ovulation {
  constructor(url) {}

  /**
   * Methode de récupérations des données d'Ovulation
   * @param {*} param0
   * @returns
   */
  async getAll({ limit, offset }) {
    try {
      let res;
      //On vérifier si le client est en ligne
      const online = await checkUserOnline();
      if (online) {
        // On récuperation les données en ligne
        result = await useFetch(
          "GET",
          null,
          `/ovulations/?limit=${limit}&offset=${offset}`
        );
        //On Stocke local le resultat
        saveJSONToFile("ovulations.json", result.data);
      }

      //On récuperation les données en local pour les retourner au client
      res = await readJSONFromFile("ovulations.json");
      return {
        data: res,
      };
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  getById(id) {}
  async deleteById(id) {
    try {
      return await useFetch("DELETE", null, `/ovulations/${id}`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
