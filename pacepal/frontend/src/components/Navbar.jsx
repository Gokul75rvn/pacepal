import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">PacePal</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/routine">Routine Builder</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
    </nav>
  );
}