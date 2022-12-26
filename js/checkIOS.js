export default function checkIOS() {
  const ios = [
    /iPad/i,
    /iPod/i,
  ];

  return ios.some((env) => navigator.userAgent.match(env));
}