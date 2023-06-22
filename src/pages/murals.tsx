import styled from '@emotion/styled';
import { Link, useLoaderData } from 'react-router-dom';
import { IMuralJoined } from '../types/murals';
import H5 from '../components/common/h5';
import Address from '../components/common/address';
import H4 from '../components/common/h4';
import { HopeModel } from '../components/models/HOPE';
import { FloydCouncilModel } from '../components/models/FLYDCNCL';
import { TraillBlazersModel } from '../components/models/TRLBLZRS';
import { KingdomModel } from '../components/models/GRMTKNGDM';
import Mural from '../components/mural';
import { TOPOModel } from '../components/models/TOPO';
import { HandsModel } from '../components/models/HANDS';
import { BobsModel } from '../components/models/BOBS';
import { GreenFlowersModel } from '../components/models/GRNFLWRS';
import { LoveWinsModel } from '../components/models/LVWNS';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  max-width: 900px;
  margin: 30px auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 90svh;
  height: 100%;
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

const AddressContainer = styled.div`
  flex: 1 0 150px;
`;

interface MuralsLoaderData {
  data: IMuralJoined[];
}

const renderMuralMapping = {
  1: KingdomModel,
  6: HopeModel,
  7: HandsModel,
  8: GreenFlowersModel,
  10: TOPOModel,
  11: FloydCouncilModel,
  12: TraillBlazersModel,
  13: BobsModel,
  14: LoveWinsModel,
};

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
              <Mural mural={mural} />
            </ImageContainer>
            <TextContainer>
              <div>
                <H4>{mural.title}</H4>
                {mural.artist_slug && (
                  <Link to={`/artists/${mural.artist_slug}`}>
                    <H5>
                      {mural.artist_first_name} {mural.artist_last_name}
                    </H5>
                  </Link>
                )}
              </div>
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