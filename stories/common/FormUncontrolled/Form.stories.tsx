import {
  CheckboxUncontrolled,
  FormUncontrolled,
  FormUncontrolledAction,
  InputUncontrolled,
  NumberInputUncontrolled,
  OtpInputUncontrolled,
  PasswordUncontrolled,
  RadiosUncontrolled,
  SelectUncontrolled,
  SwitchUncontrolled,
  useForm,
  zodResolver,
} from '@packages/common';
import { createZodSchema } from '@packages/helpers';
import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';

const meta = {
  title: 'Common Components/FormUncontrolled/Form',
  component: FormUncontrolled,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    formInstance: {
      description: 'Return of `useForm()`',
      control: false,
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onSubmit: {
      description: 'onSubmit callback',
      table: {
        category: 'Events',
        type: { summary: '(formValue) => void' },
      },
    },
  },
  args: {
    formInstance: undefined,
    onSubmit: () => {},
  },
} satisfies Meta<typeof FormUncontrolled>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderSwitch() {
    type FormValue = {
      name: string;
      password: string;
      age: number;
      isAdmin: boolean;
      code: string;
      gender: 'male' | 'female';
      country: string;
    };

    const form = useForm<FormValue>({
      mode: 'all',
      defaultValues: {
        name: 'Michael Jackson',
        password: '',
        age: 50,
        isAdmin: true,
        code: '',
        gender: 'male',
        country: 'usa',
      },
    });

    return (
      <FormUncontrolled<FormValue>
        formInstance={form}
        onSubmit={(formValue) => console.log('formValue', formValue)}
      >
        <InputUncontrolled name="name" label="User Name" fullWidth />
        <PasswordUncontrolled name="password" label="Password" fullWidth />
        <NumberInputUncontrolled name="age" label="User Age" />
        <CheckboxUncontrolled name="isAdmin" label="Is Admin User" labelDirection="start" />
        <SwitchUncontrolled name="isAdmin" startLabel="Is Admin User" labelsDirection="column" />
        <OtpInputUncontrolled name="code" label="Code" />
        <RadiosUncontrolled
          name="gender"
          label="User Gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
        <SelectUncontrolled
          name="country"
          label="Country"
          options={[
            { label: 'USA (usa)', value: 'usa' },
            { label: 'Canada (ca)', value: 'ca' },
            { label: 'Mexico (mx)', value: 'mx' },
          ]}
        />

        <FormUncontrolledAction
          cancelButtonText="Cancel"
          submitButtonText="Submit"
          isSubmitting={false}
        />
      </FormUncontrolled>
    );
  },
};

export const UsingZodSchema: Story = {
  name: 'UsingZodSchema',
  render: function RenderSwitch() {
    type FormValue = {
      name: string;
      age: number;
    };

    const formSchemas = createZodSchema<FormValue>()(
      z.object({
        name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters'),
        age: z.number().min(0, 'Age must be positive').int('Age must be an integer'),
      }),
    );

    const form = useForm({
      mode: 'all',
      resolver: zodResolver(formSchemas),
      defaultValues: {
        name: 'Michael Jackson',
        age: 50,
      },
    });

    return (
      <FormUncontrolled<FormValue>
        formInstance={form}
        onSubmit={(formValue) => console.log('formValue', formValue)}
      >
        <InputUncontrolled name="name" label="User Name" />
        <NumberInputUncontrolled name="age" label="User Age" />

        <FormUncontrolledAction
          cancelButtonText="Cancel"
          submitButtonText="Submit"
          isSubmitting={false}
        />
      </FormUncontrolled>
    );
  },
};
