import React from 'react';
import Particles from 'react-particles-js';

function ParticlesP() {
    return (
        <div  style={{
            position: "absolute",
            top: 0,
            left: 0,
			width: "100%",
			height: "100%",
          }}>
<Particles
// you needed this line to make it expand
	height={window.outerHeight}
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        </div>
    )
}

export default ParticlesP;
