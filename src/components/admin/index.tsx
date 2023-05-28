import styled from "@emotion/styled";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../common/button";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const AdminSidebar = styled.div`
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AdminContent = styled.div`
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Admin = () => {
    const navigate = useNavigate();
  return (
  <Container>
    <AdminSidebar>
        <Button onClick={() => navigate('/admin')}>
            Home
        </Button>
        <Button onClick={() => navigate('/admin/murals')}>
            Murals
        </Button>
        <Button onClick={() => navigate('/admin/artists')}>
            Artists
        </Button>
    </AdminSidebar>
    <AdminContent>
        <Outlet />
    </AdminContent>
  </Container>);
};

export default Admin;
