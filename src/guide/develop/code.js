const code = {};

code.index = `import IvueAffix from './ivue-affix';

export {
  IvueAffix
}
`;

code.src = `
import { IvueAffix } from './components/ivue-affix';

export {
  IvueAffix
}
`;

code.components = `<template>
  <YouComponent></YouComponent>
</template>
`;

export default code;
