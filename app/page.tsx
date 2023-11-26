import Image from 'next/image'
import iam from "@/public/laptop.webp"
import theme from "@/public/theme.svg"
import linkden from "@/public/icon/linkden.svg";
import github from "@/public/icon/github.svg";
import medium from "@/public/icon/medium.svg";
import Spotify from "@/public/icon/spotify.svg";
import Dribble from "@/public/icon/dribbl.svg";
import Twitter from "@/public/icon/Twitter.svg";
import Spotif from "@/public/icon/spotify.svg";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Projects from '@/Components/Projects';
export default function Home() {

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Projects></Projects>
      <Footer></Footer>
    </div>

  )
}
