import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, UserPlus } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    localStorage.setItem(
      "mysuite_user",
      JSON.stringify({
        name: name || "Pradyumna",
        email,
      })
    );

    localStorage.setItem("mysuite_token", "demo-token");

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          MS
        </div>

        <h1>
          {isRegister
            ? "Create your account"
            : "Welcome back!"}
        </h1>

        <p>
          {isRegister
            ? "Create your MySuite account."
            : "Login to manage your notes and expenses."}
        </p>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <label>
              Full Name

              <div className="input-box">
                <UserPlus size={16} />

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>
            </label>
          )}

          <label>
            Email

            <div className="input-box">
              <Mail size={16} />

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>
          </label>

          <label>
            Password

            <div className="input-box">
              <Lock size={16} />

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>
          </label>

          <button
            className="login-submit"
            type="submit"
          >
            {isRegister
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        <button
          className="auth-switch"
          onClick={() =>
            setIsRegister(!isRegister)
          }
        >
          {isRegister
            ? "Already have an account? Login"
            : "Create a new account"}
        </button>

        <small>
          Demo authentication for now.
        </small>

      </div>

    </div>
  );
}