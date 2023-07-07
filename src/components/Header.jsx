import React from 'react'
import '../styles/Header.css';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </nav>
  )
}

export default Header




//yha tk tha props,destructuring time:46:38
// import React from 'react'

// const MyHeading = ({name,text}) => {
//     const val=13
//     // const obj = {
//     //     abc:123,
//     //     def:124,
//     // // };
//     // const{abc,def}=obj;
//   return (
//   <>
//   <h1>hello {val}</h1>
//   <h2>{text}</h2>
//     <div>
//       Myheading
//     </div>
//     <footer>{name}</footer>
//     {/* <MyHeadingTitle1 /> */}
//   </>
//   )
// }

// const MyHeadingTitle1 = () => <h4>asphalt</h4>
// const MyHeadingTitle2 = () => <h4>asphalt2</h4>
// const MyHeadingTitle3 = () => <h4>asphalt3</h4> //yha bhi export kr skte ho export keyword age lgake

// export default MyHeading
// export {MyHeadingTitle1,MyHeadingTitle2,MyHeadingTitle3};
