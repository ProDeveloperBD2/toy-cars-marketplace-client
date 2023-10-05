import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysCards from "../AllToysCards/AllToysCards";

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);
    return (
        <div className="mt-6">
            <h3 className="text-4xl text-center font-bold mb-14 text-[orange]">All Toys</h3>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-2 md:gap-2 grid grid-cols-1 gap-8 mt-4 mb-10">
                {
                    toys.map(toy => <AllToysCards key={toy._id} toy={toy}></AllToysCards>)
                }
            </div>
        </div>
    );
};

export default AllToys;