export const setCookie = (name, value, timeOut = 3600000) => {
  document.cookie =
    `${name}=${value};expires=` +
    new Date(Date.now() + timeOut).toUTCString() +
    ";path=/";
};

export const getCookie = (name) => {
  // Get the value of the cookie
  const cookies = document.cookie.split(";"); // split the cookie string into an array of individual cookies
  let myCookieValue;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      myCookieValue = cookie.substring(`${name}=`.length, cookie.length);
      break;
    }
  }

  return myCookieValue;
};
