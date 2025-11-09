/**
 * A type-safe React wrapper for the HTML `<progress>` element.
 *
 * @remarks
 * Progress indicator.
 *
 * **Tip:** Use for upload/download progress
 *
 * @example
 * ```tsx
 * <Progress value={70} max={100} />
 * ```
 */
export const Progress = React.forwardRef<
  HTMLProgressElement,
  JSX.IntrinsicElements['progress']
>((props, ref) => {
  return <progress ref={ref} {...props} />;
});

Progress.displayName = 'Progress';
