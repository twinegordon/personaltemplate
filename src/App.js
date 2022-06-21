import { useEffect, useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`http://localhost:8800?q=${query}`);
      console.log(res.data)
      setData(res.data)
    };
    if(query.length === 0 || query.length > 2) getUsers();
  }, [query]);

  const keys = ["first_name", "last_name", "email"];

  // Data table search
  const search = (data) => {
    return data.filter(
      (user) => keys.some((key) => user[key].toLowerCase().includes(query))
      // user.first_name.toLowerCase().includes(query) ||
      // user.last_name.toLowerCase().includes(query) ||
      // user.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        className="search"
        placeholder="Search..."
      />
      {/* Basic search */}
      {/* {Users.filter((user) =>
        user.first_name.toLowerCase().includes(query)
      ).map((user, index) => (
        <ul className="list" key={index}>
          <li className="listItem">{user.first_name}</li>
        </ul>
      ))} */}

      {/* Data table search */}
      <Table data={data} />
    </div>
  );
}

export default App;
