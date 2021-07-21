import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import pic from "../img/picArt.png";

const Styles = styled.div`
.about-cont{
    margin-top:5vh;
    margin-bottom:10vh;
    border-radius: 57px;
    box-shadow:  32px 32px 64px #b8b8b8,
                 -32px -32px 64px #ffffff;
}
.about-img{
    display:block;
    margin-top:10vh;
    margin-right:auto;
    margin-left:auto;
    width:35%;
}
.about-header{
    text-align:center;
}
.about-content{
    text-align:center;
    padding:20px;
}

@media screen and (max-width:500px) {
    .about-img{
        width:100%;
    }
`;

export const About = () => {
  return (
    <Styles>
      <Container className="about-cont">
        <Image src={pic} className="about-img" />
        <h3 className="about-header">About Us!</h3>
        <p className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          congue nisi vitae suscipit tellus. Netus et malesuada fames ac turpis.
          Sed arcu non odio euismod. Eget mi proin sed libero enim sed faucibus.
          Mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          pulvinar. Lacus sed viverra tellus in hac habitasse platea. Mauris
          pharetra et ultrices neque ornare aenean euismod elementum. In hac
          habitasse platea dictumst vestibulum. Neque laoreet suspendisse
          interdum consectetur. Velit laoreet id donec ultrices tincidunt. Leo a
          diam sollicitudin tempor id eu. Sagittis orci a scelerisque purus
          semper eget.
        </p>
      </Container>
    </Styles>
  );
};
