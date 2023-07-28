import './styles/globals.css';
import { Inter } from 'next/font/google';
import Nav from './components/nav/nav/Nav';
import Footer from './components/footer/Footer';
import { MenuProvider } from './components/contexts/mobileMenuContext';
import { SessionAuthenticationProvider } from './components/contexts/authenticationContext';
import AuthProvider from './components/authProvider/AuthProvider';
import MobileMenu from './components/nav/mobileMenu/MobileMenu';

const inter = Inter(
  { subsets: ['latin'] },
  { weights: ['400', '500', '600', '700', '800'] }
);

export const metadata = {
  title: 'Habit Tracker',
  description: 'A web application built to track your daily habits.',
  openGraph: {
    images: [
      {
        url: 'https://i.ibb.co/NjyB8d8/habits.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} body-container`}>
        <AuthProvider>
          <MenuProvider>
            <SessionAuthenticationProvider>
              <Nav />
              <MobileMenu />
              {children}
            </SessionAuthenticationProvider>
            <Footer />
          </MenuProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
