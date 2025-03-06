import { createSignal, onMount, Suspense, createRoot } from "solid-js";
import 'flowbite/dist/flowbite.css'; // 确保样式生效
import "flowbite";
import routes from "~solid-pages";

import Login from "./Login";
import { Navigate, Route, Router } from "@solidjs/router";

// 用 createRoot 确保信号在正确的作用域中
const AuthStore = createRoot(() => {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);

  onMount(() => {
    // 读取 localStorage 里的用户名和密码，如果匹配则认为用户已登录
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser === "admin" && savedPass === "123456") {
      setIsAuthenticated(true);
    }
  });

  return { isAuthenticated, setIsAuthenticated };
});

function ProtectedRoute({ component: Component }: any) {
  return AuthStore.isAuthenticated() ? <Component /> : <Navigate href="/login" />;
}

function App() {
  const renderProtectedRoutes = (routeList: any[]) =>
    routeList.map((route) => {
      const LazyComponent = route.component;
      return (
        <Route
          path={route.path}
          component={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute component={LazyComponent} />
            </Suspense>
          )}
        >
          {route.children && renderProtectedRoutes(route.children)}
        </Route>
      );
    });

  return (
    <Router>
      <Route path="/login" component={Login} />
      {renderProtectedRoutes(routes)}
      <Route path="*" component={() => <div>404 Not Found</div>} />
    </Router>
  );
}

export default App;
