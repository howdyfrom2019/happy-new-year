export default function checkMobile() {
  const mobile = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return mobile.some((env) => navigator.userAgent.match(env));
}