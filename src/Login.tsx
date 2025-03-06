import 'flowbite/dist/flowbite.css'; // 确保样式生效
import "flowbite";
import { createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';

export default function Login() {
  const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [rememberMe, setRememberMe] = createSignal(false);
    const navigate = useNavigate();

    // 页面加载时检查是否已登录
    onMount(() => {
        const savedUser = localStorage.getItem("username");
        const savedPass = localStorage.getItem("password");
        if (savedUser === "admin" && savedPass === "123456") {
            navigate("/"); // 直接跳转
        }
    });

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (username() === "admin" && password() === "123456") {
          if (rememberMe()) {
            localStorage.setItem("username", username());
            localStorage.setItem("password", password());
        } else {
            sessionStorage.setItem("username", username());
            sessionStorage.setItem("password", password());
        }
        navigate("/"); // 登录成功后跳转
        } else {
            alert("用户名或密码错误");
        }
    };
    
    return (
       
        <div class="flex items-center justify-center h-screen w-full bg-gray-100">
            <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center">登录您的账户</h2>
              <form class="space-y-4" onSubmit={handleLogin}>
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">用户名</label>
              <input
                type="text"
                id="username"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="请输入您的用户名"
                value={username()}
                onInput={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
              <input
                type="password"
                id="password"
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="请输入密码"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
              <input  id="remember-me" type="checkbox"  class="w-4 h-4 border rounded focus:ring-blue-500"
                checked={rememberMe()}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
                <label for="remember-me" class="ml-2 text-sm text-gray-600">记住我</label>
              </div>
              <a href="#" class="text-sm text-blue-600 hover:underline">忘记密码？</a>
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">登录</button>
          </form>
          {/* <p class="text-sm text-center text-gray-600">
            还没有账号？<a href="#" class="text-blue-600 hover:underline">立即注册</a>
          </p> */}
        </div>
      </div>
    
      );
}