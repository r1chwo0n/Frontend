import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import Stomp from "stompjs";

export enum messageType {
  CHAT = "CHAT",
  JOIN = "JOIN",
  LEAVE = "LEAVE",
}

export enum gameStateType {
  HOME = "HOME",
  USERNAME = "USERNAME",
  PLAY = "PLAY",
}

interface webSocketMessage {
  sender: string;
  content: string;
  timestamp: string;
  type: messageType;
}
interface webSocketState {
  userCount: number;
  isPlayPressed: boolean;
  isConnected: boolean;
  stompClient: Stomp.Client | undefined;
  messages: webSocketMessage[] | undefined;
  gameState: gameStateType;
}

const initialState: webSocketState = {
  userCount: 0,
  isPlayPressed: false,
  isConnected: false,
  stompClient: undefined,
  messages: [],
  gameState: gameStateType.HOME,
};

export const webSocketSlice = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    setIsPlayPressed: (state, action: PayloadAction<boolean>) => {
      state.isPlayPressed = action.payload;
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
  },
});

export const {
  setIsPlayPressed,
  setIsConnected,
  appendMessage,
  setStompClient,
  appendCount,
  setGameState,
} = webSocketSlice.actions;
export default webSocketSlice.reducer;
export const selectWebSocket = (state: RootState) => state.webSocket;
