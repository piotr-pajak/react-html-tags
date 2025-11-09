/**
 * A type-safe React wrapper for the HTML `<iframe>` element.
 *
 * @remarks
 * Inline frame - embeds another document.
 *
 * - Always provide title for accessibility
 * - Use sandbox attribute for security
 * - Consider loading="lazy" for performance
 *
 * **Pro Tips:**
 * - Always add title attribute
 * - Use sandbox for untrusted content
 *
 * @example
 * ```tsx
 * <Iframe src="/page.html" title="Embedded content" />
 *
 * <Iframe src="https://example.com" sandbox="allow-scripts" loading="lazy" />
 * ```
 */
export const Iframe = React.forwardRef<
  HTMLIFrameElement,
  JSX.IntrinsicElements['iframe']
>((props, ref) => {
  return <iframe ref={ref} {...props} />;
});

Iframe.displayName = 'Iframe';
