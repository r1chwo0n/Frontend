import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import Stomp from "stompjs";

export enum messageType {
  CHAT = "CHAT",
  JOIN = "JOIN",
  LEAVE = "LEAVE",
  PLAY = "PLAY",
  WAIT = "WAIT",
  CONFIG = "CONFIG",
}

export enum gameStateType {
  HOME = "HOME",
  USERNAME = "USERNAME",
  PLAY = "PLAY",
  INIT = "INIT",
  LOBBY = "LOBBY",
}

interface webSocketMessage {
  owner: string;
  content: string;
  pic: string;
  type: messageType;
}
interface webSocketState {
  config: number[];
  userCount: number;
  isVerify: boolean;
  isConnected: boolean;
  stompClient: Stomp.Client | undefined;
  messages: webSocketMessage[] | undefined;
  gameState: gameStateType;
}

const initialState: webSocketState = {
  config: [],
  userCount: 0,
  isVerify: false,
  isConnected: false,
  stompClient: undefined,
  messages: [],
  gameState: gameStateType.HOME,
};

export const webSocketSlice = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    setIsVerify: (state, action: PayloadAction<boolean>) => {
      state.isVerify = action.payload;
    },
    setIsConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    appendMessage: (state, action: PayloadAction<webSocketMessage>) => {
      state.messages?.push(action.payload);
    },
    setStompClient: (state, action: PayloadAction<Stomp.Client>) => {
      state.stompClient = action.payload;
    },
    appendCount: (state, action: PayloadAction<number>) => {
      state.userCount = action.payload;
    },
    setGameState: (state, action: PayloadAction<gameStateType>) => {
      state.gameState = action.payload;
    },
    appendConfig: (state, action: PayloadAction<number>) => {
      state.config?.push(action.payload);
    },
  },
});

export const {
  setIsVerify,
  setIsConnected,
  appendMessage,
  appendConfig,
  setStompClient,
  appendCount,
  setGameState,
} = webSocketSlice.actions;
export default webSocketSlice.reducer;
export const selectWebSocket = (state: RootState) => state.webSocket;
