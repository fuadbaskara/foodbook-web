import React from "react";
import { Card, CardImg } from "reactstrap";

const Profile = () => (
  <Card className="containerProfile">
    <CardImg
      className="rounded-circle"
      top
      width="25%"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="User Avatar Image"
    />
  </Card>
);
export default Profile;
