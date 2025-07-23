import { Link } from 'react-router-dom'
import { ArrowRight, Music, Users, Heart, Star, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import logoModerna1 from '../assets/logos/logo_moderna_1.png'
import logoAquarela from '../assets/logos/logo_aquarela.png'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transformando Vidas Através da 
                <span className="text-yellow-300"> Música</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                O Instituto Tocando Em Você conecta pessoas, cultiva talentos e 
                constrói um futuro melhor através da educação musical e cultural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link to="/projetos">
                    Conheça Nossos Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/historia">
                    Nossa História
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={logoAquarela} 
                  alt="Instituto Tocando Em Você" 
                  className="w-80 h-80 object-contain filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Vidas Transformadas', icon: Users },
              { number: '15', label: 'Anos de História', icon: Star },
              { number: '25+', label: 'Projetos Realizados', icon: Music },
              { number: '100%', label: 'Amor e Dedicação', icon: Heart }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Fazemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos programas são desenvolvidos para criar oportunidades, 
              desenvolver talentos e fortalecer comunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Educação Musical',
                description: 'Oferecemos aulas de diversos instrumentos e teoria musical para todas as idades.',
                icon: Music,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Projetos Sociais',
                description: 'Desenvolvemos iniciativas que promovem inclusão social através da arte.',
                icon: Users,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Cultura e Arte',
                description: 'Preservamos e promovemos a cultura local através de eventos e apresentações.',
                icon: Heart,
                color: 'from-red-500 to-red-600'
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a nós nessa jornada de transformação. 
            Seja voluntário, apoie nossos projetos ou participe de nossas atividades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/contato">
                Entre em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/galeria">
                Ver Galeria
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

