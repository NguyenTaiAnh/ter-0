import React from "react";

 const useChangeOverflow = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};
export default useChangeOverflow