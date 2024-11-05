import { logoutAccount } from '@/lib/actions/user.action'
import Image from 'next/image'
import React, { useState } from 'react'

const Footer = ({user, type = 'desktop'}: FooterProps) => {
    const [isLoagingOut, setIsLoagingOut] = useState(false);
    const handleLogout = async () => {
        setIsLoagingOut(true);
        await logoutAccount();
    }
  return (
    <footer className='footer'>
        <div className={type === 'mobile' ? 'footer_name-mobile' : "footer_name"}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name?.[0]}
            </p>
        </div>

        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-semibold text-gray-600'>
                {user?.name}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
                {user?.email}
            </p>
        </div>
        <a className="footer_image" onClick={handleLogout} disabled={isLoagingOut}>
            <Image src='/icons/logout.svg' alt='logout' width={20} height={20} />
        </a>
    </footer>
  )
}

export default Footer