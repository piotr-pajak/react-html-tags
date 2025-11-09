/**
 * A type-safe React wrapper for the HTML `<button>` element.
 *
 * @remarks
 * Clickable button.
 *
 * - Use type="button" for actions, type="submit" for forms
 * - Default type is "submit" - be explicit!
 * - Prefer Button over div with onClick for accessibility
 *
 * **Pro Tips:**
 * - Always specify type attribute
 * - Use disabled instead of onClick conditions
 *
 * @example
 * ```tsx
 * <Button type="submit">Save</Button>
 *
 * <Button type="button" onClick={handleClick}>Cancel</Button>
 *
 * <Button disabled={isLoading}>Loading...</Button>
 * ```
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements['button']
>((props, ref) => {
  return <button ref={ref} {...props} />;
});

Button.displayName = 'Button';
