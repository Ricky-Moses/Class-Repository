let data = []; // Mock database

export const setData = () => data;

export const updatedData = (store) => {
  data = store;
};

export default data;
