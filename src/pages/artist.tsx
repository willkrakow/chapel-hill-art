import { useLoaderData } from "react-router-dom";
import { IArtist } from '../types/artists';
import H2 from "../components/common/h2";
import P from "../components/common/p";
import H4 from "../components/common/h4";
import styled from "@emotion/styled";


const Header = styled.header`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Artist = () => {
    const {data} = useLoaderData() as {data: IArtist}

    if (!data) {
        return <div>Artist not found</div>
    }

    return (
      <div>
        <Header>
          <H2>
            {data.first_name} {data.last_name}
          </H2>
          <a href={data.website}>
            <H4>{data.company}</H4>
          </a>
        </Header>
        <P>{data.bio}</P>
      </div>
    );
}

export default Artist