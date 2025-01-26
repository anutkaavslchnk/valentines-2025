import React from 'react';
export interface ValentineProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}
export default function Valentine({}: ValentineProps) {
  return (
<div className="flex items-center justify-center h-screen">
  <div className="border border-black p-5 w-64 h-64"></div>
</div>

  );
}