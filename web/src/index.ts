import {User} from './models/User';

const user = new User({name: 'new record', age: 0});

// A quick reminder on accessors

user.on('change', ()=>{
  console.log('user was changed!')
});
