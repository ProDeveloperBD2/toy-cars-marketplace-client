import Swal from "sweetalert2";

const AddToys = () => {
    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newToysCars = { name, date, category, quantity, price, rating, photo, };
        console.log(`
        Name: ${name}
        Date: ${date}
        Category: ${category}
        Quantity: ${quantity}
        Price: ${price}
        Rating: ${rating}
        Photo URL: ${photo}
        `)
        fetch('http://localhost:5000/toyscars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToysCars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className='mb-10'>
            <div className='w-3/4 mx-auto p-10'>
                <form onSubmit={handleAddToys}>
                    <h2 className='mb-6 text-4xl text-info font-bold text-center'>Add A Toys</h2>
                    <div className='flex gap-14 mb-2'>
                        <div className='w-full'>
                            <label>Name</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="name" id="name" placeholder='Name' required />
                        </div>
                        <div className='w-full'>
                            <label>Date</label>
                            <br />
                            <input className='w-full text-xl p-1' type="date" name="date" id="date" required />
                        </div>
                    </div>
                    <div className='flex gap-14 mb-2'>
                        <div className='w-full'>
                            <label>Category</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="category" id="category" placeholder='Category' required />
                        </div>
                        <div className='w-full'>
                            <label>Available Quantity</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="quantity" id="quantity" placeholder="Quantity" required />
                        </div>
                    </div>
                    <div className='flex gap-14'>
                        <div className='w-full'>
                            <label>Price</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="price" id="price" placeholder='Price' required defaultValue="$" />
                        </div>
                        <div className='w-full'>
                            <label>Rating</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="rating" id="rating" placeholder='Rating' required />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='w-full'>
                            <label>Photo URL</label>
                            <br />
                            <input className='w-full text-xl p-1' type="text" name="photo" id="photo" placeholder='Photo' required />
                        </div>
                    </div>
                    <input type="submit" value="Add A Toys" className='btn-block bg-info mt-10 py-2 text-2xl font-semibold cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default AddToys;