
import React from 'react';

const QuotedText = ({ 
  text ='', className=''
}) => {

  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`}>
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
        {/* Quote mark decoration */}
        <div className="absolute top-4 left-6">
          <svg 
            className="w-12 h-12 text-blue-300 opacity-60" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="text-lg font-medium text-gray-800 leading-relaxed pl-16 pr-4 italic">
          {text}
        </blockquote>

        {/* Decorative element */}
        <div className="absolute bottom-4 right-6 opacity-20">
          <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default QuotedText;
