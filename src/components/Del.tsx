import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<del>` element.
 *
 * @remarks
 * Deleted/removed text.
 *
 * **Tip:** Use with Ins for document edits
 *
 * @example
 * ```tsx
 * <Del>Old price</Del>
 * ```
 */
export const Del = React.forwardRef<
  HTMLModElement,
  JSX.IntrinsicElements['del']
>((props, ref) => {
  return <del ref={ref} {...props} />;
});

Del.displayName = 'Del';
