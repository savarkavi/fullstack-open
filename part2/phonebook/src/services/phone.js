import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAllNumbers = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addNewNumber = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const deleteNumber = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const changeNumber = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data);
};

export default { getAllNumbers, addNewNumber, deleteNumber, changeNumber };
