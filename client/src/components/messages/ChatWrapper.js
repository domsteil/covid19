import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import {withApollo, Subscription} from 'react-apollo';

import Message from "./Message";
import Spinner from 'evergreen-ui/commonjs/spinner/src/Spinner'
import Pane from 'evergreen-ui/commonjs/layers/src/Pane'
import Scroll from "./Scroll";


class ChatWrapper extends Component {
  constructor(props) {
    super(props);
    this.client = props.client;
    // this.scrollRef = React.createRef();
    // this.newMessages = data.messages;
  }

  componentDidMount() {
    // this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // componentDidUpdate() {
  //  if (this.newMessages.length === 0) {
  //    this.scrollToBottom();
  //  }
  // }

  render() {
    return (
      <div className="messageWrapper">
        <Subscription subscription={gql`
           subscription ($last_received_id: String, $last_received_ts: String, $first_received_date: date){
            message (
              order_by: {
                date: asc,
                timestamp: asc
              }
              where: {
                _and: {
                  id: {
                    _neq: $last_received_id
                  },
                  timestamp: {
                    _gte: $last_received_ts
                  },
                  date: {
                    _gte: $first_received_date
                  }
                }
              }
            ) {
              id
              body
              username
              from
              time
              timestamp
              date
              created_at
            }
          }`}>
      {({ loading, error, data }) => {
        if (loading) {
          return (<div>
            <Pane display="flex" alignItems="center" justifyContent="center" height={280}>
          <Spinner size={28} marginX="auto" marginY={120}  />
            </Pane>
        </div>);
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
            <div className="chatDialog">
            <Fragment>
              {messagesList}
              <Scroll />
            </Fragment>
            </div>
          );
        }
      }}
    </Subscription>
    <style jsx>{`
    

    .chatDialog {
      height: 800px;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0,0,0,0.1);
      border: 1px solid #ccc;
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(left, #fff, #e4e4e4);
      border: 1px solid #aaa;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #fff;
    }
    
    ::-webkit-scrollbar-thumb:active {
      background: linear-gradient(left, #22ADD4, #1E98BA);
    }

    ::-webkit-scrollbar {
      width: 12px;
    }


    .conversationNameContainer: {
      backgroundColor: '#fafafa',
      padding: 20,
      borderBottom: '1px solid #ddd'
    }

    .conversationName: {
      margin: 0,
      fontSize: 16,
      fontWeight: 500
    }

    .scroller: {
      float:"left", clear: "both"
    }

    .messagesContainer: {
      height: 'calc(100vh - 219px)',
      overflow: 'scroll',   
    }

    .message: {
      backgroundColor: "#ededed",
      borderRadius: 10,
      margin: 10,
      padding: 20
    }

    .messageText: {
      margin: 0
    }

    .input: {
      height: 45,
      outline: 'none',
      border: '2px solid #ededed',
      margin: 5,
      borderRadius: 30,
      padding: '0px 20px',
      fontSize: 18,
      width: 'calc(100% - 54px)'
    }

    .inputContainer: {
      width: '100%',
      position: 'absolute',
      bottom: 50,
      left: 0,
    }
    
    `}</style>
    </div>
    );
  }
}

export default withApollo(ChatWrapper);