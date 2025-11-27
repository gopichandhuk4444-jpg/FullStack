import { useState, useEffect } from 'react';

export function LocalStorageExample() {
  const [value, setValue] = useState('');
  const handleStore = (newValue) => {
    setValue(newValue);
    try {
      localStorage.setItem('myKey', JSON.stringify(newValue));
    } catch (error) {
      console.error('Storage error:', error);
    }
  };
  useEffect(() => {
    const stored = localStorage.getItem('myKey');
    if (stored) {
      setValue(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
        <h1>Local Storage</h1>
        <input value={value} onChange={(e) => handleStore(e.target.value)} />
        <p>Stored Value: {value}</p>
    </div>
  );
}