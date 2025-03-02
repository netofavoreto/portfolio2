// Função para mudar a cor do traje do astronauta
function mudarCor() {
    const astronauta = document.getElementById('astronauta');
    const cores = ['#2f4f4f', '#4f7f4f', '#7f4f4f', '#2f4f7f', '#7f7f4f'];
    
    // Seleciona uma cor aleatória da lista
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Aplica a cor ao traje (corpo, braços, pernas, botas)
    astronauta.querySelectorAll('.corpo, .braço, .perna, .botas').forEach(part => {
        part.style.backgroundColor = corAleatoria;
    });
}

// Função para mover o astronauta para a direita
function moverAstronauta() {
    const astronauta = document.getElementById('astronauta');
    astronauta.style.transform = 'translateX(200px)';
    
    // Após 1 segundo, retornar à posição inicial
    setTimeout(() => {
        astronauta.style.transform = 'translateX(0)';
    }, 1000);
}
const spaceTexture = new THREE.TextureLoader().load('space_background.jpg');
scene.background = spaceTexture;
