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
  margin-top: 60px;
  padding-top: 20px;
  padding: 10px;
  flex-wrap: wrap;
`

const Sidebar = styled.aside`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex: 1 0 200px;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-basis: 400px;
  flex: 1 0 400px;

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