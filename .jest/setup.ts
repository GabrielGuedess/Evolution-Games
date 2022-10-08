import '@testing-library/jest-dom';
import 'jest-styled-components';

import * as ResizeObserverModule from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserverModule.default;
