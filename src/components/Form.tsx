/**
 * A type-safe React wrapper for the HTML `<form>` element.
 *
 * @remarks
 * This component accepts all native HTML form attributes and forwards refs to the underlying DOM element.
 * It provides full TypeScript support for all standard form properties including onSubmit, action, method, etc.
 *
 * @example
 * ```tsx
 * <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
 *   <Input type="email" name="email" required />
 *   <Button type="submit">Submit</Button>
 * </Form>
 *
 * <Form action="/api/login" method="post">
 *   <Input type="text" name="username" />
 * </Form>
 * ```
 */
export const Form = React.forwardRef<
  HTMLFormElement,
  JSX.IntrinsicElements['form']
>((props, ref) => {
  return <form ref={ref} {...props} />;
});

Form.displayName = 'Form';
