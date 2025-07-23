import { Calendar, Users, Award, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import logoVintage from '../assets/logos/logo_vintage.png'

const Historia = () => {
  const timeline = [
    {
      year: '2009',
      title: 'O Início',
      description: 'Fundação do Instituto Tocando Em Você com o objetivo de levar música e cultura para comunidades carentes.',
      icon: Heart
    },
    {
      year: '2012',
      title: 'Primeiros Projetos',
      description: 'Lançamento dos primeiros programas de educação musical para crianças e adolescentes.',
      icon: Users
    },
    {
      year: '2015',
      title: 'Reconhecimento',
      description: 'Recebimento do primeiro prêmio de responsabilidade social pela transformação de vidas.',
      icon: Award
    },
    {
      year: '2018',
      title: 'Expansão',
      description: 'Ampliação das atividades para incluir teatro, dança e artes visuais.',
      icon: Calendar
    },
    {
      year: '2021',
      title: 'Era Digital',
      description: 'Adaptação para o mundo digital com aulas online e eventos virtuais durante a pandemia.',
      icon: Users
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Mais de 500 vidas transformadas e uma comunidade forte e unida pela música.',
      icon: Heart
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa História
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Uma jornada de 15 anos transformando vidas através da música, 
                cultura e educação. Conheça como tudo começou e onde chegamos.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={logoVintage} 
                alt="Instituto Tocando Em Você - História" 
                className="w-64 h-64 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transformar vidas através da música e da cultura, promovendo 
                  inclusão social e desenvolvimento humano em comunidades.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser referência em educação musical e cultural, criando 
                  oportunidades e construindo um futuro melhor para todos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Amor, dedicação, inclusão, excelência e compromisso com a 
                  transformação social através da arte e da educação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Linha do Tempo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe os principais marcos da nossa jornada de transformação social.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pessoas dedicadas que fazem a diferença todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Diretora Fundadora',
                description: 'Educadora musical com mais de 20 anos de experiência em projetos sociais.'
              },
              {
                name: 'João Santos',
                role: 'Coordenador Pedagógico',
                description: 'Especialista em educação musical infantil e desenvolvimento de talentos.'
              },
              {
                name: 'Ana Costa',
                role: 'Coordenadora de Projetos',
                description: 'Responsável pela gestão e desenvolvimento de novos projetos sociais.'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Historia

