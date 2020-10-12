// ! Configuration with PSQL DB
module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "${process.env.DATABASE_HOST}",
        "port": "${process.env.DATABASE_PORT}",
        "database": "${process.env.DATABASE_NAME}",
        "username": "${process.env.DATABASE_USERNAME}",
        "password": "${process.env.DATABASE_PASSWORD}",
        "ssl": { "rejectUnauthorized": false }
      },
      "options": {
        "debug": true
      }
    }
  }
});



// module.exports = ({ env }) => ({
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "bookshelf",
//       "settings": {
//         "client": "postgres",
//         "host": "${process.env.DATABASE_HOST}",
//         "port": "${process.env.DATABASE_PORT}",
//         "database": "${process.env.DATABASE_NAME}",
//         "username": "${process.env.DATABASE_USERNAME}",
//         "password": "${process.env.DATABASE_PASSWORD}",
//         "ssl": { "rejectUnauthorized": false }
//       },
//       "options": {
//         "debug": true
//       }
//     }
//   }
// });


// module.exports = ({ env }) => ({
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "bookshelf",
//       "settings": {
//         "client": "postgres",
//         "host": env('DATABASE_HOST'),
//         "port": env('DATABASE_PORT'),
//         "database": env('DATABASE_NAME'),
//         "username": env('DATABASE_USERNAME'),
//         "password": env('DATABASE_PASSWORD'),
//         "ssl": { "rejectUnauthorized": false }
//       },
//       "options": {
//         "debug": true
//       }
//     }
//   }
// });
