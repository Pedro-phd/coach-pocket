import DashMenu from './components/dash-menu'

function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-screen flex flex-col gap-2">
      <DashMenu />
      <div className="w-full max-w-5xl mx-auto h-full ">{children}</div>
    </div>
  )
}

export default DashLayout
