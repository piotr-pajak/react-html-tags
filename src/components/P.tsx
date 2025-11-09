/**
 * A type-safe React wrapper for the HTML `<p>` element.
 *
 * @remarks
 * This component accepts all native HTML paragraph attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard paragraph properties including className, style, etc.
 *
 * @example
 * ```tsx
 * <P>This is a paragraph of text.</P>
 *
 * <P className="lead">
 *   Important introductory paragraph with emphasis.
 * </P>
 * ```
 */
export const P = React.forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>((props, ref) => {
  return <p ref={ref} {...props} />;
});

P.displayName = 'P';
