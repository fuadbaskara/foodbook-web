import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: "",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: "",
    altText: "Slide 2",
    caption: "Slide 2"
  }
];

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      photos: "",
      items: []
    };
    // console.log(props.photos);
    // console.log(this.props.photos);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    // this.getPhotos = this.getPhotos.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    let slides = [];

    if (this.props.photos) {
      slides = this.props.photos.map((photo, index) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={index}
          >
            <img className="img" src={photo} alt="slide" />
          </CarouselItem>
        );
      });

      let newItem = this.props.photos.map((photo, index) => {
        photo = {
          src: photo,
          altText: `Slide ${index}`,
          caption: `Slide ${index}`
        };
        return photo;
      });

      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={newItem}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
        </Carousel>
      );
    } else {
      return <div />;
    }
  }
}

export default Carousels;
