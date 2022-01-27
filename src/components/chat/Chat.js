import { useEffect, useContext } from 'react';

import { CometChatUI } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import { Context } from '../../context/AppContext';

const Chat = () => {
  const { cometChat } = useContext(Context);

  useEffect(() => {
    document.body.style.background = "#fff";
  }, []);

  return (
    <div className="chat__container">
      {cometChat && <CometChatUI />}
    </div>
  );
};
export default Chat;