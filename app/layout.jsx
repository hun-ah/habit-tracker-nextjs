import './styles/globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { MenuProvider } from './components/contexts/mobileMenuContext';
import AuthProvider from './components/authProvider/AuthProvider';
import MobileMenu from './components/nav/MobileMenu';

const inter = Inter(
  { subsets: ['latin'] },
  { weights: ['400', '500', '600', '700', '800'] }
);

export const metadata = {
  title: 'Habit Tracker',
  description: 'A web application built to track your daily habits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} body-container`}>
        <AuthProvider>
          <MenuProvider>
            <Nav />
            <MobileMenu />
            {children}
            <Footer />
          </MenuProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
