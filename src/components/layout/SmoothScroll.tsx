import { ReactLenis } from 'lenis/react';
import type { FC, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
