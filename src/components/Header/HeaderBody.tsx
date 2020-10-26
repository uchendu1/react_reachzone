



import React from "react"
import SearchBar from "./SearchBar"

const HeaderBody = () => {
  return (
    <>
      <div className="row text-center ">
        <div className="col">
          <h4 className="dream-job">
            Searching for your dream job?<br></br> Find the remote job that fits your lifestyle
                </h4>
        </div>

      </div>
      <div className="row text-center my-4">
        <div className="col">
          <p className="over">
            With over <span className="number font-weight-bold">13423+</span> monthly visits, <span
              className="remote font-weight-bold">Remote4Africa</span> is a rising platfrom trusted by 
                    recruiting from Africa.
                </p>
        </div>

      </div>
      <SearchBar />
    </>
  )
}

export default HeaderBody