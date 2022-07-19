import Header from './Header'
import About from './About'
import Footer from './Footer'
import './Card.css'

export default function Card()
{
    return(
        <div className="Card">
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}