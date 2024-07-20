import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchedAspirantes } from './servicios/aspirantesService';
export default function SearchBar() {

    // const { keywords } = useParams();
    const navigate = useNavigate();
    // const [aspirantes, setAspirantes] = useState('');
    const [keywords, setKeywords] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const result = await getSearchedAspirantes({ keywords});
    //         setAspirantes(result);
    //     } catch (error) {
    //         console.error('Error searching aspirantes:', error);
    //     }
    // };
    // fetchData();
    // }, []);
    const handleSubmit = async (e) => {
        // e.preventDefault();
        navigate(`/aspirantes/buscar/${keywords}`,);
        // setKeywords('')

    };

    return (
        <div className="relative bg-gray-100 h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(./src/assets/img/banner.jpg)'}}></div>
        <div className="relative z-10 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">


        <form onSubmit={handleSubmit} method="GET" className="search-form">
            <input type="text" id="keywords" name="keywords" placeholder="Buscar aspirantes" 
            className="search-form_input w-1/8 text-center" onChange={(e) => setKeywords(e.target.value)}/>
            <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
        </form>
        </div>
      </div>
    )
    
}
