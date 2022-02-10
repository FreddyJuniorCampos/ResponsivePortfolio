import React from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";

import { Image } from "@material-tailwind/react";

const CredentialCard = ({ credentialImg, credentialTitle, credentialText }) => {
  return (
    <Card>
      <Image
        src={credentialImg}
        rounded={false}
        raised={true}
        width={"400px"}
        alt="Raised Image"
      />
      <CardBody>
        <H6 color="gray">{credentialTitle}</H6>
        <Paragraph color="gray">{credentialText}</Paragraph>
      </CardBody>
    </Card>
  );
};

export default CredentialCard;
