import { Checkbox } from "./Checkbox";
import { Number } from "./Number";
import { Password } from "./Password";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Switch } from "./Switch";
import { Text } from "./Text";
import { Textarea } from "./Textarea";

export const FormField = {
  Text,
  Number,
  Password,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Radio,
} as const;

export type * from "./Checkbox/Checkbox.types";
export type * from "./Number/Number.types";
export type * from "./Password/Password.types";
export type * from "./Radio/Radio.types";
export type * from "./Select/Select.types";
export type * from "./Switch/Switch.types";
export type * from "./Text/Text.types";
export type * from "./Textarea/Textarea.types";
