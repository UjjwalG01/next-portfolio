const SvgComponent = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 300 300"
    {...rest}
  >
    <path d="M136.3 34c.3 6.2.8 11.4 1.1 11.7.2.3 1.3.2 2.3-.1 1.5-.5 1.8-1.3 1.5-3.6-.4-2.7-.2-3 2.5-3 2.1 0 3.6.9 5.1 3 1.5 2 3.1 3 4.8 3h2.6l-2.6-3.5-2.7-3.4L153 36c2.5-2.5 2.6-7.1.1-10.1-1.6-2-3-2.4-9.6-2.7l-7.8-.4.6 11.2zm13.5-3.6c.4 3.4-1 4.6-5.5 4.6-3.2 0-3.3-.1-3.3-4.1v-4l4.3.3c3.8.3 4.2.6 4.5 3.2zM121.8 25.9c-3.6.9-6.9 1.9-7.2 2.2-.4.3.4 5.2 1.6 10.7 2 9.5 2.3 10.2 4.5 10.2 2.3 0 2.4-.2 1.8-4.4l-.7-4.4 5-1.2c4.1-.9 4.9-1.5 4.5-3-.5-1.7-.8-1.7-5.1-.5-2.5.8-4.9 1.2-5.3 1-1.2-.8-1.7-5.6-.5-6 .6-.2 3-.9 5.4-1.5 3.1-.8 4.2-1.6 4.2-3 0-1.1-.3-1.9-.7-1.9-.5.1-3.8.9-7.5 1.8zM165.3 25.4c-8.3 3.7-9 16.1-1.1 20.2 5.7 2.9 14.2 1 16.5-3.8 2-4.1 2.2-5.6 1.2-9.2-1.8-6.3-10.2-10-16.6-7.2zm7.6 3.7c7.4 2.6 5.5 13.9-2.2 13.9-7.9 0-10.6-11.1-3.4-14 1.2-.5 2.2-.9 2.3-.9.1-.1 1.6.4 3.3 1zM189.4 32.7c-.9 2.1-2.9 6.7-4.5 10.2-2.3 5-2.6 6.6-1.7 7.3 2.6 1.6 3.6.7 5.8-5.3 1.3-3.3 2.6-5.7 3-5.2.4.4 1.5 3.9 2.5 7.8 3.2 12.6 4.8 12.6 10.3-.1 4.3-9.7 4.5-11.4 1.4-11.4-1.2 0-2.5 2-4.1 6.1-2.7 7-3 6.8-5.6-3.9-2.2-9.3-4.8-11.2-7.1-5.5zM212.6 41.7c-.4.9-.1 2 .6 2.4 5 2.9 5 3-.4 10.3-3.8 5.2-4.8 7.3-4.1 8.5 1.8 2.8 2.8 2.1 7.7-5.4 2.7-4.1 5.1-7.5 5.3-7.5.3 0 1.7.9 3.3 2 2.4 1.7 2.9 1.8 3.9.6 1-1.2-.2-2.5-6.6-7-4.3-3-8.1-5.6-8.4-5.6-.4 0-1 .8-1.3 1.7zM72.2 49.7c-2.7 2.1-5 4.2-5.1 4.8 0 .5 2.7 4.7 6.1 9.2 5.4 7.1 6.4 8 8 7 2.2-1.4 2.3-2.1.3-3.7-3.9-3.2.1-6.5 5.7-4.8 2.9.9 4 .8 5.8-.5 2.2-1.5 2.2-1.6-1.9-2.8-3.8-1.1-4.1-1.5-3.6-3.9.4-2-.1-3.5-2-5.9-3.6-4.2-7-4.1-13.3.6zm8.9 1.3c2.9 1.6 2.4 5.5-1 7.9-2.7 1.9-2.9 1.9-4.3.3-4-4.9-4-4.8-.6-7.1 3.9-2.4 3.4-2.4 5.9-1.1zM103.1 49.9c-.7.5-1.1 1.7-.9 2.7.4 2.5 5.1 2.6 5.6.2.4-2-2.9-4-4.7-2.9zM225.7 61.8l-7.8 7.8 6.2 6.2c5 5 6.5 6 7.6 5 1.2-.9.6-1.9-3.2-5.8l-4.6-4.6 2.1-1.9c2-1.8 2.1-1.8 5.8 1.8 3 2.9 4.1 3.4 5 2.5.9-.9.4-2-2.5-5-3-3.1-3.4-4-2.3-5.3 2-2.4 3.6-1.8 7.3 2.5 3 3.6 3.6 3.9 4.7 2.5 1.2-1.4.5-2.4-4.6-7.6l-5.9-5.9-7.8 7.8zM59.4 60.5c-.5.7-2.8 3.6-5.1 6.3l-4.2 4.9 8.1 7.4 8.1 7.3 5.8-6.4c5.3-5.9 5.7-6.6 4.1-7.8-1.4-1-1.9-1-2.7.1-4.9 6.6-6.4 7.8-8.5 6.5-2.7-1.7-2.5-2.6 1.2-6.5 2.6-2.7 2.9-3.5 1.9-4.6-1-1-1.9-.4-4.8 2.7-3.4 3.7-3.6 3.8-5.4 2-1.8-1.9-1.8-2 2-6.5 3.6-4.1 3.8-4.6 2.2-5.6-1.3-.8-2-.8-2.7.2zM241 77.6c-4.6 3-8.6 5.7-8.8 5.9-.2.2.1 1.2.7 2.4 1.1 2 1.3 1.9 6.8-1.9 3.1-2.2 5.8-3.9 6-3.7.1.2-.8 3.7-2.2 7.7-2.7 8-3 10.5-1.5 11.5 1.1.7 19-10.1 19-11.5 0-.4-.6-1.3-1.4-1.9-1.2-1-2.5-.5-6.7 2.3-2.9 2-5.4 3.4-5.6 3.2-.2-.2.8-3.8 2.2-8.1 2.3-7.1 2.5-11.5.7-11.5-.4 0-4.5 2.5-9.2 5.6zM45.2 80.7c-.8.3-3.1 3.3-5.2 6.6l-3.9 6.1 7.2 4.1c4 2.3 8.2 4.8 9.5 5.6 2.1 1.3 2.5 1.2 3.8-.6 1.3-1.8 1.2-2-1.1-3.2-3-1.6-3-1.6-.4-7C57.4 87.6 57 85 53.7 82c-2-1.9-5.7-2.5-8.5-1.3zm7.1 6.5c.3 1.1-1.6 6.2-2.9 7.7-.5.6-7.4-3.2-7.4-4 0-.4 1.3-2.1 3-3.9 2.4-2.6 3.2-2.9 4.9-2.1 1 .6 2.1 1.6 2.4 2.3zM253.9 99.9l-9.6 3.6 2.2 6c4.1 10.8 9.7 14 17.5 10 3.7-1.9 5-4.4 4.9-9.2-.1-4.3-3.1-13.6-4.5-13.9-.5-.1-5.2 1.5-10.5 3.5zm10.7 6.8c.8 5.2-.1 7.2-3.8 9.1-1.8.8-3.4.9-5.2.3-2.4-1-5.6-5.6-5.6-8.3 0-1.2 9.6-5.5 12.7-5.7.7-.1 1.5 1.9 1.9 4.6zM36.5 102.9c-5.6 2.4-9 9.6-7.4 15.5 3 10.7 18.8 9.9 21.8-1.1 1.9-6.8-2.4-13.6-9.4-14.8-1.6-.2-3.9-.1-5 .4zm6.9 5.2c5.4 2.5 5.4 10.3-.1 12.8-7.6 3.5-14.2-6.7-7.7-11.8 3-2.4 4.3-2.6 7.8-1zM42.8 134.2c-.3 6 .3 5.8-12 4.5-6.7-.7-6.8-.7-6.8 1.6s.4 2.4 10.7 3.5c5.9.6 10.8 1 11 .9.1-.1.5-3.7.9-8 .6-7.4.6-7.7-1.4-7.7-1.8 0-2.1.7-2.4 5.2zM261.4 133.7l-8.1.4.4 7.7c.5 9.5.8 10.3 2.8 9.5 1.3-.5 1.6-1.8 1.3-6.5l-.3-5.9 3 .3c1.7.2 3.1.9 3.1 1.5.1.7.2 2.9.3 4.8.1 2.4.6 3.5 1.6 3.5 1.2 0 1.5-1.3 1.5-5.5 0-5.1.2-5.5 2.4-5.5 2.1 0 2.4.5 3 6 .6 5.2 1 6 2.8 6 1.4 0 1.8-.5 1.4-1.6-.3-.9-.6-4.7-.6-8.5V133l-3.2.2c-1.8.1-6.9.4-11.4.5zM42 154c.3 3.4.4 6.3.1 6.5-.2.3-1.4.5-2.7.5-2.6 0-3.4-1.7-3.4-7.2 0-3.2-.3-3.9-1.7-3.6-1.4.2-1.7 1.3-1.4 5.6.2 4.9.1 5.2-2.2 5.2-2.3 0-2.6-.5-3.2-6.1-.6-4.7-1.1-5.9-2.3-5.7-1.2.2-1.5 1.7-1.3 8.3.1 4.4.4 8.1.6 8.4.2.2 5.4 0 11.5-.4 10.8-.7 11.2-.8 10.6-2.9-.3-1.1-.6-4.9-.6-8.4 0-5.8-.1-6.2-2.3-6.2-2.2 0-2.3.2-1.7 6zM254.2 156.2c.3 2 1.1 2.4 6.6 3.2 7.3.9 7.2 1.1-1.9 6.4-4.1 2.4-6.5 4.5-6.7 5.8-.3 1.9.5 2.2 8.5 3.3 4.8.7 9.8 1.5 11.1 1.8 1.8.4 2.2.1 2.2-2 0-2-.6-2.5-3.7-3.1-2.1-.3-5-.6-6.5-.6-1.6 0-2.8-.3-2.8-.8.1-.4 3.4-2.6 7.4-5 4.2-2.4 7.6-5.1 7.9-6.2.3-1.1.2-2-.1-2-.4 0-4.7-.7-9.7-1.5-12.2-2-12.7-2-12.3.7zM25.5 173.1c.4 1.3.8 2.5.9 2.6 0 .1 3.9.7 8.6 1.3 4.7.6 8.6 1.3 8.7 1.4.1.1-2.9 2.6-6.7 5.6-5.6 4.4-6.9 5.8-6.4 7.5.4 1.1.8 2.2 1 2.4.2.3 10.8-8.1 17.8-14.1.6-.4.5-1.7-.1-3.1-1-2.1-2.1-2.4-11-3.5-5.5-.6-10.8-1.4-11.8-1.8-1.5-.6-1.6-.3-1 1.7zM251.9 180.5c-3.4 1.8-6.1 7.6-5.7 12.1.3 3.2.8 3.8 4.2 5.2 3.2 1.3 3.9 1.3 4.7.1 1.4-2.2 1.1-2.6-2.1-3.8-6.3-2.1-2.3-10.5 4.7-9.9 6.9.6 9.4 7.9 4.3 12.6-1.3 1.2-1.8 2.5-1.4 3.5.8 2.3 1.7 2.1 4.1-.6 4.8-5.2 5.5-10.2 2.3-15.5-3.1-5.1-9.6-6.7-15.1-3.7zM51 189c-1.1.7-.9 1.8 1.5 6.1 2.7 5 2.7 5.3 1 6.6-2.8 2-3.3 1.7-5.7-3.2-2.3-4.8-2.6-4.9-4.6-3.7-1 .7-.7 1.9 1.3 5.5 2.6 4.5 2.6 4.6.6 5.6-2.8 1.6-2.8 1.6-5.6-3.9-1.4-2.8-2.9-5-3.5-5-2.3 0-1.9 2.6 1.2 8.8 1.8 3.7 3.4 6.8 3.5 7 .1.3 18.1-8.6 19.2-9.5.5-.4-6-14.3-6.9-14.8-.3-.2-1.2 0-2 .5zM240.9 200.2c-.6 1.1-.9 2.1-.7 2.3.2.2 4.3 2.6 9.2 5.4 6.9 4 9.1 4.9 10.2 4 .8-.6 1.4-1.5 1.4-1.9 0-.4-4.3-3.3-9.5-6.3-9.1-5.3-9.6-5.5-10.6-3.5zM236.2 208c-1.1 1.7-.6 2.4 3.8 5.7 2.8 2 5 4.1 5 4.5 0 .4-4 .8-8.9.8-13 0-13.3 1.1-2.7 9.4 4.7 3.6 8.9 6.6 9.4 6.6.6 0 1.3-.8 1.6-1.7.5-1.1-.2-2.4-2.1-3.9-1.5-1.2-3.9-3.1-5.3-4.2l-2.5-2.1 9.1-.1c7 0 9.5-.4 10.4-1.5.7-.9 1.1-1.7.9-1.8-.2-.1-3.8-3-7.9-6.3-9.6-7.7-9.4-7.6-10.8-5.4zM55.3 210.5c-6.7 2.9-8.5 10.8-3.9 17.3 1.4 2 3.4 4.8 4.5 6.1l1.8 2.4 8.6-6.8c4.8-3.8 8.7-7 8.7-7.2 0-1.7-9.7-11.3-12.2-12.2-3.8-1.3-3.6-1.3-7.5.4zm10.7 7c1.8 1.9 3.2 3.6 2.9 3.8-.2.2-2.8 2.2-5.7 4.6-2.9 2.4-5.4 4.2-5.6 4-.1-.2-1.2-1.7-2.4-3.3-3-3.9-2.8-7.9.4-10.5 3.8-3 6.5-2.6 10.4 1.4zM216.3 229.4c-6.7 5.6-6.7 5.5-5.4 7.5.7 1.1 1.9.6 5.8-2.7l4.8-4.2 1.7 2.3c1.7 2.1 1.6 2.3-2.3 5.6-3.1 2.6-3.7 3.6-2.8 4.7.9 1.1 1.8.8 5.1-1.8 3.9-3.1 4-3.1 5.9-1.1 1.9 1.9 1.9 1.9-2.6 5.3-4.8 3.6-4.9 3.8-3.6 5.9.7 1 2.3.1 7.3-4.1l6.5-5.5-6.6-8.1c-3.7-4.4-6.9-8.3-7.1-8.5-.3-.3-3.3 1.8-6.7 4.7zM79.5 234.3c-1 1.5-1.4 3.4-1 4.6.4 1.4 0 2.1-1.5 2.6-2.8.9-4.2 3.9-3.1 6.7.8 2.1 12.8 11.6 13.4 10.7.2-.2 2.8-4.3 6-9.1 3.1-4.8 5.7-8.9 5.7-9.1 0-1.2-11.7-7.9-14.5-8.4-2.8-.4-3.6-.1-5 2zm10 3.9c3.9 2.6 4.3 3.8 1.7 6.1-1.6 1.5-2 1.3-5.7-1.7-3.4-2.9-3.8-3.6-2.6-5 1.8-2.1 2.5-2 6.6.6zm-4.9 7.9c3.8 2.3 3.9 2.6 1.9 5.2-1.3 1.8-1.5 1.8-4.4.1-3.6-2.1-4.6-4.1-3-6 1.5-1.8 1.5-1.8 5.5.7zM200.5 240.3c-3.9 2.2-7.1 4.1-7.3 4.2-.1.1 0 1 .4 1.9.6 1.5 1.2 1.3 5.9-1.3 5.4-3.1 5.8-3 7.9.6.5.9-.9 2-3.8 3.5-4.9 2.3-5 2.6-3.8 4.6.7 1 1.8.7 5.2-1.2 4.1-2.3 4.5-2.3 5.7-.8 1.9 2.6 1.7 2.9-3.7 5.8-5.1 2.8-6 4.1-3.6 5 1 .4 14.6-6.1 14.6-7 0-.1-2.4-4.5-5.3-9.8l-5.3-9.6-6.9 4.1zM100.6 243.6c-.8 2-1.2 1.7 5.2 4 4.9 1.7 5.3 2 4.7 4.4-.9 3.6-1.1 3.6-6.2 1.1-3.7-1.8-4.8-2-5.4-.9-1.4 2.1-1.1 2.4 3.6 4.2 3.2 1.3 4.5 2.3 4.5 3.7 0 2.7-2.3 3.3-5.7 1.6-5.4-2.8-7.3-3-7.3-1 0 1.4 1.9 2.7 7.4 5l7.4 3.1 3.8-9.6c2.2-5.3 4-9.9 4.2-10.2.2-.5-13.9-7-15.2-7-.2 0-.7.7-1 1.6zM187.2 246.8c-.9.6-1 1.6-.3 3.4.5 1.4.7 2.9.4 3.2-1.4 1.3-5.8.5-7.9-1.5-1.8-1.7-2.8-1.9-5-1.2l-2.8.9 3.6 2.5c3.3 2.2 3.5 2.6 2.2 4.4-2 2.7-1.7 5.8.7 8.9 2.4 3.1 5.6 3.3 13.5 1 4.9-1.4 5.4-1.8 4.9-3.7-3.1-10.5-6.1-18.7-7-18.7-.5 0-1.6.4-2.3.8zm3.2 14c1.1 3.9.8 4.2-4.3 4.9-3.7.5-4.1.3-4.6-2-.8-3.1-.1-4.5 2.9-5.7 3.4-1.4 5-.7 6 2.8zM120 261c-2.7 5.5-5 10.2-5 10.5 0 .3 1.1.5 2.4.5 1.9 0 2.9-1.2 5.5-7 1.8-3.9 3.6-7 4-7 .5 0 1.1 2.6 1.5 5.7 1.1 9 1.6 10.3 4 10.3 1.7 0 2.9-1.5 5.6-7 1.9-3.9 3.7-7 4.1-7 .3 0 .9 2.6 1.3 5.7 1 8.5 1.6 10.1 3.9 10.7 1.2.3 2.2.4 2.4.2.2-.1-.7-5.4-2-11.7-2.1-10.8-2.3-11.4-4.8-11.7-2.3-.3-2.9.4-5.9 6.9-3.6 7.9-4.3 7.8-5.4-.9-.9-7.2-1.4-8.2-4.2-8.2-2 0-3.2 1.5-7.4 10zM158.2 253.2c-1.6 1.6-1.5 3.3.4 4.8 2.2 1.9 5.4-1.2 3.8-3.7-1.4-2.2-2.7-2.6-4.2-1.1z" />
  </svg>
);
export default SvgComponent;
