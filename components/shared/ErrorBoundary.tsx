import React, { Component, ErrorInfo, ReactNode} from "react";


type PropsType = { 
    children: ReactNode
}

type StateType = { 
    hasError: boolean 
}

class ErrorBoundary extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.warn(`${error}: ${errorInfo}`);        
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
