function App() {
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  }

  const navbarStyle = {
    backgroundColor: '#003366',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  }

  const navItemsStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '16px',
  }

  const heroStyle = {
    backgroundColor: '#e6f0ff',
    padding: '60px 20px',
    textAlign: 'center',
  }

  const heroTitle = {
    fontSize: '36px',
    color: '#003366',
    marginBottom: '10px',
  }

  const heroSubtitle = {
    fontSize: '20px',
    color: '#555',
  }

  const sectionStyle = {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: 'auto',
    lineHeight: '1.6',
    color: '#333',
  }

  const footerStyle = {
    backgroundColor: '#003366',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  }

  return (
    <div style={containerStyle}>
      {/* Navbar */}
      <header style={navbarStyle}>
        <h2>ABC Engineering College</h2>
        <nav style={navItemsStyle}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={heroStyle} id="home">
        <h1 style={heroTitle}>Welcome to ABC Engineering College</h1>
        <p style={heroSubtitle}>Empowering Future Innovators and Leaders</p>
      </section>

      {/* About Section */}
      <section style={sectionStyle} id="about">
        <h2>About Us</h2>
        <p>
          ABC Engineering College is a premier institution dedicated to excellence in education,
          research, and innovation. Our mission is to foster technical knowledge, leadership, and
          creativity in students to prepare them for the challenges of the future.
        </p>
      </section>

      {/* Contact Section */}
      <section style={sectionStyle} id="contact">
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 123 Knowledge Lane, Tech City, India</p>
        <p><strong>Email:</strong> info@abcengineering.edu.in</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        &copy; 2025 ABC Engineering College. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App
