import Navbar from "../organisms/Navbar"

export default function StoreTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}