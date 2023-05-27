import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/template/Header'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Nave from '../components/template/Nave'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlinePlusSquare, AiOutlineBarChart} from 'react-icons/ai'
import {MdOutlineRoute} from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const linksHeader = [
    {name:'Inicio', path:'home', icon:<BiHomeAlt2/>},
    {name:'Cadastro', path:'cadastro', icon:<AiOutlinePlusSquare/>},
    {name:'Análise de dados', path:'dashboard', icon:<AiOutlineBarChart/>},
    {name:'Alocação das Unidades Móvel', path:'alocacao-unidade-movel', icon:<MdOutlineRoute/>},
  ]
  const linksFooter = [
    {name:'Contato', path:'#'},
    {name:'Equipe', path:'#'},
    {name:'Doação', path:'#'},

  ]
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='app'>
                <Logo style='bg-neutral-800'></Logo>
                <Header style='bg-neutral-800'>
                    <Nave links={linksHeader} className='flex'></Nave>
                </Header>
                <Main style='bg-stone-100'>
                  {children}
                </Main>
                <Footer style='bg-neutral-800 flex'>
                    <Nave className='bg-neutral-800 flex' links={linksFooter}></Nave>
                </Footer>
            </div>
        
      </body>
    </html>
  )
}
