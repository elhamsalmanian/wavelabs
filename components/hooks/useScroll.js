/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

//https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4

 import { useState, useEffect } from "react";

 export function useScroll() {
    let bodyBoundingClientRect = {topo:0, left:0};
    if (typeof window == 'object') {
        bodyBoundingClientRect = document.body.getBoundingClientRect();
    }
    // storing this to get the scroll direction
   const [lastScrollTop, setLastScrollTop] = useState(0);
    // the offset of the document.body
   const [bodyOffset, setBodyOffset] = useState( bodyBoundingClientRect );
    // the vertical direction
   const [scrollY, setScrollY] = useState(bodyOffset.top);
    // the horizontal direction
   const [scrollX, setScrollX] = useState(bodyOffset.left);
    // scroll direction would be either up or down
   const [scrollDirection, setScrollDirection] = useState();

   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
   };

   useEffect(() => {
     if (typeof window === 'object') {
        window.addEventListener("scroll", listener);
     }
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });

   return {
     scrollY,
     scrollX,
     scrollDirection
   };
 }