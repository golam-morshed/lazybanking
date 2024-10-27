import React from 'react'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
 
  const formSchema = authFormSchema('sign-up');
  interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    type: string;
  }

const CustomInput = ({control, name, label, placeholder='', type}: CustomInputProps) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className='w-full'>
            <div className='form-item relative'>
                <FormLabel className="form-label">{label}</FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input placeholder={placeholder} type={type} {...field} />
                    </FormControl>
                </div>
                <FormMessage className='form-message ml-1 text-red-500 absolute -bottom-5 left-0'/>
            </div>
            </FormItem>
        )}
        />
    
  )
}

export default CustomInput