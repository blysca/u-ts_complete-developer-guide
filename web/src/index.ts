import {User} from './models/User';

const user = new User({id: 1, name: 'new name 2', age: 2});

// A quick reminder on accessors

user.on('save', () => {
  console.log(user)
});

user.save();
