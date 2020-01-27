const fs = require('fs');

const icons = './src/assets/svg';

const files = fs.readdirSync(icons).filter(x => x.includes('svg'));
const eximport = `\n${files.map(x => `import SVG${x.split('.svg')[0]} from './${x}';`).join('\n')}`;
const ex = `\n${files
  .map(
    x =>
      `"${x.split('.svg')[0]}": <SVG${x.split('.svg')[0]} width={20} height={20} {...restProps} />,`
  )
  .join('\n')}`;
const res = `
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
${eximport}

const IconSVG = ({ name, ...restProps }) =>
  ({
    ${ex}
  }[name] || null);
export default IconSVG;`;
fs.writeFileSync(`${icons}/index.js`, res);
