import { Input } from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'
import { SelectContent, SelectGroup, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { SelectLabel } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaPhoneAlt , FaEnvelope , FaMapMarkedAlt } from 'react-icons/fa'

const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"+94 77 829 4885"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"gimansabandara2001@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description:"360/11A , Diyaulpatha , Nawagaththa"
  },
]

export const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col xl:flex-row justify-center items-center  xl:py-36 xl:mt-14  py-24">
      <h1 className="xl:hidden text-center text-2xl font-semibold mb-6 underline">Contact me</h1>
      <div className="flex flex-col xl:flex-row gap-3 justify-around gap-7">
      <div className="bg-neutral-300 p-10 max-w-[700px] m-2  flex flex-col lg:flex-row gap-[20px] order-2 xl:order-none rounded-3xl">
          
          <form action="https://formsubmit.co/gimansabandara2001@gmail.com" method="POST">
          <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-blue-500 flex justify-center lg:justify-start'>Let&apos;s Work Together</h1>
          <p className='text-sm text-accent m-2'>Thank you for reaching out! I appreciate your interest and will get back to you as soon as possible. Looking forward to connecting!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <Input type='firstname' name="firstname" placeholder='First Name'/>
            <Input type='lastname' name="lastname" placeholder='Last Name'/>
            <Input type='email' name="email" placeholder='Email Address'/>
            <Input type='phone' name="phone" placeholder='Phone number'/>
          </div>
            <Textarea
            className = "h-[200px]" type="msg" name="msg" placeholder = "Type your message here...."/>
            <Button type="submit" size = "md" className="max-w-40 p-3 mt-5" variant = "outline">Send Message</Button>
          </form>
        </div>
        <div className="order-1 xl:order-none flex items-center justify-center ">
         <ul className='flex flex-col gap-6'>
         {info.map((item,index) =>
          {
            return<li key={index}>
              <div className="flex flex-row gap-8 items-center ">
              <div className="bg-neutral-400 p-5 rounded-xl hover:text-blue-500">
                  {item.icon}
                </div>
                <div>
                <p className='text-blue-500'> {item.title}</p>
                 <h3>
                   {item.description}
                 </h3>
                </div>
                
              </div>
            </li>
          }
          )}
          </ul> 
        </div>
      </div>
          
        </section>
  )
}
