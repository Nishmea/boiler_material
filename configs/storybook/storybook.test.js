const path = require('path');
const axios = require('axios');

import initStoryshots from '@storybook/addon-storyshots';
import { render } from "@testing-library/react";

// jest.mock('@material-ui/core/TablePagination', () =>
//   jest.fn(() => {
//     return <div />;
//   })
// );
jest.mock("react-apexcharts", () =>
  jest.fn(() => {
    return null;
  })
);
jest.mock("apexcharts", () => ({
  exec: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve("uri");
    });
  })
}));

axios.interceptors.request.use(
  (config) => Promise.resolve(),
  (err) => Promise.reject(err)
);

initStoryshots({
  configPath: path.resolve(__dirname, './'),
  renderer: render,
})