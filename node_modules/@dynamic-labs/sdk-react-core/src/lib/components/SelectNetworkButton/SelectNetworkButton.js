import { jsx, jsxs } from 'react/jsx-runtime';
import { Button } from '../Button/Button.js';

const SelectNetworkButton = ({ networkId, networkName, networkIconUrl, onClick, }) => {
    const networkImage = (jsx("img", { alt: networkName, className: 'select-network-button__icon', src: networkIconUrl }));
    return (jsxs(Button, { dataTestId: 'SelectNetworkButton', onClick: () => onClick(networkId), expanded: true, className: 'select-network-button', children: ["Select", networkImage, networkName, " network"] }));
};

export { SelectNetworkButton };
