
const AllToysCards = ({ toy }) => {
    const { _id, name, date, category, quantity, price, rating, photo } = toy;
    return (
        <div className="mx-auto">
            <div className="card w-80 h-full shadow-xl">
                <figure><img className="h-48 w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        {/* Modal start */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-block btn-info text-white mt-6" onClick={() => document.getElementById(_id).showModal()}>View Details</button>
                        <dialog id={_id} className="modal">
                            <div className="modal-box bg-white">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-xl text-info text-center">Details</h3>
                                <div className="mt-6 flex gap-4 mb-8">
                                    <div className="w-1/2">
                                        <li className="mb-2 font-semibold">Date: {date}</li>
                                        <li className="mb-2 font-semibold">Category: {category}</li>
                                        <li className="mb-2 font-semibold">Quantity: {quantity}</li>
                                        <li className="mb-2 font-semibold">Rating: {rating}</li>
                                    </div>
                                    <div className="w-2/4">
                                        <h2 className="text-xl font-bold">{name}</h2>
                                        <h4 className="text-3xl font-bold text-info">{price}</h4>
                                    </div>
                                </div>
                                <button className="btn btn-error btn-block">Add Now</button>
                            </div>
                        </dialog>
                        {/* Modal end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysCards;