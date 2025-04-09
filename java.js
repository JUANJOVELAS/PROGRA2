function mostrar() {
    const info = document.getElementById("info");
    info.classList.toggle("oculto");
  }
  
  fetch("https://rickandmortyapi.com/api/character?page=2")
    .then(respuesta => respuesta.json())
    .then(datos => {
      const tarjetas = document.getElementById("tarjetas");
      datos.results.slice(0, 10).forEach(personaje => { 
        const collapseId = `collapse-${personaje.id}`;
        
        const tarjeta = `
          <div class="columna">
            <div class="tarjeta-personaje">
              <img src="${personaje.image}" class="imagen-js" alt="${personaje.name}">
              <div class="cuerpo">
                <h5 class="nombre">${personaje.name}</h5>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                  Ver más información
                </button>
                <div class="collapse mt-2" id="${collapseId}">
                  <p class="texto">Especie: ${personaje.species}</p>
                  <p class="texto">Estado: ${personaje.status}</p>
                </div>
              </div>
            </div>
          </div>`;
        
        tarjetas.innerHTML += tarjeta;
      });
    })
    .catch(error => {
      console.error("Error al cargar los datos: ", error);
    });
  