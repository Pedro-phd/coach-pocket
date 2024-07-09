import DashMenu from '@/components/dash-menu'
import Template from './template'

function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-screen bg-background flex">
      <DashMenu />
      <div className='w-full h-full py-2 pr-2 md:p-2'>
        <div className="w-full h-full border bg-white rounded-lg">
            {children}
          </div>
      </div>
    </div>
  )
}

export default DashLayout
