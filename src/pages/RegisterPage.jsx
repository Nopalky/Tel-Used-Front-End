import { useState } from "react";
import BannerLogin from "../assets/banner-login.png";
import RightComp from "../assets/sirip-kanan.png";
import Field from "../components/Field";

import { User2, Key, Mail } from "lucide-react";
import { Link } from "react-router";
import {validateRegister} from "../utils/Validations";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const[error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({...error, [e.target.name]: undefined})
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const found = validateRegister(form);
      setError(found);
      if(Object.keys(found).length > 0) return;
    }
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
          <h1 className="text-4xl font-bold mb-5">Register</h1>
          <p className="text-md text-muted">
            Kamu belom punya akun? Buat akun kamu sekarang!<br /> hanya membutuhkan waktu kurang dari satu menit.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-20 flex flex-col">
            <div className="flex flex-col gap-7">
                <Field
                Icon={User2}
                placeholder="Username"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                error={error?.username}
                />
                <Field
                Icon={Mail}
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={error?.email}
                />
                <Field
                Icon={Key}
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                error={error?.password}
                />
            </div>
            <button className="mt-15 px-3 py-4 bg-[#9C3C38] rounded-3xl text-white font-bold text-xl hover:bg-[#742c2a] duration-200 hover:cursor-pointer">Register</button>
          </form>
          <p className="mt-10 text-muted">
            Sudah punya akun? <Link to="/login" className="text-black font-semibold">Masuk disini</Link>
          </p>
        </div>
      </div>
    </>
  );
}
