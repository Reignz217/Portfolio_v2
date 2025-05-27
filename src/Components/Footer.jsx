import {Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <div className="text-center text-[#00ADB5] text-sm md:py-5 py-2 border-t">
      <div className='flex justify-center gap-5 mb-2'>
        <a href='https://www.facebook.com/reignz.harvey.9'><Facebook /></a>
        <a href='https://www.linkedin.com/in/renz-harvey-sunico-76a313356'><Linkedin /></a>
      </div>
        © {new Date().getFullYear()} Renz Harvey J. Sunico, All rights reserved.
    </div>
  )
}
