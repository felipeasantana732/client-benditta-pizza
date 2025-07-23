"use client"
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import styles from "./styleBenditta.module.css";

const HomePage: React.FC = () => {
//export default function Home() {
    return (
        <>
        <div className={styles.pageWrapper}>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Contact /> 
        <Footer />
        </div>
        </>
    );
}
export default HomePage;