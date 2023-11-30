import Text from '@/components/atoms/text';
import React from 'react';
import styles from './subtitles-content.module.scss';

function SubtitlesContent({ text }: { text: string }) {
  return (
    <header className={styles.subtitlesContent}>
      <Text fontSize="xs" fontWeight="semibold" color="primary">
        {text}
      </Text>
    </header>
  );
}

export default SubtitlesContent;
