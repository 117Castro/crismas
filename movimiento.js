        
        
        // bueno esta parte me ayude con IA pq no tenia tiemo por estar hacciendo PaymentResponsey pos para mas rapido use 
        // una herramienta y aunque es trampa me ayudo a acelerar el proceso de CredentialsContainer.
        
        
        
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = 'wow';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 10000);
        }

        setInterval(createSnowflake, 200);
        
