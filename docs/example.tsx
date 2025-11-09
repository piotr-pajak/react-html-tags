/**
 * Example usage of @olympo/react-html-tags
 *
 * This file demonstrates how to use the type-safe HTML tag components
 * with full TypeScript support and ref forwarding.
 */

import { Button, Div, Input, Span } from '@olympo/react-html-tags';

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  // Focus the email input on mount
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Div className="login-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <Div className="form-group">
          <Span className="label">Email:</Span>
          <Input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email address"
          />
        </Div>

        <Div className="form-group">
          <Span className="label">Password:</Span>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            aria-label="Password"
            minLength={8}
          />
        </Div>

        <Button
          type="submit"
          className="btn-primary"
          disabled={!email || !password}
        >
          Log In
        </Button>
      </form>
    </Div>
  );
}

function Card() {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log('Card clicked!', cardRef.current);
  };

  return (
    <Div
      ref={cardRef}
      className="card"
      onClick={handleClick}
      role="article"
      aria-labelledby="card-title"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'pointer',
      }}
    >
      <Span id="card-title" className="card-title" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Card Title
      </Span>
      <Div className="card-content">
        <Span>This is a simple card component built with type-safe HTML tags.</Span>
      </Div>
    </Div>
  );
}

function InteractiveButton() {
  const [count, setCount] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setCount((prev) => prev + 1);

    // Access the native button element
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = 'scale(1)';
        }
      }, 100);
    }
  };

  return (
    <Div>
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className="counter-button"
        aria-label={`Clicked ${count} times`}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          transition: 'transform 0.1s ease',
        }}
      >
        Clicked {count} times
      </Button>
    </Div>
  );
}

// Export components for use in your app
export { LoginForm, Card, InteractiveButton };
