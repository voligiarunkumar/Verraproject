import { mount } from "vtrace/VtraceApp";
import React, { useRef, useEffect } from "react";
const VtraceData= ({onSignIn}) => {
  const ref = useRef(null);
  useEffect(() => {
   mount(ref.current);
   console.log('this is vtrace data');
    
  },[]);
  return <div ref={ref}></div>;
};
export default VtraceData;
