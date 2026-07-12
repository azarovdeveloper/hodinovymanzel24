/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { I18nProvider } from './context/I18nContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingPhone } from './components/FloatingPhone';

export default function App() {
  return (
    <I18nProvider>
      <div className="font-sans text-[#0F172A] bg-[#F8FAFC] selection:bg-[#2563EB] selection:text-white scroll-smooth min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Services />
          <WhyChooseUs />
          <WorkProcess />
          <Gallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingPhone />
      </div>
    </I18nProvider>
  );
}
