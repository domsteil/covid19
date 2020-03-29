import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import TypingIndicator from './TypingIndicator';
import { distanceInWordsToNow, isToday } from 'date-fns';
import { useContext } from 'react';
import UserContext from '../../components/UserContext';
import {PythonShell} from 'python-shell';


let pyshell = new PythonShell('../../../bot/main.py');


pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
    console.log('finished');
  });


const insertMessage = gql`
mutation insert_message ($message: message_insert_input! ){
  insert_message (
    objects: [$message]
  ) {
    returning {
      id
      time
      body
      username
    }
  }
}
`;

const emitTypingEvent = gql`
mutation ($username: String) {
  update_users (
    _set: {
      last_typed: "now()"
    }
    where: {
      username: {
        _eq: $username
      }
    }
  ) {
    affected_rows
  }
}
`;


export default class BotTextbox extends React.Component {

  static contextType = UserContext;
  constructor(props) {
    super()
    this.state = {
      user: this.context,
      body: "",
      random: 0,
      curTime: "",
      curDate: ""
    }
  }
  

  handleTyping = (body, mutate) => {
    const textLength = body.length;
    if ((textLength !== 0 && textLength % 5 === 0) || textLength === 1) {
      this.emitTypingEvent(mutate);
    }
    this.setState({ body });
  }

  emitTypingEvent = async (mutate) => {
    if (this.context.user) {
      await mutate({
        mutation: emitTypingEvent,
        variables: {
          username: this.context.user
        }
      });
    }
  }

  render() {

    var min = 1;
    var max = 100;
    var rand =  min + (Math.random() * (max-min));
    var uniTime = new Date().toUTCString();
    var orderTime = new Date().toLocaleTimeString();
    var curDate = new Date();

    return (
      <Mutation
        mutation={insertMessage}
        variables={{
          message: {
            id: rand.toString(),
            username: this.context.user,
            from: this.context.user,
            body: this.state.body,
            time: orderTime,
            timestamp: uniTime,
            date: curDate
          }
        }}
        update={(cache, { data: { insert_message }}) => {
          this.props.mutationCallback(
            {
              id: insert_message.returning[0].id,
              times: insert_message.returning[0].time,
              username: insert_message.returning[0].username,
              body: insert_message.returning[0].body,
            }
          );
        }}
      >
        {
          (insert_message, { data, loading, error, client}) => {
            const sendMessage = (e) => { 
              e.preventDefault();
              if (this.state.body === '') {
                return;
              }
              insert_message();
              pyshell.send(this.state.body);
              this.setState({
                body: ""
              });
            }
            return this.form(sendMessage, client);
          }
        }

      </Mutation>
    )
  }

  form = (sendMessage, client) => {
    return (
      <form onSubmit={sendMessage}>
      
        <div className="column">
          <TypingIndicator username={this.context.user} />
          <input
            id="textbox"
            className="message-box"
            placeholder="Type a Message..."
            value={this.state.body}
            autoFocus={true}
            onChange={(e) => {
              this.handleTyping(e.target.value, client.mutate);
            }}
            autoComplete="off"
          />
          <style jsx>{`

.column {
  text-align: center;
  border-width: 1px;
  list-style: none;
  padding-bottom: 28px;
  margin-right: 28px;
}

.to {
  width: 260px;
  padding-bottom: 8px;
  padding-top: 8px;
  border: 1px solid #d0d4d9; 
  border-radius: .375rem;
  -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
  box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
  line-height: 20px;
  min-height: auto; 
  padding-left: 0; 
  padding-right: 0;
}

.message-box {
  width: 1100px;
  overflow: auto;
  margin: 0; 
  min-height: 42px; 
  height: 38px; 
  max-height: 180px; 
  border-width: 2px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  border-radius: .375rem;
  border: 1px solid #bdc4c9;
  margin-left: 75px;
  margin-top: 10px;
  outline: 0;
  background: #fff;
  resize: none;
  box-shadow: none;
  color: #1d1c1d;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
  padding: 9px 28px 10px 28px;
}

.login {
  color: #FFF;
}

.account {
  font-size: 13px;
  line-height: 1.91667;
  font-weight: 400;
  color: #3d464d;
  border: 1px solid #bdc4c9;
  padding: 3.5px 7px;
  border-radius: 4px;
  margin-top: 28px;
  margin-left: 8px;
}

.row {
  flex-direction: column;
  margin: -1.5rem 0;
  text-align: center;
}

// CSS only media query for tablet
@media screen and (max-width: 960px) {
  .row {
    flex-direction: column;
    margin: -1.5rem 0;
  }
  .column {
    width: 8%;
    padding: 1.5rem 0;
    text-align: center;
    max-width: 100px;
  }

  .message-box {
    padding-bottom: 28px;
    width: 400px;
    min-height: 42px; 
    height: 38px; 
    max-height: 180px; 
    border-width: 2px;
    border-style: solid;
    margin-left: -33px;
    margin-right: 20px;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    border-radius: .375rem;
    border: 1px solid #bdc4c9;
    outline: 0;
    background: #FFFFFF;
    resize: none;
    box-shadow: none;
    color: #1d1c1d;
    padding: 9px 30px 10px 50px;
  }

  
}
`}</style>
        </div>
      </form>
    );
  }
}