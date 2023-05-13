/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider';

function Register() {
    const { createUser } = useContext(AuthContext);
    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword);
        createUser(email, password)
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
                <h1 className="text-4xl text-deep-dark font-bold mb-8 text-center">Sign Up</h1>

                <form onSubmit={handelSignUp} className="flex flex-col">
                    <label htmlFor="" className="text-lg font-semibold text-deep-dark my-2">
                        Name
                    </label>
                    <input
                        className="h-11 w-full text-lg px-3 outline-primary border border-light-text shadow rounded-lg"
                        type="text"
                        name="name"
                        required
                    />
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
                    <label className="text-lg font-semibold text-deep-dark my-2" htmlFor="">
                        Confirm Password{' '}
                    </label>
                    <input
                        className="h-11 w-full text-lg px-3 outline-primary border border-light-text shadow rounded-lg"
                        type="password"
                        name="confirmPassword"
                        required
                    />

                    <input
                        className="mt-7 bg-primary h-11 text-lg font-semibold text-white rounded-lg hover:bg-deep-dark duration-300"
                        type="submit"
                        value="Sign Up"
                    />
                </form>
                <p className="text-lg font-semibold text-deep-dark text-center mt-5">
                    Already have an account?{' '}
                    <Link className="text-primary hover:text-light-dark duration-300" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
