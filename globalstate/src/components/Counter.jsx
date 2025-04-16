import React, { useReducer, useEffect } from 'react';
import { PlusIcon, MinusIcon, RotateCcwIcon } from 'lucide-react';
import './CounterAnimation.css';

const initialState = {
  count: 0,
  previousCount: 0,
  isAnimating: false
};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        previousCount: state.count,
        count: state.count + (action.payload || 1),
        isAnimating: true
      };
    case 'DECREMENT':
      return {
        ...state,
        previousCount: state.count,
        count: state.count - (action.payload || 1),
        isAnimating: true
      };
    case 'RESET':
      return {
        ...state,
        previousCount: state.count,
        count: 0,
        isAnimating: true
      };
    case 'ANIMATION_COMPLETE':
      return {
        ...state,
        isAnimating: false
      };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  useEffect(() => {
    if (state.isAnimating) {
      const timer = setTimeout(() => {
        dispatch({ type: 'ANIMATION_COMPLETE' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [state.isAnimating]);

  const animationClass = state.isAnimating 
    ? state.count > state.previousCount 
      ? 'animate-slide-up' 
      : state.count < state.previousCount 
        ? 'animate-slide-down' 
        : ''
    : '';

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Light streaks */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-20 blur-sm"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20 blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white border-opacity-20">
          {/* Glass effect inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-10 rounded-2xl"></div>
          
          {/* Card content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
              <h2 className="mx-4 text-3xl font-bold text-center bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Counter App
              </h2>
              <div className="w-16 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded-full"></div>
            </div>
            
            <p className="text-center text-white text-opacity-70 mb-8 font-light">
              React's useReducer hook
            </p>
            
            {/* Counter display with glow effect */}
            <div className="relative flex justify-center items-center my-10 overflow-hidden h-28">
              <div className={`text-8xl font-bold text-center transition-all duration-300 ${animationClass}`}>
                <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-glow">
                  {state.count}
                </span>
              </div>
            </div>
            
            {/* Control buttons */}
            <div className="flex justify-center gap-6 mb-8">
              <button 
                className="p-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-glow-pink btn-hover"
                onClick={() => dispatch({ type: 'DECREMENT' })}
              >
                <MinusIcon className="h-6 w-6" />
              </button>
              <button 
                className="p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-glow-purple btn-hover"
                onClick={() => dispatch({ type: 'RESET' })}
              >
                <RotateCcwIcon className="h-6 w-6" />
              </button>
              <button 
                className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-glow-blue btn-hover"
                onClick={() => dispatch({ type: 'INCREMENT' })}
              >
                <PlusIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-center gap-4">
              <button 
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl shadow-glow-pink btn-hover font-medium"
                onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}
              >
                -5
              </button>
              <button 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl shadow-glow-blue btn-hover font-medium"
                onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}
              >
                +5
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer credit */}
        <div className="mt-8 text-white text-opacity-50 text-sm">
          React & Tailwind CSS
        </div>
      </div>
    </div>
  );
}

export default Counter;