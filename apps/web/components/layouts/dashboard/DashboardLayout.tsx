import { Footer } from './layout-components'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={`flex h-screen flex-col items-center justify-between px-4`}>
      <div className='flex flex-grow flex-col justify-center'>{children}</div>
      <Footer />
    </div>
  )
}
