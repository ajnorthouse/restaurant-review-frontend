import { useState, useEffect } from 'react';
import axios from 'axios';
const databaseUrl = "http://localhost:8080/api/";
export const table = {
  ADMIN: 'admin/',
  USER: 'user/',
  RESTAURANT: 'restaurant/',
  REVIEW: 'review/'
}
export const getMethod = {
  ALL:'',
  BY_ID:'id/',
  BY_NAME:'name/',
  BY_USERNAME:'username/',
  BY_RATING:'rating/',
  BY_USERID:'userid/',
  BY_RESTAURANTID:'restaurantid/'
}
const htmlRequest = {
  POST:'create/',
  GET:'',
  PUT:'update/',
  PATCH:'update/',
  DELTE:'delete/'
}

// const for the get requests
export const useFetch = (getTable, method, searchValue) => {
  let searchValueIsNum = (searchValue !== undefined && searchValue !== null && typeof(searchValue)==='number');
  let searchValueIsStr = (searchValue !== undefined && searchValue !== null && typeof(searchValue)==='string');
  let getUrl;
  let continueGet = true;


  //switch-case statement on the table name (getTable)
  switch(getTable) {
    case table.RESTAURANT:
      getUrl = databaseUrl + getTable + htmlRequest.GET;
      break;
    case table.ADMIN:
      getUrl = databaseUrl + getTable + htmlRequest.GET;
      break;
    case table.REVIEW:
      getUrl = databaseUrl + getTable + htmlRequest.GET;
      break;
    case table.USER:
      getUrl = databaseUrl + getTable + htmlRequest.GET;
      break;
    default:
      continueGet = false;
      console.log("Bad Table Name");
  }
  

  //switch-case statement on the type of get (method)
  switch(method) {
    case getMethod.ALL:
      getUrl = getUrl;
      break;
    case getMethod.BY_ID:
      searchValue = (searchValueIsNum) ? searchValue : 0;
      getUrl = getUrl + method + searchValue;
      break;
    case getMethod.BY_NAME:
      searchValue = (searchValueIsStr) ? searchValue : 'NA';
      getUrl = getUrl + method + searchValue;
      break;
    case getMethod.BY_USERNAME:
      searchValue = (searchValueIsStr) ? searchValue : 'NA';
      getUrl = getUrl + method + searchValue;
      break;
    case getMethod.BY_RATING:
      searchValue = (searchValueIsNum) ? searchValue : 0.0;
      getUrl = getUrl + method + searchValue;
      break;
    case getMethod.BY_USERID:
      searchValue = (searchValueIsNum) ? searchValue : 0;
      getUrl = getUrl + method + searchValue;
      break;
    case getMethod.BY_RESTAURANTID:
      searchValue = (searchValueIsNum) ? searchValue : 0;
      getUrl = getUrl + method + searchValue;
      break;
    default:
      continueGet = false;
      console.log("Bad Request Method");
  }

  //this stores the getUrl as url and keeps original functionality intact.
  let url = (continueGet) ? getUrl : null;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + response.data[0]);
        }
      } catch (error) {
        setData(false);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

//post (create) requests
export function createEntry(createTable, entry) {
  //switch-case statement on the table name
  switch(createTable) {
    case table.RESTAURANT:
      return axios.post(databaseUrl + table.RESTAURANT + htmlRequest.POST, entry);
    case table.ADMIN:
      return axios.post(databaseUrl + table.ADMIN + htmlRequest.POST, entry);
    case table.REVIEW:
      return axios.post(databaseUrl + table.REVIEW + htmlRequest.POST, entry);
    case table.USER:
      return axios.post(databaseUrl + table.USER + htmlRequest.POST, entry);
    default:
      console.log("Bad Request");
  }
}

//put (update) requests
export function putEntry(putTable, entry) {
  //switch-case statement on the table name
  switch(putTable) {
    case table.RESTAURANT:
      return axios.put(databaseUrl + table.RESTAURANT + htmlRequest.PUT, entry);
    case table.ADMIN:
      return axios.put(databaseUrl + table.ADMIN + htmlRequest.PUT, entry);
    case table.REVIEW:
      return axios.put(databaseUrl + table.REVIEW + htmlRequest.PUT, entry);
    case table.USER:
      return axios.put(databaseUrl + table.USER + htmlRequest.PUT, entry);
    default:
      console.log("Bad Request");
  }
}

//delete requests
export function deleteEntry(deleteTable, entryId) {
  //switch-case statement on the table name
  switch(deleteTable) {
    case table.RESTAURANT:
      return axios.put(databaseUrl + table.RESTAURANT + htmlRequest.DELETE + entryId);
    case table.ADMIN:
      return axios.put(databaseUrl + table.ADMIN + htmlRequest.DELETE + entryId);
    case table.REVIEW:
      return axios.put(databaseUrl + table.REVIEW + htmlRequest.DELETE + entryId);
    case table.USER:
      return axios.put(databaseUrl + table.USER + htmlRequest.DELETE + entryId);
    default:
      console.log("Bad Request");
  }
}
