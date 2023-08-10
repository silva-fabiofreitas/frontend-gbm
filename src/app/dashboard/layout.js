import { BsTypeH1 } from 'react-icons/bs'
import '../globals.css'
import Sidebar from '@/components/sidebar/Sidebar'
export default function RootLayout({ children }) {
  return (
    <div className={`p-4 flex gap-6 h-full`}>
      <Sidebar className={'flex w-60 rounded-md shadow-sm bg-neutral-400 h-full'} />
      {children}
    </div>
  )
}
