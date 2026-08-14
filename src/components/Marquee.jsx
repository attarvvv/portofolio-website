import {
  Code2,
  Server,
  Globe,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Box,
  GitBranch,
  Palette,
  ShieldCheck,
  Terminal
} from 'lucide-react'

const brands = [
  { Icon: Code2, name: 'React JS' },
  { Icon: Server, name: 'Node.js' },
  { Icon: Globe, name: 'TypeScript' },
  { Icon: Layers, name: 'Next.js' },
  { Icon: Smartphone, name: 'React Native' },
  { Icon: Cpu, name: 'Laravel' },
  { Icon: Database, name: 'PostgreSQL' },
  { Icon: Box, name: 'MongoDB' },
  { Icon: Palette, name: 'Figma' },
  { Icon: Terminal, name: 'Tailwind CSS' },
  { Icon: ShieldCheck, name: 'Docker' },
  { Icon: GitBranch, name: 'Git & GitHub' },
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
