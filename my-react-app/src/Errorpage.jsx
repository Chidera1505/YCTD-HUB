import { Link } from 'react-router-dom'
import './Errorpage.css' 

const mapImg = 
<img src={mapImg} alt="Route map" />
export default function () {
    return (
        <div className='erro-container'>
            <div className='error-left'>
                <span className='error-badge'>
                    <span className='badge-icon'>⚠️</span> Error 404
                </span>

                <h1>404-Router Not Found</h1>

                <p>
                    It looks like this delivery has gone off-course. The page
                    you're looking for doesn't exist or has been moved.
                </p>

                <div className='error-buttons'>
                    <Link to="/" className="btn-primary">Return Home</Link>
                    <Link to="/contact" className='btn-secordary'>Contact Support</Link>
                </div>
            </div>

            <div className='error-right'>
                <div className='error-card'>
                    <img src={mapImg} alt="Route map" />
                    <div className='card-overlay'>
                        <span className='card-icon'>⛓️</span>
                    <div>
                    <p className='card-title'>SYSTEM ALERT</p>
                    <P className="card-subtitle">Navigation path unresolved</P>
                </div>
            </div>
        </div>
     </div>
    </div>
    )
}