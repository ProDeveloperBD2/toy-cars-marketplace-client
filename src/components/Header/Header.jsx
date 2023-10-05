import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logoutButton from '../../assets/logoutButton.png';
import loginButton from '../../assets/loginButton.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOutBtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout it!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Logout!',
                            'Your Account has been Logout.',
                            'success'
                        )
                    })
                    .catch(error => console.log(error))
            }
        })
    }
    const navItems = <>
        <li className='text-lg font-semibold'><Link to="/">Home</Link></li>
        <li className='text-lg font-semibold'><Link to="/allToys">All Toys</Link></li>
        {user && <>    <li className='text-lg font-semibold'><Link>My Toys</Link></li>
            <li className='text-lg font-semibold'><Link to="/addToys">Add A Toys</Link></li></>}
        <li className='text-lg font-semibold'><Link to="/blogs">Blogs</Link></li>
    </>;
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-50 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <a href="/"><img className='w-36' src={'https://toytown-ishi.myshopify.com/cdn/shop/files/Logo_9360b1f0-a8a7-4ce2-a952-02d90ddeed94_large_1_large.png?v=1633771943'} alt="" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <img title={user?.displayName} className='w-12 h-12 mr-4 rounded-full cursor-pointer' src={user?.photoURL} alt="" />
                                : <FaUser className='text-4xl mr-3'></FaUser>
                        }
                        {user ? <button onClick={handleLogOutBtn} className='hover:-mt-1 duration-500' title='Log out'><img className='w-24' src={logoutButton} alt="" /></button> : <Link to="/login" className='hover:-mt-1 duration-500' title='Login'><img className='w-24' src={loginButton} alt="" /></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;