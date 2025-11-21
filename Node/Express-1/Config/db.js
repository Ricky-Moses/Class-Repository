let store = [];

export const getUserData = () => store;

export const updateData = (data) => {
  store = data;
};

export default store;