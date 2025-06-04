import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { RouterUrlEnum } from "@/types/enums/RouterUrlEnum";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to={RouterUrlEnum.HOME}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
