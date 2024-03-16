import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const ModalHeader = ({ alignContent, children, leading, displayLeading = true, trailing, displayTrailing = true, style, displayBorder, }) => (jsxs("div", { className: classNames('modal-header', {
        'modal-header--align-content-bottom': alignContent === 'bottom',
        'modal-header--border': displayBorder,
    }), style: style, children: [displayLeading && jsx("div", { className: 'modal-header__leading', children: leading }), children, displayTrailing && (jsx("div", { className: 'modal-header__trailing', children: trailing }))] }));

export { ModalHeader };
