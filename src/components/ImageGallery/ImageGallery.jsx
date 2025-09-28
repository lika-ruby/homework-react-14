import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.jsx";
import { List } from "./ImageGallery.js";

export class ImageGallery extends Component {
  render() {
    return (
      <List onClick={this.props.openModal}>
        {this.props.images.map((img) => (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            urlSmall={img.previewURL}
            alt={img.tags}
            w={img.webformatWidth}
            h={img.webformatHeight}
          />
        ))}
      </List>
    );
  }
}
