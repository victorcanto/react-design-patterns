import { useEffect, useState } from "react";

interface LazyLoaderProps {
  show?: boolean;
  delay?: number;
  render?: React.ReactNode;
}

export const LazyLoader = (props: LazyLoaderProps) => {
  const { show = false, delay = 0, render = null } = props;
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!show) {
      setShowLoader(false);
      return;
    }
    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [show, delay]);

  return showLoader ? "Loading..." : render;
};
