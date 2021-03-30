import { useState, useEffect } from 'react';
import axios from 'axios';
const databaseUrl = "http://localhost:8080/api/";

//get (read) requests
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = 'http://swapi.dev/api/people/';
  const getById = 'http://swapi.dev/api/people/';
  const search = 'http://swapi.dev/api/people/' + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    case 'search': url = search;
      break;
    default: url = null;
  }

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
export function createEntry(table, entry) {
  //switch-case statement on the table name
  switch(table) {
    case "restaurant":
      return axios.post(databaseUrl + "/restaurant/", entry);
    case "admin":
      return axios.post(databaseUrl + "/admin/", entry);
    case "review":
      return axios.post(databaseUrl + "/review/", entry);
    case "user":
      return axios.post(databaseUrl + "/user/", entry);
    default:
      console.log("Bad Request");
  }
}

//update requests
export function updateEntry(table, entry) {
  //switch-case statement on the table name
  switch(table) {
    case "restaurant":
      return axios.put(databaseUrl + "/restaurant/" + entry.id, entry);
    case "admin":
      return axios.put(databaseUrl + "/admin/" + entry.id, entry);
    case "review":
      return axios.put(databaseUrl + "/review/" + entry.id, entry);
    case "user":
      return axios.put(databaseUrl + "/user/" + entry.id, entry);
    default:
      console.log("Bad Request");
  }
}

//delete requests
export function deleteEntry(table, entryId) {
  //switch-case statement on the table name
  switch(table) {
    case "restaurant":
      return axios.delete(databaseUrl + "/restaurant/" + entryId);
    case "admin":
      return axios.delete(databaseUrl + "/admin/" + entryId);
    case "review":
      return axios.delete(databaseUrl + "/review/" + entryId);
    case "user":
      return axios.delete(databaseUrl + "/user/" + entryId);
    default:
      console.log("Bad Request");
  }
}
