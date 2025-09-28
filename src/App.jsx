import "./App.css";
import { Component } from "react";
import axios from "axios";
import { Button } from "./components/Button/Button.jsx";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { Searchbar } from "./components/Searchbar/Searchbar.jsx";
import { GlobalStyle } from "./GlobalStyle.js";
import { Main, Container } from "./App.js";

class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    filter: "",
    hasMore: true,
    api: axios.create({
      baseURL: "https://pixabay.com/api/",
    }),
    modalImgUrl: "#",
    modalImgAlt: "",
  };

  async getImages(page) {
    try {
      const response = await this.state.api.get("", {
        params: {
          key: "49689044-b50b4b2a27f84104cd981c364",
          q: this.state.filter,
          page: page,
          per_page: 20,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Помилка:", error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      localStorage.setItem("page", JSON.stringify(this.state.page));
      const allImages = [];
      for (let i = 1; i <= this.state.page; i += 1) {
        const data = await this.getImages(i);
        allImages.push(...data.hits);
      }

      const data = await this.getImages(this.state.page + 1);

      this.setState({
        images: allImages,
        loading: false,
        hasMore: data.hits.length === 0 ? false : true,
      });
    }

    if (prevState.filter !== this.state.filter) {
      if (!this.state.filter) return this.state.images;

      const allImages = [];
      for (let i = 1; i <= this.state.page; i += 1) {
        const data = await this.getImages(i);
        allImages.push(...data.hits);
      }

      const data = await this.getImages(this.state.page + 1);

      this.setState({
        images: allImages,
        loading: false,
        hasMore: data.hits.length === 0 ? false : true,
      });
    }
  }

  addPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidMount() {
    this.setState({ loading: true });
    if (localStorage.getItem("page")) {
      this.setState({ page: JSON.parse(localStorage.getItem("page")) });
    } else {
      localStorage.setItem("page", JSON.stringify(1));
    }
    const allImages = [];
    for (let i = 1; i <= this.state.page; i += 1) {
      const data = await this.getImages(i);
      allImages.push(...data.hits);
    }

    const data = await this.getImages(this.state.page + 1);

    this.setState({
      images: allImages,
      loading: false,
      hasMore: data.hits.length === 0 ? false : true,
    });
  }

  handleSearch = ({ search }) => {
    this.setState({ filter: search, page: 1, images: [] });
  };

  openModal = async (e) => {
    if (e.target.nodeName === "IMG") {
      const checkedImg = this.state.images.find(
        (img) => img.id === Number(e.target.parentElement.id)
      );
      this.setState({ modalImgUrl: checkedImg.largeImageURL });
      this.setState({ modalImgAlt: checkedImg.tags });
      if (e.target.classList.contains("hori")) {
        document.querySelector("#img").classList.add("hori");
      } else {
        document.querySelector("#img").classList.add("vert");
      }
      document.querySelector("#backdrop").classList.remove("is-hidden");
    }
  };

  changeUrl = () => {
    this.setState({ modalImgUrl: "#" });
    this.setState({ modalImgAlt: "" });
  };

  render() {
    return (
      <Main className="App">
        <Container>
          <GlobalStyle />
        </Container>

        <Container>
          <Searchbar onSubmit={this.handleSearch} />
        </Container>

        <Container>
          <ImageGallery openModal={this.openModal} images={this.state.images} />
        </Container>

        <Container>
          {this.state.loading && <Loader />}
          {this.state.hasMore === true && !this.state.loading ? (
            <Button addPage={this.addPage} />
          ) : (
            ""
          )}
        </Container>

        <Container>
          <Modal
            changeUrl={this.changeUrl}
            url={this.state.modalImgUrl}
            alt={this.state.modalImgAlt}
          />
        </Container>
      </Main>
    );
  }
}

export default App;
