
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Tmp from "./components/Tmp";
import { getUserAuth } from './actions';

import Home from "./components/Home";
import { useEffect } from "react";
import { connect } from 'react-redux';
function App(props) {
  useEffect(() => {
     props.getUserAuth();
  }, []);
  return (
    <div className="App">
      
           
       <Router>
        <Routes>
         

           <Route path='/' 
            element={<Tmp/>
            }/>

            
           
            <Route path="/home" 
              element={<Home/>
            } />
          
            
          
        </Routes>
      </Router> 
    </div>
  );
}


const mapStateToProps =(state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
getUserAuth:() => dispatch(getUserAuth()),
});

export default connect(mapStateToProps , mapDispatchToProps)(App);

//export default App;