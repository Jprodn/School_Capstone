import React from "react"; 
import { useEffect, useState } from "react";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);
  
    // Show Button After Scrolling Down More than 500px
    const toggleVisible = () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      // Listen for Scrolling Event
      window.addEventListener("scroll", toggleVisible, false);
      return () => {
        window.removeEventListener("scroll", toggleVisible, false);
      }
    }, []);
  
    // Get Back Top when Clicked
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <button
        id="back-to-top"
        className={visible ? "toTop" : "toHide"}
        onClick={handleScroll}
        title="Go To Top"
      >
        <img src="chevron.png" alt="" className="chevron" />
      </button>
    );
  };

  export default ScrollTop