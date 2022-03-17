import React, { Fragment,Component } from 'react'

import {Route,Routes} from 'react-router-dom'
import Restaurants from './Home/Container_grid'
import Restaurant from './Product/Restaurant'
import Navbar from './Navbar'
class App extends Component {
    render(){
      return(
        
        <Fragment><Navbar/><Routes>
          <Route path="/" element={<Restaurants />}></Route>
          <Route path="/restaurants/:slug" element={<Restaurant />}></Route>
        </Routes></Fragment>
      )
    }
}
export default App