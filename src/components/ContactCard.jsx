import React from 'react';

const ContactCard = (props) => {
  const { name, email } = props.contact;
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {/* left div */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg font-semibold">
          SY
        </div>
        <div>
          <h2 className="text-gray-900 font-medium text-base">{name}</h2>
          <p className="text-gray-500 text-sm truncate max-w-[200px]">{email}</p>
        </div>
      </div>
     
     {/* right div */}
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-500 transition-colors"
          title="View details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>

        <button
          className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
          title="Delete user"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
        
      </div>
    </div>

  );
};

export default ContactCard;