import React from 'react'
import AnnimatedCountUp from './AnnimatedCountUp'
import DoghnutChart from './DoghnutChart';

const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
        <DoghnutChart />
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
            <div className="flex flex-col gap-2">
                <p className="total-balce-label">Total Current Balance</p>
                <div className="total-balance-amount flex-center">
                    <AnnimatedCountUp 
                    amount={totalCurrentBalance}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox