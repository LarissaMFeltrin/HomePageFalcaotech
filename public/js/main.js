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

// Animação de entrada das seções ao rolar a página
const blocos = document.querySelectorAll('.secao__cabecalho, .sintomas, .especialidade, .peca, .sobre__texto, .sobre__fotos, .depoimento, .contato__dados');

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
