import React from "react";

export const Message = ({ className, children }) => {
  return <div className={`ui message ${className}`}>{children}</div>;
};
