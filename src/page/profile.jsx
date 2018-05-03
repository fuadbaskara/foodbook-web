import React from "react";
import { Card, CardImg } from "reactstrap";

const Profile = () => (
  <div className="margin-top-100">
    <Card className="containerProfile">
      <CardImg
        class="rounded-circle"
        top
        width="25%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
    </Card>
  </div>
);
export default Profile;
