import { memo, useState } from 'react';
import { Button } from '../Button';
import type { PasswordComponentType } from './Form.types';
import Input from './Input';

const Password: PasswordComponentType = memo(({ isError, fullWidth, sx, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      fullWidth={fullWidth}
      isError={isError}
      endAdornment={
        <Button
          isCircle
          isGhost
          icon={showPassword ? 'solar:eye-closed-bold-duotone' : 'solar:eye-bold-duotone'}
          color={isError ? 'error' : 'primary'}
          sx={{ mr: -2 }}
          onClick={() => setShowPassword((s) => !s)}
        />
      }
      sx={{
        width: fullWidth ? '100%' : 'calc(200px - 40px) !important',
        ...sx,
      }}
      {...props}
    />
  );
});

Password.displayName = 'Password';
export default Password;
