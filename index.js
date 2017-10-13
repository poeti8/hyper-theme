const backgroundColor = '#000';
const foregroundColor = '#fff';
const cursorColor = '#FF2E88';

// Colors
const red = '#FF2E88';
const green = '#50E3C2';
const yellow = '#fea503';
const blue = '#50E3C2';
const magenta = '#f122a2';
const cyan = '#50E3C2';

const colors = {
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  colorCubes: '#fff',
}

exports.decorateConfig = config => {
  return Object.assign(
    {},
    config,
    {
      backgroundColor,
      foregroundColor,
      cursorColor,
      colors,
      termCSS: `
        ${config.termCSS || ''}
        .terminal a {
          color: ${red};
          text-decoration: underline;
        }

        .terminal a:hover {
          color: #fff;
          background-color: ${red};
          text-decoration: none;
        }
      `,
    }
  );
}