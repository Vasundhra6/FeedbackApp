import React from "react";
import "./index.css";
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList'
import FeedbackForm from "./components/FeedbackForm";
import{BrowserRouter as Router,Route, Routes, NavLink} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutIconLink from "./components/AboutIconLink";
import Card from './components/shared/Card'
import { FeedbackProvider } from "./context/FeedbackContext";
import Footer from "./components/Footer";



function App()
{
    return(
    <FeedbackProvider>
   <Router> 
    <Header/>
    
    <div className='container'>
        <Routes>
 <Route exact path='/'
            element={
                <> 
            
            <FeedbackForm />
            <feedbackStats/>
            <FeedbackList/>
            <Footer/>
        </>
            
            }
           > </Route>
           
         <Route path='/about' element={<AboutPage/>}/>
        <Route path='/button' element={<onClick/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        </Routes>
       
<Card>
                <NavLink to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/about' activeClassName='active'>
                    About
                </NavLink>
            </Card>
 <AboutIconLink/>
         </div>
        </Router>
    </FeedbackProvider>
    
    )
}
export default App