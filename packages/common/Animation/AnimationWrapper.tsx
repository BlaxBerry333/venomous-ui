import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';
import { memo } from 'react';
import type { AnimationWrapperProps } from './AnimationWrapper.types';

const AnimationWrapper: AnimationWrapperProps = memo(({ children, noAnimation }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ scale: noAnimation ? 1 : 1.05 }}
        whileTap={{ scale: noAnimation ? 1 : 1.15 }}
        transition={{ duration: 0.1 }}
        style={{ lineHeight: 0 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
});

export default AnimationWrapper;
