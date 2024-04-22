document.addEventListener('DOMContentLoaded', function () {
    const areas = document.querySelectorAll('map area');
    const peopleInput = document.getElementById('people');

    areas.forEach(area => {
        area.addEventListener('click', function (event) {
            event.preventDefault(); // Öntanımlı tıklama davranışını engelle

            const price = parseInt(area.getAttribute('alt'));
            const numberOfPeople = parseInt(peopleInput.value);
            const totalPrice = price * numberOfPeople;
            displayPrice(totalPrice);
        });
    });

    function displayPrice(price) {
        const priceDisplay = document.getElementById('price-display');
        priceDisplay.textContent = 'Toplam Fiyat: ' + price + 'TL';
    }
});
