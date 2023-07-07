import React from 'react'
import Header from './components/Header'
import './styles/App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
const App = () => {
  return <Router>
  <Header />
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="*" element={<div>PAge 404 Not Found</div>} />
   </Routes>
  </Router>
}

export default App



//time:46:38
// import React from 'react'
// import MyHeading,{MyHeadingTitle1,MyHeadingTitle2} from "./components/MyHeading";
// const App = () => {
//   return (
//     <div>
//       <MyHeading name="Abhishek" text="Nice One:"/>
//       <MyHeadingTitle1 />
//       <MyHeadingTitle2 />
//     </div>
//   )
// }

// export default App
