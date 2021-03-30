import { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = 'http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/students';
  const getById = 'http://swapi.dev/api/people/';
  const search = 'http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/students/search/' + param;
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

export function createStudent(student) {
  return axios.post('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/add/student', student);
}

export function updateStudent(student) {
  console.log('in the upate service');
  return axios.put('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/update/student', student);
}

export function deleteStudent(studentId) {
  return axios.delete('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/delete/student/' + studentId);
}




