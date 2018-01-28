import React from 'react';
import Particles from 'react-particles-js';

export const Home = (props) => {
    return(
        <div>
            <div className="stars-box">
                <Particles params={{
                    "particles": {
                        "number": {
                        "value": 350
                        },
                        "shape": {
                            "type": "circle",
                            "image": {
                                "src": "img/github.svg",
                                "width": 180,
                                "height": 180
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "bottom"
                        },
                    }
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}/>
            </div>  
        </div>
    )
}