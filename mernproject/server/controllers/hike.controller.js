// import model
const {Hike} = require("./../models/hike.model")

module.exports.allHikes = (req, res) => {
    Hike.find()
        .then(hikes=>res.json(hikes))
        .catch(err=>res.status(400).json(err))
}

module.exports.oneHike = (req, res) => {
    Hike.findOne({_id: req.params.id})
        .then(hike=>res.json(hike))
        .catch(err=>res.status(400).json(err))
}

module.exports.createHike = (req, res) => {
    Hike.create(req.body)
        .then(newHike=>res.json(newHike))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteHike = (req, res) => {
    Hike.deleteOne({_id: req.params.id})
        .then(result=>res.json(result.data))
        .catch(err=>res.status(400).json(err))
}