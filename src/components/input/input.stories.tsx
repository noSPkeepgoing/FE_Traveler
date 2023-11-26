import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Input은 사용자가 텍스트를 타이핑 할 수 있는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- variant값으로 "login" | "reservation" 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Input의 Variant를 설정합니다.',
      table: {
        type: { summary: 'InputVariant' },
        defaultValue: { summary: 'login' },
      },
      options: ['login', 'reservation'],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

export const loginInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '로그인, 회원가입에 사용되는 login input입니다.',
      },
    },
  },
  render: (args) => <Input variant="login" {...args}></Input>,
};

export const reservationInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '예약에 사용되는 reservation input입니다.',
      },
    },
  },
  render: (args) => <Input variant="reservation" {...args}></Input>,
};
