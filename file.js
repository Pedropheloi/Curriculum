const camadaParticulas = document.createElement('div');
camadaParticulas.className = 'particulas';
camadaParticulas.setAttribute('aria-hidden', 'true');
document.body.prepend(camadaParticulas);

const coresParticulas = ['#38bdf8', '#818cf8', '#c084fc'];
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

for (let i = 0; i < 100; i += 1) {
    const particula = document.createElement('span');
    particula.className = 'particula';
    particula.style.color = coresParticulas[i % coresParticulas.length];
    particula.style.setProperty('--tamanho', `${Math.random() * 2 + 1}px`);
    particula.style.left = `${Math.random() * window.innerWidth}px`;
    particula.style.top = `${Math.random() * window.innerHeight}px`;
    camadaParticulas.appendChild(particula);

    if (movimentoReduzido) {
        particula.style.opacity = `${Math.random() * 0.45 + 0.25}`;
        continue;
    }

    const moverParticula = () => {
        const duracao = Math.random() * 5 + 7;
        particula.style.transitionDuration = `${duracao}s, ${duracao}s, 2s`;
        particula.style.left = `${Math.random() * camadaParticulas.clientWidth}px`;
        particula.style.top = `${Math.random() * camadaParticulas.clientHeight}px`;
        particula.style.opacity = `${Math.random() * 0.55 + 0.25}`;
        window.setTimeout(moverParticula, duracao * 1000);
    };

    window.setTimeout(moverParticula, Math.random() * 1000);
}
