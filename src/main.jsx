import App from './app';

/**
 * Hello future me!
 * I'm writing this in the eventuality that I forget how to deploy new versions
 * of the site in the future, which is very likely, so I'm leaving this note in
 * the most obvious place I can think of :)
 * 
 * To deploy, simply run `npm run deploy` in the root directory of the repo,
 * everything else is automatic and Github should publish the site within ~1min 
 */

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));
root.render(<App />);
