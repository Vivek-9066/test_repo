import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [records, setRecords]= useState([])

  useEffect(()=> {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setRecords(res.data))
      .catch(err => console.log(err));
  },[]);
  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Api Data</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((user, index) => {
                return <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home