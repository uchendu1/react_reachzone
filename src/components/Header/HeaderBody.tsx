



import React from "react"
import SearchBar from "./SearchBar"

const HeaderBody = () => {
  return (
    <>
      <div className="row text-center">
        <div className="col">
          <h4 className="dream-job">
            Searching for your dream job?<br></br> Find the remote job that fits your lifestyle
                </h4>
        </div>

      </div>
      <SearchBar />
    </>
  )
}

export default HeaderBody