import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import img from "../AlbumImg.png";

const AlbumCard = (props) => {
  return (
    <div>
      <Card style={{ width: "200px" }}>
        <CardImg
          top
          style={{ width: "200px", height: "200px" }}
          src={img}
          alt="Album default"
        />
        <CardBody>
          <CardTitle tag="h5">{props.album}</CardTitle>
          <CardSubtitle>{props.artist}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default AlbumCard;
