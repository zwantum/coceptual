

// export default function TrustBar() {
//   const trustItems = [
//     { name: "Ranchi", color: "var(--magenta)" },
//     { name: "Jamshedpur", color: "var(--orange)" },
//     { name: "Bokaro", color: "var(--purple)" },
//     { name: "Gumla", color: "var(--magenta)" },
//     { name: "200+ Happy Clients", color: "var(--orange)" },
//     { name: "No Hidden Costs", color: "var(--purple)" },
//     { name: "On-Time Handover", color: "var(--magenta)" },
//     { name: "5-Year Warranty", color: "var(--orange)" },
//   ];

//   return (
//     <div className="trust-bar w-full">
//       <div className="max-w-[1180px] mx-auto px-6 md:px-8">
//         <div className="trust-inner flex items-center justify-center gap-6 md:gap-9 flex-wrap w-full">
//           {trustItems.map((item, index) => (
//             <div 
//               key={index} 
//               className="trust-item flex items-center gap-2 text-[0.84rem] font-medium text-[var(--text-muted)] whitespace-nowrap"
//             >
//               <div className="brand-dots flex items-center">
//                 <div 
//                   className="bdot" 
//                   style={{ 
//                     width: '7px', 
//                     height: '7px', 
//                     backgroundColor: item.color,
//                     borderRadius: '50%' 
//                   }}
//                 ></div>
//               </div>
//               {item.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function TrustBar() {
  const trustItems = [
    { name: "Ranchi", color: "var(--magenta)" },
    { name: "Jamshedpur", color: "var(--orange)" },
    { name: "Bokaro", color: "var(--purple)" },
    { name: "Gumla", color: "var(--magenta)" },
    { name: "200+ Happy Clients", color: "var(--orange)" },
    { name: "No Hidden Costs", color: "var(--purple)" },
    { name: "On-Time Handover", color: "var(--magenta)" },
    { name: "5-Year Warranty", color: "var(--orange)" },
  ];

  // Double the array to ensure a seamless loop
  const scrollItems = [...trustItems, ...trustItems];

  return (
    <div className="trust-bar w-full overflow-hidden bg-white py-4 border-y border-gray-100">
      <div className="flex w-max">
        {/* The animate-marquee class handles the movement */}
        <div className="flex animate-marquee gap-22 items-center px-6">
          {scrollItems.map((item, index) => (
            <div
              key={index}
              className="trust-item flex items-center gap-3 text-[0.9rem] font-medium text-gray-600 whitespace-nowrap"
            >
              <div
                className="bdot shadow-sm"
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: item.color,
                  borderRadius: '50%'
                }}
              ></div>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        /* Pause animation on hover for better UX */
        .trust-bar:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}