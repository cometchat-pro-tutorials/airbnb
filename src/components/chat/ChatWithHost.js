import { useState, useEffect, useContext } from 'react';

import { CometChatMessages } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';

import { Context } from '../../context/AppContext';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const ChatWithHost = () => {
  const [host, setHost] = useState();

  const { cometChat } = useContext(Context);

  useEffect(() => {
    const host = storageService.get(STORAGE_KEYS.HOST);
    if (host) { 
      setHost(() => host);
    }
  }, []);

  return (
    <div className="chat__container">
      {cometChat && host && <CometChatMessages chatWithUser={host} />}
    </div>
  );
};
export default ChatWithHost;