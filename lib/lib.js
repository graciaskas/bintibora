import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import * as FileSystem from "expo-file-system";

// const uri = "https://bintibora.zeslap.com/api";

const uri = "http://161.97.182.11:3024/api";

export const checkUserOnline = async () => {
  try {
    const isConnected = await NetInfo.fetch().then(
      (state) => state.isConnected
    );
    return isConnected;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations réseau :",
      error
    );
  }
};

export const saveJSONToFile = async (fileName, jsonData) => {
  try {
    const fileUri = FileSystem.documentDirectory + fileName;
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(jsonData), {
      encoding: FileSystem.EncodingType.UTF8,
    });
    console.log("File saved successfully:", fileUri);
  } catch (error) {
    console.log(error);
  }
};

export const readJSONFromFile = async (fileName) => {
  try {
    const fileUri = FileSystem.documentDirectory + fileName;
    const jsonString = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    const jsonData = JSON.parse(jsonString);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const formatDate = (date) => {
  return new Date(date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
};

const getToken = async () => {
  try {
    let data = await AsyncStorage.getItem("currentUser");
    if (data) {
      data = JSON.parse(data);

      return data.token;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const useFetch = async (method = "GET", body = {}, path = null) => {
  if (!path) throw new Error("Request URL Not defined");

  const online = await checkUserOnline();

  if (!online) {
    return {
      error: "Aucune connexion internet trouvée!",
    };
  }

  const token = await getToken();

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method == "POST") {
    options.body = JSON.stringify(body);
  }

  if (path !== "/users/login") {
    options.headers = {
      ...options.headers,
      Authorization: "Bearer " + token,
    };
  }
  const res = await (await fetch(uri + path, options)).json();
  return res;
};
