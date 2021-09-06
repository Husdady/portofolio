import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const handleShowLoading = () => setLoading(true);
  const handleHideLoading = () => setLoading(false);
  return {
    isLoading: loading,
    showLoading: handleShowLoading,
    hideLoading: handleHideLoading
  }
}

export default useLoading