import React from 'react';


export default class MessageList extends React.Component {
  render() {
    const { isNew } = this.props;

    return (
      <div className={isNew ? "messageWrapperNew" : "messageWrapper"}>
        {
          this.props.messages.map((m, i) => {
            return (
              <div key={m.id} className="message">
                <div className="messageNameTime">
                  <div className="messageName">
                    <b>{m.username}</b>
                  </div>
                  <div className="messsageTime">
                  </div>
                </div>
                <div className="messageText">
                  {m.body }
                </div>
              </div>
            );
          })
        }
        <div
          style={{ "height": 0 }}
          id="lastMessage"
        >
        </div>
      </div>
    );
  }
};