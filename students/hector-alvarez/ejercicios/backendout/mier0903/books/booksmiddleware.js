export const validateBook = (req, res, next) => {
    // validar que la fecha de llegada no sea inferior a la fecha salida
    // que el origen y el destino sean codigos IATA
    next();
}