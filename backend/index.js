const express = require("express")
const cors = require("cors")
require('dotenv').config();

const {connectMockDB, connectRealDB} = require("./config/database")

const PORT = process.env.PORT || 3013;

const app = express()

const mongodbUri = process.env.MONGODB_URI

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//controller
const userAPI = require("./controllers/users")

const routes = [
    {
        prefix: '/user',
        target: userAPI
    },
]
for (let route of routes) {
    app.use(route.prefix, route.target)
}

if (process.env.NODE_ENV === "test") {
    if (process.env.TEST_ENV === "e2e") {
      connectMockDB().then(() => {
        app.listen(PORT, () => {
          console.log(`Mock Server is running at http://localhost:${PORT}`);
        });
      });
    }
  } else {
    connectRealDB().then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });
    });
  }

  module.exports = app