import SideBar from "components/Sidebar";
import { Container } from "react-bootstrap";
import styles from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <div>
    <SideBar />
    <div className={styles.pageContent}>
      <Container>
        {children}
      </Container>
    </div>
  </div>
);

export default Layout;
