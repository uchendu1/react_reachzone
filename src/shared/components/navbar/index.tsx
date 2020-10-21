import React from 'react'
const Index = () => {
  return (
    <nav id='_navbar' className='_navbar d-flex justify-content-between align-items-center'>
      <img className='logo' src={require('../../themes/assets/images/Remote4Africa.svg')} alt='remote4africa' />
      <div className='hamburger'>
        <img className='hamburger-logo' src={require('../../themes/assets/images/fi_menu.svg')} alt='hamburger' />
      </div>
      <div className='desktop-options h-100 justify-content-start align-items-center'>
        <p className='categories mb-0'>
          Categories
          <i className="fa fa-chevron-down" aria-hidden="true"/>
        </p>
        <p className='faq mb-0'>
          FAQ
        </p>
        <button type='button' className='postjob rounded-pill'>
          Post a job for $100
        </button>
      </div>
    </nav>
  )
}

export default Index
