import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import {withApollo, Subscription} from 'react-apollo';

import Message from "./Message";
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'


class MiniMessageWrapper extends Component {
  constructor(props) {
    super(props);
    this.client = props.client;
  }

  render() {
    return (
      <div className="messageWrapper">
   <Subscription subscription={gql`
subscription ($last_received_id: String, $last_received_ts: String, $first_received_date: date) {
    message(order_by: {date: asc, timestamp: asc, messageNumber: asc}, where: {_and: {id: {_neq: $last_received_id}, timestamp: {_gte: $last_received_ts}, date: {_gte: $first_received_date}, messageNumber: {_gte: 410}}}) {
      id
      body
      username
      from
      time
      timestamp
      date
      created_at
      messageNumber
    }
  }
  
      
  `}>
      {({ loading, error, data }) => {
        if (loading) {
          return (<div><Pane display="flex" alignItems="center" justifyContent="center" height={280}>
          <Spinner size={28} marginX="auto" marginY={120}  />
        </Pane></div>);
        }
        if (error) {
          console.error(error);
          return (<span> Error Fetching Message Subscription!</span>);
        }
        if (data) {

          const messages = data.message;
          
          const messagesList = [];
          messages.forEach((message, index) => {
            messagesList.push(
              <Message
                key={index}
                index={index}
                message={message}
              />);
          });
          return (
            <Fragment>
              {messagesList}
            </Fragment>
            
          );
        }
      }}
    </Subscription>
    </div>
    );
  }
}

export default withApollo(MiniMessageWrapper);
