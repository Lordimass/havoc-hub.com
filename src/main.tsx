import App from './app';

/**
 * Hello future me!
 * I'm writing this in the eventuality that I forget how to deploy new versions
 * of the site in the future, which is very likely, so I'm leaving this note in
 * the most obvious place I can think of :)
 * 
 * To run development server, run `netlify dev` in the root of the project
 * To publish new versions of the site, go to the Netlify dashboard.
 */

import { createRoot } from 'react-dom/client'

const rootEl = document.getElementById("root");

if (rootEl) {
    const root = createRoot(rootEl);
    root.render(<App />);
} else {
    console.error("Couldn't find root element!");
}