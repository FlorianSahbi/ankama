/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { companyB, carousel, menus_1, menus_2, sections, carousel_2 } from "./data";
import Carousel from "../components/Carousel";

interface BlockInterface {
  color: string,
  url: string,
  title: string,
  description: string,
  img: string,
  ctaOnly: boolean,
  buttonColor: string,
}

const Menu: any = () => {
  return (
    <div style={{ background: "black", height: "170px", display: "flex", position: "relative", backgroundRepeat: "repeat", backgroundImage: "url('https://static.ankama.com/ankama/www/modules/assets/bg.jpg')" }}>
      <ul style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
        {menus_1.map(({ svg, title, url, id }) => {
          return (
            <div key={id} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <li style={{ color: "blue", border: "2px solid #3A3A3A", padding: "12px", borderRadius: "50%", height: "45px", width: "45px", position: "relative" }}>
                <Image src={svg} alt="test" layout='fill' objectFit='none' quality='100' />
              </li>
              <p style={{ fontSize: "15px", textTransform: "uppercase", fontFamily: "Roboto", color: "#3A3A3A", marginTop: "6px" }}>
                {title}
              </p>
            </div>
          )
        })}
      </ul>
      <Image src="https://static.ankama.com/ankama/www/modules/assets/logo.png" alt="test" layout='fill' objectFit='scale-down' quality='100' />
      <ul style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
        {menus_2.map(({ svg, title, url, id }) => {
          return (
            <div key={id} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <li style={{ color: "blue", border: "2px solid #3A3A3A", padding: "12px", borderRadius: "50%", height: "45px", width: "45px", position: "relative" }}>
                <Image src={svg} alt="test" layout='fill' objectFit='none' quality='100' />
              </li>
              <p style={{ fontSize: "15px", textTransform: "uppercase", fontFamily: "Roboto", color: "#3A3A3A", marginTop: "6px" }}>
                {title}
              </p>
            </div>
          )
        })}
      </ul>
    </div >
  )
}

const Block: any = ({ color, url, img, title, description, ctaOnly, buttonColor }: BlockInterface) => {
  if (ctaOnly) {
    return (
      <div style={{ borderTop: `6px solid ${color}`, width: "100%", height: "450px", position: "relative", fontFamily: "Roboto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          src={img}
          alt="test"
          layout='fill'
          objectFit='cover'
          quality='100'
        />
        <button
          type="button"
          style={{
            position: "relative",
            color: buttonColor,
            textShadow: "0 1px 1px #333",
            background: "#E7411A",
            fontFamily: "Lato",
            textTransform: "uppercase",
            padding: "12px 34px",
            fontSize: "20px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            top: "60px",
            right: "180px"
          }}>
          Visiter le site
        </button>
      </div>
    )
  }

  return (
    <div style={{ borderTop: `6px solid ${color}`, width: "100%", height: "450px", position: "relative", fontFamily: "Roboto" }}>
      <Image src={img} alt="test" layout='fill' objectFit='cover' quality='100' />

      <div style={{ background: "rgba(0,0,0,0.8)", left: "50%", marginLeft: "-510px", position: "absolute", width: "510px", padding: "24px", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div style={{ width: "fit-content" }}>
          <h3 style={{ color: "white", fontSize: "23px", textAlign: "center", textTransform: "uppercase" }}>
            {title}
          </h3>
          <hr style={{ borderColor: color, margin: "12px 0 24px 0" }} />
        </div>

        <p style={{ color: "white", fontSize: "15px", textAlign: "center", lineHeight: "1.5" }}>
          {description}
        </p>

        <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "flex-end", paddingTop: "24px" }}>
          <button type="button" style={{ color: buttonColor, textShadow: "0 1px 1px #333", background: color, fontFamily: "Lato", textTransform: "uppercase", padding: "12px 34px", fontSize: "20px", border: "none", outline: "none", cursor: "pointer" }}>Visiter le site</button>
        </div>
      </div>

    </div>
  )
}

const Footer: any = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: " center", background: "black", height: "106px", position: "relative", backgroundRepeat: "repeat", backgroundImage: "url('https://static.ankama.com/ankama/www/modules/assets/bg.jpg')" }}>
      <Image src="https://static.ankama.com/ankama/www/modules/assets/logo.png" alt="test" height={50} width={80} quality='100' />
      <p style={{ color: "white", fontSize: "11px", fontFamily: "Roboto" }}>2021 Ankama. Tous droits réservés. Conditions d'utilisation - Politique de confidentialité - Conditions Générales de Vente - Mentions Légales - Gestion des cookies</p>
      <Image src="https://static.ankama.com/ankama/www/modules/assets/logo.png" alt="test" height={24} width={24} quality='100' />
      <Image src="https://static.ankama.com/ankama/www/modules/assets/logo.png" alt="test" height={24} width={24} quality='100' />
    </div >
  )
}

