import Text from '@/components/atoms/text';
import React from 'react';
import { TTitle } from './detailTitleType';

function DetailTitle({ title }: TTitle) {
  return (
    <Text fontSize="md" fontWeight="semibold">
      {title}
    </Text>
  );
}

export default DetailTitle;
