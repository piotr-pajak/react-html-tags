/**
 * A type-safe React wrapper for the HTML `<aside>` element.
 *
 * @remarks
 * Content tangentially related to surrounding content.
 *
 * - Perfect for sidebars, pull quotes, ads
 * - Content should be related but not essential
 * - Can be removed without affecting main content flow
 *
 * **Pro Tips:**
 * - Use for sidebar content
 * - Good for related articles or ads
 *
 * @example
 * ```tsx
 * <Aside><H3>Related Links</H3><Ul>...</Ul></Aside>
 *
 * <Aside aria-label="Advertisement">...</Aside>
 * ```
 */
export const Aside = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['aside']
>((props, ref) => {
  return <aside ref={ref} {...props} />;
});

Aside.displayName = 'Aside';
