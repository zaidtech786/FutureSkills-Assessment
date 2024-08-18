import React from 'react';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const Navbar = ({isOpen,setIsOpen}) => {
  return (
    <div>
        <nav>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
           <CallMissedOutgoingIcon style={{backgroundColor:"#fff",color:"black",borderRadius:"10px"}}/>
            <span style={{fontWeight:"bold"}}>Abstract |</span>
            <span>Help Center</span>
            </div>
            
            <button className='btn' onClick={() => setIsOpen(!isOpen) }>Submit a Request</button>
        </nav>
    </div>
  )
}

export default Navbar