import { mount } from "shareddata/SharedData";
import React, { useRef, useEffect } from "react";
const SharedData= ({onSignIn}) => {
  const ref = useRef(null);
  useEffect(() => {
  mount(ref.current);
  console.log('this is share data');
  },[]);
  return <div ref={ref}></div>;
};
export default SharedData;
