import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '.';

const meta = {
  title: 'components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Skeleton은 각 페이지에서 공통적으로 사용될 Skeleton 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- width값으로 px 단위의 number을 할 수 있습니다.\n
- height값으로 px 단위의 number을 할 수 있습니다.\n
-borderRadius값으로 px 단위의 number을 할 수 있습니다.\n

`,
      },
    },
  },
  argTypes: {
    width: {
      description: 'Skeleton의 Width를 설정합니다.',
      table: {
        type: { summary: 'SkeletonWidth' },
        defaultValue: { summary: '100' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      description: 'Skeleton의 Height를 설정합니다.',
      table: {
        type: { summary: 'SkeletonHeight' },
        defaultValue: { summary: '100' },
      },
      control: {
        type: 'text',
      },
    },
    borderRadius: {
      description: 'Skeleton의 borderRadius를 설정합니다.',
      table: {
        type: { summary: 'SkeletonBorderRadius' },
        defaultValue: { summary: '10' },
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

export const defaultSkeleton: StoryObj<typeof Skeleton> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 default Skeleton입니다.',
      },
    },
  },
  render: (args) => <Skeleton {...args}></Skeleton>,
};
