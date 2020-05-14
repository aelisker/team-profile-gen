const tableOfContentsInstall = instruct => {
  if (!instruct) {
    return ``;
  }
  return `* [Installation](#Installation)
  `
};
const installInstructions = instruct => {
  if (!instruct) {
    return ``;
  }
    return `
## Installation
Installation instructions listed below:
\`\`\`
${instruct}
\`\`\`
  `;
};

const tableOfContentsContribute = contributions => {
  if (!contributions) {
    return ``;
  }
  return `
* [Contributing](#Contributing)
  `
};
const contributeInstructions = contributions => {
  if (!contributions) {
    return ``;
  }
  return `
## Contributing
${contributions}
  `;
};

const tableOfContentsTests = tests => {
  if (!tests) {
    return ``;
  }
  return `
* [Tests](#Tests)
`
};
const testInstructions = tests => {
  if (!tests) {
    return ``;
  }
  return `
## Tests
${tests}
  `;
};

const emailInfo = emailAddress => {
  if (!emailAddress) {
    return `.`;
  }
  return ` and via email at [${emailAddress}](mailto:${emailAddress}).`;
};

module.exports = generatedHtml => {
  const { installation, contribute, tests, email, ...necessary } = generatedHtml;
    return `# 
## Questions
If you have any questions, you can find me at [${necessary.github}](https://github.com/${necessary.github})${emailInfo(email)}
    `;
};