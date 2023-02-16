import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={require("./../assets/images/logo.png")}
          alt="Workflow"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Login to your account
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Or
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 pl-1"
          >
            register
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "This field is mandatory";
            }
            else if(!values.password){
              errors.password = "This field is mandatory";
            }
             else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setLoading(true)
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    autoComplete="username"
                    name="email"
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  />
                </div>
                {/* {errors.email && touched.email && errors.email} */}
                {errors.email && (
                  <div class="text-red-500 text-xs mt-1">
                    <div>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {touched.email && errors.email}
                        </font>
                      </font>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="current-password"
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  />
                  {/* {errors.password && touched.password && errors.password} */}
                  {errors.password && (
                    <div class="text-red-500 text-xs mt-1">
                      <div>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {touched.password && errors.password}
                          </font>
                        </font>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <Link
                    to="/ResetPassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button disabled={isSubmitting}
                    type="submit"
                    className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                  {loading && <Loader/>}
                    To enter
                  </button>
                </span>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
