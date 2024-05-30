import {Outlet} from 'react-router-dom'
import Header from '@/components/header'
import './entry.styl'

function Entry() {
    return (
        <div className="M-entry">
            <Header title="哈哈"/>
            <div className="main-container">
                <Outlet/>
            </div>
        </div>
    )
}

export default Entry