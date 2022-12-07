import axios from "axios";
const auth = `Barear ${sessionStorage.getItem('token')}`
export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers:{
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const get: <T>(url: string,) => Promise<T> = async (url) => {
  if(sessionStorage.getItem('token')){
    console.log(api);
    
    console.log("entrou aqui" , auth);
    
  }
  let response = await api.get(url);
  console.log(response);
  
  let data = await response.data.data;
  console.log(data);
  
  return data;
};
export const post: <T>(url: string, data: {}) => Promise<T> = async (
  url,
  data
) => {
  console.log(data);
  
  console.log("chegou aqui");
  
  let response = await api.post(url, data);
  let resp = await response.data.data;
  console.log(resp);
  

  return resp;
};

export const put: <T>(urlId: string, data: {}) => Promise<T> = async (
  url,
  data
) => {
  let response = await api.put(url, data);
  let resp = await response.data;
  console.log(resp);

  return resp;
};

export const del:<T>(urlId: string) => Promise<T> = async (
    url,
  ) => {
    let response = await api.delete(url);
    let resp = await response.data;
    console.log(resp);
  
    return resp };
