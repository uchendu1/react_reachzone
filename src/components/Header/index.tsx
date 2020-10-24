
import React from 'react'
import Navbar from '../../common/NavBar'
import HeaderBody from './HeaderBody'
import '../../themes/sass/main.sass'

export default () => {
  return (
    <>
      <div className="con">
        <Navbar />
        <HeaderBody />
      </div>
    </>

  )
}




// import React, { useState } from 'react'

// const submmitBotton = (e:any) => {
//   e.preventDefault();
// }

// const Index = () => {


//   const [input, inputFunc] = useState('')

//   return (
//     <div className="con">
//       <nav id='_navbar' className='_navbar d-flex justify-content-between align-items-center'>
//         <img className='logo' src={require('../../themes/assets/images/Remote4Africa.svg')} alt='remote4africa' />
//         <div className='hamburger'>
//           <img className='hamburger-logo' src={require('../../themes/assets/images/fi_menu.svg')} alt='hamburger' />
//         </div>
//         {/* <input name='email' value={email} onChange={(event) => setEmail( event.target.value)}></input> */}
//         {/* <input name='password' value={password} onChange={(event) => setPassword( event.target.value)}></input> */}

//         <div className='desktop-options h-100 justify-content-start align-items-center'>
//           <p className='categories mb-0'>
//             Categories
//           <i className="fa fa-chevron-down" aria-hidden="true" />
//           </p>
//           <p className='faq mb-0'>
//             FAQ
//         </p>
//           <button type='button' className='postjob rounded-pill'>
//             Post a job for $100
//         </button>
//         </div>
//       </nav>
//       <div className="row text-center">
//         <div className="col">
//           <h4 className="dream-job">
//             Searching for your dream job?<br></br> Find the remote job that fits your lifestyle
//                 </h4>
//         </div>
//       </div>

//       <div className="row text-center">
//         <div className="col">
//           <p className="over">
//             With over <span className="number font-weight-bold">13423+</span> monthly visits, <span
//               className="remote font-weight-bold">Remote4Africa</span> is a rising platfrom trusted by submitVar
//                     recruiting from Africa.
//                 </p>
//         </div>

//       </div>

//       <div className="row justify-content-center">
//         <div className="col-8 my-5">

//             <form className="form-inline row ">
//               <div className="col-8">
//               <div className="row bg-white align-items-center" style={{ height: "50px" }}>
//                   <div className="col-1">
//                     <i className="fa fa-search icon"></i>
//                   </div>
//                   <div className="col-11 p-0">

//                     <input onChange={(event)=>inputFunc(event.target.value)} type="text" placeholder=" Search for job title or any keyword"
//                       className="no-outline w-100 input1 " />

//                   </div>
//                 </div>
//               </div>



//               <div className="col-3 p-0">
//                 <button onClick={submmitBotton}  className="w-100 find-jobs p-3 text-white no-outline" type="submit">Find jobs</button>
//               </div>
//             </form>
//           </div>

//       </div>

//     </div>
//   )
// }


// export default Index
