import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

// Extender expect con matchers de accesibilidad
expect.extend(matchers);
