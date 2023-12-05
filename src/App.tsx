import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<any>([]);

  console.log(data);

  const fetchData = async () => {
    const position: any = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const API_URL = import.meta.env.VITE_APP_API_URL;
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const response = await fetch(
      `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`
    );

    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="">Holla</div>
    </div>
  );
}
