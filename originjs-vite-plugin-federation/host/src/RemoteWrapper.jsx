import React, { useState, useEffect } from 'react';

const RemoteWrapper = ({ module, scope }) => {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (!window[scope]) {
          throw new Error(`El scope remoto "${scope}" no está disponible en window.`);
        }
        const factory = await window[scope].get(module);
        const Module = factory().default;
        setComponent(() => Module);
      } catch (err) {
        console.error('Error al cargar el módulo remoto:', err);
        setError(err);
      }
    })();
  }, [module, scope]);

  if (error) return <div>Error al cargar el componente remoto: {error.message}</div>;
  return Component ? <Component /> : <div>Cargando...</div>;
};

export default RemoteWrapper;
