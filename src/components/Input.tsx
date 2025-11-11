import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<input>` element.
 *
 * @remarks
 * Interactive form input control.
 *
 * - Always pair with a Label for accessibility
 * - Use appropriate type attribute (email, number, tel, etc.)
 * - Use required, pattern, min, max for HTML5 validation
 *
 * **Pro Tips:**
 * - Use semantic types (email, tel, url)
 * - Add aria-label if no visible label
 *
 * @example
 * ```tsx
 * <Input type="email" required placeholder="you@example.com" />
 *
 * <Input type="number" min={0} max={100} step={5} />
 *
 * <Input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)} />
 * ```
 */
export const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>((props, ref) => {
  return <input ref={ref} {...props} />;
});

Input.displayName = 'Input';
