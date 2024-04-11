import React from 'react'
import "./suggestion.css";
import { Avatar } from '@mui/material';
function User(props) {
  return (
    <>
      <div className="suggestions_username">
        <div className="username_left">
          <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>

          <div className="username_info">
            <span className='suggestion_user' style={{ padding: 0 }}>{props.user}</span>
            <span className='suggestion_relation' style={{ opacity: 0.5 }}>new to Instagram</span>
          </div>

        </div>

        <div className="username_right">
          <button type='button' style={{ cursor: 'pointer' }}>Follow</button>
        </div>
      </div>
    </>
  )
}
function Suggestion() {
  let suggestion = ["Shalini_", "Nilesh_", "Tushar_K", "Vidya_", "Vinay_k"]

  return (
    <>
      <div className="suggestions">
        <div className="title" style={{ color: '#ffffff', opacity: 0.7 }}><span>Suggestions for you</span></div>
        {suggestion.map((suggestion) => <>
          <User user={suggestion} />
        </>)}
      </div>
    </>
  )
}

export default Suggestion
