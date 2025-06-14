import { AnimatePresence, motion } from 'motion/react';
import { memo } from 'react';

import type { CollapseComponentType } from './index.types';
import useCollapse from './useCollapse';

const Collapse: CollapseComponentType = memo(
  ({ children, renderTrigger, defaultIsCollapsed = true, style }) => {
    const { isCollapsed, toggleCollapsed } = useCollapse(defaultIsCollapsed);

    return (
      <>
        {renderTrigger({ isCollapsed, toggleCollapsed })}

        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              className="VenomousUI-Collapse"
              key="collapse-content"
              initial={{
                opacity: defaultIsCollapsed ? 0 : 1,
                height: defaultIsCollapsed ? 0 : 'auto',
                y: defaultIsCollapsed ? -8 : 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.05,
                },
              }}
              style={{
                overflow: 'hidden',
                willChange: 'opacity, transform, height',
                width: '100%',
                lineBreak: 'anywhere',
                ...style,
              }}
            >
              <div className="VenomousUI-Collapse-Content">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  },
);

Collapse.displayName = 'Collapse';
export default Collapse;
