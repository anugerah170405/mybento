import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react'

import './App.css'

import { BentoCard } from './components/BentoCard'
import { ButtonBox } from './components/ButtonBox'
import { Logo } from './components/Logo'
import { Logo2 } from './components/Logo2'
import { MiniCard } from './components/MiniCard'
import { ListTile } from './components/ListTile'

import {
  SiFlutter,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

function App() {
  const buttons = [
    {
      icon: <ArrowUp />,
    },
    {
      icon: <ArrowDown />,
    },
  ]

  const mydata = [
    { label: 'Nama', value: 'Anugerah Gari' },
    { label: 'Angkatan', value: '2024' },
    { label: 'Fakultas', value: 'Fakultas Ilmu Komputer' },
    { label: 'Program Studi', value: 'Informatika' },
    { label: 'Semester', value: 'Semester 5' },
    {
      label: 'Pengalaman',
      value: 'Bekerja di bidang maintenance sejak Mei',
    },
  ]

  const technologies = [
    {
      name: 'Python',
      icon: SiPython,
      color: '#3776AB',
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
      color: '#02569B',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
    },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4">
        <Logo size={24} />

        <ButtonBox Icon={<ArrowUpRight />} />
      </nav>

      {/* Main */}
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 p-6">
        
        {/* Title */}
        <section id="title" className="p-2">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-2xl font-medium md:text-4xl">
              About ⎯
              <span className="ml-2 text-violet-500">
                Me
              </span>
            </h1>

            <p className="max-w-2xl text-center text-base tracking-[0.27em] text-gray-500 md:text-lg">
              My Name | Bio Data | React | Web Front End
            </p>
          </div>
        </section>

        {/* Bento */}
        <section id="bento" className="w-full">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">

            {/* Logo */}
            <BentoCard
              span="md:col-span-1 md:row-span-2"
              className="flex items-center justify-center"
            >
              <Logo2 size={80} />
            </BentoCard>

            {/* Quote */}
            <BentoCard
              span="md:col-span-1 md:row-span-1"
              className="relative overflow-hidden"
            >
              <div className="w-[108px]">
                <h3 className="text-base">
                  No Vibes. Just Code.
                </h3>

                <p className="mt-4 text-sm text-gray-500">
                  — Anugerah Gari
                </p>
              </div>

              <div className="absolute bottom-[-48%] right-[-24%] w-[80%]">
                <img
                  src="/src/assets/me.png"
                  alt="Anugerah Gari"
                  className="w-full object-contain"
                />
              </div>
            </BentoCard>

            {/* Biodata */}
            <BentoCard
              span="md:col-span-2 md:row-span-2"
              actions={buttons.map((item, index) => (
                <ButtonBox
                  key={index}
                  Icon={item.icon}
                />
              ))}
            >
              <div className="flex max-h-80 flex-col gap-2 overflow-y-auto">
                {mydata.map((item) => (
                  <ListTile
                    key={item.label}
                    label={item.label}
                  >
                    {item.value}
                  </ListTile>
                ))}
              </div>
            </BentoCard>

            {/* Universitas */}
            <BentoCard
              span="md:col-span-1 md:row-span-2"
              className="relative overflow-hidden bg-gradient-to-b from-violet-300 via-violet-500 to-violet-700"
            >
              <div>
                <h3 className="text-xl text-white">
                  UNIVERSITAS KLABAT
                </h3>

                <p className="mt-4 text-sm text-white">
                  — Pathway to excellence
                </p>
              </div>

              <div className="absolute bottom-[-5%] left-1/2 w-[80%] -translate-x-1/2">
                <img
                  src="/src/assets/plakat.png"
                  alt="Universitas Klabat"
                  className="w-full object-contain"
                />
              </div>
            </BentoCard>

            {/* Tahun */}
            <BentoCard
              span="md:col-span-1 md:row-span-1"
              className="flex items-center justify-center bg-gradient-to-b from-violet-100 to-violet-300"
            >
              <h2 className="text-5xl text-violet-400">
                2026
              </h2>
            </BentoCard>

            {/* My Skill */}
            <BentoCard
              span="md:col-span-2 md:row-span-1"
              className="flex items-center justify-center gap-2 overflow-x-auto"
            >
              {technologies.map(
                ({ name, icon: Icon, color }) => (
                  <MiniCard key={name}>
                    <Icon
                      size={32}
                      color={color}
                    />
                  </MiniCard>
                )
              )}
            </BentoCard>

          </div>
        </section>
      </main>
    </>
  )
}

export default App