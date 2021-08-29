import 'bootstrap/dist/css/bootstrap.min.css';
import { Movies } from '../components/app/Movies';


export const App = () => {
    return (   
     <div>
        <header>
            <h1>Movies</h1>
        </header>

        <main>
            <Movies />
        </main>
     </div>  
    )
}