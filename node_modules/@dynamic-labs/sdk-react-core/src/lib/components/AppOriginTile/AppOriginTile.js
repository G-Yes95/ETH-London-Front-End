import { jsxs, jsx } from 'react/jsx-runtime';
import { Typography } from '../Typography/Typography.js';

const AppOriginTile = ({ appLogoUrl, appName, appOrigin, }) => (jsxs("div", { className: 'app-origin-tile', children: [Boolean(appName) && (jsxs("div", { className: 'app-origin-tile__title', children: [Boolean(appLogoUrl) && (jsx("img", { alt: 'app_logo', src: appLogoUrl, className: 'app-origin-tile__logo' })), jsx(Typography, { color: 'primary', variant: 'body_normal', children: appName })] })), jsx(Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', children: appOrigin })] }));

export { AppOriginTile };
