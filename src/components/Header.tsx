// Header.jsx
import { Component, createSignal } from 'solid-js';
import config from '../configs/admin-config.json';

const Header: Component = () => {
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false);

  const toggleSidebar = () => {
    const sidebar = document.getElementById('logo-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('-translate-x-full');
      setIsSidebarOpen(!isSidebarOpen());
    }
  };

  return (
    <nav class="w-full h-16 border-b border-gray-100 backdrop-blur-md bg-white/80 fixed top-0 left-0 right-0 z-50 flex items-center px-6 transition-all duration-300 ease-in-out animate-fade-in">
      <div class="flex items-center space-x-4">
        <div class="font-medium text-lg">头部导航</div>
      </div>
      </nav>

  );
};

export default Header;