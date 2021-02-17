import React, { useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

import Form from './Components/Form';

function App() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        // console.log(res.data)
        setUsers(res.data)
      })
  })

  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
