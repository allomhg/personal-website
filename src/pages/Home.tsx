import { FooterBar } from "../components/FooterBar";
import { Greeting } from "../components/Greeting";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
        <>
            <Greeting />
            <FooterBar />
        </>
    );
}