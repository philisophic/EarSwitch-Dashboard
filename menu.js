const HUE_BRIDGE_IP = "";
const HUE_USERNAME = "";

const axios = require('axios');

(function() {
	/* Whoever is reading this I am so sorry, I got the code from Codrops but I couldn't figure
		out how to apply it 6 times efficiently because of event listener callbacks so here's 
		this horribly inefficient abomination. */

	for (var index = 0; index < 6; index++) {
		(function(i) {
			var triggerBttn = document.getElementById( 'trigger-overlay-' + (i+1) ),
				overlay = document.getElementById( 'overlay-' + (i+1) ),
				closeBttn = overlay.querySelector( 'button.overlay-close' );
				transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				},
				transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
				support = { transitions : Modernizr.csstransitions };

			var toggleOverlay = function() {
				if( classie.has( overlay, 'open' ) ) {
					classie.remove( overlay, 'open' );
					classie.add( overlay, 'close' );
					var onEndTransitionFn = function( ev ) {
						if( support.transitions ) {
							if( ev.propertyName !== 'visibility' ) return;
							this.removeEventListener( transEndEventName, onEndTransitionFn );
						}
						classie.remove( overlay, 'close' );
					};
					if( support.transitions ) {
						overlay.addEventListener( transEndEventName, onEndTransitionFn );
					}
					else {
						onEndTransitionFn();
					}
				}
				else if( !classie.has( overlay, 'close' ) ) {
					classie.add( overlay, 'open' );
				}
			}

			triggerBttn.addEventListener( 'click', toggleOverlay );
			closeBttn.addEventListener( 'click', toggleOverlay );
		})(index);
	}



	const turnLightOnOrOff = async (lightId, on) => {
        const url = `http://${HUE_BRIDGE_IP}/api/${HUE_USERNAME}/lights/${lightId}/state`;
        try {
            return await axios.put(url, {
                on,
            });
        } catch (err) {
            console.error(err);
        }
    };




    document.querySelector('.lightOn').addEventListener('click', () => { 

        turnLightOnOrOff(3, true); //turn light 3 on

        
    }); 

    document.querySelector('.lightOff').addEventListener('click', () => { 

        turnLightOnOrOff(3, false); //turn light 3 on

        
    }); 

})();