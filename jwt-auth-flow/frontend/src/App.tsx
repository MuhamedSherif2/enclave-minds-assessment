import api from "./services/api";

function App() {

  const login = async () => {
    const res = await api.post("/login", {
      username: "Mohammed"
    });

    localStorage.setItem("token", res.data.token);
    alert("Token saved in localStorage");
  };

  const getDashboard = async () => {
    const res = await api.get("/dashboard");
    console.log(res.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          JWT Auth Demo
        </h2>

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition mb-4"
        >
          Login
        </button>

        <button
          onClick={getDashboard}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Get Dashboard
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Check console for response
        </p>

      </div>
    </div>
  );
}

export default App;
