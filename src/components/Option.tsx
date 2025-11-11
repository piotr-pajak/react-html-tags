import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<option>` element.
 *
 * @remarks
 * Option in Select or Datalist.
 *
 * **Tip:** Use value attribute for form submission
 *
 * @example
 * ```tsx
 * <Option value="1">Choice One</Option>
 * ```
 */
export const Option = React.forwardRef<
  HTMLOptionElement,
  JSX.IntrinsicElements['option']
>((props, ref) => {
  return <option ref={ref} {...props} />;
});

Option.displayName = 'Option';
