export function validateLogin({username,password}){
    const errors = {};
    if(!username.trim()) errors.username = "Username wajib diisi!";
    if(!password) errors.password = "Password wajib diisi!";
    return errors;
}

export function validateRegister({username, email, password}){
    const errors = {};
     if (!username.trim()) errors.username = "Username wajib diisi";
    else if (username.trim().length < 3) errors.username = "Minimal 3 karakter";

    if (!email.trim()) errors.email = "Email wajib diisi";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Format email tidak valid";

    if (!password) errors.password = "Password wajib diisi";
    else if (password.length < 8) errors.password = "Minimal 8 karakter";
    else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password))
    errors.password = "Harus mengandung huruf dan angka";

  return errors;
}