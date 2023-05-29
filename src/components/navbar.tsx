import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Murals",
    ids: ["root"],
    path: "/",
    exact: true,
    type: "link",
  },
  {
    name: "Artists",
    ids: ["artists", "artist"],
    path: "/artists",
    exact: false,
    type: "link",
  },
  {
    name: "Map",
    ids: ["map"],
    path: "/map",
    exact: false,
    type: "link",
  },
  {
    name: "About",
    ids: ["about"],
    path: "/about",
    exact: true,
    type: "link",
  }
];

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.theme.colors.transparent};
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
  justify-content: space-evenly;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: ${props => props.theme.fontSizes.body};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: ${props => props.theme.fonts.body};
  grid-column: span 4;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      {navItems.map((item) => (
        <NavItem key={item.path} className={({isActive}) => {
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