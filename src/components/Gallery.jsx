import { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import { favouritesReducer } from "../reducer/favouritesReducer";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Gallery() {

    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        () => JSON.parse(localStorage.getItem("favourites")) || []
    );

    const { photos, loading, error } = useFetchPhotos();
    const [search, setSearch] = useState("");

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(search.toLowerCase())
        );
    }, [photos, search]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    if (loading) {
        return <p className="text-center mt-20 text-gray-500">Fetching photos...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="min-h-screen px-6">

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mt-8 mb-8 px-4 relative">

                <input
                    type="text"
                    placeholder="Search photographer..."
                    className="w-full px-6 py-3 pr-14 rounded-full border border-gray-200 bg-white shadow-md focus:outline-none focus:ring-2 text-gray-500 focus:ring-gray-300"
                    onChange={handleSearch}
                />

                <FiSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl mr-4" />

            </div>

            {/* Grid Layout*/}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPhotos.map((photo) => {

                    const isFav = favourites.some(f => f.id === photo.id);

                    return (
                        <div
                            key={photo.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <img
                                src={photo.download_url}
                                alt={photo.author}
                                className="w-full h-48 object-cover"
                            />

                            <div className="flex justify-between items-center px-4 py-3">
                                <p className="text-sm text-gray-700 font-medium">
                                    {photo.author}
                                </p>

                                <button
                                    onClick={() =>
                                        dispatch({ type: "TOGGLE_FAV", payload: photo })
                                    }
                                    className="text-lg text-red-500 hover:scale-110 transition"
                                >
                                    {isFav ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}