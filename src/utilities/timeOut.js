 const timeOut = (tiempo, tarea) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(tarea);
      }, tiempo)
    });
  }

  export default timeOut;