import { useState } from 'react';
import Header from '../components/Header';
import { Sparkles, Heart, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app" style={{ background: '#FFFCF9' }}>
      <Header />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE8D6 100%)',
        padding: '80px 60px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#FF8243',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif'
          }}>
            Get In Touch
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#2d2d2d',
            lineHeight: 1.6
          }}>
            We'd love to hear from you! Whether you have a question about recipes, feedback, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section style={{
        padding: '80px 60px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#2d2d2d',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif'
            }}>
              Contact Information
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              Have questions about our recipes or want to share your cooking experience? We're here to help!
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              {/* Email */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#FF8243',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Email
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    <a href="mailto:hello@culinaria.com" style={{
                      color: '#FF8243',
                      textDecoration: 'none'
                    }}>
                      hello@culinaria.com
                    </a>
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    <a href="mailto:support@culinaria.com" style={{
                      color: '#FF8243',
                      textDecoration: 'none'
                    }}>
                      support@culinaria.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#FF8243',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Phone
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    <a href="tel:+11234567890" style={{
                      color: '#FF8243',
                      textDecoration: 'none'
                    }}>
                      +1 (123) 456-7890
                    </a>
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    marginTop: '5px'
                  }}>
                    Mon-Fri, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#FF8243',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Address
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    123 Culinary Street<br />
                    Food District, FC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#FF8243',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={24} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Business Hours
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#FFFCF9',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d2d2d',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif'
            }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div style={{
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                color: '#155724'
              }}>
                <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>Thank you!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #FFE8D6',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF8243'}
                    onBlur={(e) => e.target.style.borderColor = '#FFE8D6'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #FFE8D6',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF8243'}
                    onBlur={(e) => e.target.style.borderColor = '#FFE8D6'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #FFE8D6',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF8243'}
                    onBlur={(e) => e.target.style.borderColor = '#FFE8D6'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2d2d2d',
                    marginBottom: '8px'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #FFE8D6',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF8243'}
                    onBlur={(e) => e.target.style.borderColor = '#FFE8D6'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#FF8243',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#E66B30'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#FF8243'}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE8D6 100%)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#2d2d2d',
            marginBottom: '50px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#FF8243',
                marginBottom: '15px'
              }}>
                How can I submit my own recipe?
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                We love receiving recipe submissions! Please email us at hello@culinaria.com with your recipe details, including ingredients, instructions, and a high-quality photo if possible.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#FF8243',
                marginBottom: '15px'
              }}>
                Can I request a specific recipe?
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                Absolutely! We're always looking for new recipe ideas. Send us your requests through our contact form or email, and we'll do our best to create and share the recipe you're looking for.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#FF8243',
                marginBottom: '15px'
              }}>
                Do you offer cooking classes?
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: 1.6
              }}>
                We're working on developing online cooking classes! Stay tuned for updates, or contact us to express your interest in specific topics you'd like to learn about.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
