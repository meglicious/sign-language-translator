
import withAuth from '../hoc/withAuth';
import './Username'
import Username from './Username';

const Translation = () => {
    return (
       <h2>Translation</h2>
    
    )
}

export default withAuth(Translation)