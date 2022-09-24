import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  let container;
  if (typeof window !== "undefined") {
    container = document.querySelector("#myportal");
  }
  return mounted ? createPortal(children, container) : null;
};

export default Portal;
