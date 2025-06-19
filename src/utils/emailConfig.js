// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your service ID, template ID, and public key
// 6. Replace the values below

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_bradata', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'lMCyCCSvTYt2ILsd5' // Your EmailJS public key
};

// Email template variables that will be sent:
// - from_name: Nome do usuário
// - from_email: Email do usuário
// - company: Empresa do usuário
// - segment: Segmento industrial
// - message: Mensagem do usuário
// - to_email: Email de destino (contato@bradata.com.br)

// Example EmailJS template:
/*
Assunto: Nova solicitação de demonstração - {{company}}

Olá equipe Bradata,

Uma nova solicitação de demonstração foi recebida através do site:

Nome: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Segmento: {{segment}}

Mensagem:
{{message}}

---
Este email foi enviado automaticamente através do formulário de contato do site.
*/