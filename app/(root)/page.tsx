import React from 'react'
import HeaderBox from '@/components/HeaderBox';

const Home = () => {
  const loggedIn = {firstName: 'Morshed'}
  return (
    <section className='home'>
      <div className='home-container'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title= 'Welcome'
            user={loggedIn?.firstName}
            subtext='Access and manage your account and transactions'
          />
        </header>
      </div>
    </section>
  )
}

export default Home