import React, { Component } from "react";

import "./style.css";

class Loader extends Component {
    render() {
        return (
            <div className="root">
                <div className="loader">
                    <div className="ball">
                        <div className="innerBall" />
                    </div>
                    <div className="ball">
                        <div className="innerBall" />
                    </div>
                    <div className="ball">
                        <div className="innerBall" />
                    </div>
                    <div className="ball">
                        <div className="innerBall" />
                    </div>
                    <div className="ball">
                        <div className="innerBall" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;
