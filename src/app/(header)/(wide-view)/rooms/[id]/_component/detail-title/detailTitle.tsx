import Text from '@/components/atoms/text';
import React from 'react';

function DetailTitle({ title }: { title: string }) {
  return (
    <Text fontSize="md" fontWeight="semibold">
      {title}
    </Text>
  );
}

export default DetailTitle;
