import { pxToRem } from '@/utils/pxToRem';
import { TSkeleton } from './skeletonType';
import styles from './skeleton.module.scss';

/**
 * @params width는 px 단위로 작성한다.
 * @params height은 px 단위로 작성한다.
 * @params borderRadius는 px 단위로 작성한다.
 */
function Skeleton({ width, height, borderRadius }: TSkeleton) {
  return (
    <div
      style={{
        width: `${pxToRem(width)}rem`,
        height: `${pxToRem(height)}rem`,
        borderRadius: `${pxToRem(borderRadius)}rem`,
      }}
      className={styles.skeleton}></div>
  );
}

export default Skeleton;
