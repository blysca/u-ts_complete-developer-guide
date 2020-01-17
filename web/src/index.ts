import axios from 'axios';

axios.post(
  'http://localhost:3000/users',
  {
    
    name: 'myname',
    age: 20
  }
);
