import "@testing-library/jest-dom";

import {
  TextEncoder as UtilTextEncoder,
  TextDecoder as UtilTextDecoder,
} from "util";

global.TextEncoder = UtilTextEncoder;
global.TextDecoder = UtilTextDecoder as typeof global.TextDecoder;
