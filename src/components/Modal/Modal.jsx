import { Component } from "react";
import { Backdrop, ModalS, Image } from "./Modal";

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("click", this.handleClick);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  };

  handleClick = (e) => {
    console.log(e.target);
    if (
      // e.target.id !== "img"
      //  &&
      e.target.id === "modal" ||
      e.target.id === "backdrop"
      // &&
      // document.querySelector("#backdrop").classList.contains("is-hidden")
    ) {
      this.closeModal();
    }
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  closeModal = () => {
    this.props.changeUrl();
    document.querySelector("#backdrop").classList.add("is-hidden");
  };

  render() {
    return (
      <Backdrop className="is-hidden" id="backdrop">
        <ModalS id="modal">
          <Image id="img" src={this.props.url} alt={this.props.alt} />
        </ModalS>
      </Backdrop>
    );
  }
}
