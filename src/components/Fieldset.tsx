import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<fieldset>` element.
 *
 * @remarks
 * Groups related form controls.
 *
 * - Always use with Legend for the group title
 * - Great for radio button groups or related fields
 * - Improves accessibility by grouping related controls
 *
 * **Pro Tips:**
 * - Use Legend for group title
 * - Group related radio buttons
 *
 * @example
 * ```tsx
 * <Fieldset><Legend>Contact Info</Legend><Input /><Input /></Fieldset>
 *
 * <Fieldset disabled={isLoading}>...</Fieldset>
 * ```
 */
export const Fieldset = React.forwardRef<
  HTMLFieldSetElement,
  JSX.IntrinsicElements['fieldset']
>((props, ref) => {
  return <fieldset ref={ref} {...props} />;
});

Fieldset.displayName = 'Fieldset';
