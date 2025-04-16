import MuiButton from '@mui/material/Button';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { memo, useMemo, type JSX } from 'react';
import { Icon } from '../Icon';
import type { ButtonComponentType, ButtonProps } from './Button.types';

const Button: ButtonComponentType = memo(
  ({
    text,
    loading,
    disabled,
    isOutlined,
    isGhost,
    isCircle,
    icon,
    iconWidth = 20,
    iconPosition = undefined,
    color = 'primary',
    onClick,
    sx,
    ...props
  }) => {
    const { buttonColors } = useButton({ color, isGhost, isOutlined });

    const ButtonIcon = useMemo<JSX.Element | null>(() => {
      return icon ? <Icon icon={icon} width={iconWidth} /> : null;
    }, [icon, iconWidth]);

    return (
      <MuiButton
        id="VenomousUI-Button"
        variant={isGhost ? 'text' : isOutlined ? 'outlined' : 'contained'}
        loading={loading}
        disabled={disabled}
        startIcon={iconPosition === 'start' && ButtonIcon}
        endIcon={iconPosition === 'end' && ButtonIcon}
        sx={{
          minWidth: '40px',
          minHeight: '40px',
          width: isCircle ? '40px' : 'unset',
          height: isCircle ? '40px' : 'unset',
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: isCircle ? '50%' : '8px',
          p: isCircle ? '6px' : 'auto',
          px: isCircle ? '0' : '16px !important',
          cursor: loading ? 'wait !important' : disabled ? 'not-allowed !important' : 'pointer',
          pointerEvents: 'auto !important' as 'auto',
          transition: 'background-color 0s, background-image 0s',
          '& .MuiButton-startIcon': { svg: { color: 'inherit', mr: '8px' } },
          '& .MuiButton-endIcon': { svg: { color: 'inherit', ml: '8px' } },
          ...buttonColors,
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

function useButton({ color = 'primary', isGhost, isOutlined }: ButtonProps) {
  const theme = useMuiTheme();

  const buttonColors = useMemo(() => {
    const isDarkMode = theme.palette.mode === 'dark';
    const colorMap: Record<NonNullable<ButtonProps['color']>, string> = {
      auto: theme.palette.text.primary,
      grey: theme.palette.text.secondary,
      primary: theme.palette.primary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
    };

    const mainColor = color in colorMap ? colorMap[color] : 'inherit';
    const textColor =
      isDarkMode && ['auto', 'grey'].includes(color) ? 'black' : theme.palette.primary.contrastText;

    return {
      backgroundColor: isGhost || isOutlined ? 'transparent' : mainColor,
      color: isGhost || isOutlined ? mainColor : textColor,
      borderColor: isOutlined ? mainColor : 'transparent',
    };
  }, [theme, color, isGhost, isOutlined]);

  return { buttonColors };
}
