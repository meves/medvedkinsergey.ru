export const Preloader = () => {
    return (
        <div className="loading">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>

            <style jsx>{`
                .circle {
                    display:  inline-block;
                    width:  0.5em;
                    height:  0.5em;
                    border-radius: 50%;
                    animation-name: circle;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
                .circle:nth-child(1) {
                    background-color: yellow;
                    animation-delay: 0;
                }
                .circle:nth-child(2) {
                    background-color: red;
                    animation-delay: 0.2s;
                }
                .circle:nth-child(3) {
                    background-color: green;
                    animation-delay: 0.4s;
                }
                .circle:nth-child(4) {
                    background-color: blue;
                    animation-delay: 0.6s;
                }
                .circle:nth-child(5) {
                    background-color: violet;
                    animation-delay: 0.8s;
                }
                /*
                * animation 
                */
                @keyframes circle {
                    from {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.2;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    )
}

