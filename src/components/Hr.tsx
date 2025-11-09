/**
 * A type-safe React wrapper for the HTML `<hr>` element.
 *
 * @remarks
 * Thematic break - horizontal rule.
 *
 * - Represents thematic break in content
 * - Not just visual - has semantic meaning
 * - Use CSS borders for purely decorative lines
 *
 * **Pro Tips:**
 * - Use for topic changes
 * - Not just for visual separation
 *
 * @example
 * ```tsx
 * <Section><P>Topic 1</P></Section><Hr /><Section><P>Topic 2</P></Section>
 * ```
 */
export const Hr = React.forwardRef<
  HTMLHRElement,
  JSX.IntrinsicElements['hr']
>((props, ref) => {
  return <hr ref={ref} {...props} />;
});

Hr.displayName = 'Hr';
