import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoModerna1 from '../assets/logos/logo_moderna_1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoModerna1} 
                alt="Instituto Tocando Em Você" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-lg font-bold">Instituto Tocando Em Você</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformando vidas através da música, cultura e educação. 
              Conectando pessoas e construindo um futuro melhor para nossa comunidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/historia" className="text-gray-300 hover:text-white transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contato@tocandoemvoce.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © 2024 Instituto Tocando Em Você. Feito com 
            <Heart className="h-4 w-4 text-red-500 mx-1" /> 
            para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

