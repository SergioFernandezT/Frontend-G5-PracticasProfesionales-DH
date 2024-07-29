import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carrusel from './Carrusel';
export default function SearchBar() {

    const navigate = useNavigate();
    const [keywords, setKeywords] = useState('');
    const [searchType, setSearchType] = useState('keywords');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchType === 'keywords') {
            navigate(`/aspirantes/buscar/${keywords}`);
        } else if (searchType === 'name') {
            navigate(`/aspirantes/name/${keywords}`);
        }
    };

    return (
        <div className="w-screen relative bg-gray-100 h-80 flex items-center justify-center sm:h-96">
            <div className="absolute inset-0 bg-center bg-cover"><Carrusel /></div>
            <div className="relative z-10 p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} method="GET" className="search-form">
                    <select
                        className="search-form_select w-1/8 text-center"
                        onChange={(e) => setSearchType(e.target.value)}
                        value={searchType}
                    >
                        <option value="keywords">Buscar por profesión</option>
                        <option value="name">Buscar por aspirante</option>
                    </select>
                    <input
                        type="text"
                        id="keywords"
                        name="keywords"
                        placeholder="Buscar"
                        className="search-form_input w-1/8 text-center"
                        onChange={(e) => setKeywords(e.target.value)}
                        value={keywords}
                    />
                    <button type="submit" className="search-form_button pl-2 sm:pl-6 sm:h-8">
                        <i className="fas fa-search sm:w-8"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}
