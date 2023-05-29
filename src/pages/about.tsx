import H3 from "../components/common/h3";
import P from "../components/common/p";
import styled from "@emotion/styled";

const Container = styled.section`
max-width: 40rem;
margin: 20px auto;
`
const About = () => (
    <Container>
    <H3>About</H3>
    <P>This site was created to showcase urban and mural art in Chapel Hill and Carrboro, NC, and to celebrate the artists of these towns.</P>
    </Container>
)

export default About;