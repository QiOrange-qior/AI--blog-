import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center glass-effect">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="text-8xl font-bold text-gradient-cyber mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground">页面未找到</h1>
        <p className="text-xl text-muted-foreground">抱歉，您访问的页面不存在</p>
        <Button variant="cyber" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            返回首页
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
