import React from 'react'

const MessageItem = ({index, message}) => {
  return (
    <animated.div className="messenger">
    <ul className="message-list">
        {messages.map((message, index) => (
            <li key={index}>
                 <div className="row">
                <h4 className="message-sender">{message.from} {message.time}</h4>
                </div>
                <p className="message-text">{message.message}</p>
            </li>
        ))}
        <style jsx>{`

.login {
color: #FFF;
}

.baton-profile {
height: 28px;
width: 28px;
margin-top: 8px;
alt: "";
}

h4 {
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
margin: 8px 0;
font-size: 1em;
font-weight: 500;
margin-right: 30px;
padding-left: 5px;
color: #000;
text-align: left;
}


p {
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
margin: 8px 0;
font-size: 1em;
font-weight: 200;
margin-right: 30px;
padding-left: 5px;
color: #000;
text-align: left;
}



.message-text {
font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
margin: 8px 0;
font-size: 15px;
margin-right: 30px;
color: #FFFFFF;
margin-top: -9px;
margin-left: 17px;
}

.message-sender {
font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
margin: 10px 0;
font-size: 15px;
margin-right: 30px;
color: #FFFFFF;
margin-left: 8px;
}

.message-list {
font-family: -apple-system,
BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-size: 12px;
margin-right: 30px;
margin-left: -100px;
color: #FFFFFF;
list-style-type: none;
text-align: left;
}

.row {
flex-direction: row;
text-align: left;
}

// CSS only media query for tablet
@media screen and (max-width: 960px) {
.row {
flex-direction: column;
margin: -1.5rem 0;
text-align: left;
margin-left: -30px;
}

.column {
width: 100%;
padding: 1.5rem 0;
text-align: center;
max-width: 330px;
text-align: left;
}

.message-text {
  font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  margin: 8px 0;
  font-size: 15px;
  margin-right: 30px;
  color: #FFFFFF;
  margin-top: -9px;
  margin-left: -40px;
  }
  
  .message-sender {
  font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  margin: 10px 0;
  font-size: 8px;
  margin-right: 50px;
  color: #FFFFFF;
  margin-left: -50px;
  }
  
  .message-list {
  font-family: -apple-system,
  BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 12px;
  margin-right: -30px;
  color: #FFFFFF;
  list-style-type: none;
  text-align: left;
  }




}
`}</style>
    </ul>
    </animated.div>
  );
};

export default MessageItem;
