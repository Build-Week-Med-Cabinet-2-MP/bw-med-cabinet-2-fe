const tokenName = "someTokenName12345";
export const getToken = () => {
  return localStorage.getItem(tokenName);
};
export const setToken = (newToken) => {
  localStorage.setItem(tokenName, newToken);
};
