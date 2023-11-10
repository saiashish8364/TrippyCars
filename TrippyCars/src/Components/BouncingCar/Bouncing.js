import * as React from "react";
const Bouncing = (props) => (
  <svg
    fill="#000000"
    width="250px"
    height="250px"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    id="car"
    style={{
      animation: "bounce 1s infinite",
    }}
    {...props}
  >
    <path d="M13.84,6.852,12.6,5.7,11.5,3.5a1.05,1.05,0,0,0-.9-.5H4.4a1.05,1.05,0,0,0-.9.5L2.4,5.7,1.16,6.852A.5.5,0,0,0,1,7.219V11.5a.5.5,0,0,0,.5.5h2c.2,0,.5-.2.5-.4V11h7v.5c0,.2.2.5.4.5h2.1a.5.5,0,0,0,.5-.5V7.219A.5.5,0,0,0,13.84,6.852ZM4.5,4h6l1,2h-8ZM5,8.6c0,.2-.3.4-.5.4H2.4C2.2,9,2,8.7,2,8.5V7.4c.1-.3.3-.5.6-.4l2,.4c.2,0,.4.3.4.5Zm8-.1c0,.2-.2.5-.4.5H10.5c-.2,0-.5-.2-.5-.4V7.9c0-.2.2-.5.4-.5l2-.4c.3-.1.5.1.6.4Z" />
    <style>
      {
        "\n        @keyframes bounce {\n            0%, 20%, 50%, 80%, 100% {\n                transform: translateY(0);\n            }\n            40% {\n                transform: translateY(-40px);\n            }\n            60% {\n                transform: translateY(-150px);\n            }\n        }\n\n        #car {\n            animation: bounce 1s infinite;\n        }\n    "
      }
    </style>
  </svg>
);
export default Bouncing;
