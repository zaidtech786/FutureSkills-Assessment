import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({setIsOpen,isOpen,setData,data}) => {
    const [userInput,setUserInput] = useState({
        title:"",
        description:""
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserInput({...userInput,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!userInput.title || !userInput.description){
          return toast.error("All Fields are required!",{
            autoClose: 2000, 
          })
        }
        const {title,description} = userInput
       axios.post("http://localhost:4000/api/cards",{
        title,
        description
       })
      .then(res => {
        if(res.data.newCard){
          let newCard = res.data.newCard
          setData([...data,newCard])
          setTimeout( () => {
            setIsOpen(!isOpen)
          },2000)
           toast.success("Request are submitted Successfully",{
            autoClose: 2000, 
          })
         
        }
      }).catch(err=> {
        return err
      })
       
    }
  return (
    <div id="modal" className="modal">
      <ToastContainer position='top-center' />
    <div className="modal-content">
      <span className="close-btn" id="closeModalBtn" onClick={() => setIsOpen(!isOpen)}>&times;</span>
      <h2 className="modal-title">Add New Item</h2>
      <form className="modal-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter the title" required value={userInput.title}  onChange={(e) => handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter the description" value={userInput.description} required onChange={(e) => handleChange(e)}></textarea>
        </div>
        <button  className="submit-btn" onClick={(e) => handleSubmit(e)} >Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Modal