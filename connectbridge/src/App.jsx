import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState("");

  const openRegistration = (selectedRole) => {
    setRole(selectedRole);
    setPage("register");
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => setPage("home")}
        >
          <span>🌉</span> ConnectBridge
        </div>

        {page === "home" && (
          <>
            <div className="nav-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#features">Features</a>
              <a href="#about">About</a>
            </div>

            <div className="nav-buttons">
              <button className="login-btn">
                Login
              </button>

              <button
                className="signup-btn"
                onClick={() => setPage("selection")}
              >
                Get Started
              </button>
            </div>
          </>
        )}

      </nav>

      {/* ================= HOME ================= */}

      {page === "home" && (
        <>
          <main className="hero">

            <div className="hero-content">

              <div className="hero-badge">
                🚀 Connecting Local Businesses & Creators
              </div>

              <h1>
                Where <span>Creators</span>
                <br />
                Meet <span>Businesses</span>
              </h1>

              <p>
                ConnectBridge helps influencers and businesses
                discover each other, collaborate on promotions,
                and grow together.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() => setPage("selection")}
                >
                  Find Collaborations →
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => setPage("selection")}
                >
                  Explore Creators
                </button>

              </div>

              <div className="hero-note">
                ✨ Free to join · No platform charges · Built for everyone
              </div>

            </div>

            {/* Hero Visual */}

            <div className="hero-visual">

              <div className="visual-card creator-card">

                <div className="card-icon">
                  👨‍💻
                </div>

                <div>
                  <h3>Creator</h3>
                  <p>10K+ Followers</p>
                </div>

                <div className="verified">
                  ✓
                </div>

              </div>

              <div className="bridge">
                🌉
              </div>

              <div className="visual-card business-card">

                <div className="card-icon">
                  🏪
                </div>

                <div>
                  <h3>Business</h3>
                  <p>Local Brand</p>
                </div>

                <div className="verified">
                  ✓
                </div>

              </div>

            </div>

          </main>

          {/* Stats */}

          <section className="stats">

            <div>
              <h2>1 Platform</h2>
              <p>For creators & businesses</p>
            </div>

            <div>
              <h2>100% Free</h2>
              <p>No platform charges</p>
            </div>

            <div>
              <h2>∞ Opportunities</h2>
              <p>Collaborate & grow</p>
            </div>

          </section>
        </>
      )}

      {/* ================= ROLE SELECTION ================= */}

      {page === "selection" && (

        <section className="selection-page">

          <div className="selection-container">

            <button
              className="back-btn"
              onClick={() => setPage("home")}
            >
              ← Back
            </button>

            <div className="selection-header">

              <div className="selection-badge">
                🌉 CONNECTBRIDGE
              </div>

              <h1>
                How do you want to use{" "}
                <span>ConnectBridge?</span>
              </h1>

              <p>
                Choose your role to get started with the
                right experience.
              </p>

            </div>

            <div className="role-cards">

              {/* CREATOR */}

              <div className="role-card">

                <div className="role-icon">
                  🎥
                </div>

                <h2>
                  I'm a Creator
                </h2>

                <p>
                  I create content and want to collaborate
                  with businesses for paid promotions.
                </p>

                <div className="role-features">
                  <span>✓ Find collaborations</span>
                  <span>✓ Set your promotion rates</span>
                  <span>✓ Connect with businesses</span>
                </div>

                <button
                  className="role-btn"
                  onClick={() => openRegistration("creator")}
                >
                  Join as Creator →
                </button>

              </div>

              {/* BUSINESS */}

              <div className="role-card">

                <div className="role-icon">
                  🏪
                </div>

                <h2>
                  I'm a Business
                </h2>

                <p>
                  I own a business and want to find creators
                  to promote my products or services.
                </p>

                <div className="role-features">
                  <span>✓ Find relevant creators</span>
                  <span>✓ Create promotion campaigns</span>
                  <span>✓ Grow your business</span>
                </div>

                <button
                  className="role-btn"
                  onClick={() => openRegistration("business")}
                >
                  Join as Business →
                </button>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* ================= REGISTRATION ================= */}

      {page === "register" && (

        <section className="register-page">

          <div className="register-container">

            <button
              className="back-btn"
              onClick={() => setPage("selection")}
            >
              ← Back
            </button>

            <div className="register-header">

              <div className="register-icon">
                {role === "creator" ? "🎥" : "🏪"}
              </div>

              <h1>
                Create your{" "}
                {role === "creator"
                  ? "Creator"
                  : "Business"}{" "}
                account
              </h1>

              <p>
                Join ConnectBridge and start building
                meaningful collaborations.
              </p>

            </div>

            <form className="register-form">

              {/* Name + Email */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    {role === "creator"
                      ? "Full Name"
                      : "Owner Name"}
                  </label>

                  <input
                    type="text"
                    placeholder={
                      role === "creator"
                        ? "Enter your name"
                        : "Enter owner name"
                    }
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                  />

                </div>

              </div>

              {/* Phone + Location */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="City, State"
                  />

                </div>

              </div>

              {/* CREATOR FIELDS */}

              {role === "creator" ? (

                <>
                  <div className="form-group">

                    <label>
                      Creator Category
                    </label>

                    <select defaultValue="">
                      <option value="" disabled>
                        Select your category
                      </option>

                      <option>Food & Cooking</option>
                      <option>Fashion & Beauty</option>
                      <option>Fitness & Health</option>
                      <option>Technology</option>
                      <option>Gaming</option>
                      <option>Travel</option>
                      <option>Lifestyle</option>
                      <option>Education</option>
                      <option>Entertainment</option>
                      <option>Other</option>
                    </select>

                  </div>

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        Main Platform
                      </label>

                      <select defaultValue="">
                        <option value="" disabled>
                          Select platform
                        </option>

                        <option>Instagram</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>Instagram & YouTube</option>
                        <option>Other</option>
                      </select>

                    </div>

                    <div className="form-group">

                      <label>
                        Followers
                      </label>

                      <input
                        type="number"
                        placeholder="e.g. 10000"
                      />

                    </div>

                  </div>
                </>

              ) : (

                /* BUSINESS FIELDS */

                <>
                  <div className="form-group">

                    <label>
                      Business Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your business name"
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Business Category
                    </label>

                    <select defaultValue="">
                      <option value="" disabled>
                        Select business category
                      </option>

                      <option>Restaurant / Cafe</option>
                      <option>Clothing & Fashion</option>
                      <option>Gym & Fitness</option>
                      <option>Salon & Beauty</option>
                      <option>Electronics</option>
                      <option>Digital Services</option>
                      <option>Education</option>
                      <option>Travel</option>
                      <option>Other</option>
                    </select>

                  </div>
                </>

              )}

              {/* Password */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create a password"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                  />

                </div>

              </div>

              {/* Terms */}

              <label className="terms">

                <input type="checkbox" />

                <span>
                  I agree to the ConnectBridge Terms
                  & Privacy Policy.
                </span>

              </label>

              <button
                type="button"
                className="register-btn"
                onClick={() =>
                  alert(
                    `${role === "creator" ? "Creator" : "Business"} registration will be connected to the backend next!`
                  )
                }
              >
                Create Account →
              </button>

            </form>

          </div>

        </section>

      )}

    </div>
  );
}

export default App;