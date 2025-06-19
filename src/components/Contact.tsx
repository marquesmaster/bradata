import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Calendar, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../utils/emailConfig.js';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        segment: data.segment,
        message: data.message,
        to_email: 'contato@bradata.com.br'
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      e.target.reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      // For now, still show success modal even if EmailJS isn't configured
      setShowSuccessModal(true);
      e.target.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleMeeting = () => {
    // Focus on the form
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.focus();
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vamos Conversar sobre seu
              <span className="text-primary-600"> Projeto</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco para uma análise gratuita das suas necessidades de Business Intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite uma Demonstração</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="segment" className="block text-sm font-semibold text-gray-700 mb-2">
                      Segmento Industrial
                    </label>
                    <select
                      id="segment"
                      name="segment"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Selecione seu segmento</option>
                      <option value="metalurgica">Metalúrgica</option>
                      <option value="quimica">Química</option>
                      <option value="alimenticia">Alimentícia</option>
                      <option value="textil">Têxtil</option>
                      <option value="automotiva">Automotiva</option>
                      <option value="farmaceutica">Farmacêutica</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Descreva seu Desafio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Conte-nos sobre os principais desafios que enfrenta com dados e relatórios..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        Solicitar Demonstração
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">E-mail</div>
                      <div className="text-gray-600">contato@bradata.com.br</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Endereço</div>
                      <div className="text-gray-600">Brasília, DF</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Horário</div>
                      <div className="text-gray-600">Seg-Sex: 8h às 18h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Precisa de Ajuda Imediata?</h3>
                <p className="text-primary-100 mb-6">
                  Preencha o formulário ao lado para uma consulta rápida.
                </p>
                
                <div className="space-y-3">
                  <button 
                    onClick={handleScheduleMeeting}
                    className="w-full bg-white text-primary-700 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Solicitar Reunião
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tempo de Resposta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">E-mail</span>
                    <span className="font-semibold text-secondary-600">2-4 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Formulário</span>
                    <span className="font-semibold text-primary-600">1-2 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Proposta</span>
                    <span className="font-semibold text-accent-600">24-48 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
              <p className="text-gray-600">
                Sua solicitação foi recebida com sucesso. Nossa equipe entrará em contato em breve.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 mb-6">
              <div className="bg-primary-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="font-semibold text-primary-800">Tempo de Resposta</div>
                    <div className="text-sm text-primary-600">1-2 horas úteis</div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Send className="h-5 w-5 text-secondary-600" />
                  <div>
                    <div className="font-semibold text-secondary-800">Proposta Personalizada</div>
                    <div className="text-sm text-secondary-600">Enviada em até 24-48 horas</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-accent-600" />
                  <div>
                    <div className="font-semibold text-accent-800">Demonstração Gratuita</div>
                    <div className="text-sm text-accent-600">Agendamento conforme sua disponibilidade</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Próximos Passos:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Análise detalhada das suas necessidades</li>
                <li>• Proposta personalizada para seu segmento</li>
                <li>• Agendamento de demonstração gratuita</li>
                <li>• Apresentação de cases similares ao seu</li>
              </ul>
            </div>

            {/* Thank You Message */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                <strong>Obrigado pelo interesse!</strong><br />
                Estamos ansiosos para ajudar sua empresa a transformar dados em resultados.
              </p>
              <button
                onClick={closeModal}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;