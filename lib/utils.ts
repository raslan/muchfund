export const isDev = () =>
  process.env.NEXT_PUBLIC_IS_DEV === 'true' ||
  !!process.env.NEXT_PUBLIC_IS_DEV === true;
