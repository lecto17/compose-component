import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function useApiCall(url) {
  const [data, setData] = useState();

  const callAPIFunc = async (url) => {
    await axios.get(url).then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    callAPIFunc(url);
    return data;
  }, []);
}
