import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorCards = this.props.authors.map(author => {
      return <AuthorCard author={author} />;
    });
    console.log(authorCards);
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
