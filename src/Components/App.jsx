import React from 'react'
import Navbar from './Navbar.jsx'
import GoToMenu from './GoToMenu.jsx'
import FoodItems from './FoodItems.jsx'
import Checkout from './Checkout.jsx'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (<>
        <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={GoToMenu} />
        <Route path='/fooditems' component={FoodItems}></Route>
        <Route path='/checkout' component={Checkout}></Route>
      </div>
      </BrowserRouter>








    </>

    )
}
export default App;