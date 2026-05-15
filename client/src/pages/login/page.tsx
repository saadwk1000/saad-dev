import { useState } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../shared/validations/login";
import { useAppSelector, type AppDispatch } from "../../shared/redux";
import { loginUser } from "../../shared/redux/slice/authSlice";
import { resetAuth } from "../../shared/redux/slice/authSlice";
import styles from "./style.module.scss";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetAuth());
    sessionStorage.clear();
    localStorage.removeItem("token");
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(loginUser(values));
        if (loginUser.fulfilled.match(resultAction)) {
          navigate("/admin");
        }
      } catch (err) {
        console.error("Login component catch block:", err);
      }
    },
  });

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1>
            Welcome <span className={styles.gold}>Back</span>
          </h1>
          <p>Enter your credentials to access your account</p>
        </div>

        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className={styles.form}
        >
          {error && <div className={styles.globalError}>{error}</div>}

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email Address</label>
            <div className={styles.inputWrapper}>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
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
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorMessage}>{formik.errors.email}</p>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.touched.password && formik.errors.password
                    ? styles.errorInput
                    : ""
                }
              />
              <span className={styles.focusBorder}></span>
              <button
                type="button"
                className={styles.toggleBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className={styles.errorMessage}>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit" className={styles.loginBtn} disabled={loading}>
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
