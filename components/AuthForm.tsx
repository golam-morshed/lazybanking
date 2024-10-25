import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const AuthForm = ({type}: {type: string}) => {
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className='cursor-pointer flex items-center gap-1'>
                <Image src='/icons/logo.svg' alt='Lazy Banking' width={34} height={34}/>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Lazy Banking</h1>
            </Link>
        </header>
    </section>
  )
}

export default AuthForm