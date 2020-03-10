import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import {withApollo, Subscription} from 'react-apollo';

import Message from "./Message";
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'


class Scroll extends Component {
  constructor(props) {
    super(props);
    this.client = props.client;
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
      this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }


  render() {
    return (
      <div ref={this.scrollRef}>
    </div>
    )
  }
};

export default Scroll;