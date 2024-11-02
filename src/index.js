import connect from './client/connect.js';

const connection = await connect('http://localhost:3019/', {
  decodeKey: 'my-secret-key',
});

console.log({ connection });
