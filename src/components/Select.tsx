import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<select>` element.
 *
 * @remarks
 * Dropdown selection control.
 *
 * - Always pair with Label
 * - Use Option for choices, Optgroup for grouping
 * - Consider multiple attribute for multi-select
 *
 * **Pro Tips:**
 * - Add placeholder option
 * - Use Optgroup for categorized options
 *
 * @example
 * ```tsx
 * <Select value={value} onChange={(e) => setValue(e.target.value)}><Option value="">Choose...</Option><Option value="1">One</Option></Select>
 *
 * <Select multiple>...</Select>
 * ```
 */
export const Select = React.forwardRef<
  HTMLSelectElement,
  JSX.IntrinsicElements['select']
>((props, ref) => {
  return <select ref={ref} {...props} />;
});

Select.displayName = 'Select';
