const UserRow = ({ row }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.email}</td>
    </tr>
  );
};

export default UserRow;