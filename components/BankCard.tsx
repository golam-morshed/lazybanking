import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const BankCard = ({account, userName, showBalance}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link href="/" className='bank-card'>
            <div className="bank-card_content">
                <div>
                    <h1 className='text-16 font-semibold text-white'>{account.name || userName}</h1>
                    <p className='font-ibm-plex-sans-regular font-black text-white'>{formatAmount(account.currentBalance)}</p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">{userName}</h1>
                        <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
                    </div>
                    <p className="text-14 font-semibold tracking-[1.1px] text-white">●●●● ●●●● ●●●● <span className='text-15'>{account.id.slice(-4)}</span></p>
                </article>
            </div>
            <div className="bank-card_icon">
                <Image src='/icons/Paypass.svg' alt='paypass' width={20} height={24} className='w-[20px] h-[24px]' />
                <Image src='/icons/mastercard.svg' alt='masterbard' width={45} height={32} className='w-[45px] h-[32px]' />
            </div>
            <Image src='/icons/lines.svg' alt='lines' width={316} height={190} className='absolute top-0 left-0'/>
        </Link>
        {/* Copy card details */}
    </div>
  )
}
  
export default BankCard