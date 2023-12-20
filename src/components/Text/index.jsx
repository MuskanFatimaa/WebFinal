import React from "react";

const sizeClasses = {
  txtInterSemiBold16WhiteA70066: "font-inter font-semibold",
  txtInterMedium32Gray50: "font-inter font-medium",
  txtInterSemiBold16Bluegray900: "font-inter font-semibold",
  txtInterSemiBold65Black90002: "font-inter font-semibold",
  txtInterSemiBold65WhiteA700e5: "font-inter font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterSemiBold32Bluegray70001: "font-inter font-semibold",
  txtInterBold32: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold32Gray400: "font-inter font-semibold",
  txtInterSemiBold65: "font-inter font-semibold",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterMedium30: "font-inter font-medium",
  txtInterSemiBold22: "font-inter font-semibold",
  txtInterSemiBold90: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium32Bluegray5001: "font-inter font-medium",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
