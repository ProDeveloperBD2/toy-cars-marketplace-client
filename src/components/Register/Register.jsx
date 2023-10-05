import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const handleRegisterSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Name: ${name}
        Photo URL: ${photo}
        Email: ${email}
        Password: ${password}
        `)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(result.user, name, photo)
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => console.log(error))

    }
    const updateUserProfile = (user, name, photo) => {
        userProfileUpdate(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('update user success')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="bg-info p-14 w-1/2 mx-auto mb-20 mt-14">
                <h1 className="text-4xl font-bold text-white text-center mb-4">Please Register !|!</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <label className="text-lg font-semibold">Name</label>
                    <br />
                    <input type="text" name="name" id="name" placeholder="Name" required className="w-full text-lg p-1 mb-2" /><br />
                    <label className="text-lg font-semibold">Photo URL</label>
                    <br />
                    <input type="text" name="photo" id="photo" placeholder="Photo URL" required className="w-full text-lg p-1 mb-2" />
                    <br />
                    <label className="text-lg font-semibold">Email</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder="Email" required className="w-full text-lg p-1 mb-2" />
                    <br />
                    <label className="text-lg font-semibold">Password</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password" required className="w-full text-lg p-1" />
                    <br />
                    <input type="submit" value="Register" className="text-lg font-semibold py-1 rounded-lg cursor-pointer bg-white border-none text-black btn-block mt-10" />
                </form>
                <p className="text-center mt-4">Allready Have account? <Link className="font-semibold text-white" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;