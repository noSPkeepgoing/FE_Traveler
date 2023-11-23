import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Button은 사용자가 한 번의 탭으로 작업을 수행하고 선택할 수 있는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- variant값으로 "default" | "secondary" |  "text" 중 하나를 선택할 수 있습니다.\n
- size값으로 "xl" | "lg" |  "md"  중 하나를 선택할 수 있습니다.\n
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Button의 Variant를 설정합니다.',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'secondary', 'text'],
      control: {
        type: 'radio',
      },
    },
    size: {
      description: 'Button의 size를 설정합니다.',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'lg' },
      },
      options: ['xl', 'lg', 'md'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      description: 'Button의 disabled를 설정합니다.',
      table: {
        type: { summary: 'ButtonDisabled' },
        defaultValue: { summary: false },
      },
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const defaultButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 default Button입니다.',
      },
    },
  },
  render: (args) => <Button variant="default" {...args}></Button>,
};

export const secondaryButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: '장바구니에 사용되는 secondary Button입니다.',
      },
    },
  },
  render: (args) => <Button variant="secondary" {...args}></Button>,
};
export const disabledButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'variant가 default일때 disabled Button입니다.',
      },
    },
  },
  render: (args) => <Button disabled={true} {...args}></Button>,
};
