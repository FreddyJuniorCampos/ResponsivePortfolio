import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";

import { init, send } from "@emailjs/browser";
init("user_PM8RAIlNHzqhd39ZHm7mm");

const CardContact = ({ language }) => {
  const Schema =
    language === "EN"
      ? Yup.object().shape({
          name: Yup.string()
            .min(2, "Name too short")
            .max(50, "Name too long")
            .required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          about: Yup.string()
            .min(4, "Please explain further your reason for contact.")
            .max(1500, "Messagge to long")
            .required("Required"),
        })
      : Yup.object().shape({
          name: Yup.string()
            .min(2, "Muy corto su nombre")
            .max(50, "Muy largo su nombre")
            .required("Requerido"),
          email: Yup.string().email("Correo invalido").required("Requerido"),
          about: Yup.string()
            .min(4, "Por favor, explique mas su razón de contacto")
            .max(1500, "Muy largo su mensaje")
            .required("Requerido"),
        });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      about: "",
    },
    onSubmit: async (values) => {
      const name = values.name;
      const emailBody = `Hola, mi nombre es ${values.name}. 
      
      Quisiera hablarte sobre: ${values.about}.

      Por favor responde a mi correo: ${values.email}
      `;

      const templateParams = {
        to_name: "Freddy",
        from_name: name,
        message: emailBody,
      };

      formik.handleReset();

      send("service_5rt2fdo", "template_8cdiv1h", templateParams).then(
        function (response) {
          language === "EN"
            ? Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Email has been sent successfully",
                showConfirmButton: false,
                timer: 2000,
              })
            : Swal.fire({
                icon: "success",
                title: "Exito!",
                text: "Tu correo ha sido enviado",
                showConfirmButton: false,
                timer: 2000,
              });
        },
        function (error) {
          language === "EN"
            ? Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Unexpected error",
                showConfirmButton: true,
              })
            : Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Ha ocurrido un error",
                showConfirmButton: true,
              });
        }
      );
    },
    validationSchema: Schema,
  });

  return (
    <Card>
      <form id="contact" onSubmit={formik.handleSubmit}>
        <CardBody>
          <div className="mt-4 mb-8 px-4">
            <InputIcon
              name="name"
              type="text"
              color="lightBlue"
              placeholder={language === "EN" ? "Full Name" : "Nombre Completo"}
              iconName="account_circle"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={
                formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : null
              }
            />
          </div>
          <div className="mb-8 px-4">
            <InputIcon
              name="email"
              type="email"
              color="lightBlue"
              placeholder={
                language === "EN" ? "Email Address" : "Correo Electrónico"
              }
              iconName="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
          </div>
          <div className="mb-4 px-4">
            <Textarea
              name="about"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder={language === "EN" ? "About" : "Acerca de"}
              onChange={formik.handleChange}
              value={formik.values.about}
              error={
                formik.errors.about && formik.touched.about
                  ? formik.errors.about
                  : null
              }
            />
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            {language === "EN" ? (
              <Button
                color="green"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                type="submit"
              >
                Submit
              </Button>
            ) : (
              <Button
                color="green"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                type="submit"
              >
                Enviar
              </Button>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CardContact;
