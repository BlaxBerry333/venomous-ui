import { memo } from 'react';
import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { Popover } from '../Popover';
import type { ExhibitCardActionButtonComponentType } from './Card.types';

const ExhibitCardActionButton: ExhibitCardActionButtonComponentType = memo(
  ({ icon = 'solar:menu-dots-line-duotone', menuItems }) => {
    return (
      <Popover
        renderPopoverHandler={({ isOpen, openPopover }) => (
          <Button
            isCircle
            isGhost
            color="auto"
            icon={icon}
            iconWidth={20}
            disabled={isOpen}
            onClick={openPopover}
          />
        )}
      >
        <Menu items={menuItems} renderItem={(item) => <MenuItem {...item} clickable />} />
      </Popover>
    );
  },
);

ExhibitCardActionButton.displayName = 'ExhibitCardActionButton';
export default ExhibitCardActionButton;
