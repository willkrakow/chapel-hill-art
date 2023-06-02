import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { IMuralJoined } from '../types/murals';
import H5 from '../components/common/h5';
import Address from '../components/common/address';
import H4 from '../components/common/h4';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 120px);
  height: calc(100svh - 120px);
  overflow-y: scroll;
  max-width: 1200px;
  margin: 0 auto;
  scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  display: grid;
  gap: 10px;
  grid-template-rows: minmax(100px, 500px);
  max-height: calc(100vh - 120px);
  min-height: calc(100vh - 120px);
  max-height: calc(100svh - 120px);
  min-height: calc(100svh - 120px);
  width: fit-content;
  max-width: 100%;
  margin: 10px auto;
  padding: 60px 0;
  scroll-snap-align: start;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const ImageContainer = styled.div`
    max-width: 100%;
    grid-row: span 1;
    display: flex;
    justify-content: center;
    box-shadow: ${props => props.theme.shadows.large};
`

const TextContainer = styled.div`
    grid-row: span 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`

const MuralDetails = styled.div`

`

const AddressContainer = styled.div`
  flex: 1 0 150px;
`;

const Image = styled.img`
max-width: 100%;
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
              <Image srcSet={createSrcSet(mural.image_url)} src={`${mural.image_url}`} alt={mural.title} />
            </ImageContainer>
            <TextContainer>
              <MuralDetails>
                <H4>{mural.title}</H4>
                {mural.artist_slug && (
                  <Link to={`/artists/${mural.artist_slug}`}>
                    <H5>
                      {mural.artist_first_name} {mural.artist_last_name}
                    </H5>
                  </Link>
                )}
              </MuralDetails>
              <AddressContainer>
                <Address>
                  {mural.address1}
                  <br />
                  {mural.address2 || ""}
                  {mural.city}, {mural.state} {mural.zip}
                </Address>
              </AddressContainer>
            </TextContainer>
          </Section>
        ))}
      </Grid>
    );
}

function createSrcSet(imageUrl: string){
  const imageWidths = [320, 480, 800, 1200, 1600];
  const srcSet = imageWidths.map((width) => {
    return `${imageUrl.replace('dynamic', `w=${width},sharpen=3 ${width}w`)}`;
  });

  return srcSet.join(', ');
}

export default Murals