import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar () {
    return (
            <div className="navbar">
                <ul className='navlist'>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                    <Link to='/about'>

                        About Us
                        </Link>

                    </li>
                    <li>
                       Pregnancy
                    </li>
                    <li>
                       Nursing
                    </li>
                    <li>
                       Kids
                    </li>
                    <li>
                       Ask a Pharmacist
                    </li>
                    <li>
                       Newsletter
                    </li>
                    <li>
                       References
                    </li>
                </ul>
            </div>
    )
}