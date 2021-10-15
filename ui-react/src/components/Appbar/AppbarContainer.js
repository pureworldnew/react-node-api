import React, { useEffect, useState } from "react";
import AppbarView from "./AppbarView";

export function AppbarContainer() {
  const [var1, setVar1] = useState("Complex Shared");
  useEffect(() => {
    // Perform all side-effects and business logic in this component.
    // Also event handlers can go here if suitable.
    setVar1("App Bar");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <AppbarView data={var1} />
    </>
  );
}
