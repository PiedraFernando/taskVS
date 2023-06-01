import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          const parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    },500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return {item, saveItem, loading, error};
}

export {useLocalStorage};
