import { mount } from "shipping/ShippingApp";
import React, { useRef, useEffect } from "react";
const ShippingData= ({onSignIn}) => {
  const ref = useRef(null);
  useEffect(() => {
   mount(ref.current);
   console.log('this is shipping data');
    
  },[]);
  return <div ref={ref}></div>;
};
export default ShippingData;
