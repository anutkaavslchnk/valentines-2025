import React from 'react';
import { FaHeart } from 'react-icons/fa';
export interface ValentineProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}
export default function Valentine({}: ValentineProps) {
  return (
<div className="flex items-center justify-center h-screen">
  <div className="border border-transparent p-5 w-1/2 h-1/2 shadow-xl">
  <div className='flex justify-center gap-2'>

  <FaHeart className="" fill="red" size="30"/>
  <FaHeart className="" fill="red" size="30"/>
  <FaHeart className="" fill="red" size="30"/>
  <FaHeart className="" fill="red" size="30"/>
  </div>
<h1>Will you be my valentine?</h1>
  </div>
</div>

  );
}