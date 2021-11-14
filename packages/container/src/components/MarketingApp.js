import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export const MarketingApp = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    mount(marketingRef.current);
  });

  return <div ref={marketingRef} />;
};
