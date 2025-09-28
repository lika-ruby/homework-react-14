import { Component } from "react";
import { Header, Form, Button, Input } from "./Searchbar";

export class Searchbar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value || "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    this.props.onSubmit({ search });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">Search</Button>
          <Input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
