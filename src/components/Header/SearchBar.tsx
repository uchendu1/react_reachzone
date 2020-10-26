
import React, { useState } from 'react'

export default () => {
  const [input, inputFunc] = useState('')

  return (

    <>
      <div className="row justify-content-center">
        <div className="col-sm-9 col-md-6 searchbarCon">
          <div className="form-inline row">

            <div className="col">
              <div className="row bg-white align-items-center" >
                <div className="col-1">
                  <i className="fa fa-search icon"></i>
                </div>
                <div className="col-7 p-0">

                  <input value={input} onChange={(event) => inputFunc(event.target.value)} type="text" placeholder=" Search for job title or any keyword"
                    className="no-outline w-100  py-3 input1 rounded-left" />

                </div>
              </div>
            </div>
            <div className="col-2 p-0">
              <button className=" find-jobs px-3 py-3 text-white no-outline rounded-right" type="submit">Find jobs</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

