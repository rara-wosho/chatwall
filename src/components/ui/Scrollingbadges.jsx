import React, { useEffect, useRef } from "react";

const Scrollingbadges = () => {
  const scrollerRef = useRef(null);
  const words = [
    "React",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Frontend",
    "UI/UX",
    "Responsive",
    "Performance",
    "Accessibility",
    "Design",
    "Mobile-First",
  ];

  // Duplicate words to create continuous scrolling effect
  const allWords = [...words, ...words];

  useEffect(() => {
    const scrollElement = scrollerRef.current;
    if (!scrollElement) return;

    // Animation for smooth scrolling
    const scroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    // <div className="w-full overflow-hidden bg-gray-50 py-8">
    //   {/* <div
    //     ref={scrollerRef}
    //     className="flex whitespace-nowrap overflow-x-hidden"
    //   >
    //     {allWords.map((word, index) => (
    //       <div
    //         key={index}
    //         className="inline-block mx-3 px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md transform transition-transform hover:scale-105"
    //       >
    //         {word}
    //       </div>
    //     ))}
    //   </div> */}
    // </div>
    <marquee direction="left" className="max-w-2xl pt-3">
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
        <p className="rounded-full px-4 border border-gray-400/75">
          confession
        </p>
        <p className="rounded-full px-4 border border-gray-400/75">message</p>
        <p className="rounded-full px-4 border border-gray-400/75">
          random thoughts
        </p>
        <p className="rounded-full px-4 border border-gray-400/75">
          kilig moments
        </p>
        <p className="rounded-full px-4 border border-gray-400/75">
          happy tots
        </p>
      </div>
    </marquee>
  );
};

export default Scrollingbadges;
