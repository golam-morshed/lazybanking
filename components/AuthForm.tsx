'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import {authFormSchema} from '@/lib/utils'
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
 

const AuthForm = ({type}: {type: "sign-in" | "sign-up"}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      
    } catch (error) {
      
    } finally {
      setIsLoading(false);
  }
}
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className='cursor-pointer flex items-center gap-1'>
                <Image src='/icons/logo.svg' alt='Lazy Banking' width={34} height={34}/>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Lazy Banking</h1>
            </Link>

            <div className="flex flex-col gap-1 md:gap-3">
              <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
              {user 
              ? 'Link Your Account'
              : type === 'sign-in'
              ? 'Sign In' 
              : 'Sign Up'}
              <p className='text-16 font-normal text-gray-600'>
                {user 
                ? 'Link your bank account to get started'
                : type === 'sign-in' 
                ? 'Enter your login details to sign in'
                : 'Create an account to get started'}
              </p>
              </h1>
            </div>
        </header>
        {user 
        ? (
          <div className='flex flex-col gap-5'>
            {/* Link bank accounts */}
          </div>
        ) 
        : (
          <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
              {type === 'sign-up' ? (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name={"firstName"} label='First Name' type='text' placeholder='Enter your first name' />
                    <CustomInput control={form.control} name={"lastName"} label='Last Name' type='text' placeholder='Enter your last name' />
                  </div>
                  <CustomInput control={form.control} name={"address1"} label='Address' type='text' placeholder='Enter your address' />
                  <CustomInput control={form.control} name={"city"} label='City' type='text' placeholder='Enter your city name' />
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name={"state"} label='State' type='text' placeholder='Enter your state' />
                    <CustomInput control={form.control} name={"postalCode"} label='Postal Code' type='text' placeholder='Ex: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name={"dateOfBirth"} label='Date of Birth' type='date' placeholder='Enter your date of birth' />
                    <CustomInput control={form.control} name={"ssn"} label='SSN' type='text' placeholder='Ex: 1234' />
                  </div>
                </>
              ) : null}
              <CustomInput control={form.control} name={"email"} label='Email' type='email' placeholder='Enter your email' />
              <CustomInput control={form.control} name={"password"} label='Password' type='password' placeholder='Enter your password' />
              <div className="flex flex-col gap-4">
                <Button type="submit" className='form-btn' disabled={isLoading}>
                  {isLoading 
                  ? (
                    <>
                      <Loader2 className='animate-spin' />
                      <span className='ml-2'>
                        {type==='sign-in' 
                        ? 'Signing In...'
                        : 'Signing Up...'}
                      </span>
                    </>
                  )
                  : type === 'sign-in' 
                    ? 'Sign In'
                    : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>
          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>
              {type === 'sign-in' 
              ? "Don't have an account?"
              : "Already have an account?"}
              <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                {type === 'sign-in' ? ' Sign Up' : ' Sign In'}
              </Link>
            </p>
          </footer>
          </>
        )
      }
    </section>
  )
}

export default AuthForm