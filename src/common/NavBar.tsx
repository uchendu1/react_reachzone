


import React from 'react'

const Navbar = () => {

    return (

        <nav id='_navbar' className='_navbar d-flex justify-content-between align-items-center'>
            <img className='logo' src={require('../themes/assets/images/Remote4Africa.svg')} alt='remote4africa' />
            <div className='hamburger'>
                <img className='hamburger-logo' src={require('../themes/assets/images/fi_menu.svg')} alt='hamburger' />
            </div>


            <div className='desktop-options h-100 justify-content-start align-items-center'>

                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle categories mb-0 no-outline" data-toggle="dropdown">
                        Categories
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Programming</a>
                        <a className="dropdown-item" href="#">Designing</a>
                        <a className="dropdown-item" href="#">Mechanical Engineering</a>
                    </div>
                </div>

                <p className='faq mb-0'>
                    FAQ
        </p>
                <button type='button' className='postjob  rounded-pill'>
                    Post a job for $100
        </button>
            </div>
        </nav>

    )
}

export default Navbar