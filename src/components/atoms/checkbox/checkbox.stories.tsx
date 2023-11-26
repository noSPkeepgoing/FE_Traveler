import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Checkbox는 사용자가 Set에서 하나 이상의 항목을 선택할 수 있도록 하는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- onChange 값으로 change 시 실행 될 함수를 할당할 수 있습니다.\n
- isChecked 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    onChange: {
      description: 'Checkbox의 onChange 함수를 할당합니다.',
    },
    isChecked: {
      description: 'Checkbox의 isChecked를 설정합니다.',
      table: {
        type: { summary: 'isChecked' },
        defaultValue: { summary: false },
      },
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const defaultCheckbox: StoryObj<typeof Checkbox> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 default Checkbox입니다.',
      },
    },
  },
  render: (args) => <Checkbox {...args} />,
};
