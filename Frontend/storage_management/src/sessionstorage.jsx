import { useState, useEffect } from 'react';

export function SessionStorageExample() {
  const [value, setValue] = useState('');
  const handleStore = (newValue) => {
    setValue(newValue);
    try {
      sessionStorage.setItem('sessionKey', JSON.stringify(newValue));
    } catch (error) {
      console.error('Storage error:', error);
    }
  };

  useEffect(() => {
    const stored = sessionStorage.getItem('sessionKey');
    if (stored) {
      setValue(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
        <h1>Session Storage</h1>
      <input value={value} onChange={(e) => handleStore(e.target.value)} />
      <p>Session Value: {value}</p>
    </div>
  );
}