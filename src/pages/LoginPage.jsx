import { useState } from "react";
import BannerLogin from "../assets/banner-login.png";
import RightComp from "../assets/sirip-kanan.png";
import Field from "../components/Field";

import { User2, Key } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="flex overflow-y-hidden w-full h-screen ">
        <img
          src={BannerLogin}
          alt="login-banner"
          className="h-full object-cover hidden md:block"
        />
        <img src={RightComp} alt="" className="absolute right-0" />
        <div className="form flex flex-1 flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-5">Login</h1>
          <p className="text-md text-muted">
            Yuk login dulu, biar bisa beli barang favoritmu!
          </p>
          <form action="#" className="mt-20 flex flex-col">
            <div className="flex flex-col gap-7">
                <Field
                Icon={User2}
                placeholder="Username"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                />
                <Field
                Icon={Key}
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                />
            </div>
            <a href="#" className="self-end text-muted mt-3 mr-4">Lupa Password</a>
            <button className="mt-15 px-3 py-4 bg-[#9C3C38] rounded-3xl text-white font-bold text-xl">Log in</button>
          </form>
          <p className="mt-10 text-muted">
            Belum memiliki akun? <a href="#" className="text-black font-semibold">Daftar disini</a>
          </p>
        </div>
      </div>
    </>
  );
}
