const HUE_BRIDGE_IP = "192.168.1.2";
const HUE_USERNAME = "ph5gqVla3tv7-g2zB2G4lu9-6yyy9WQJ8Tcz1XpT";


/*
function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
  
	document.body.removeChild(element);
  }
  
  // Start file download.
  document.getElementById('trigger-overlay-5').addEventListener("click", function(){
	// Generate download of hello.txt file with some content
	var text = "1";
	var filename = "hello.txt";
	download(filename, text);
  }, false);
*/
const axios = require('axios');
(function() {
	/* Whoever is reading this I am so sorry, I got the code from Codrops but I couldn't figure
		out how to apply it 6 times efficiently because of event listener callbacks so here's 
		this horribly inefficient abomination. */

	var overlayIndices = [1, 2, 3, 4, 6];
	for (var index of overlayIndices) {
		(function(i) {
			var triggerBttn = document.getElementById( 'trigger-overlay-' + i ),
				overlay = document.getElementById( 'overlay-' + i ),
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

	var child = require('child_process').exec;
	var executablePath = "C:\\Windows\\System32\\osk.exe";
	document.getElementById('trigger-overlay-5').addEventListener('click', () => { 

        child(executablePath, function(err, data) {
			if(err){
			   console.error(err);
			   return;
			}
		 
			console.log(data.toString());
		});

        
    });
	
})();
