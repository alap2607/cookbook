import { useState } from "react";
import { Search } from "lucide-react";
import "./TopBar.css";

interface TopBarProps {
  onSearch?: (query: string) => void;
}

export default function TopBar({ onSearch }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} className="topbar-search-icon" />
        <input type="text" placeholder="Search recipe here..." value={searchQuery} onChange={handleSearch} className="topbar-search-input" />
      </div>
    </header>
  );
}
