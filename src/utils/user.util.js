import axios from 'axios';

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:4000/users')
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export const getUser = async (id) => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
}

export const createUser = async (data) => {
  await axios.post(`http://localhost:4000/users`, data)
}

export const updateUser = async (id, data) => {
  await axios.patch(`http://localhost:4000/users/${id}`, data)
}