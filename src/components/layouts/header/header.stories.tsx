import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta = {
  title: 'layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Header는 각 페이지마다 사용자의 로그인 및 회원가입 유도와 더불어, 장바구니 및 예약내역 페이지로 이동할 수 있게 해주는 컴포넌트 입니다. ',
    docs: {
      description: {
        component: `
- border값으로 "false", "true", 중 하나를 선택할 수 있습니다.\n
- border값이 지정되지 않으면, "true"값이 적용되어 border를 사용하는 상태로 간주됩니다.\n
`,
      },
    },
  },
  argTypes: {
    border: {
      description: 'header의 border-bottom 유무를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      options: [false, true],
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const header: StoryObj<typeof Header> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Header입니다.',
      },
    },
  },
  render: (args) => <Header {...args} />,
};
