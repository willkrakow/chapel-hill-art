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
  left: 0;
  top: 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.h5};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: ${(props) => props.theme.fonts.heading};
  grid-column: span 4;
  text-decoration: none;
  letter-spacing: 2px;
  &:hover {
    background: linear-gradient(
      to right,
      hsl(0, 100%, 50%, 0.9),
      hsl(30, 100%, 50%, 0.9),
      hsl(60, 100%, 50%, 0.9),
      hsl(90, 100%, 40%, 0.9),
      hsl(120, 100%, 40%, 0.9),
      hsl(150, 100%, 60%, 0.9),
      hsl(180, 100%, 60%, 0.9),
      hsl(210, 100%, 70%, 0.9),
      hsl(240, 100%, 70%, 0.9),
      hsl(270, 100%, 70%, 1),
      hsl(300, 100%, 70%, 1),
      hsl(330, 100%, 60%, 1),
      hsl(360, 100%, 60%, 0.9)
    );
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    color: transparent;
    -webkit-background-clip: text;
  }
  &.active {
    background: linear-gradient(
      to right,
      hsl(0, 100%, 50%, 0.9),
      hsl(30, 100%, 50%, 0.9),
      hsl(60, 100%, 50%, 0.9),
      hsl(90, 100%, 40%, 0.9),
      hsl(120, 100%, 40%, 0.9),
      hsl(150, 100%, 60%, 0.9),
      hsl(180, 100%, 60%, 0.9),
      hsl(210, 100%, 70%, 0.9),
      hsl(240, 100%, 70%, 0.9),
      hsl(270, 100%, 70%, 1),
      hsl(300, 100%, 70%, 1),
      hsl(330, 100%, 60%, 1),
      hsl(360, 100%, 60%, 0.9)
    );
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    color: transparent;
    -webkit-background-clip: text;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      {navItems.map((item) => (
        <NavItem key={item.path} className={({isActive}) => {
          if (isActive){
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