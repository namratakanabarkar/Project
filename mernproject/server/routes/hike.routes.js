// import controller
const HikeController = require("./../controllers/hike.controller")

module.exports = (app) => {
    app.get("/api/hikes", HikeController.allHikes)
    app.get("/api/hike/:id", HikeController.oneHike)
    app.post("/api/hikes", HikeController.createHike)
    app.delete("/api/hike/:id", HikeController.deleteHike)
}