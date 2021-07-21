import React from "react";
import { About } from "./About";
import { HListing } from "./HListing";
import { LPHead } from "./LPHead";
import { Navigation } from "./Navigation";
export const MainPage = () => {
  return (
    <>
      <Navigation />
      <LPHead />
      <HListing />
      <About />
    </>
  );
};
