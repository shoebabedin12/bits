import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={require("./../assets/images/logo.png")}
          alt="Kiwify"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>create new account</font>
          </font>
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Or</font>
          </font>
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 pl-1"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                log into your existing account
              </font>
            </font>
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik
          initialValues={{
            email: "",
            repeatEmail: "",
            password: "",
            terms: false
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "This field is mandatory";
            } else if (!values.repeatEmail) {
              errors.repeatEmail = "This field is mandatory";
            }  else if (values.repeatEmail !== values.email) {
              errors.repeatEmail = "The two emails must be the same.";
            }else if (!values.password) {
              errors.password = "This field is mandatory";
            } else if (values.password.length > 8) {
              errors.lastName = "Password - 8 symbols";
            } else if (values.terms === false) {
              errors.terms = "This field is mandatory";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setLoading(true);
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
          }) => (
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Email</font>
                  </font>
                </label>{" "}
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    name="email"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                      errors.email ? "border-red-500" : ""
                    } w-full`}
                  />
                  <div className="text-red-500 text-xs mt-1">
                    <div></div>
                  </div>
                </div>
                {errors.email && (
                  <div>
                    <div className="text-xs text-red-500">
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
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      repeat email
                    </font>
                  </font>
                </label>
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatEmail}
                    type="email"
                    autoComplete="off"
                    name="repeatEmail"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                      errors.repeatEmail ? "border-red-500" : ""
                    } w-full`}
                  />
                </div>
                <div>
                  {errors.repeatEmail && (
                    <div className="text-xs text-red-500">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {touched.repeatEmail && errors.repeatEmail}
                        </font>
                      </font>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Password</font>
                  </font>
                </label>
                <div>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                    autoComplete="off"
                    name="password"
                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                    ${errors.password ? "border-red-500" : ""} 
                    w-full`}
                  />
                  {errors.password && (
                    <div className="text-red-500 text-xs mt-1">
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
              <div className="mt-6">
                <label className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <Field
                      onChange={handleChange}
                      type="checkbox"
                      name="terms"
                      className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer`}
                    />
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          I have read and accept
                        </font>
                        <font style={{ verticalAlign: "inherit" }}>
                          Kiwify's
                        </font>
                      </font>
                      <Link
                        to="#"
                        target="_blank"
                        className="underline pl-1"
                        rel="noreferrer"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            terms of use
                          </font>
                        </font>
                      </Link>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}> , </font>
                      </font>
                      <Link
                        to="#"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            software license terms
                          </font>
                        </font>
                      </Link>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}> , </font>
                      </font>
                      <Link
                        to="#"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            content policy
                          </font>
                        </font>
                      </Link>
                      <font style={{ verticalAlign: "inherit" }}></font>
                    </span>

                    {errors.terms && (
                      <div className="text-red-500 border-b-0">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {errors.terms}
                          </font>
                        </font>
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button className="w-full flex  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }} className="flex items-center justify-center">
                        {loading && <Loader />}
                        Create an account
                      </font>
                    </font>
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

export default Signup;
