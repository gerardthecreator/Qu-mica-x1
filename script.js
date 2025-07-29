document.addEventListener('DOMContentLoaded', () => {
 function drawChalkboardEffect() {
  const canvases = document.querySelectorAll('.chalkboard-canvas');
  canvases.forEach(canvas => {
   const ctx = canvas.getContext('2d');
   const rect = canvas.getBoundingClientRect();
   if (rect.width === 0 || rect.height === 0) return;
   canvas.width = rect.width;
   canvas.height = rect.height;
   ctx.fillStyle = '#FFFFFF';
   for (let i = 0; i < (canvas.width * canvas.height / 5000); i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
   }
  });
 }
 
 function init() {
  // Llamamos a la función principal que ahora contiene todos los problemas
  if (typeof resolverPrimeraMitad === 'function') {
   resolverPrimeraMitad();
  }
  
  // Damos un pequeño respiro para que el HTML se inserte antes de que MathJax actúe
  setTimeout(() => {
   drawChalkboardEffect();
   
   // --- LA CORRECCIÓN ESTÁ AQUÍ ---
   // Verificamos que MathJax y su nueva función existan antes de llamarla.
   if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
    // Le decimos a MathJax v3 que busque y formatee las nuevas ecuaciones.
    window.MathJax.typesetPromise();
   }
   // --- FIN DE LA CORRECCIÓN ---
   
  }, 100);
 }
 
 init();
 window.addEventListener('resize', drawChalkboardEffect);
});