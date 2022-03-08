import express from 'express';
import { logFlight } from './flights.middleware';

const router = express.Router();



router.use(logFlight); // registra nuestro middleware en TODAS las rutas de este router