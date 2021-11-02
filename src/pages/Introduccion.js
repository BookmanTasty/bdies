// importamos componentes
import Hero from '../components/Hero';
import Caracteristicas from '../components/Caracteristicas'
import Tokenomics from '../components/Tokenomics'


const Introduccion = () => {
    return(
        <div className="fpaginas">
            <Hero />
            
            <Caracteristicas />
            <Tokenomics />
       
            
        </div>
    )
}

export default Introduccion;