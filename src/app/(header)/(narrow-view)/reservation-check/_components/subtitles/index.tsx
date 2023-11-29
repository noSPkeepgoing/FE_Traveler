import Text from '@/components/atoms/text';
import React from 'react';
import styles from './subtitles.module.scss';

function Subtitles({ text }: { text: string }) {
  return (
    <header className={styles.subtitles}>
      <Text fontSize="sm" fontWeight="semibold" color="highlight">
        {text}
      </Text>
    </header>
  );
}

export default Subtitles;
