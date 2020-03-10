import React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';
import Text from 'evergreen-ui/commonjs/typography/src/Text'

const getUserTyping = gql`
subscription ($username: String ) {
  user_typing (
    where: {
      username: {
        _eq: $username
      }
    },
    limit: 1
    order_by: {
      last_typed: desc
    }
  ){
    last_typed
    username
  }
}
`;


class TypingIndicator extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="typingIndicator">
        <Subscription
          subscription={getUserTyping}
          variables={{
            username: this.context.user
          }}
        >
          {
            ({ data, loading, error}) => {
              if (loading) { return ""; }
              if (error) { return ""; }
              if (data.user_typing.length === 0) {
                return "";
              } else {
                return `${data.user_typing[0].username} is typing ...`;
              }
            }
          }
        </Subscription> <style jsx>{`

.typingIndicator {
  font-size: 12px;
  text-align: left;
  margin-left: 30px;
  color: #66788A;
}

// CSS only media query for tablet
@media screen and (max-width: 960px) {
  .row {
    flex-direction: column;
    margin: -1.5rem 0;
  }
  
}
`}</style>
      </div>
    )
  }
};

export default TypingIndicator;