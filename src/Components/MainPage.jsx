import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const MainPage = () => {
  return (
    <main>
      <div className="pageWrapper d-flex">
        <aside className="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Navbar />
          <Container className="ps-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
      <div className="footer">
        <p className="mt-3">Derechos reservados </p></div>
    </main>
  );
};

export default MainPage;
