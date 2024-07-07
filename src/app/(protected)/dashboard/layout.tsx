function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="w-full h-screen">{children}</div>
}

export default DashLayout
