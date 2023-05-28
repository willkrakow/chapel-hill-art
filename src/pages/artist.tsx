import { useLoaderData } from "react-router-dom";
import { IArtist } from '../types/artists';
import H2 from "../components/common/h2";
import Button from "../components/common/button";
import H3 from "../components/common/h3";
import P from "../components/common/p";

const Artist = () => {
    const {data} = useLoaderData() as {data: IArtist}

    if (!data) {
        return <div>Artist not found</div>
    }

    return (
      <div>
        <H2>
          {data.first_name} {data.last_name}
        </H2>
        <H3>{data.company}</H3>
        <a href={data.website}>
          <Button>
            Website
          </Button>
        </a>
        <P>{data.bio}</P>
      </div>
    );
}

export default Artist