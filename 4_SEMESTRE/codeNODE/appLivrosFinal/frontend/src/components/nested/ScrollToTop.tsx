import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * Scroll page to top
 *
 * @return {*} 
 */
const ScrollToTop = (): JSX.Element | null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;