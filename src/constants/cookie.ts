export function setSessionCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
