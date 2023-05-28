import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { IMuralJoined } from '../types/murals';
import H5 from '../components/common/h5';
import Address from '../components/common/address';
import H3 from '../components/common/h3';

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 80px 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    max-width: 1200px;
    margin: 0 auto;
    scroll-snap-type: y mandatory;
    scroll-padding: 80px;
`;

const Section = styled.section`
  height: calc(100vh - 260px);
  scroll-padding-top: 20px;
  scroll-margin: 20px;
  max-width: 100%;
  scroll-snap-align: start;
  scroll-snap-type: y mandatory;
  padding: 40px 0;
  margin: 40px 0;
  display: grid;
  gap: 20px;
  grid-template-rows: 60vh 15vh;
`

const ImageContainer = styled.div`
    max-width: 100%;
    grid-row: span 1;
    display: flex;
    justify-content: center;
`

const TextContainer = styled.div`
    width: 100%;
    grid-row: span 1;
`

const Image = styled.img`
max-width: 100%;
max-height: 60vh;
object-fit: cover;
`;

interface MuralsLoaderData {
  data: IMuralJoined[];
}

const Murals = () => {
  const murals = useLoaderData() as MuralsLoaderData;
    return (
      <Grid>
        {murals.data.map((mural) => (
          <Section key={mural.id}>
            <ImageContainer key={mural.id}>
              <Image src={`${mural.image_url}?w=500`} alt={mural.title} />
            </ImageContainer>
            <TextContainer>
              <H3>{mural.title}</H3>
              <Address>
                {mural.address1}<br />
                {mural.address2 || ""}
                {mural.city}, {mural.state} {mural.zip}
              </Address>
              <H5></H5>
              {mural.artist_slug && (
                <Link to={`/artists/${mural.artist_slug}`}>
                  <H5>
                    {mural.artist_first_name} {mural.artist_last_name}
                  </H5>
                </Link>
              )}
            </TextContainer>
          </Section>
        ))}
      </Grid>
    );
}

export default Murals