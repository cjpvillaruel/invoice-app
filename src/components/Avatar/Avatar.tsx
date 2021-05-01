import styles from './Avatar.module.scss';
import avatar from 'assets/image-avatar.jpg';

const Avatar = () => (
  <img alt="invoice" src={avatar} className={styles.avatar} />
);

export default Avatar;
