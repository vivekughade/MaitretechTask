import React from 'react'

import {BrowserRouter as Router,Link} from 'react-router-dom'

 const GoToMenu = ()=>{
  
  
     return(<> <div className='Welcome'>
     <h1>Welcome to Food' <div>Kitchen</div>
     <div><button className = "buton btn btn-primary"  ><Link to = '/fooditems'>GOTOMENU</Link></button></div>
     </h1>
     
     
  
     
 </div></>)
    
 }

 export default GoToMenu;