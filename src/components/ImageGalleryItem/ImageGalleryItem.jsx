import { Component } from "react";
import { Image, Item } from "./ImageGalleryItem";

export class ImageGalleryItem extends Component {
  render() {
    return (
      <Item
        className={this.props.w - this.props.h > 0 ? "hori" : "vert"}
        id={this.props.id}
      >
        <Image src={this.props.urlSmall} alt={this.props.alt} />
      </Item>
    );
  }
}
