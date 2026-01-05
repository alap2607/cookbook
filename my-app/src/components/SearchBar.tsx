import { Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search recipes..." }: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  // Debounce search 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <Search
        size={20}
        style={{
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#666'
        }}
      />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '12px 45px',
          border: '2px solid #FFE8D6',
          borderRadius: '25px',
          fontSize: '1rem',
          outline: 'none',
          transition: 'border-color 0.3s ease'
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = '#FF8243'}
        onBlur={(e) => e.currentTarget.style.borderColor = '#FFE8D6'}
      />
      {localValue && (
        <button
          onClick={() => setLocalValue('')}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="Clear search"
        >
          <X size={20} color="#666" />
        </button>
      )}
    </div>
  );
}
