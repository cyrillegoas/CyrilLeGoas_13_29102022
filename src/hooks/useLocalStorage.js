import { useEffect } from 'react';
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? initialValue);

  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state])
  
  return [state, setState];
};
