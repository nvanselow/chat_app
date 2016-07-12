import React, { Component } from 'react';
import Messages from './Messages';

class ChatWindow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        {id: 1, type: 'received', body: 'Hello there!'},
        {id: 2, type: 'sent', body: 'Greetings!'},
        {id: 3, type: 'received', body: 'How was work?'},
        {id: 4, type: 'sent', body: 'Went well.'}
      ],
      currentMessage: ''
    }

    this.updateCurrentMessage = this.updateCurrentMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateCurrentMessage(event) {
    let updatedMessage = event.target.value
    this.setState({ currentMessage: updatedMessage });
  }

  sendMessage(event) {
    let originalMessages = this.state.messages;
    originalMessages.push({
      id: originalMessages.length + 1,
      type: 'sent',
      body: this.state.currentMessage
    });
    this.setState({ messages: originalMessages, currentMessage: '' });
  }

  render() {
    return (
      <div className="chat-window row">
        <div className="columns small-12 medium-6 medium-centered">
          <Messages messages={this.state.messages} />
          <hr />
          <div className="input-group">
            <input className="input-group-field"
                   type="text"
                   value={this.state.currentMessage}
                   onChange={this.updateCurrentMessage} />
            <div className="input-group-button">
              <input type="submit"
                     className="button send"
                     value="Send"
                     onClick={this.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
