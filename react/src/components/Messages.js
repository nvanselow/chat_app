import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Message from './Message';

let Messages = ({messages}) => {
  let formattedMessages = messages.map((message) => {
    return (
      <Message key={message.id} type={message.type} message={message.body} />
    );
  });

  return (
    <div className="messages">
      <ReactCSSTransitionGroup transitionName="message"
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}
                               transitionAppear={true}
                               transitionAppearTimeout={500}>
        { formattedMessages }
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Messages;
