import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedInUser = {firstName: 'Golam', lastName: 'Morshed', email: 'golamdotmorshed@gmail.com'}
  return (
    <section className='home'>
      <div className='home-container w-full mx-4'>
        <header className='home-header my-4'>
          <HeaderBox 
            type='greeting'
            title= 'Welcome'
            user={loggedInUser?.firstName}
            subtext='Access and manage your account and transactions effeciently'
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1023.45}
          />
        </header>
        RECENT TRANSECTION
      </div>
      <RightSidebar 
      user={loggedInUser}
      transactions={[]}
      banks={[{currentBalance: 1023.45, name: 'Chase Bank', id: '1234567890'}, {currentBalance: 1453.45, name: 'US Bank', id: '12345df67890'}]}
      />
    </section>
  )
}

export default Home