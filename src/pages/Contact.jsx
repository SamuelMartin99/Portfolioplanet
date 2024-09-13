import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Keyboard from "../models/Keyboard"; // Importa el modelo 3D del teclado
import useAlert from "../hooks/useAlert"; // Importa el hook personalizado para manejar alertas
import Alert from "../components/Alert"; // Importa el componente de alerta
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
          from_email: form.email, // Email del remitente
          to_email: "samudev99@gmail.com", // Email del destinatario
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
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />} {/* Mostrar alerta si está activa */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Envia un mensaje y estaremos en contacto!</h1>
        {/* Título del formulario */}
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit} // Manejar el envío del formulario
        >
          <label className="text-black-500 font-semibold">
            Nombre
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Ingrese su nombre"
              required
              value={form.name}
              onChange={handleChange} // Actualizar el estado del formulario cuando el usuario escribe
              onFocus={handleFocus} // Cambiar la animación cuando el campo recibe foco
              onBlur={handleBlur} // Cambiar la animación cuando el campo pierde foco
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Ingrese su email"
              required
              value={form.email}
              onChange={handleChange} // Actualizar el estado del formulario cuando el usuario escribe
              onFocus={handleFocus} // Cambiar la animación cuando el campo recibe foco
              onBlur={handleBlur} // Cambiar la animación cuando el campo pierde foco
            />
          </label>

          <label className="text-black-500 font-semibold">
            Tu mensaje
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Deja un mensaje"
              required
              value={form.message}
              onChange={handleChange} // Actualizar el estado del formulario cuando el usuario escribe
              onFocus={handleFocus} // Cambiar la animación cuando el campo recibe foco
              onBlur={handleBlur} // Cambiar la animación cuando el campo pierde foco
            />
          </label>
          <button
            type="submit"
            disabled={isLoading} // Deshabilitar el botón cuando se está enviando
            className="btn"
            onFocus={handleFocus} // Cambiar la animación cuando el botón recibe foco
            onBlur={handleBlur} // Cambiar la animación cuando el botón pierde foco
          >
            {isLoading ? "Enviando..." : "Enviar"}
            {/* Cambiar el texto del botón según el estado de carga */}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [5, 5, 5], // Posición de la cámara
            fov: 75, // Campo de visión de la cámara
            near: 0.1, // Distancia cercana del frustum de la cámara
            far: 90, // Distancia lejana del frustum de la cámara
          }}
        >
          <directionalLight intensity={2.5} position={[0.2, 1, 1]} />
          {/* Luz direccional */}
          <ambientLight intensity={1} /> {/* Luz ambiental */}
          <Suspense fallback={<Loader />}>
           
            {/* Muestra el Loader mientras se carga el modelo */}
            <Keyboard
              currentAnimation={currentAnimation} // Animación actual del teclado
              position={[1, 0.1, -2]} // Posición del modelo en el espacio 3D
              rotation={[7.9, 7.6, 4.4]} // Rotación del modelo en el espacio 3D
              scale={[40, 40, 40]} // Escala del modelo en el espacio 3D
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
