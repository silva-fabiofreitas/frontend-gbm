import { BsTypeH1 } from 'react-icons/bs'
import '../globals.css'
import Sidebar from '@/components/sidebar/Sidebar'
export default function RootLayout({ children }) {
  return (
    <div className={`flex m-2 gap-6`}>
      <Sidebar className={'flex w-60 rounded-md shadow-sm bg-gray-600 h-[calc(100vh_-_200px)]'} />
      {children}
    </div>
  )
}
