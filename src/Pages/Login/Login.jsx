/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider';

function Login() {
    const { signInUser } = useContext(AuthContext);
    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row min-h-[calc(100vh-87px)] ">
            <div className="lg:w-1/2  mt-20">
                <img className="w-[460px] h-[502px] mx-auto " src={img} alt="img" />
            </div>
            <div className="lg:w-1/2 w-full">
                <h1 className="text-4xl text-deep-dark font-bold mb-8 text-center">Sign In</h1>

                <form onSubmit={handelSignIn} className="flex flex-col">
                    <label className="text-lg font-semibold text-deep-dark my-2" htmlFor="">
                        Email Address
                    </label>
                    <input
                        className="h-11 w-full text-lg px-3 outline-primary border border-light-text shadow rounded-lg"
                        type="email"
                        name="email"
                        required
                    />
                    <label className="text-lg font-semibold text-deep-dark my-2" htmlFor="">
                        Password
                    </label>
                    <input
                        className="h-11 w-full text-lg px-3 outline-primary border border-light-text shadow rounded-lg"
                        type="password"
                        name="password"
                        required
                    />

                    <input
                        className="mt-7 bg-primary h-11 text-lg font-semibold text-white rounded-lg hover:bg-deep-dark duration-300"
                        type="submit"
                        value="Sign In"
                    />
                </form>
                <p className="text-lg font-semibold text-deep-dark text-center mt-5">
                    Already have an account?{' '}
                    <Link
                        className="text-primary hover:text-light-dark duration-300"
                        to="/register"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