const BlockInfo: any = ({ color, title }: BlockInterface) => {
  return (
    <div style={{ borderTop: `6px solid ${color}`, width: "100%", position: "relative", fontFamily: "Roboto", display: "flex", justifyContent: "center" }}>
      <div style={{ textTransform: "uppercase", textAlign: "center", background: "#E7A300", width: "500px", padding: "24px 12px", fontSize: "30px", fontFamily: "Lato", fontWeight: 900, color: "white" }}>
        {title}
      </div>
    </div>
  )
}

const NewsCard: any = () => {
  return (
    <div style={{ width: "300px", border: "1px solid grey" }}>
      <div style={{ height: "250px", width: "100%", position: "relative" }}>
        <Image src={carousel[0].img} alt="test" layout='fill' objectFit='cover' quality='100' />
      </div>
      <div style={{ width: "100%", position: "relative", padding: "24px" }}>
        <p>À l'occasion de la sortie du 2e tome de DANS LA TÊTE DE SHERLOCK HOLMES, les dessins de Benoit Dahan sont exposés à la galerie Art-Maniak de Paris ! Du 24 septembre au 16 octobre, vous pourrez y admirer les planches originales ainsi que des illustr...</p>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderTop: "1px solid grey", padding: "6px" }}>
        <div style={{ height: "50px", width: "50px", borderRadius: "50%", position: "relative" }}>
          <Image src={carousel[0].img} alt="test" layout='fill' objectFit='cover' quality='100' />
        </div>
        <p>Ankama Editions</p>
      </div>
    </div >
  )
}

const CompanyCard: any = ({ title, url }: any) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} style={{ height: "260px", width: "190px", background: "#e9e8e8", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "relative", height: "100px", width: "100px" }}>
        <Image src={url} alt="test" layout='fill' objectFit='contain' quality='100' />
      </div>
      <p style={{ color: "grey", fontSize: "16px", fontFamily: "lato", fontWeight: 400, textTransform: "uppercase" }}>{title}</p>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Menu />
      <Carousel data={carousel} hasInfo />
      <BlockInfo title="Notre Société" color="#E7A300" />

      <div style={{ display: "flex", gap: "24px", padding: "24px", justifyContent: "center", alignItems: "center" }}>
        {companyB.map(({ title, svg, id }) => <CompanyCard key={id} title={title} url={svg} />)}
      </div>

      <Carousel data={carousel_2} />
      <BlockInfo title="Nos Créations" color="#E7A300" />
      <div>
        {sections.map(({ id, title, color, description, img, url, buttonColor }, index) => <Block ctaOnly={index === 0} key={id} title={title} color={color} description={description} img={img} url={url} buttonColor={buttonColor} />)}
      </div>
      <BlockInfo title="Actualités" color="#E7A300" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "24px", padding: "24px", width: "auto", justifyContent: "center", alignContent: "space-between", alignItems: "start" }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Footer />
    </div>
  )
}

export default Home
