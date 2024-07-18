
export default function SearchBar() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await getSearchedAspirantes({ descripcion });
            navigate('/aspirantes/buscar');
        } catch (error) {
            console.error('Error searching aspirantes:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="GET" className="search-form">
            <input type="text" id="keywords" name="keywords" placeholder="Buscar aspirantes" className="search-form_input w-1/3 text-center" />
            <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
        </form>
    )
}
