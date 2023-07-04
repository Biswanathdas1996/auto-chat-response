export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (name) => {
  const myData = localStorage.getItem(name);
  return myData;
};
