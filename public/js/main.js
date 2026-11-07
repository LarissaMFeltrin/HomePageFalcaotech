// Menu do celular
const botaoMenu = document.querySelector('.topo__menu');
const menu = document.getElementById('menu');

function definirMenu(aberto) {
  menu.classList.toggle('aberto', aberto);
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

botaoMenu.addEventListener('click', () => definirMenu(!menu.classList.contains('aberto')));
menu.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) definirMenu(false);
});
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') definirMenu(false);
});

// Abre as artes de divulgação ampliadas
const ampliar = document.getElementById('ampliar');
const imagemAmpliada = ampliar.querySelector('img');

document.addEventListener('click', (evento) => {
  const arte = evento.target.closest('.arte');
  if (!arte) return;
  evento.preventDefault();
  imagemAmpliada.src = arte.href;
  imagemAmpliada.alt = arte.querySelector('img').alt;
  ampliar.showModal();
});
ampliar.addEventListener('click', (evento) => {
  if (evento.target === ampliar || evento.target.closest('.ampliar__fechar')) ampliar.close();
});

// Carrossel das artes: passa sozinho, com setas e arraste no celular
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.carrossel').forEach((carrossel) => {
  const trilho = carrossel.querySelector('.artes');
  const anterior = carrossel.querySelector('.carrossel__seta--anterior');
  const proxima = carrossel.querySelector('.carrossel__seta--proxima');
  let pausadoAte = 0;

  const rola = () => trilho.scrollWidth > trilho.clientWidth + 4;
  const noInicio = () => trilho.scrollLeft <= 4;
  const noFim = () => trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
  const passo = () => {
    const item = trilho.querySelector('li');
    const espaco = parseFloat(getComputedStyle(trilho).columnGap) || 0;
    return item ? item.getBoundingClientRect().width + espaco : trilho.clientWidth;
  };

  function avancar() {
    if (noFim()) trilho.scrollTo({ left: 0 });
    else trilho.scrollBy({ left: passo() });
  }
  function voltar() {
    if (noInicio()) trilho.scrollTo({ left: trilho.scrollWidth });
    else trilho.scrollBy({ left: -passo() });
  }
  function pausar() { pausadoAte = Date.now() + 8000; }
  function atualizarSetas() { anterior.hidden = proxima.hidden = !rola(); }

  proxima.addEventListener('click', () => { pausar(); avancar(); });
  anterior.addEventListener('click', () => { pausar(); voltar(); });
  ['pointerdown', 'wheel', 'touchstart'].forEach((tipo) => trilho.addEventListener(tipo, pausar, { passive: true }));
  trilho.querySelectorAll('img').forEach((imagem) => imagem.addEventListener('load', atualizarSetas));
  window.addEventListener('resize', atualizarSetas);
  atualizarSetas();

  if (!reduzirMovimento) {
    setInterval(() => {
      const ocupado = Date.now() < pausadoAte || document.hidden || ampliar.open
        || carrossel.matches(':hover') || carrossel.contains(document.activeElement);
      if (!ocupado && rola()) avancar();
    }, 4000);
  }
});

// Animação de entrada das seções ao rolar a página
const blocos = document.querySelectorAll('.secao__cabecalho, .reparos, .sobre__texto, .sobre__fotos, .depoimento, .contato__dados');

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px' });

  blocos.forEach((bloco) => {
    bloco.classList.add('revelar');
    observador.observe(bloco);
  });
}
