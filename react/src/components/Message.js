import React from 'react';

let Message = ({message, type}) => {
  let typeClass = `message ${type}`;

  return (
    <div className={typeClass}>
      <p>
        { message }
      </p>
    </div>
  );
}

export default Message;
