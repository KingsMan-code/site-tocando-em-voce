import { Music, Users, Palette, Mic, Guitar, Piano } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import logoModerna3 from '../assets/logos/logo_moderna_3.png'

const Projetos = () => {
  const projetos = [
    {
      title: 'Música para Todos',
      description: 'Programa de educação musical gratuita para crianças e adolescentes de 6 a 17 anos.',
      icon: Music,
      participants: '150+ alunos',
      duration: 'Ano todo',
      color: 'from-blue-500 to-blue-600',
      features: ['Aulas de violão', 'Teoria musical', 'Canto coral', 'Apresentações']
    },
    {
      title: 'Orquestra Jovem',
      description: 'Formação de uma orquestra com jovens talentos da comunidade.',
      icon: Guitar,
      participants: '40 músicos',
      duration: '6 meses',
      color: 'from-purple-500 to-purple-600',
      features: ['Instrumentos de corda', 'Sopros', 'Percussão', 'Regência']
    },
    {
      title: 'Arte e Cultura',
      description: 'Oficinas de artes visuais, teatro e dança para expressão criativa.',
      icon: Palette,
      participants: '80+ participantes',
      duration: 'Trimestral',
      color: 'from-red-500 to-red-600',
      features: ['Pintura', 'Teatro', 'Dança', 'Artesanato']
    },
    {
      title: 'Estúdio Comunitário',
      description: 'Espaço para gravação e produção musical dos alunos.',
      icon: Mic,
      participants: '25 artistas',
      duration: 'Permanente',
      color: 'from-green-500 to-green-600',
      features: ['Gravação', 'Mixagem', 'Produção', 'Distribuição']
    },
    {
      title: 'Piano Popular',
      description: 'Curso de piano focado em música popular brasileira.',
      icon: Piano,
      participants: '30 alunos',
      duration: '4 meses',
      color: 'from-yellow-500 to-orange-500',
      features: ['MPB', 'Samba', 'Bossa Nova', 'Pop']
    },
    {
      title: 'Coral da Comunidade',
      description: 'Grupo coral aberto para todas as idades da comunidade.',
      icon: Users,
      participants: '60 cantores',
      duration: 'Ano todo',
      color: 'from-indigo-500 to-purple-500',
      features: ['Repertório variado', 'Técnica vocal', 'Apresentações', 'Integração']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos Projetos
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Conheça as iniciativas que estão transformando vidas e 
                construindo um futuro melhor através da música e da arte.
              </p>
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <Link to="/contato">
                  Participe dos Projetos
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={logoModerna3} 
                alt="Projetos do Instituto" 
                className="w-64 h-64 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '6', label: 'Projetos Ativos' },
              { number: '385', label: 'Participantes' },
              { number: '50+', label: 'Apresentações/Ano' },
              { number: '15', label: 'Professores' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projetos em Andamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada projeto é cuidadosamente desenvolvido para atender as necessidades 
              específicas da nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${projeto.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <projeto.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {projeto.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {projeto.description}
                  </p>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-600 font-medium">{projeto.participants}</span>
                    <span className="text-gray-500">{projeto.duration}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Atividades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projeto.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto dos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossos projetos estão fazendo a diferença na vida das pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Transformação Social</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossos projetos vão além do ensino musical. Eles promovem inclusão social, 
                  desenvolvem autoestima, criam oportunidades de trabalho e fortalecem os 
                  laços comunitários.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Melhoria na autoestima</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Melhoria escolar</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
                  <div className="text-sm text-gray-600">Seguem carreira musical</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Satisfação das famílias</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-purple-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    "O Instituto mudou a vida do meu filho. Ele encontrou sua paixão 
                    na música e hoje é uma pessoa mais confiante e feliz."
                  </p>
                  <p className="font-semibold text-gray-900">- Maria, mãe de aluno</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    "Aqui aprendi não só música, mas valores importantes como 
                    disciplina, trabalho em equipe e respeito."
                  </p>
                  <p className="font-semibold text-gray-900">- João, 16 anos</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic mb-4">
                    "O projeto me deu a oportunidade de descobrir meu talento 
                    e hoje trabalho como professora de música."
                  </p>
                  <p className="font-semibold text-gray-900">- Ana, ex-aluna</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Participar dos Nossos Projetos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Seja como aluno, voluntário ou apoiador, há sempre uma forma 
            de fazer parte da nossa missão.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link to="/contato">
              Entre em Contato Conosco
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Projetos

