import MuiButton from '@mui/material/Button';
import { memo, useMemo, type JSX } from 'react';
import { Icon } from '../Icon';
import type { ButtonComponentType } from './Button.types';

const Button: ButtonComponentType = memo(
  ({
    text,
    loading,
    disabled,
    isGhost,
    isCircle,
    icon,
    iconWidth,
    iconPosition = undefined,
    bgcolor,
    onClick,
    sx,
    ...props
  }) => {
    const ButtonIcon = useMemo<JSX.Element | null>(() => {
      return icon ? <Icon icon={icon} width={iconWidth} /> : null;
    }, [icon, iconWidth]);

    return (
      <MuiButton
        variant={isGhost ? 'text' : 'contained'}
        loading={loading}
        disabled={disabled}
        startIcon={iconPosition === 'start' && ButtonIcon}
        endIcon={iconPosition === 'end' && ButtonIcon}
        sx={{
          minWidth: 'unset',
          minHeight: '38px',
          width: isCircle ? '40px' : 'unset',
          height: isCircle ? '40px' : 'unset',
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: isCircle ? '50%' : '8px',
          padding: isCircle ? '6px' : 'auto',
          cursor: loading ? 'wait !important' : disabled ? 'not-allowed !important' : 'pointer',
          pointerEvents: 'auto !important' as 'auto',
          transition: 'background-color 0s, background-image 0s',
          backgroundColor: bgcolor,
          '& .MuiButton-startIcon': { svg: { color: 'inherit' } },
          '& .MuiButton-endIcon': { svg: { color: 'inherit' } },
          ...sx,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(e);
        }}
        {...props}
      >
        {!iconPosition && ButtonIcon}
        {!isCircle && text}
      </MuiButton>
    );
  },
);

Button.displayName = 'Button';
export default Button;
