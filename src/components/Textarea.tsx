import React from 'react';

/**
 * A type-safe React wrapper for the HTML `<textarea>` element.
 *
 * @remarks
 * Multi-line text input.
 *
 * - Always pair with Label
 * - Use rows/cols or CSS for sizing
 * - Great for comments, descriptions, messages
 *
 * **Pro Tips:**
 * - Set rows for initial height
 * - Use maxLength for validation
 *
 * @example
 * ```tsx
 * <Textarea rows={5} placeholder="Enter your message..." />
 *
 * <Textarea maxLength={500} required />
 * ```
 */
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']
>((props, ref) => {
  return <textarea ref={ref} {...props} />;
});

Textarea.displayName = 'Textarea';
