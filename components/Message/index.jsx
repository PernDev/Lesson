import React from "react";
import ComponentA from "../ComponentA";
import ComponentB from "../ComponentB";
import ComponentC from "../ComponentC";

const Index = () => {
  return (
    <>
      <div className="py-6 h-screen">
        <div className="flex border border-grey rounded shadow-lg h-full">
          <div>
            <ComponentA />
            <ComponentB />
          </div>
          <ComponentC />
        </div>
      </div>
    </>
  );
};

export default Index;
