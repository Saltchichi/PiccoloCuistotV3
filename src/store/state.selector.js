export const getState = () => (state) => state;

export const getReceipts = () => (state) => state.receipts;

export const getUser = () => (state) => state.user;

export const getReceipById = (receipId) => (state) => {
  return state.receipts.find(receip => receip.id === receipId) || null
}