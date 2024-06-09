import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// https://medium.com/@jehanzaib_awan/how-to-integrate-segment-io-7f89575968fd
export function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    window.analytics.page(location.pathname);
  }, [location]);
}
