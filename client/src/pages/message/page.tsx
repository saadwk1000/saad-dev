import React from "react";
import { useFormik } from "formik";
import { MessageSchema } from "../../shared/validations/message";
import styles from "./style.module.scss";
import axios from "axios";

const Message: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: MessageSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/messages",
          values,
        );

        console.log("Server Response:", res.data);

        alert("Message sent successfully!");
        resetForm();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Drop a <span className={styles.gold}>Message</span>
          </h2>
          <p className={styles.subtitle}>
            Let's collaborate on your next big idea.
          </p>
        </div>

        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={
                  formik.touched.name && formik.errors.name
                    ? styles.errorInput
                    : ""
                }
              />
              <span className={styles.focusBorder}></span>
              {formik.touched.name && formik.errors.name && (
                <div className={styles.errorText}>{formik.errors.name}</div>
              )}
            </div>

            <div className={styles.field}>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.errorInput
                    : ""
                }
              />
              <span className={styles.focusBorder}></span>
              {formik.touched.email && formik.errors.email && (
                <div className={styles.errorText}>{formik.errors.email}</div>
              )}
            </div>
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={6}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={
                formik.touched.message && formik.errors.message
                  ? styles.errorInput
                  : ""
              }
            ></textarea>
            <span className={styles.focusBorder}></span>
            {formik.touched.message && formik.errors.message && (
              <div className={styles.errorText}>{formik.errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Message;
