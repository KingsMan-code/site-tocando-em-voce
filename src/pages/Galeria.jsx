import { Camera, Image, Play, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PhotoGallery from '../components/PhotoGallery'
import logoModerna5 from '../assets/logos/logo_moderna_5.png'

const Galeria = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa Galeria
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Momentos especiais capturados ao longo da nossa jornada. 
                Veja como a música transforma vidas e cria memórias inesquecíveis.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={logoModerna5} 
                alt="Galeria do Instituto" 
                className="w-64 h-64 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Fotos', icon: Camera },
              { number: '50+', label: 'Eventos', icon: Image },
              { number: '25+', label: 'Vídeos', icon: Play },
              { number: '15', label: 'Anos de História', icon: Download }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeria Interativa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clique nas peças para revelar momentos especiais dos nossos projetos e apresentações.
            </p>
          </div>

          <div className="flex justify-center">
            <PhotoGallery />
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Categorias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore diferentes momentos da nossa história através de categorias organizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Aulas e Ensaios',
                description: 'Momentos do dia a dia nas nossas aulas de música e ensaios dos grupos.',
                icon: Camera,
                color: 'from-blue-500 to-blue-600',
                count: '150+ fotos'
              },
              {
                title: 'Apresentações',
                description: 'Registros das nossas apresentações e concertos ao longo dos anos.',
                icon: Play,
                color: 'from-purple-500 to-purple-600',
                count: '200+ fotos'
              },
              {
                title: 'Eventos Especiais',
                description: 'Festivais, formaturas e eventos comemorativos do instituto.',
                icon: Image,
                color: 'from-pink-500 to-red-500',
                count: '150+ fotos'
              }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                  <div className="text-sm font-medium text-purple-600">{category.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vídeos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Assista aos momentos mais marcantes dos nossos projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Concerto de Fim de Ano 2023',
                description: 'Apresentação especial com todos os grupos do instituto.',
                duration: '15:30'
              },
              {
                title: 'Orquestra Jovem em Ação',
                description: 'Performance da nossa orquestra jovem no teatro municipal.',
                duration: '8:45'
              },
              {
                title: 'Coral Infantil - Música Brasileira',
                description: 'Repertório especial de música popular brasileira.',
                duration: '12:20'
              },
              {
                title: 'Oficina de Instrumentos',
                description: 'Bastidores das nossas oficinas de construção de instrumentos.',
                duration: '6:15'
              },
              {
                title: 'Festival de Talentos 2023',
                description: 'Competição amigável entre os alunos do instituto.',
                duration: '22:10'
              },
              {
                title: 'Documentário - 15 Anos',
                description: 'História completa dos 15 anos do Instituto Tocando Em Você.',
                duration: '28:45'
              }
            ].map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Usar Nossas Fotos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar o uso de imagens para 
            fins educacionais ou de divulgação de projetos sociais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Solicitar Imagens
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Camera className="mr-2 h-5 w-5" />
              Ver Política de Uso
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Galeria

