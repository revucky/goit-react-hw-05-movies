import { toast } from "react-toastify";

export default function NotFoundView() {
  const notify = () => toast.error("404");
  return <div onLoad={notify}> 404! Page not found! </div>;
}
