export const setLocalStorage = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (name) => {
  const myData = sessionStorage.getItem(name);
  return myData;
};
