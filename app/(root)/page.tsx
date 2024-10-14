import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'Morshed'}
  return (
    <section className='home'>
      <div className='home-container w-full mx-4'>
        <header className='home-header my-4'>
          <HeaderBox 
            type='greeting'
            title= 'Welcome'
            user={loggedIn?.firstName}
            subtext='Access and manage your account and transactions effeciently'
          />
        </header>
        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1023.45}
        />
      </div>
    </section>
  )
}

export default Home