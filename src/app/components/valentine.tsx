'use client';

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Valentine() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleYes = () => setResponse('yes');
  const handleNo = () => setResponse('no');

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-pink-100">
      {/* Animated Hearts */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <FaHeart
            key={index}
            className="absolute heart-animation"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            color="red"
          />
        ))}
      </div>

      {/* Conditional Rendering */}
      <div className="relative z-10 border border-transparent p-5 shadow-xl bg-white rounded-lg text-center">
        {response === null && (
          <>
            <h1 className="text-xl font-bold text-red-600 mb-4">Will you be my Valentine?</h1>
            <div className="flex justify-between items-center">
              <img src="/tenor.gif" alt="valentine gif" width="200" height="200" />
              <div className="flex gap-5">
                <button
                  onClick={handleYes}
                  className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all"
                >
                  Yes
                </button>
                <button
                  onClick={handleNo}
                  className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400 transition-all"
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}

        {response === 'yes' && (
          <>
            <h1 className="text-xl font-bold text-black text-center">I knew it! I love you!</h1>
            <img src="/peachcat-cat.gif" alt="valentine gif" width="300" height="300" />
          </>
        )}

        {response === 'no' && (
          <>
            <h1 className="text-xl font-bold text-red-600 mb-4">TRY AGAIN!
            </h1>
            <div className="flex justify-between items-center">
              <img src="/gst.gif" alt="valentine gif" width="200" height="200" />
              <div className="flex gap-5">
                <button
                  onClick={handleYes}
                  className="px-5 py-3 bg-red-600 font-bold text-white rounded-full hover:bg-red-700 transition-all"
                >
                  Yes
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
