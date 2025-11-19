document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.artifact-option');
    const infoDisplay = document.getElementById('info-display');

    // Lisab igale galeriikaardile klikkimise funktsiooni
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 1. Eemalda eelmine valik ja lisa uus
            galleryItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');

            // 2. Hangi detailne info HTML andme-atribuudist
            const title = this.getAttribute('data-title');
            const fullDescription = this.getAttribute('data-full-description');

            // 3. Uuenda info ala sisu
            infoDisplay.innerHTML = `
                <h4>${title}</h4>
                <p>${fullDescription}</p>
                <br>
                <p class="source-info">Valik tehti ArheoTuvastaja näidisgalerii abil. See on hariduslik hinnang, mis põhineb sinu antud kirjelduse esemete andmetel.</p>
            `;
            
            // Soovi korral saab lehte kerida info alale
            infoDisplay.scrollIntoView({ behavior: 'smooth' });
        });
    });
});