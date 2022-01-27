import React, { useState, useEffect } from 'react';

export const Context = React.createContext(null);

export const AppContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cometChat, setCometChat] = useState(null);

  const context = {
    user,
    setUser,
    cometChat,
    setCometChat
  };

  const initAuthUser = () => {
    const authenticatedUser = localStorage.getItem('auth');
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  };

  const initCometChat = async () => {
    const { CometChat } = await import('@cometchat-pro/chat');
    const appID = `${process.env.REACT_APP_COMETCHAT_APP_ID}`;
    const region = `${process.env.REACT_APP_COMETCHAT_REGION}`;
    const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
    CometChat.init(appID, appSetting).then(
      () => {
        setCometChat(() => CometChat);
      },
      error => {
      }
    );
  };

  useEffect(() => {
    initAuthUser();
    initCometChat();
  }, []);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;