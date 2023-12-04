/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import phoneService from "./services/phone";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phoneService.getAllNumbers().then((numbers) => setPersons(numbers));
  }, []);

  const handleSubmission = (e) => {
    e.preventDefault();
    const newObject = { name: newName, number: newNumber };
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      const confirmName = confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      if (confirmName) {
        phoneService
          .changeNumber(existingPerson.id, newObject)
          .then((updatedNumber) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : updatedNumber
              )
            );
            setSuccessMessage("Number successfully changed!");
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          });
      }
    } else {
      phoneService.addNewNumber(newObject).then((newNumber) => {
        setPersons(persons.concat(newNumber));
        setSuccessMessage("New Number is added");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilteredName(e.target.value);
  };

  const handleDelete = (id) => {
    const confirmDelete = confirm(
      `Are you sure you want to delete this number?`
    );
    if (confirmDelete) {
      phoneService
        .deleteNumber(id)
        .then((response) =>
          setPersons(persons.filter((person) => person.id !== id))
        )
        .catch((error) => {
          setErrorMessage(
            "This number has already been deleted from the server"
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Message successMessage={successMessage} errorMessage={errorMessage} />
      <Filter
        handleFilterChange={handleFilterChange}
        filteredName={filteredName}
      />
      <Form
        handleSubmission={handleSubmission}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Persons
        persons={persons}
        filteredName={filteredName}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
