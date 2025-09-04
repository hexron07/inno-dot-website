import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Filter out React DevTools related errors
    if (
      process.env.NODE_ENV === "development" &&
      (error.message?.includes("React DevTools") ||
        error.message?.includes("__REACT_DEVTOOLS_GLOBAL_HOOK__"))
    ) {
      this.setState({ hasError: false });
      return;
    }

    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          className="min-h-screen bg-black text-white flex items-center justify-center p-4"
          data-oid="mvivxq1"
        >
          <Card
            className="glass-card-enhanced border-red-500/30 max-w-2xl w-full"
            data-oid="me_08if"
          >
            <CardContent className="p-8 text-center" data-oid="njvkc4p">
              <div className="flex justify-center mb-6" data-oid="136sfhe">
                <div
                  className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center"
                  data-oid="i4s7y_-"
                >
                  <AlertTriangle
                    className="w-10 h-10 text-red-400"
                    data-oid="0-cue79"
                  />
                </div>
              </div>

              <h1
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                data-oid="_gx0_im"
              >
                Oops! Something went wrong
              </h1>

              <p
                className="text-gray-300 mb-8 text-lg leading-relaxed"
                data-oid="mg5iqrr"
              >
                We apologize for the inconvenience. An unexpected error has
                occurred. Please try refreshing the page or return to the
                homepage.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="d1--gjr"
              >
                <Button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  data-oid="8z_1qv0"
                >
                  <RefreshCw className="w-4 h-4 mr-2" data-oid="q-fkbqf" />
                  Try Again
                </Button>

                <Button
                  onClick={this.handleRefresh}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/15 px-6 py-3 rounded-xl font-semibold"
                  data-oid="hrgrmjb"
                >
                  <RefreshCw className="w-4 h-4 mr-2" data-oid="h3bb-cy" />
                  Refresh Page
                </Button>

                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/15 px-6 py-3 rounded-xl font-semibold"
                  data-oid="vqtiy7t"
                >
                  <Home className="w-4 h-4 mr-2" data-oid="6rzbjot" />
                  Go Home
                </Button>
              </div>

              {/* Development error details */}
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-8 text-left" data-oid=".mx4wv_">
                  <summary
                    className="cursor-pointer text-red-400 font-semibold mb-4 hover:text-red-300"
                    data-oid="m8ws9tk"
                  >
                    Technical Details (Development Only)
                  </summary>
                  <div
                    className="bg-black/50 p-4 rounded-lg border border-red-500/30"
                    data-oid="pz.ve4."
                  >
                    <h3
                      className="text-red-400 font-semibold mb-2"
                      data-oid="apvciqv"
                    >
                      Error:
                    </h3>
                    <pre
                      className="text-sm text-gray-300 mb-4 overflow-auto"
                      data-oid="muc25nc"
                    >
                      {this.state.error.message}
                    </pre>

                    <h3
                      className="text-red-400 font-semibold mb-2"
                      data-oid="zgsk.5z"
                    >
                      Stack Trace:
                    </h3>
                    <pre
                      className="text-xs text-gray-400 overflow-auto"
                      data-oid="7r8fhvg"
                    >
                      {this.state.error.stack}
                    </pre>

                    {this.state.errorInfo && (
                      <>
                        <h3
                          className="text-red-400 font-semibold mb-2 mt-4"
                          data-oid="64.r:bo"
                        >
                          Component Stack:
                        </h3>
                        <pre
                          className="text-xs text-gray-400 overflow-auto"
                          data-oid="pyt-ze4"
                        >
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </>
                    )}
                  </div>
                </details>
              )}
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
