import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Keyboard from "../models/Keyboard"; // Importa el modelo 3D del teclado
import useAlert from "../hooks/useAlert"; // Importa el hook personalizado para manejar alertas
import Alert from "../components/Alert"; // Importa el componente de alerta
import backgroundImage from "../assets/images/background-image.jpg";
const Contact = () => {
  const formRef = useRef(); // Crea una referencia al formulario
  const [form, setForm] = useState({ name: "", email: "", message: "" }); // Estado para almacenar los datos del formulario
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar el estado de carga
  const [currentAnimation, setCurrentAnimation] = useState("Animation"); // Estado para manejar la animación del modelo 3D

  const { alert, showAlert, hideAlert } = useAlert(); // Desestructuramos el hook useAlert para obtener el estado y funciones

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Función para validar el formulario
  const validateForm = () => {
    const { name, email, message } = form;

    // Validar si los campos están vacíos
    if (!name || !email || !message) {
      showAlert({
        show: true,
        text: "Por favor, complete todos los campos.",
        type: "danger",
      });
      return false;
    }

    // Validar formato de email usando expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert({
        show: true,
        text: "Por favor, ingrese un email válido.",
        type: "danger",
      });
      return false;
    }

    // Validar longitud del nombre
    if (name.length < 2) {
      showAlert({
        show: true,
        text: "El nombre debe tener al menos 2 caracteres.",
        type: "danger",
      });
      return false;
    }

    // Validar longitud del mensaje
    if (message.length < 10) {
      showAlert({
        show: true,
        text: "El mensaje debe tener al menos 10 caracteres.",
        type: "danger",
      });
      return false;
    }

    return true;
  };

  // Función para restablecer el formulario
  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
    setCurrentAnimation("idle");
  };

  // Función para manejar el éxito del envío
  const handleSuccess = () => {
    setIsLoading(false);
    showAlert({
      show: true,
      text: "Mensaje enviado correctamente!",
      type: "success",
    });

    setTimeout(() => {
      hideAlert();
      resetForm(); // Restablecer el formulario después del éxito
    }, 2000);
  };

  // Función para manejar errores específicos
  const handleError = (error) => {
    console.error("Error al enviar el mensaje:", error);

    setIsLoading(false); // Desactivar el estado de carga
    setCurrentAnimation("AnimationAction"); // Mantener la animación de acción

    if (error.response) {
      showAlert({
        show: true,
        text: `Error del servidor: ${error.response.status}`,
        type: "danger",
      });
    } else if (error.request) {
      showAlert({
        show: true,
        text: "No se pudo conectar al servidor. Intente de nuevo más tarde.",
        type: "danger",
      });
    } else {
      showAlert({
        show: true,
        text: "Error al enviar el mensaje. Verifique su conexión y vuelva a intentarlo.",
        type: "danger",
      });
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Llamar a la función de validación antes de proceder
    if (!validateForm()) {
      return; // Detener el envío si la validación falla
    }

    setIsLoading(true); // Activar el estado de carga
    setCurrentAnimation("AnimationAction"); // Cambiar la animación del modelo 3D

    // Enviar el formulario utilizando emailjs
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // ID del servicio de emailjs
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // ID de la plantilla de emailjs
        {
          form_name: form.name, // Nombre del remitente
          to_name: "samuel", // Nombre del destinatario
          from_email: form.email, // remitente
          to_email: "neptunodev@gmail.com", //destinatario
          message: form.message, // Mensaje
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Llave pública de emailjs
      )
      .then(handleSuccess) // Llamar a la función de éxito
      .catch(handleError); // Llamar a la función de manejo de errores
  };

  // Función para manejar el foco en los campos del formulario
  const handleFocus = () => setCurrentAnimation("Animation");

  // Función para manejar cuando el foco se pierde en los campos del formulario
  const handleBlur = () => setCurrentAnimation("Animation");

  return (
    <section className="mx-auto flex lg:flex-row flex-col max-w-7xl bg-gray-800 text-white p-8 lg:p-16 mt-30"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >  {/* Añadimos mt-20 */}
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[100%] lg:min-w-[50%]">
        <h1 className="hero-text text-white font-bold text-3xl lg:text-5xl mt-20">
          Contacto
        </h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-gray-300 font-semibold">
            Nombre
            <input
              type="text"
              name="name"
              className="input bg-gray-900 text-white border border-gray-700 hover:border-cyan-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-3 transition-all duration-300 ease-in-out"
              placeholder="Ingrese su nombre"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-300 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input bg-gray-900 text-white border border-gray-700 hover:border-cyan-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-3 transition-all duration-300 ease-in-out"
              placeholder="Ingrese su email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-300 font-semibold">
            Tu mensaje
            <textarea
              name="message"
              rows="4"
              className="textarea bg-gray-900 text-white border border-gray-700 hover:border-cyan-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-3 transition-all duration-300 ease-in-out"
              placeholder="Deja un mensaje"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="btn bg-cyan-500 text-white font-semibold rounded-lg py-3 px-6 hover:bg-cyan-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-[500px] h-[400px]">
        <Canvas
          style={{ touchAction: "none", width: "100%", height: "100%" }}
          camera={{
            position: [3, 3, 3],
            fov: 50,
            near: 0.1,
            far: 80,
          }}
        >
          <directionalLight intensity={2} position={[0, 1, 1]} />
          <ambientLight intensity={0.8} />
          <Suspense fallback={<Loader />}>
            <Keyboard
              currentAnimation={currentAnimation}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={[25, 25, 25]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
