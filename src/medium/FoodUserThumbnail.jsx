import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const MAX_LENGTH = 50;

// function FoodUserThumbnail({ props, dataId, index }) {
//   return (
//     <Col xs={11} sm={5} md={4} lg={3} className="card-full border-black">
//       <CardImg height="50%" src={dataId.photos[0][0]} alt="Food Image" />
//       <CardBody>
//         <CardTitle>{dataId.name}</CardTitle>
//         {dataId.overview.length > MAX_LENGTH ? (
//           <div>
//             {`${dataId.overview.substring(0, MAX_LENGTH)} `}
//             <Link to={`/food/${dataId.id}`} className="paragraph">
//               Read more...
//             </Link>
//           </div>
//         ) : (
//           <CardText>{dataId.overview}</CardText>
//         )}
//         <Button
//           className="width-full"
//           onClick={() => {
//             this.props.deleteFood(index);
//           }}
//         >
//           Details
//         </Button>
//       </CardBody>
//     </Col>
//   );
// }

const FoodUserThumbnail = props => (
  <div className="center">
    {props.userFoods.map((dataId, index) => (
      <Col
        xs={11}
        sm={5}
        md={4}
        lg={3}
        className="card-full border-black"
        key={index}
      >
        <CardImg height="50%" src={dataId.photos[0][0]} alt="Food Image" />
        <CardBody>
          <CardTitle>{dataId.name}</CardTitle>
          {dataId.overview.length > MAX_LENGTH ? (
            <div>
              {`${dataId.overview.substring(0, MAX_LENGTH)} `}
              <Link to={`/food/${dataId.id}`} className="paragraph">
                Read more...
              </Link>
            </div>
          ) : (
            <CardText>{dataId.overview}</CardText>
          )}
          <Button
            className="width-full"
            onClick={() => {
              props.deleteFood(index);
            }}
          >
            Delete
          </Button>
        </CardBody>
      </Col>
    ))}
  </div>
);

export default FoodUserThumbnail;
