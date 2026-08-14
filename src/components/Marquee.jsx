import {
  Layers,
  Code2,
  Smartphone,
  Server,
  Cpu,
  Globe,
  FileCode,
  Palette,
  Database,
  Table,
  CheckCircle2,
  Terminal,
  Send
} from 'lucide-react'

const brands = [
  { Icon: Layers, name: 'Next.js' },
  { Icon: Code2, name: 'React.js' },
  { Icon: Smartphone, name: 'React Native Expo' },
  { Icon: Server, name: 'Node.js' },
  { Icon: Cpu, name: 'Express.js' },
  { Icon: Globe, name: 'JavaScript' },
  { Icon: FileCode, name: 'TypeScript' },
  { Icon: Terminal, name: 'Tailwind CSS' },
  { Icon: Palette, name: 'Figma' },
  { Icon: Database, name: 'Supabase' },
  { Icon: Table, name: 'MySQL' },
  { Icon: Send, name: 'Postman (API Testing)' },
]

const Marquee = () => {
  // Duplicate for infinite scroll
  const items = [...brands, ...brands]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((brand, i) => {
          const ItemIcon = brand.Icon
          return (
            <div className="marquee-item" key={i}>
              <ItemIcon size={16} color="var(--accent-bright)" />
              {brand.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Marquee
