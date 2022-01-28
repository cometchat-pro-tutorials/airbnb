import { useEffect, useContext } from 'react';

import { CometChatUI } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import * as uiService from '../../services/ui';

import { Context } from '../../context/AppContext';

const Chat = () => {
  const { cometChat } = useContext(Context);

  useEffect(() => {
    window.onload = function () {
      uiService.showLightHeader();
    }
  }, []);

  return (
    <div className="chat__container">
      {cometChat && <CometChatUI />}
    </div>
  );
};
export default Chat;