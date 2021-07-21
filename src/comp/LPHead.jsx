import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import banner from "../img/Skyline.png";
const Styles = styled.div`
  .landing-page-img {
    width: 100%;
    margin-top: 5vh;
  }
  @media screen and (max-width:500px) {
    .landing-page-img{
        margin-top:7vh;
    }
`;
export const LPHead = () => {
  return (
    <Styles>
      <Container>
        <Image className="landing-page-img" src={banner} />
      </Container>
    </Styles>
  );
};
