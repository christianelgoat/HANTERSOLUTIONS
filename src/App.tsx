/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { Careers } from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/empresa" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/carreras" element={<Careers />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
