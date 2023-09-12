import axios from "axios";

export default function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/fitpros";
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
