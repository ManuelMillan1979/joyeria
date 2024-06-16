export const logger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl},Fecha ${new Date().toISOString()}`);
    next();
}