import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </th>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
