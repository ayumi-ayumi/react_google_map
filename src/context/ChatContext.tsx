import React, {
  createContext,
  useContext,
  useReducer,
} from "react";
import { useAuth } from "./AuthProvider";
// import { AuthContext } from "./AuthContext";

export const ChatContext = createContext(null);

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  // console.log(currentUser)
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  // console.log(state)

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
