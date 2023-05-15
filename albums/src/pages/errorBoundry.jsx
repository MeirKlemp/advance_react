import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error into the console because we don't have a server.
    console.error("Error:", error);
    console.error("ErrorInfo:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h4>Something went wrong!</h4>
          <p>Try refreshing the website</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
