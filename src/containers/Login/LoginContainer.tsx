// import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Gọi hàm signIn của NextAuth để đăng nhập
//     const result = await signIn("credentials", {
//       redirect: true, // hoặc false nếu bạn muốn tự điều hướng
//       username,
//       password,
//       callbackUrl: '/home' // sau khi đăng nhập thành công chuyển hướng tới trang home
//     });
//   };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={()=>{}}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
