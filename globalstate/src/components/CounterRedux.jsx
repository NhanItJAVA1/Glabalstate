// src/components/CounterRedux.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, undo } from '../store/CounterSlice'; // Đảm bảo đường dẫn đúng
import './CounterReduxAnimation.css';

export default function Counter() {
    console.log('Redux state test:', useSelector(state => state));

    const count = useSelector(state => state.counter.count);
    const previousCount = useSelector(state => state.counter.previousCount);
    const history = useSelector(state => state.counter.history);
    
  const dispatch = useDispatch();

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (count !== previousCount) {
      setAnimationClass('animate-jump');
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [count, previousCount]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white border-opacity-20">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
          <h2 className="mx-4 text-3xl font-bold text-center bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Counter App by Redux
          </h2>
          <div className="w-16 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded-full"></div>
        </div>
        
        {/* Counter display with jump effect */}
        <div className="my-6 text-8xl font-bold text-center text-black">
          <span className={`inline-block ${animationClass}`}>{count}</span>
        </div>

        {/* Control buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className="p-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white"
            onClick={() => dispatch(decrement())}
          >
            −1
          </button>
          <button
            className="p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
            onClick={() => dispatch(increment())}
          >
            +1
          </button>
        </div>

        {/* Undo Button */}
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-black rounded-xl"
            onClick={() => dispatch(undo())}
            disabled={history.length === 0}
          >
            Undo
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-white text-opacity-50 text-sm">
        React & Redux
      </div>
    </div>
  );
}
