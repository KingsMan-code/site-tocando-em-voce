import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import logoModerna4 from '../assets/logos/logo_moderna_4.png'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fale Conosco
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Estamos aqui para ouvir você. Entre em contato conosco para 
                tirar dúvidas, participar dos projetos ou conhecer nosso trabalho.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={logoModerna4} 
                alt="Contato Instituto" 
                className="w-64 h-64 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envie sua Mensagem
                </CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                      <p className="text-gray-600">contato@tocandoemvoce.org</p>
                      <p className="text-gray-600">projetos@tocandoemvoce.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                      <p className="text-gray-600">(11) 3456-7890</p>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Rua da Música, 123<br />
                        Bairro Cultural<br />
                        São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Redes Sociais
                  </CardTitle>
                  <p className="text-gray-600">
                    Siga-nos nas redes sociais para acompanhar nossos projetos.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Youtube className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Mapa interativo</p>
                      <p className="text-sm text-gray-400">Rua da Música, 123 - São Paulo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Como posso me inscrever nos projetos?',
                answer: 'Entre em contato conosco através do formulário ou telefone. Faremos uma avaliação e te orientaremos sobre o melhor projeto para você.'
              },
              {
                question: 'Os cursos são gratuitos?',
                answer: 'Sim! Todos os nossos projetos são totalmente gratuitos para a comunidade, mantidos através de doações e parcerias.'
              },
              {
                question: 'Qual a idade mínima para participar?',
                answer: 'Temos projetos para todas as idades, desde crianças de 6 anos até adultos. Cada projeto tem suas especificidades.'
              },
              {
                question: 'Como posso ajudar como voluntário?',
                answer: 'Sempre precisamos de voluntários! Entre em contato e conversaremos sobre como você pode contribuir com seus talentos.'
              },
              {
                question: 'Vocês oferecem certificados?',
                answer: 'Sim, oferecemos certificados de participação para todos os alunos que completam nossos cursos e projetos.'
              },
              {
                question: 'Posso fazer doações?',
                answer: 'Claro! Aceitamos doações de instrumentos, equipamentos ou financeiras. Entre em contato para mais informações.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato

