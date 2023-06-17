import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { IMuralJoined } from '../types/murals';
import H5 from '../components/common/h5';
import Address from '../components/common/address';
import H4 from '../components/common/h4';
import { HopeModel } from '../components/models/hope';
import { TOPOModel } from '../components/models/topo';
import { FloydCouncilModel } from '../components/models/floydcouncil';
import { AATraillBlazersModel } from '../components/models/aatrlblzrs';
import { GourmetKingdomModel } from '../components/models/gourmet';
import Dimensions from '../components/dimensions';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.section`
  display: grid;
  overflow: hidden;
  gap: 10px;
  grid-template-rows: 50vh 20vh;
  width: fit-content;
  max-width: 100%;
  margin: 10px auto;
  padding: 60px 0;
`;

const ImageContainer = styled.div`
    grid-row: span 1;
    overflow: hidden;
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

interface MuralsLoaderData {
  data: IMuralJoined[];
}

const renderMuralMapping = {
  6: HopeModel,
  10: TOPOModel,
  11: FloydCouncilModel,
  12: AATraillBlazersModel,
  1: GourmetKingdomModel,
}

const Murals = () => {
  const murals = useLoaderData() as MuralsLoaderData;

  const withRenders = murals.data.map((mural) => {
    const RenderComponent = renderMuralMapping[mural.id as keyof typeof renderMuralMapping];
    return {
      ...mural,
      ThreeDModel: RenderComponent as React.FC | undefined,
    }
  });
    return (
      <Grid>
        {withRenders.map((mural) => (
          <Section key={mural.id}>
            <ImageContainer>
              <Dimensions mural={mural} />
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

export default Murals