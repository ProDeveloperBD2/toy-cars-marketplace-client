import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const { LoginUser } = useContext(AuthContext);
    const handleLoginSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`
        Email: ${email}
        Password: ${password}
        `)
        LoginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="bg-info p-14 w-1/2 mx-auto mb-20 mt-14">
                <h1 className="text-4xl font-bold text-white text-center mb-4">Please Login !|!</h1>
                <form onSubmit={handleLoginSubmit}>
                    <label className="text-lg font-semibold">Email</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder="Email" required className="w-full text-lg p-1 mb-2" />
                    <br />
                    <label className="text-lg font-semibold">Password</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password" required className="w-full text-lg p-1" />
                    <br />
                    <input type="submit" value="Login" className="text-lg font-semibold py-1 rounded-lg cursor-pointer bg-white border-none text-black btn-block mt-10" />
                </form>
                <p className="text-center mt-4">New to Cars MarketPlace? <Link className="font-semibold text-white" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;