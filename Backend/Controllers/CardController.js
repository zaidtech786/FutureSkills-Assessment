const Card = require("../Models/CardModel")
const createCard = async(req,res) => {
    const {title,description} = req.body;
    const newCard = new Card({
        title,
        description
    })
    try {
        await newCard.save();
    } catch (error) {
        console.log(error)
    }
    res.send({newCard})
}

const getCards = async(req,res) => {
    let cards;
    try {
        cards = await Card.find({});
    } catch (error) {
        console.log(error)
    }
    res.send({cards})
}

const getSingleCards = async(req,res) => {
    const {title} = req.params;
    let card;
    try {
        card = await Card.findOne({title});
    } catch (error) {
        console.log(error)
    }
    res.send({card})
}
exports.createCard = createCard;
exports.getCards = getCards;
exports.getSingleCards = getSingleCards;