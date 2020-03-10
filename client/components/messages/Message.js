import React from "react";
import Text from 'evergreen-ui/commonjs/typography/src/Text'
import Strong from 'evergreen-ui/commonjs/typography/src/Strong'
import Avatar from 'evergreen-ui/commonjs/avatar/src/Avatar';


const Message = ({message}) => {
    return (
        <div className="messenger">
        <ul className="message-list">
                <li>
                    <div className="row">
                    <div className="avatar">
                    <Avatar  marginTop={8} marginRight={8} name={message.from} /> 
                    </div>
                    <div className="message-sender">
                    {message.from} {message.timestamp} 
                    </div>
                    </div>
                    <div className="message-text">
                    {message.body}
                    </div>
                </li>
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
    
    
    .message-list {
    font-family: -apple-system,
    BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 12px;
    margin-right: 30px;
    margin-left: -17px;
    color: #000;
    font-color: #FFFFFF;
    list-style-type: none;
    text-align: left;
    }
    
    .row {
    flex-direction: row;
    text-align: left;
    }

    .message-text {
        font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 8px 0;
        font-size: 15px;
        color: #000;
        }
        
        .message-sender {
        font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 15px;
        color: #000;
        margin-top: 10px;
        }
        
        .message-list {
        font-family: -apple-system,
        BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 15px;
        color: #000;
        list-style-type: none;
        text-align: left;
        align: left;
        }
    
    // CSS only media query for tablet
    @media screen and (max-width: 960px) {
    .row {
    flex-direction: column;
    margin: -1.5rem 0;
    align: left;
    }
    .column {
    width: 100%;
    padding: 1.5rem 0;
    text-align: left;
    max-width: 330px;
    }

    .avatar {
        display: none;
    }

       
    .message-text {
        font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        margin: 8px 0;
        font-size: 12px;
        color: #FFFFFF;
        margin-left: -25px;
        padding: 8px;
        margin-top: 10px;
        }
        
        .message-sender {
        font-family: -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 15px;
        color: #FFFFFF;
        margin-left: -20px;
        margin-top: 10px;
        }
        
        .message-list {
        font-family: -apple-system,
        BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 12px;
        margin-left: -30px;
        color: #FFFFFF;
        list-style-type: none;
        text-align: left;
        align: left;
        }
    
    
    }
    `}</style>
        </ul>
        </div>
      );
    };

export default Message;
