import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = createSignal(true);

  return (
    <div class="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <aside
        class={`${
          isSidebarOpen() ? "w-64" : "w-16"
        } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        {/* 侧边栏头部 */}
        <div class="p-4 flex items-center justify-between">
          <span class="text-lg font-bold">后台系统</span>
          <button
            class="p-2 rounded hover:bg-gray-700"
            onClick={() => setSidebarOpen(!isSidebarOpen())}
          >
            ☰
          </button>
        </div>

        {/* 侧边栏菜单 */}
        <nav class="flex-1 px-2">
          <A href="/dashboard/home" class="block p-2 hover:bg-gray-700 rounded">🏠 首页</A>
          <A href="/dashboard/users" class="block p-2 hover:bg-gray-700 rounded">👥 用户管理</A>
          <A href="/dashboard/settings" class="block p-2 hover:bg-gray-700 rounded">⚙️ 设置</A>
        </nav>
      </aside>

      {/* 主内容区域 */}
      <div class="flex-1 flex flex-col">
        {/* 顶部导航栏 */}
        <header class="bg-white shadow p-4 flex justify-between items-center">
          <h1 class="text-lg font-semibold">仪表盘</h1>
          <button class="bg-red-500 text-white px-4 py-2 rounded">退出</button>
        </header>

        {/* 页面内容 */}
        <main class="p-6">
          <h2 class="text-xl font-bold mb-4">欢迎来到后台管理系统！</h2>
          <p class="text-gray-700">这里是仪表盘的内容...</p>
        </main>
      </div>
    </div>
  );
}
