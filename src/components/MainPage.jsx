import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const MainPage = () => {
  const token = window.sessionStorage.getItem('token');
  const location = useLocation();

  return (
    token ?
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
    : <Navigate to="/" replace state={{ from: location }} />
  );
};

export default MainPage;
