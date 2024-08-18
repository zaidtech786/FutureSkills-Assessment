import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import Cards from "./Cards";
import axios from "axios"

const SearchCard = ({data,setData}) => {
  
  const [userInput,setUserInput] = useState("");
  const [error,setError] = useState(false)

  const  getData = () => {   
      axios.get("http://localhost:4000/api/cards")
      .then(res => {
        console.log(res.data.cards)
        setData(res.data.cards)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect( () => {
      getData()
  },[])
  return (
    <>
    <div className="container">
      <div className="childCont">
        <h1 style={{ fontSize: "3rem", fontWeight: 400 }} className="text">How can we help?</h1>
        <div className="inputContainerr">
          <input type="text" id="input" placeholder="search" onChange={(e) => setUserInput(e.target.value)} />
          <EastIcon className="searchIcon" fontSize="20px"/>
        </div>
      </div>
    </div>

  

    <div className='cardContainer'>
    <div style={{width:"60%",display:"flex",flexWrap:"wrap",gap:"3rem"}}>
    {
      data && data.length > 0 &&
      data.filter( (card) => {
        if(!userInput)
          return card
        else if(card.title.toLowerCase().includes(userInput.toLowerCase())){
          return card;
        }  
      })
      .map( (card) => {
        return <Cards card = {card} key= {card._id} />

      })
    }

    </div>
    </div>
    </>
  );
};

export default SearchCard;
