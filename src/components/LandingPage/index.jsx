import Image from 'next/image'
import styles from './LandingPage.module.css'
import Logo from '../../../public/barbearia-logo.png'
import Lua from '../../../public/moon.png'
import Sol from '../../../public/sun.png'
import { useState } from 'react'

export default function LandingPage() {
  const dark = "Dark";
  const light = "Light";
  const [mode, setMode] = useState(true);

  function trocarTema() {
    setMode(!mode)
  }

  return (
    <section className={`${styles.landpage_container} ${mode ? "light-mode" : "dark-mode"}`}>
      <header>
        <div className={styles.header}>
          <Image alt='Imagem' src={Logo} className={styles.logo}/>
          <button onClick={trocarTema}>
            <Image alt='Imagem' src={mode ? Lua : Sol} className={styles.icon}/> {mode ? dark : light}
          </button>
        </div>
      </header>
      <section className={styles.banner}></section>
      <section className={styles.body}>
        <h1>Bem-vindo a Barber Shop</h1>
        <p className={styles.bold}>
          Nossa barbearia sempre oferece profissionais de qualidade e
          estamos prontos para lidar com suas maiores expectativas.
        </p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal.
          Aqui temos uma equipe premiada que demonstrou o talento
          de mestres barbeiros em vários concursos de estilo.
          Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
        </p>
        <p className={styles.fantasy}>S. Kelly</p>
      </section>
    </section>
  )
}