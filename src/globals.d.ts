import * as ReactNamespace from 'react';
import type { JSX as ReactJSX } from 'react/jsx-runtime';

declare global {
  const React: typeof ReactNamespace;
  namespace JSX {
    interface Element extends ReactJSX.Element {}
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}
