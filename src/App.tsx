import { ArrowDown, ArrowUp, ArrowUpRight } from 'lucide-react'
import './App.css'
import { BentoCard } from './components/BentoCard'
import { ButtonBox } from './components/ButtonBox'
import { Logo } from './components/Logo'
import { Logo2 } from './components/Logo2'
import { MiniCard } from './components/MiniCard'
import { SiFlutter, SiJavascript, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { ListTile } from './components/ListTile'

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
    { label: 'Pengalaman', value: 'Bekerja di bidang maintenance sejak Mei' },
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4">
        <Logo size={24}></Logo>

        <ButtonBox Icon={<ArrowUpRight />} />

      </nav>
      <main className="mx-auto min-h-screen flex flex-col justify-center items-center max-w-6xl p-6 gap-8">
        <section id="title" className="p-2">
          <div className="flex flex-col items-center gap-6">
            <h1 className='text-2xl md:text-4xl font-medium'>About ⎯<span className='ml-2 text-violet-500'>Me</span></h1>
            <p className="max-w-2xl text-gray-500 text-base text-center md:text-lg tracking-[0.27em]">
              My Name | Bio Data | React | Web Front End
            </p>
          </div>
        </section>
        <section id="bento" className="">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <BentoCard col={1} row={2} className='flex justify-center items-center'>
              <Logo2 size={80}></Logo2>
            </BentoCard>

            <BentoCard className="relative overflow-hidden">
              <div className="w-[108px]">
                <h3 className="text-base">
                  No Vibes. Just Code.
                </h3>

                <p className="mt-4 text-sm text-gray-500">
                  — Anugerah Gari
                </p>
              </div>

              <div className="absolute w-[80%] right-[-24%] bottom-[-48%]">
                <img
                  src="/src/assets/me.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </BentoCard>

            <BentoCard col={2} row={2}
              actions={
                buttons.map((item, index) => (
                  <ButtonBox key={index} Icon={item.icon}></ButtonBox>
                ))
              }>
              <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
                {mydata.map((item) => (
                  <ListTile key={item.label} label={item.label}>
                    {item.value}
                  </ListTile>
                ))}
              </div>
            </BentoCard>

            <BentoCard row={2} className='bg-gradient-to-b from-violet-300 via-violet-500 to-violet-700 relative overflow-hidden'>
              <div>
                <h3 className="text-xl text-white">
                  UNIVERSITAS KLABAT
                </h3>

                <p className="mt-4 text-sm text-white">
                  — Pathway to excelence
                </p>
              </div>

              <div className="absolute bottom-[-5%] w-[80%] left-1/2 -translate-x-1/2">
                <img
                  src="/src/assets/plakat.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </BentoCard>

            <BentoCard className='flex justify-center items-center text-5xl bg-gradient-to-b from-violet-100 to-violet-300'>
              <h2 className='text-violet-400'>2026</h2></BentoCard>

            <BentoCard col={2} className='flex gap-2 justify-center items-center overflow-x-auto'>
              {technologies.map(({ name, icon: Icon, color }) => (
                <MiniCard key={name}>
                  <Icon size={32} color={color} />
                </MiniCard>
              ))}
            </BentoCard>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
