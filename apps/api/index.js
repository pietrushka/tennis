const express = require("express")
const cors = require("cors")
const http = require("http")

const PORT = 8081

const app = express()
app.use(cors())
const httpServer = http.createServer(app)

// REST API
app.get("/", (req, res) => {
  res.status(200).send("ok")
})

httpServer.listen(PORT, () => console.log(`server runnin on port ${PORT}`))