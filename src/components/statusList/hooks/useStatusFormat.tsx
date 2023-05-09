import React from "react";

export const formatSsn = ({ ssn }: { ssn: string }) => {
  return `${ssn.substring(0, 6)}-${ssn.substring(6, 7)}`;
};

export const formatTime = ({ time }: { time: string }) => {
  console.log(time);
  return `${time.slice(8, 10)}:${time.slice(10, 12)}`;
};
