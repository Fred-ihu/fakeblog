// ! Configuration with PSQL DB
module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "fakeblog",
        "password": "fakeblog",
        "database": "fakeblog",
        "schema": "public"
      },
      "options": {
        "debug": true
      }
    }
  }
});

// ! Configuration with SQLite DB
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
