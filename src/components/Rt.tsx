import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<rt>` element.
 *
 * @remarks
 * Ruby text component.
 *
 * **Tip:** Use inside Ruby element
 *
 * @example
 * ```tsx
 * <Rt>pronunciation</Rt>
 * ```
 */
export const Rt = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['rt']
>((props, ref) => {
  return <rt ref={ref} {...props} />;
});

Rt.displayName = 'Rt';
