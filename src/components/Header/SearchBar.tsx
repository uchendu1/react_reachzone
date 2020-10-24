


import React, { useState } from 'react'



export default () =>{
    const [input, inputFunc] = useState('')
 
    return(


    <div className="row justify-content-center">
    <div className="col-8 my-5">

        <form className="form-inline row ">
          <div className="col-8">
          <div className="row bg-white align-items-center" style={{ height: "50px" }}>
              <div className="col-1">
                <i className="fa fa-search icon"></i>
              </div>
              <div className="col-11 p-0">

                <input value={input} onChange={(event)=>inputFunc(event.target.value)} type="text" placeholder=" Search for job title or any keyword"
                  className="no-outline w-100 input1 " />

              </div>
            </div>
          </div>



          <div className="col-3 p-0">
            <button   className="w-100 find-jobs p-3 text-white no-outline" type="submit">Find jobs</button>
          </div>
        </form>
      </div>

  </div>
    )
}
    
