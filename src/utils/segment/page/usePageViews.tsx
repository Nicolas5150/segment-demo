import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// https://medium.com/@jehanzaib_awan/how-to-integrate-segment-io-7f89575968fd
/**
 * A custom React hook that tracks page views using Segment.io.
 * It listens to changes in the location object provided by react-router-dom and calls window.analytics.page
 * with the current pathname whenever the location changes.
 */
export function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    window.analytics.page(location.pathname);
  }, [location]);
}
