import axios from "axios";

export const api = axios.create({
  // APARTAMENTO
  //baseURL: "http://192.168.0.15:3333/",

  // WIFI PRINCIPAL
  baseURL: "http://192.168.1.24:3333/",

  // SALA TV
  //baseURL: "http://192.168.0.111:3333/",

});
