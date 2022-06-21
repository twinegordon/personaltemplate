const Table = ({ data }) => {

  
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
