// Footer.jsx
import { Component } from 'solid-js';

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer class="fixed bottom-0 left-64 w-[calc(100%-16rem)] border-t border-gray-100 py-6 px-6 bg-gray-50">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm text-gray-500">版权所有 © {new Date().getFullYear()} 公司名称</p>
        </div>
      </div>
  </footer>
  
  );
};

export default Footer;