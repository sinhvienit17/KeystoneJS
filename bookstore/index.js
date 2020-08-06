const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
// const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');


const PROJECT_NAME = 'Bookstore';
//connect to mongoDB
// const adapterConfig = {
//   mongoUri: 'mongodb://localhost:27017/Bookstore'
// };

// const keystone = new Keystone({
//   adapter: new MongooseAdapter(adapterConfig),
//   // onConnect: async keystone => {
//   //   await keystone.createItems({
//   //     User: [
//   //       { username: 'admin', email: 'admin@gmail.com', password: '12345678', role: 'Admin' },
//   //       { username: 'manager', email: 'manager@gmail.com', password: '12345678', role: 'Manager' },
//   //     ],
//   //   });
//   // },
// });

//Data
// const dataBackUp = require('./backup/Data');

//connect to postgresQL
const adapterConfig = {
  // dropDatabase: true,
  knexOptions: {
    connection: 'postgresql://postgres:09101999@localhost:5432/Books'
  }
};
const keystone = new Keystone({
  adapter: new KnexAdapter(adapterConfig),
  // onConnect: async keystone => {
  //   await keystone.createItems({
  //     User: [
  //       { username: 'admin', email: 'admin@gmail.com', password: '12345678', role: 'Admin' },
  //       { username: 'manager', email: 'manager@gmail.com', password: '12345678', role: 'Manager' },
  //     ],
  //   });
  // },
});

//todo
const UserSchema = require('./models/User.js');
const CategorySchema = require('./models/Category.js');
const AuthorSchema = require('./models/Author.js');
const BookSchema = require('./models/Book.js');
//Create table in schema
keystone.createList('User', UserSchema);
keystone.createList('Category', CategorySchema);
keystone.createList('Author', AuthorSchema);
keystone.createList('Book', BookSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'username',
  },
});


module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true, authStrategy }),
  ],
};
