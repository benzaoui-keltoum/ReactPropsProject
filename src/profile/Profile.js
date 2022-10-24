import React from "react";






const Profile=(props)=>{ 
   
  
           
    return(<>

 <h2>The name is {props.fullName}   and nationality is  {props.bio} and the profession is {props.profession} </h2>

 <div> {props.children} </div>

<div>
 <button onClick={()=>props.handleName(props.fullName)}>   alert name  </button>

</div>

<div >

 </div>
    








</>)}


export default Profile;
