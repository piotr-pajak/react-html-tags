import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<summary>` element.
 *
 * @remarks
 * Summary/caption for Details element.
 *
 * - Must be first child of Details
 * - Clicking toggles Details open/closed
 * - Acts as disclosure button
 *
 * **Pro Tips:**
 * - Must be first child of Details
 * - Keep text concise
 *
 * @example
 * ```tsx
 * <Details><Summary>Click to expand</Summary>...</Details>
 * ```
 */
export const Summary = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['summary']
>((props, ref) => {
  return <summary ref={ref} {...props} />;
});

Summary.displayName = 'Summary';
