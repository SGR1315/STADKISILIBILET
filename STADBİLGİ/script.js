document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('map area');
    const peopleInput = document.getElementById('people');
    const buyButton = document.getElementById('buy-button'); 

    areas.forEach(area => {
        area.addEventListener('click', function (event) {
            event.preventDefault(); 

            const price = parseInt(area.getAttribute('alt'));
            const numberOfPeople = parseInt(peopleInput.value);
            const totalPrice = price * numberOfPeople;
            displayPrice(totalPrice);
        });
    });

    
    buyButton.addEventListener('click', function () {
        const totalPrice = parseInt(document.getElementById('price-display').textContent.replace(/\D/g,''));
        const numberOfPeople = parseInt(peopleInput.value);
        const message = 'Biletiniz alınmıştır. Kişi Sayısı: ' + numberOfPeople + ', Toplam Fiyat: ' + totalPrice + 'TL';
        alert(message);
    });

    function displayPrice(price) {
        const priceDisplay = document.getElementById('price-display');
        priceDisplay.textContent = 'Toplam Fiyat: ' + price + 'TL';
    }
});
