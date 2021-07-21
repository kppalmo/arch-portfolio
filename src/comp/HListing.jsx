import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import house1 from "../img/house1.png";
import house2 from "../img/house2.png";
import house3 from "../img/house3.png";
import house4 from "../img/house4.png";
import house5 from "../img/house5.png";
import house6 from "../img/house6.png";
import house7 from "../img/house7.png";
import house8 from "../img/house8.png";

const Styles = styled.div`
  .h-proj {
    margin-top: 5vh;
  }
  .h-img-sizing {
    margin-top: 2vh;
    width: 100%;
    border:solid;
    border-width:1px;
  }
  .h-img-sizing:hover {
    background-color: red;
  }
`;

export const HListing = () => {
  return (
    <Styles>
      <Container>
        <h3 className="h-proj">Projects</h3>
        <Row>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house1} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house2} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house3} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house4} />
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house5} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house6} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house7} />
          </Col>
          <Col lg={true}>
            <Image className="h-img-sizing" src={house8} />
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
