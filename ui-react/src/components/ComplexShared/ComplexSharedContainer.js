import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ComplexSharedView from "./ComplexSharedView";
import { setSearchCompany } from "redux/actions/companyAction";

export function ComplexSharedContainer({ children }) {
  const dispatch = useDispatch();
  const [var1, setVar1] = useState("Complex Shared");
  const loading = useSelector((state) => state.schedules.loading);

  useEffect(() => {
    // Perform all side-effects and business logic in this component.
    // Also event handlers can go here if suitable.
    setVar1("Complex Shared Component");
    return () => {
      console.log("cleanup");
    };
  }, []);

  const searchCompany = (val) => {
    dispatch(setSearchCompany(val));
  };

  return (
    <>
      <ComplexSharedView
        data={var1}
        children={children}
        searchCompany={searchCompany}
      />
    </>
  );
}
