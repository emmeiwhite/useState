import React, { useState } from "react";
import "./styles.css";
import data from "./data/persons";

export default function App() {
  const [text, setText] = useState("Random Title");
  const [persons, setPerons] = useState(data);
  const [singlePerson, setSinglePerson] = useState({
    name: "Emmei",
    age: 29,
    message: "Random Message"
  });

  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "Random Title") {
      setText("We will shine one day");
    } else {
      setText("Random Title");
    }
  };

  const handleDelete = (id) => {
    // console.log(id);
    const newPersons = persons.filter((person) => person.id !== id);
    setPerons(newPersons);
  };

  const handleMessage = () => {
    const person = { ...singlePerson, message: "Message is updated" };
    setSinglePerson(person);
  };

  // Wonderful Gocha Here ! setCount() is Asynchronous in Nature
  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className="App">
        <h1>{text}</h1>
        <button onClick={handleClick}>Change Text</button>
      </div>
      {/* List */}
      <main>
        <h1>Persons</h1>
        {persons.map((person) => {
          const { id, name } = person;

          return (
            <div className="mainContent" key={id}>
              <span>{name}</span>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}

        <button onClick={() => setPerons([])}>Delete All Items</button>
      </main>

      <main>
        <h4>Single Person</h4>
        <p>Name: {singlePerson.name}</p>
        <p>Age: {singlePerson.age}</p>
        <p>Message: {singlePerson.message}</p>

        <button onClick={() => handleMessage()}>Change Message</button>
      </main>

      {/* Counter */}

      <main className="counterWrapper">
        <h2>Counter</h2>
        <h1>{count}</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>increase</button>
          <button onClick={() => setCount(count - 1)}>decrease</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
      </main>

      {/* Complex Counter */}

      <main className="counterWrapper">
        <h2>Complex Counter</h2>
        <h1>{count}</h1>
        <div>
          <button onClick={() => complexIncrease()}>Increase later</button>
        </div>
      </main>
    </React.Fragment>
  );
}
