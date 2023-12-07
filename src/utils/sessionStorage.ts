export const sessionSet = (items: { [key: string]: string }) => {
  Object.entries(items).forEach(([key, value]) => {
    sessionStorage.setItem(key, value);
  });
};
