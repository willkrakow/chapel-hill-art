import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Murals from "../pages/murals";
import Artists from "../pages/artists";
import Artist from "../pages/artist";
import MuralsService from '../services/Murals';
import ArtistsService from '../services/Artists';
import Admin from "../components/admin";
import AdminMurals from "../components/admin/murals";
import AdminArtists from "../components/admin/artists";
import styled from '@emotion/styled';
import About from "../pages/about";
import Map from "../pages/map";
import Renders from "../pages/renders";

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

const Layout = () => {
    return (
      <Container>
          <Navbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
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
      {
        path: "/renders",
        id: "renders",
        element: <Renders />
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            index: true,
            element: <h1>Admin Home</h1>,
          },
          {
            path: "/admin/murals",
            element: <AdminMurals />,
            loader: MuralsService.getAll,
            action: async ({ request }) => {
              const formData = await request.formData();
              const data = Object.fromEntries(formData.entries());
              return MuralsService.create(data as any);
            },
          },
          {
            path: "/admin/artists",
            element: <AdminArtists />,
            loader: ArtistsService.getAll,
            action: async ({ request }) => {
              const formData = await request.formData();
              const data = Object.fromEntries(formData.entries());
              return ArtistsService.create(data as any);
            },
          },
          {
            path: "/admin/artist-bios",
            element: <h1>Artist Bios</h1>,
            action: async ({ request }) => {
              const formData = await request.formData();
              const data = Object.fromEntries(formData.entries());
              return ArtistsService.createBio(data as any);
            },
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;