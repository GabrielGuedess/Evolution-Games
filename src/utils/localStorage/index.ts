/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
const APP_KEY = '@evolution';

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  return JSON.parse(data!);
};

export const setStorageItem = (key: string, value: any[]) => {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
};
