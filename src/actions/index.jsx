export const SEND_MESSAGE = "SEND_MESSAGE";

export const setSendMessageActions = data => {
  return {
    type: SEND_MESSAGE,
    data: data
  };
};
