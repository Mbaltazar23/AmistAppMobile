import React, { useState } from "react";

const HomeViewModel = () => {
  const [values, setValues] = useState({
    dni: "",
    password: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  return {
    ...values,
    onChange
  };
};

export default HomeViewModel;
