import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import MyWork from '../components/MyWork'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import { createContext,Dispatch,SetStateAction,useState } from 'react'
import { InView } from 'react-intersection-observer';

interface ISectionInViewContext {
  sectionInView: string;
  setSectionInView: Dispatch<SetStateAction<string>>
}

export const SectionInViewContext= createContext<ISectionInViewContext>({sectionInView: "", setSectionInView: ()=>{}})

const Index: NextPage = () => {
  const [sectionInView, setSectionInView] = useState("")
  const value: ISectionInViewContext = {sectionInView, setSectionInView}

  const handleOnChage:(section: string, inView: boolean) => void = (section, inView)=>{
    if(inView){
      setSectionInView(section)
    }
  }
  return (
   <>
   <Head>
      <link rel="shortcut icon" type="image/jpg" href="/jp.ico"/>
      <title>Jay Philip Camillo</title>
      <meta name="description" content="Full Stack Web Developer For Hire" />
   </Head>
    <SectionInViewContext.Provider value={value}>
      <Header />
      <InView as="div" threshold={0.5} onChange={(inView)=> handleOnChage("home", inView)}>
        <Home />
      </InView>
      <InView as="div" threshold={0.5} onChange={(inView)=> handleOnChage("about", inView)}>
        <About />
      </InView>
      <InView as="div" threshold={0.5} onChange={(inView)=> handleOnChage("skills", inView)}>
        <Skills />
      </InView>
      <InView as="div" threshold={0.5} onChange={(inView)=> handleOnChage("my-work", inView)}>
        <MyWork />
      </InView>
      <InView as="div" threshold={0.5} onChange={(inView)=> handleOnChage("contact-me", inView)}>
        <ContactMe />
      </InView>
      <Footer />
    </SectionInViewContext.Provider>
   </>
  )
}

export default Index
