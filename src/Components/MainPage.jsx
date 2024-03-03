import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Sidebar from './Sidebar'
import Nav from './Navbar'


const MainPage = () => {
  return (
    <main>
      <div className="pageWrapper d-flex">
        <aside className="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Nav />
          <Container className="ps-4 wrapper" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
