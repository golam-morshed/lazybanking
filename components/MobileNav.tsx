'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"  
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} className='cursor-pointer' />
        </SheetTrigger>
        <SheetContent side='left' className='bg-white'>
          <SheetClose asChild>
            <Link href='/' className='-mt-[7px] -ml-1 cursor-pointer flex justify-start items-center gap-2'>
              <Image src='/icons/logo.svg' alt='Lazy Banking' width={30} height={30} className='max-xl:size-[30px]'/>
              <h1 className='text-20 font-ibm-plex-serif font-bold text-black-1'>Lazy Banking</h1>
            </Link>
          </SheetClose>
            <div className="mobilenav-sheet">
              <nav className='flex flex-col gap-3 pt-16 text-white'>
              {sidebarLinks.map((link)=>{
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                  return(
                    <SheetClose asChild key={link.label}>
                    <Link href={link.route} key={link.label} className={`mobilenav-sheet_close w-full ${isActive ? 'bg-bank-gradient' : ''}`}>
                      <Image src={link.imgURL} alt={link.label} width={20} height={20} className={`${isActive ? 'invert-0 brightness-[3]' : ''}`}/>
                      <div className={`text-16 font-semibold text-black-2 ${isActive ? '!text-white' : ''}`}>{link.label}</div>
                    </Link>
                    </SheetClose>
                  )
                })}
              </nav>
              <div>USER data</div>
            
          </div>
          
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav