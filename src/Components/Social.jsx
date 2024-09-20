// Social.jsx

import React from 'react';

const Social = ({ Icon, url }) => (
  <div
    onClick={() => {
      if (url) {
        window.open(url,);  // Open the URL in a new tab
      }
    }}
    className="bg-blue-500 h-[50px] w-[50px] rounded-full flex justify-center items-center hover:bg-blue-600 cursor-pointer hover:scale-[1.2] transition-transform"
  >
    {Icon && <Icon size={30} />}  {/* Render the icon */}
  </div>
);

export default Social;
