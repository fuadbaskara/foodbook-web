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
  },
  {
    src: "",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      photos: ""
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

  // async componentWillMount() {
  //   await this.getPhotos();
  //   console.log(this.state.photos);
  // }
  //
  // async getPhotos() {
  //   this.photos = await this.props.photos;
  //   this.setState({ photos: this.photos });
  //   console.log(this.photos);
  // }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
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

    // if (this.props.photos) {
    //   console.log(this.props.photos);
    // }

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={this.props.photos && this.props.photos}
        >
          <img
            className="img"
            src={this.props.photos && this.props.photos}
            alt={item.altText}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carousels;
