import React, {ReactNode} from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

function ErrorBoundary(props: ErrorBoundaryProps) {
  const [hasError, setState] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setState(true);
    };
  }, [hasError]);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }
  return props.children;
}

export default ErrorBoundary;
