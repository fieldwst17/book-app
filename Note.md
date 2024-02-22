    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href={"/"}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="logo"
          />
          <div className="text-black">Book App</div>
        </a>

        {/* Form */}
        <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 bg-sky-300">
          <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form
              className="space-y-4  md:space-y-6 p-8"
              action="#"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-lg 
                  block w-full p-2.5 focus:outline-none"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="focus:outline-none rounded-lg shadow-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>

              {/* Button */}
              <div className="m-20 p-2  ">
                <button
                  type="submit"
                  className="w-full shadow-lg text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign up
                </button>
                              {/* Dont have account */}
              <p className="text-sm font-light text-white white:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href={'/Register'}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
