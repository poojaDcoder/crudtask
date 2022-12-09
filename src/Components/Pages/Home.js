import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import{Link} from "react-router-dom";

const Home = () => {
  const [users,setUsers] = useState([]);

  useEffect (() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3006/users");
    setUsers(result.data);
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3006/users/${id}`);
    loadUser();
  }
  
  return(
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1><br/>
        <table className="table border shadow">
          <thead className='table-primary'>
         <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Address</th>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
        <th scope="col">Company</th>
        <th>Action</th>
      </tr>
  </thead>
  <tbody>
    {users.map((user, index) =>(
      <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.address.street}<br/>{user.address.suite}<br/>{user.address.city}{user.address.zipcode}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
     
      <td style={{height:"10px",width:"220px"}}>
        <Link
          to={`/users/${user.id}`}
          className="btn btn-primary me-2">
            View
          </Link>
          <Link
            to={`/users/edit/${user.id}`}
            className="btn btn-outline-primary me-2">
              Edit
            </Link>
            <Link style={{width:"70px"}}
            className="btn btn-danger"
            onClick={() => deleteUser(user.id)}>
              Delete
            </Link>

      </td>
    </tr>
    ))}
  </tbody>
</table>

    </div>
  </div>

  );
    
    }

export default Home;