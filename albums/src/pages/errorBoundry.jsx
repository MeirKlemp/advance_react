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
        <div className="container">
          <h1>Something went wrong!</h1>
          <p className="error-msg">Try refreshing the website</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
