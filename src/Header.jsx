import photo from './assets/final_mntdew.png'
import SvgMail from './assets/svg-mail'
import mail from './assets/svg-mail'
export default function Header(){
    return(
        <div className="Header">
            <img src={photo} alt="" className="photo" />
            <h1 className="name text-center">Eris</h1>
            <h3 className="subtitle text-center">Learning Frontend development</h3>
            <a href="" className="site"> bruh.i.dont.have.a.web.site.com</a>
            <button className="btn-email">
                <SvgMail/>
                Email
            </button>
        </div>
    )
}