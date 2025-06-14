import { domAnimation, LazyMotion, motion } from 'motion/react';
import { memo } from 'react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import { Paper } from '../Paper';
import type { CollapseSidebarComponentType } from './index.types';
import useCollapse from './useCollapse';

const CollapsedSidebar: CollapseSidebarComponentType = memo(
  ({
    defaultIsCollapsed = false,
    headerHeight = 50,
    width = 220,
    collapsedWidth = 64,
    renderHeader,
    renderContent,
    sx,
    collapseButtonSx,
  }) => {
    const { isCollapsed, toggleCollapsed } = useCollapse(defaultIsCollapsed);

    return (
      <LazyMotion features={domAnimation}>
        <motion.nav
          className="VenomousUI-AdminSideNavMenu"
          initial={false}
          animate={{
            width: isCollapsed ? collapsedWidth : width,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          style={{
            height: '100svh',
          }}
        >
          <Paper isOutlined sx={{ height: 1, width: 1, ...sx }}>
            {/* Header */}
            <Flex
              component={'header'}
              row
              gap={0}
              height={headerHeight}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={'8px'}
              mb={'8px'}
            >
              {renderHeader?.({ isCollapsed, toggleCollapsed })}

              <Button
                icon={
                  isCollapsed ? 'solar:arrow-right-bold-duotone' : 'solar:arrow-left-bold-duotone'
                }
                onClick={toggleCollapsed}
                isSquare
                isGhost
                iconWidth={24}
                sx={{ transform: isCollapsed ? 'translateX(-4px)' : 'none', ...collapseButtonSx }}
              />
            </Flex>

            {/* Content */}
            {renderContent?.({ isCollapsed, toggleCollapsed })}
          </Paper>
        </motion.nav>
      </LazyMotion>
    );
  },
);

CollapsedSidebar.displayName = 'CollapsedSidebar';
export default CollapsedSidebar;
