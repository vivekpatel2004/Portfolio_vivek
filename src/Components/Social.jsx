// Social.jsx

import React from "react";

const Social = ({ Icon, url }) => (
  <div
    onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}
    className="bg-blue-500 h-[50px] w-[50px] rounded-full flex justify-center items-center hover:bg-blue-600 cursor-pointer hover:scale-[1.2] transition-transform"
  >
    <Icon size={30} color="white" />
  </div>
);

export default Social;
