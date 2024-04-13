const name = document.getElementById("poke-name");
        const image = document.getElementById("poke-img-display");
        const button = document.querySelector(".next-button");
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const randNum = Math.ceil(Math.random() * 1010)
            fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
                .then(response => response.json())
                .then(data =>{
                    image.src = data.sprites.other['official-artwork'].front_default;
                    name.innerHTML = data.name;
                })
        }) 