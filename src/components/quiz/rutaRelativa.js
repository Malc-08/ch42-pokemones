const getFileName = (filePath) => {
    // Dividir la ruta por el separador de directorios
    const parts = filePath.split('/');
    // Devolver el último segmento, que es el nombre del archivo
    return parts.pop();
}

export { getFileName };
