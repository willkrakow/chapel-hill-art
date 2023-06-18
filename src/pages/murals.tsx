import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { IMuralJoined } from '../types/murals';
import H5 from '../components/common/h5';
import Address from '../components/common/address';
import H4 from '../components/common/h4';
import { HopeModel } from '../components/models/HopeGLTF';
import { FloydCouncilModel } from '../components/models/floydcouncil';
import { AATraillBlazersModel } from '../components/models/aatrlblzrs';
import { KingdomModel } from '../components/models/KingdomGLTF';
import Dimensions from '../components/dimensions';
import { TOPOModel } from '../components/models/TOPO';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 90svh;
  place-content: center;
`;

const ImageContainer = styled.div`
    overflow: hidden;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
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
  1: KingdomModel,
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