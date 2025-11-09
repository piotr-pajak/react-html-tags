/**
 * A type-safe React wrapper for the HTML `<form>` element.
 *
 * @remarks
 * Interactive form for user input.
 *
 * - Wrap all related form controls
 * - Use onSubmit instead of button onClick for better accessibility
 * - Always prevent default in onSubmit handler
 *
 * **Pro Tips:**
 * - Always pair inputs with labels
 * - Use fieldset for grouped controls
 *
 * @example
 * ```tsx
 * <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}><Input /></Form>
 *
 * <Form method="post" action="/api/submit">...</Form>
 * ```
 */
export const Form = React.forwardRef<
  HTMLFormElement,
  JSX.IntrinsicElements['form']
>((props, ref) => {
  return <form ref={ref} {...props} />;
});

Form.displayName = 'Form';
