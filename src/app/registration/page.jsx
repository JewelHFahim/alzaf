"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState(false);
  const [confPassword, setConfPassword] = useState(false);

  // Watch the password and confirm password fields
  const watchPassword = watch("password");

  const onSubmit = (data) => {
    const birthDay = `${data.month}/${data.day}/${data.year}`;
    data = {
      fullName: data.fullName,
      phoneEmail: data.phoneEmail,
      password: data.password,
      confirmPassword: data.confirmPassword,
      birthDay,
      policy: data.policy,
    };
    console.log(data);
  };

  return (
    <div className="w-full h-full pt-[65px] pb-[75px] md:pt-0 md:pb-0 md:h-[calc(100vh-95px)] flex justify-center items-center p-4">

      <div className="w-full h-full lg:w-[44.43vw] md:h-[63vh] bg-white rounded-[5px] px-5 py-6 md:px-[40px] md:py-[76px]">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xs w-full flex flex-col md:flex-row gap-[6px] md:gap-[45px]"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-[20px] font-medium text-[#171717]">
                Welcome to Alzaf.com
              </h2>

              {/* Full Name */}
              <div className="mt-[18px] flex flex-col gap-[6px] relative">
                <label className="text-sm text-[#434343]">Full Name</label>
                <input
                  type="text"
                  placeholder="KhHumayun Kabir"
                  className="w-full h-[36px] border px-[10px] outline-black/20 text-sm placeholder:text-xs"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="absolute -bottom-[12px] left-0 text-red-500">
                    Name is required
                  </span>
                )}
              </div>

              {/* Phone/Email */}
              <div className="flex flex-col mt-[6px] gap-[6px] relative">
                <label className="text-sm text-[#434343]">
                  Phone Number or Email
                </label>
                <input
                  type="text"
                  placeholder="Phone or Email"
                  className="w-full h-[36px] border px-[10px] outline-black/20 text-sm placeholder:text-xs"
                  {...register("phoneEmail", { required: true })}
                />
                {errors.phoneEmail && (
                  <span className="absolute -bottom-[12px] left-0 text-red-500">
                    Phone/Email is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col mt-[6px] gap-[6px] relative">
                <label className="text-sm text-[#434343]">Password</label>

                <div className="w-full h-[36px] border px-[10px] outline-black/20 flex items-center text-sm placeholder:text-xs">
                  <input
                    type={password ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-full outline-none"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                          "Password must include an uppercase letter, a digit, and a special character",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setPassword((prev) => !prev)}
                    className="text-lg text-[#434343]"
                  >
                    {password ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </button>
                </div>

                {errors.password && (
                  <span className="absolute -bottom-[12px] left-0 text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col mt-[6px] gap-[6px] relative">
                <label className="text-sm text-[#434343]">
                  Confirm Password
                </label>

                <div className="w-full h-[36px] border px-[10px] outline-black/20 flex items-center text-sm placeholder:text-xs">
                  <input
                    type={confPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full h-full outline-none"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watchPassword || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setConfPassword((prev) => !prev)}
                    className="text-lg text-[#434343]"
                  >
                    {confPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <span className="absolute -bottom-[12px] left-0 text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2">

              <div className="hidden md:flex justify-end ">
                <h2 className="text-[20px] font-medium text-primary">Login</h2>
              </div>

              <div className=" md:mt-[18px] flex gap-1">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-sm text-[#434343]">Birthday</label>

                  <div className="flex gap-1">
                    <div className="relative">
                      <select
                        {...register("month", { required: "required" })}
                        className="w-full h-[36px] border px-[10px] outline-black/20 text-[#9C9C9C] "
                      >
                        <option hidden value="">
                          Month
                        </option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                      </select>

                      {errors.month && (
                        <span className="absolute -bottom-[12px] left-0 text-red-500">
                          {errors.month.message}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        {...register("day", { required: "required" })}
                        className="w-full h-[36px] border px-[10px] outline-black/20 text-[#9C9C9C]"
                      >
                        <option hidden value="">
                          Day
                        </option>
                        {[...Array(31)].map((_, idx) => (
                          <option key={idx} value={idx + 1}>
                            {idx + 1}
                          </option>
                        ))}
                      </select>

                      {errors.day && (
                        <span className="absolute -bottom-[12px] left-0 text-red-500">
                          {errors.day.message}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        {...register("year", { required: "required" })}
                        className="w-full h-[36px] border px-[10px] outline-black/20 text-[#9C9C9C]"
                      >
                        <option hidden value="">
                          Year
                        </option>
                        {[...Array(75)].map((_, idx) => (
                          <option key={idx}>{idx + 1950}</option>
                        ))}
                      </select>
                      {errors.year && (
                        <span className="absolute -bottom-[12px] left-0 text-red-500">
                          {errors.year.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[6px] text-[11px] relative">
                  <label className="text-sm text-[#434343]">Gender</label>
                  <select
                    {...register("gender", { required: "Required" })}
                    className="w-full h-[36px] border px-[10px] outline-black/20 text-[#9C9C9C]"
                  >
                    <option hidden value="">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {errors.gender && (
                    <span className="absolute -bottom-[12px] left-0 text-red-500">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>

              <div className=" mt-[12px] flex gap-2">
                <label className="container w-max h-max">
                  <input type="checkbox" {...register("policy")} />
                  <span className="checkmark"></span>
                </label>

                <p className="text-[#9C9C9C] text-xs">
                  I’d like to receive exclusive offers and promotions via SMS.
                </p>
              </div>

              <button
                type="submit"
                className="mt-[18px] h-[40px] w-full bg-primary hover:bg-opacity-70 transition-all duration-2 00 text-white text-xs font-semibold"
              >
                Sign Up
              </button>

              <div className="text-[#707070] text-xs w-full py-2 text-center">
                Or
              </div>

              <div className="flex flex-col gap-2">
                <button className="flex border border-primary hover:bg-gray-100 transition-all duration-200 border-opacity-50 h-[35px] w-full gap-2 justify-center items-center">
                  <div className="w-6 h-6 relative">
                    <Image src="/logos_facebook.png" alt="" fill />
                  </div>
                  <p className="text-sm font-medium text-[#2E2E2E]">
                    Sign Up with Facebook
                  </p>
                </button>
                <button className="flex border border-primary hover:bg-gray-100 transition-all duration-200 border-opacity-50 h-[35px] w-full gap-2 justify-center items-center">
                  <div className="w-6 h-6 relative">
                    <Image src="/flat-color-icons_google.png" alt="" fill />
                  </div>
                  <p className="text-sm font-medium text-[#2E2E2E]">
                    Sign Up with Google
                  </p>
                </button>
              </div>
            </div>
          </form>
       
      </div>

    </div>
  );
};

export default Registration;
