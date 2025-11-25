// form-validation.js
// Basic validation, phone mask, feedback
const form = document.querySelector('.contact-form');
const feedback = document.getElementById('formFeedback');
const phoneInput = document.getElementById('telefone');

if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = value;
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = phoneInput?.value.trim() || '';
    const mensagem = document.getElementById('mensagem').value.trim();
    const submitBtn = document.getElementById('formSubmit');

    if (!nome || !email || !telefone || !mensagem) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.style.color = 'var(--vermelho-principal)';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = 'Enviando...';

    setTimeout(() => {
      feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      feedback.style.color = 'green';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = 'Enviar Mensagem';
    }, 800);
  });
}
