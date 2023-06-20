import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Murals from "../pages/murals";
import Artists from "../pages/artists";
import Artist from "../pages/artist";
import MuralsService from '../services/Murals';
import ArtistsService from '../services/Artists';
import styled from '@emotion/styled';
import About from "../pages/about";
import Map from "../pages/map";
import P from "../components/common/p";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const ContentContainer = styled.div`
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
    padding: 0 10px;
`;

const FooterContainer = styled.footer`
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 20px;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
  return (
    <FooterContainer>
      <P><a href="https://williamkrakow.dev">Designed by William Krakow</a></P>
      <P>© {new Date().getFullYear()} William Krakow</P>
    </FooterContainer>
  )
}

const Layout = () => {
    return (
      <Container>
          <Navbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <Footer />
      </Container>
    );
}

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    id: "root",
    loader: MuralsService.getAll,
    children: [
      {
        index: true,
        id: "murals",
        element: <Murals />,
        loader: MuralsService.getAll,
      },
      {
        path: "/artists",
        id: "artists",
        element: <Artists />,
        loader: ArtistsService.getAll,
        children: [
          {
            path: "/artists/:slug",
            id: "artist",
            element: <Artist />,
            loader: async ({ params }) => {
              return ArtistsService.getBySlug(params.slug as string);
            },
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/map",
        id: "map",
        element: <Map />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;