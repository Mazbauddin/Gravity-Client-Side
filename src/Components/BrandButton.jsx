// $(function () {
//   $(".brand-btn")
//     .on("mouseenter", function (e) {
//       var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//       $(this).find("span").css({ top: relY, left: relX });
//     })
//     .on("mouseout", function (e) {
//       var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//       $(this).find("span").css({ top: relY, left: relX });
//     });
//   $("[href=#]").click(function () {
//     return false;
//   });
// });

import { useEffect } from "react";

const BrandButton = () => {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const button = e.currentTarget;
      const span = button.querySelector("span");
      const parentOffset = button.getBoundingClientRect();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    };

    const handleMouseOut = (e) => {
      const button = e.currentTarget;
      const span = button.querySelector("span");
      const parentOffset = button.getBoundingClientRect();
      const relX = e.pageX - parentOffset.left;
      const relY = e.pageY - parentOffset.top;
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    };

    const buttons = document.querySelectorAll(".brand-btn");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseout", handleMouseOut);
    });

    const handleClick = (e) => {
      e.preventDefault();
    };

    const links = document.querySelectorAll('[href="#"]');
    links.forEach((link) => link.addEventListener("click", handleClick));

    // Cleanup event listeners on unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseout", handleMouseOut);
      });
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <button className="brand-btn">
      <span>Hover me!</span>
    </button>
  );
};

// const App = () => (
//   <div>
//     <BrandButton />
//     <a href="#">Link</a>
//   </div>
// );

export default BrandButton;
