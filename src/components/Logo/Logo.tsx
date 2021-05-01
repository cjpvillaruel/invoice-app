import logo from 'assets/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logoContainer}>
    <img alt="invoice" src={logo} className={styles.logo} />
    <div className={styles.logoShadow}>
    </div>
  </div>
);

export default Logo;
