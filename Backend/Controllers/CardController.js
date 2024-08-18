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
    if(newCard)
        return res.send({msg:"Card Created Successfully " , newCard})
    else 
       return res.send({err:"Something went Wrong"})
}

const getCards = async(req,res) => {
    let cards;
    try {
        cards = await Card.find({});
    } catch (error) {
        console.log(error)
    }
    if(cards)
        return res.send({cards})
    else 
       return res.send({err:"Something went Wrong"})
      
}

const getSingleCards = async(req,res) => {
    const {title} = req.params;
    let card;
    try {
        card = await Card.findOne({title});
    } catch (error) {
        console.log(error)
    }
    if(card)
        return res.send({card})
    else 
       return res.send({err:"Something went Wrong"})
}
exports.createCard = createCard;
exports.getCards = getCards;
exports.getSingleCards = getSingleCards;