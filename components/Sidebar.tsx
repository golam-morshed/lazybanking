'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='mb-12 cursor-pointer flex flex-col justify-center items-center'>
                <Image src='/icons/logo.svg' alt='Lazy Banking' width={34} height={34} className='size-[30px] max-xl:size-14'/>
                <h1 className='sidebar-logo'>Lazy Banking</h1>
            </Link>
            {sidebarLinks.map((link)=>{
              const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
              return(
                <Link href={link.route} key={link.label} className={`sidebar-link ${isActive ? 'bg-bank-gradient' : ''}`}>
                  <div className="relative size-6">
                    <Image src={link.imgURL} alt={link.label} fill className={`${isActive ? 'invert-0 brightness-[3]' : ''}`}/>
                  </div>
                  <div className={`sidebar-label  ${isActive ? '!text-white' : ''}`}>{link.label}</div>
                </Link>
              )
            })}
        </nav>
    </section>
  )
}

export default Sidebar