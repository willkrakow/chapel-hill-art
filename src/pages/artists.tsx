import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { IArtist } from '../types/artists';
import { ListItem } from '../components/common/listItem';
import List from '../components/common/list';
import styled from '@emotion/styled';
interface ArtistLoaderData {
  data: IArtist[];
}

const Layout = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 100vh;
`

const Sidebar = styled.aside`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  flex-basis: 100px;
  flex: 1 0 100px;
  margin-top: 20px;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-basis: 350px;
  flex: 2 0 350px;
  height: 100%;
`
const Artists = () => {
  const artists = useLoaderData() as ArtistLoaderData;
  const params = useParams<{slug: string}>();
  
    return (
      <Layout>
        <Sidebar>
          <List>
            {artists.data.map((artist) => (
                <Link key={artist.slug} to={`/artists/${artist.slug}`}>
                  <ListItem className={params.slug === artist.slug ? "active" : undefined} key={artist.slug}>
                  {artist.first_name} {artist.last_name}
                  </ListItem>
                </Link>
            ))}
          </List>
        </Sidebar>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    );
}

export default Artists