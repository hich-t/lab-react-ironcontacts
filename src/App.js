import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

// contacts.map((e,i) => e.slice(0,5))

const App = () => {
  const fiveContacts = contacts.slice(0, 5);

  console.log(fiveContacts);

  const [contact, setContact] = useState(fiveContacts);

  const sortPop = () => {
    const pop = [...contact];
    pop.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContact(pop);
  };

const deleteContact = (id) => {

  setContact(contacts.filter((contacts) => contacts.id !== id  ))

}



  const sortAlpha = () => {
    const alpha = [...contact];
    alpha.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContact(alpha);
  };

  const randomContact = () => {
    const starId = contact.map((e) => e.id);
    const noDup = contacts.filter((e) => !starId.includes(e.id) && e);
    const randomStar = Math.floor(Math.random() * noDup.length);
    const newList = [...contact];
    newList.push(noDup[randomStar]);
    setContact(newList);
  };

  // console.log(fiveContacts)

  // console.log(randomContact)

  return (
    <div className="App">
      <div className="frame">
        <table>
          <thead>IronContacts</thead>
          <tr>
            {" "}
            <button className="randombutton" onClick={() => randomContact()}>
              Add Random Contact
            </button>
          </tr>
          <tr>
            <button className="randombutton" onClick={() => sortPop()}>
              Sort By Popularity
            </button>
            <button className="randombutton" onClick={() => sortAlpha()}>
              Sort By Name
            </button>
          </tr>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Emmy</th>
              <th>Oscar</th>
            </tr>

            {contact.map((e, i) => (
              <tr>
                <td>
                  <img className="pics" src={e.pictureUrl} alt="" />
                </td>
                <td>
                  <h1>{e.name}</h1>
                </td>
                <td>
                  <h1>{e.popularity}</h1>
                </td>
                <td>
                  {e.wonEmmy ? (
                    <img className="icons" src="./emmy.png" alt="" />
                  ) : (
                    <img className="sadicon" src="./sad.png" alt="" />
                  )}
                </td>
                <td>
                  {e.wonOscar ? (
                    <img className="icons" src="./oscar.png" alt="" />
                  ) : (
                    <img className="sadicon" src="./sad.png" alt="" />
                  )}
                </td>
                <td>
                  <img className='del'   onClick={() => deleteContact() }   src="./delete.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
