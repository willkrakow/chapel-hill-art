import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Murals",
    ids: ["root"],
    path: "/",
    exact: true,
  },
  {
    name: "Artists",
    ids: ["artists", "artist"],
    path: "/artists",
    exact: false,
  },
  {
    name: "Map",
    ids: ["map"],
    path: "/map",
    exact: false,
  },
];

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(245, 245, 245, 0.2);
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 100;
  position: absolute;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Bodoni Moda', serif;
  grid-column: span 4;
  text-decoration: none;
  color: #333;
  &:hover {
    background-color: #ddd;
  }
  &.active {
    background-color: #333;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      {navItems.map((item) => (
        <NavItem className={({isActive}) => {
          if (isActive){
            console.log(item);
            return "active"
          }
        }} to={item.path}>        
            {item.name}
        </NavItem>
      ))}
    </StyledNav>
  );
};


export default Navbar;