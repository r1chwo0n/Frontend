import Stomp from "stompjs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import SockJS from "sockjs-client/dist/sockjs";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import {
  setIsConnected,
  setIsVerify,
  appendConfig,
  appendMessage,
  setStompClient,
  appendCount,
} from "../store/Slices/webSocketSlice.ts";
import { selectWebSocket } from "../store/Slices/webSocketSlice.ts";

function useWebSocket() {
  const dispatch = useAppDispatch();
  const webSocket = useAppSelector(selectWebSocket);

  function connect(username: string) {
    try {
      const socket: WebSocket = new SockJS(`http://localhost:8080/ws`);
      const stompClient: Stomp.Client = Stomp.over(socket);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      stompClient.connect(
        {},
        () => onConnected(stompClient, username),
        onError
      );
    } catch (e) {
      console.log(e);
    }
  }
  function sendPlan(message: string, username: string) {
    if (webSocket.stompClient && webSocket.stompClient.connected) {
      const planMessage = {
        sender: username,
        content: message,
        type: "PLAY",
      };
      webSocket.stompClient.send(
        "/app/chat.sendPlan",
        {},
        JSON.stringify(planMessage)
      );
    }
  }

  function sendConfig(message: number[] | undefined) {
    if (message && Array.isArray(message)) {
      if (webSocket.stompClient && webSocket.stompClient.connected) {
        const configMessage = {
          content: JSON.stringify(message), // Convert array to string
          type: "CONFIG",
        };
        webSocket.stompClient.send(
          "/app/chat.sendConfig",
          {},
          JSON.stringify(configMessage)
        );
      }
    } else {
      console.error("Invalid message type or message is undefined.");
    }
  }

  const onConnected = (stompClient: Stomp.Client, username: string) => {
    stompClient.subscribe("/topic/public", onMessageReceived);
    stompClient.subscribe("/topic/userOnline", onCountRecieved);
    stompClient.subscribe("/topic/userOnline", onConfigReceived);
    stompClient.send(
      "/app/chat.addConfig",
      {},
      JSON.stringify({
        sender: username,
        type: "JOIN",
        timestamp: new Date().toLocaleTimeString(),
      })
    );
    dispatch(setIsConnected(true));
    dispatch(setStompClient(stompClient));
  };
  const onMessageReceived = (payload: Stomp.Message) => {
    dispatch(appendMessage(JSON.parse(payload.body)));
  };
  const onConfigReceived = (payload: Stomp.Message) => {
    dispatch(appendConfig(JSON.parse(payload.body)));
  };
  const onCountRecieved = (payload: Stomp.Message) => {
    dispatch(appendCount(JSON.parse(payload.body)));
  };
  return { connect, sendPlan, sendConfig };
}

export default useWebSocket;

const onError = (err: Stomp.Message) => {
  console.log(err);
};
