

const apiUrl = 'https://api.sampleapis.com/coffee/iced';

        async function fetchRandomCoffeeImage() {
            try { 
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log('API response data:', data);
                
              
                const randomIndex = Math.floor(Math.random() * data.length);
                const imageUrl = data[randomIndex]?.image;

                
                console.log('Selected Image URL:', imageUrl);

                
                const coffeeImage = document.getElementById('coffeeImage');
                if (coffeeImage && imageUrl) {
                    coffeeImage.src = imageUrl;
                    console.log('Image loaded successfully');
                } else {
                    console.error('Unable to fetch image or invalid image URL');
                }
            } catch (error) {
                console.error('Error fetching coffee image:', error);
            }
        }

        document.addEventListener('DOMContentLoaded', fetchRandomCoffeeImage);