import React, { useState } from "react";

const ResetPassword = () => {
  const [verify, setVerify] = useState(true);
  const [email, setEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = e.target.elements;
    console.log({ email: email.value });
    if (email.value === "") {
      setEmail(true);
    } else {
      setEmail(false);
      setVerify(false);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={require("./../assets/images/logo.png")}
          alt="workflow"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>reset password</font>
          </font>
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              You will receive an email with instructions for resetting your
              password.
            </font>
          </font>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={handleSubmit}
        >
          {verify ? (
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Email</font>
                  </font>
                </label>
                <div>
                  <input
                    type="text"
                    autoComplete="off"
                    name="email"
                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  />
                </div>
              </div>
              {email && (
                <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 mb-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="24px"
                        height="24px"
                        className="text-red-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 text-red-700">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            auth/user-not-found
                          </font>
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Redefine password
                      </font>
                    </font>
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-32 text-green-400 mx-auto block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>{" "}
              <h3 className="mt-4 text-center text-2xl font-medium">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Email sent! </font>
                  <font style={{ verticalAlign: "inherit" }}>
                    Check your inbox
                  </font>
                </font>
              </h3>{" "}
              <p className="mt-4 text-center"></p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
