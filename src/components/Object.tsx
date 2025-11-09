/**
 * A type-safe React wrapper for the HTML `<object>` element.
 *
 * @remarks
 * External resource object.
 *
 * **Tip:** Provide fallback content
 *
 * @example
 * ```tsx
 * <Object data="/file.pdf" type="application/pdf">Fallback</Object>
 * ```
 */
export const Object = React.forwardRef<
  HTMLObjectElement,
  JSX.IntrinsicElements['object']
>((props, ref) => {
  return <object ref={ref} {...props} />;
});

Object.displayName = 'Object';
