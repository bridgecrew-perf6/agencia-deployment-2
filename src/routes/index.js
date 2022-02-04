import express from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from "../controllers/pageController.js";

import { guardarTestimonial } from '../controllers/testimonialController.js'

const router = express.Router()

/**
 * Home Page
 */
router.get('/', paginaInicio )

/**
 * Nosotros
 */
router.get('/nosotros', paginaNosotros)

/**
 * Viajes
 */
router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)

/**
 * Testimoniales
 */
router.get('/testimoniales', paginaTestimoniales )
router.post('/testimoniales', guardarTestimonial )

export default router