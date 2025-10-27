import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Accueil from './pages/Accueil';
import Evenements from './pages/Evenements';
import Sponsors from './pages/Sponsors';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Particulier from './pages/Particulier';
import Professionnel from './pages/Professionnel';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import { ThemeProvider } from './contexts/ThemeContext';
import NotFound from './pages/NotFound';
import { ENABLE_ADMIN } from './config';

// Admin Pages (only loaded when admin is enabled)
const AdminLogin = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Login')) : null;
const AdminLayout = ENABLE_ADMIN ? React.lazy(() => import('./admin/components/Layout')) : null;
const AdminDashboard = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Dashboard')) : null;
const AdminEvents = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Events')) : null;
const AdminGallery = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Gallery')) : null;
const AdminContacts = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Contacts')) : null;
const AdminSponsors = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Sponsors')) : null;
const AdminPartners = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Partners')) : null;
const AdminFeedback = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Feedback')) : null;
const AdminProfessionalServices = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/ProfessionalServices')) : null;
const AdminParticularServices = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/ParticularServices')) : null;
const AdminUsers = ENABLE_ADMIN ? React.lazy(() => import('./admin/pages/Users')) : null;

// Layout Component for Public Routes
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router basename='swissApp'>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route
                path="*"
                element={
                  <PublicLayout>
                    <Routes>
                      <Route index element={<Accueil />} />
                      <Route path="evenements" element={<Evenements />} />
                      <Route path="sponsors" element={<Sponsors />} />
                      <Route path="galerie" element={<Galerie />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="particulier" element={<Particulier />} />
                      <Route path="professionnel" element={<Professionnel />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </PublicLayout>
                }
              />

              {/* Admin Routes - Only available when not in static deployment */}
              {ENABLE_ADMIN && AdminLogin && (
                <Route path="/admin/login" element={
                  <React.Suspense fallback={<div>Chargement...</div>}>
                    <AdminLogin />
                  </React.Suspense>
                } />
              )}
              {ENABLE_ADMIN && AdminLayout && (
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute>
                      <React.Suspense fallback={<div>Chargement...</div>}>
                        <AdminLayout>
                          <Routes>
                            <Route path="/" element={<Navigate to="dashboard" replace />} />
                            {AdminDashboard && <Route path="dashboard" element={<AdminDashboard />} />}
                            {AdminEvents && <Route path="events" element={<AdminEvents />} />}
                            {AdminGallery && <Route path="gallery" element={<AdminGallery />} />}
                            {AdminContacts && <Route path="contacts" element={<AdminContacts />} />}
                            {AdminSponsors && <Route path="sponsors" element={<AdminSponsors />} />}
                            {AdminPartners && <Route path="partners" element={<AdminPartners />} />}
                            {AdminFeedback && <Route path="feedback" element={<AdminFeedback />} />}
                            {AdminProfessionalServices && <Route path="professional-services" element={<AdminProfessionalServices />} />}
                            {AdminParticularServices && <Route path="particular-services" element={<AdminParticularServices />} />}
                            {AdminUsers && <Route path="users" element={
                              <ProtectedRoute requiredRoles={['ROLE_SUPER_ADMIN']}>
                                <AdminUsers />
                              </ProtectedRoute>
                            } />}
                          </Routes>
                        </AdminLayout>
                      </React.Suspense>
                    </ProtectedRoute>
                  }
                />
              )}
              
              {/* Redirect admin routes to home when admin is disabled */}
              {!ENABLE_ADMIN && (
                <>
                  <Route path="/admin/*" element={<Navigate to="/" replace />} />
                </>
              )}
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;