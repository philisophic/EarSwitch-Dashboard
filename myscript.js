const HUE_USERNAME = "";
const HUE_BRIDGE_IP = "";

const axios = require('axios');


(function() {

    /* Controlls hiding the Lights on and Light Off elements*/
    document.querySelector('.lightButton').addEventListener('click', () => { 

        var onLight = document.querySelector('.lightOn');
        var offLight = document.querySelector('.lightOff');

        if (onLight.style.display === 'none' && offLight.style.display === 'none'){
            onLight.style.display = 'inline-block';
            offLight.style.display = 'inline-block';

        } 
        else{
            onLight.style.display = "none";
            offLight.style.display = "none";
        }

    });
    
    
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