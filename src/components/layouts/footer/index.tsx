import React from 'react';
import styles from './footer.module.scss';
import Text from '@/components/atoms/text';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerChild}>
            <Text color="black" fontSize="xl" fontWeight="thin">
              Traveler
            </Text>
          </div>
          <div className={styles.footerChild}>
            <Text color="sub" fontSize="xs-5" fontWeight="normal">
              Copyright
            </Text>
          </div>
          <div className={styles.footerChild}>
            <Text color="black" fontSize="xs-4" fontWeight="bold">
              © Traveler Corp.
            </Text>
          </div>
          <div className={styles.footerChild}>
            <Text color="sub" fontSize="xs-4" fontWeight="normal">
              All Rights Reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
