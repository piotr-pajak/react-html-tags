/**
 * A type-safe React wrapper for the HTML `<strong>` element.
 *
 * @remarks
 * Strong importance, serious or urgent.
 *
 * - Semantic meaning, not just bold styling
 * - Screen readers may emphasize
 * - Use B for stylistic bold without importance
 *
 * **Pro Tips:**
 * - Use for warnings, important statements
 * - Prefer over B for semantic meaning
 *
 * @example
 * ```tsx
 * <Strong>Warning:</Strong> This action cannot be undone
 *
 * <P><Strong>Important:</Strong> Read carefully</P>
 * ```
 */
export const Strong = React.forwardRef<
  HTMLElement,
  JSX.IntrinsicElements['strong']
>((props, ref) => {
  return <strong ref={ref} {...props} />;
});

Strong.displayName = 'Strong';
