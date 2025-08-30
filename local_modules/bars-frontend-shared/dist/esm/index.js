import axios from 'axios';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Dialog, styled as styled$1, Accordion, AccordionSummary, AccordionDetails, Breadcrumbs, Tabs, Tab, Drawer, Menu, MenuItem, Switch, CircularProgress, Button, Tooltip, IconButton, TextField, createTheme, Select, FormControl, InputLabel, OutlinedInput, FormHelperText, SvgIcon, Checkbox, Snackbar, Alert, Slide, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Close, ArrowForwardIosSharp, ExpandMore, Cancel } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useMaterialReactTable, MaterialReactTable } from 'material-react-table';
import { MRT_Localization_RU } from 'material-react-table/locales/ru';

class EntryPointBase {
    static SetServicesList(services) {
        if (!services)
            return;
        localStorage.setItem('services', JSON.stringify(services));
    }
    static ClearServicesList() {
        localStorage.removeItem('services');
    }
    static GetServicesList() {
        try {
            const services = localStorage.getItem('services');
            if (!services)
                return undefined;
            const result = JSON.parse(services);
            return result;
        }
        catch (e) {
            let errorMsg = '';
            if (typeof e === "string") {
                errorMsg = e;
            }
            else if (e instanceof Error) {
                errorMsg = e.message;
            }
            console.error('Не удалось получить список служб из памяти: ', errorMsg);
        }
    }
}

class EntryPointClient {
    constructor(entryPointUrl) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const axiosOptions = {
            withCredentials: false,
            baseURL: entryPointUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.client = axios.create(axiosOptions);
    }
    static SetServicesList(services) {
        EntryPointBase.SetServicesList(services);
    }
    static ClearServicesList() {
        EntryPointBase.ClearServicesList();
    }
    static GetServicesList() {
        return EntryPointBase.GetServicesList();
    }
    async RegisterService(serviceName, serviceAddress, isDisabled, serviceConfig, allowOverrideRecord, onError) {
        const response = await this.client
            .post("/api/ServicesRegistry", {
            ServiceAddress: serviceAddress,
            ServiceName: serviceName,
            IsDisabled: isDisabled ?? false,
            Override: allowOverrideRecord ?? true,
            ServiceSettings: serviceConfig
        })
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при добавлении службы: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при добавлении службы: ' + response.data.message);
        }
        return response?.data;
    }
    async EditService(input, onError) {
        const response = await this.client
            .patch("/api/ServicesRegistry", input)
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при редактировании службы: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при редактировании службы: ' + response.data.message);
        }
        return response?.data;
    }
    async RemoveService(serviceId, onError) {
        const response = await this.client
            .delete(`/api/ServicesRegistry?id=${serviceId}`)
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при удалении службы: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при удалении службы: ' + response.data.message);
        }
        return response?.data;
    }
    async GetServiceById(serviceId, onError) {
        const response = await this.client
            .get(`/api/ServicesRegistry/id/${serviceId}`)
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при получении службы: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при получении службы: ' + response.data.message);
        }
        return response?.data;
    }
    async GetServiceByName(serviceName, onError) {
        const response = await this.client
            .get(`/api/ServicesRegistry/name/${serviceName}`)
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при получении службы: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при получении службы: ' + response.data.message);
        }
        return response?.data;
    }
    async GetAllServices(onError) {
        const response = await this.client
            .get(`/api/ServicesRegistry`)
            .catch((reason) => {
            console.warn(reason);
            if (onError)
                onError(reason.message);
            return null;
        });
        if (response && response.data && !response.data.success) {
            console.warn('EntryPoint API сообщило об ошибке при получении списка всех служб: ' + response.data.message);
            if (onError)
                onError('EntryPoint API сообщило об ошибке при получении списка всех служб: ' + response.data.message);
        }
        return response?.data;
    }
    async OnServerAddressEntered(entryPointAddress) {
        //Заготовка коллбека, который будет вызываться, когда введён адрес сервера EntryPoint
        //В базовой реализации в этом методе нет необходимости
        //Но при реализации кастомной может пригодится для выполнения каких-либо действий.
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = ".BarsDialog-module_DialogTitle__-F1Ee {\n    font-size: 22px;\n    color: var(--bars-green-primary);\n    font-weight: 500;\n    padding-top: 28px;\n    padding-bottom: 18px;\n    margin-left: 24px;\n    margin-right: 100px !important;\n}\n\n.BarsDialog-module_DialogCloseContainer__-MUo0 {\n    background-color: var(--bars-gray-low2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--bars-gray-mid2);\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n    border-radius: 2px;\n    position: absolute;\n    right: 20px;\n    top: 18px;\n}\n\n.BarsDialog-module_DialogCloseBtn__w9dyy {\n    width: 16px !important;\n    height: 16px !important;\n}\n\n.BarsDialog-module_DialogTitle__-F1Ee span {\n    padding-right: 20px;\n}\n\n.BarsDialog-module_DialogContent__QxGDm {\n    margin-left: 24px;\n    margin-right: 28px;\n    margin-bottom: 35px;\n    font-size: 14px;\n    color: var(--bars-black);\n}\n\n.BarsDialog-module_DialogButtons__vhs40 {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 28px;\n    margin-left: 24px;\n    margin-right: 28px;\n    gap: 8px;\n}";
var styles$a = {"DialogTitle":"BarsDialog-module_DialogTitle__-F1Ee","DialogCloseContainer":"BarsDialog-module_DialogCloseContainer__-MUo0","DialogCloseBtn":"BarsDialog-module_DialogCloseBtn__w9dyy","DialogContent":"BarsDialog-module_DialogContent__QxGDm","DialogButtons":"BarsDialog-module_DialogButtons__vhs40"};
styleInject(css_248z$b);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
function BarsDialog(props) {
    return (jsxs(BootstrapDialog, { onClose: props.onClose, "aria-labelledby": "customized-dialog-title", open: props.isVisible, maxWidth: 'sm', children: [jsxs("div", { className: styles$a.DialogTitle, children: [props.dialogTitle, jsx("div", { className: styles$a.DialogCloseContainer, onClick: props.onClose, children: jsx(Close, { className: styles$a.DialogCloseBtn }) })] }), jsx("div", { className: styles$a.DialogContent, children: props.children }), jsxs("div", { className: styles$a.DialogButtons, children: [props.multiButtons ? props.multiButtons
                        .map((item, index) => (jsx(BarsButton, { text: item?.buttonText, onClick: item?.onButtonClick, variant: item?.variant }, index)))
                        : (props?.buttonText ? jsx(BarsButton, { text: props?.buttonText ?? '', onClick: props?.onButtonClick, variant: props?.redButton == true ? 'red' : (props?.buttonVariant ?? 'green') }) : null), jsx(BarsButton, { text: '\u041E\u0442\u043C\u0435\u043D\u0430', onClick: props.onClose, variant: 'white', style: { borderColor: 'var(--bars-gray-mid2)', color: 'var(--bars-gray-mid2)' } })] })] }));
}

function BarsAccordion({ Header, children, Expanded, OnExpand }) {
    const CustomAccordion = styled$1((props) => (jsx(Accordion, { disableGutters: true, elevation: 0, square: true, ...props })))(({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '& .MuiAccordionDetails-root': {
            padding: '0px 16px',
        },
    }));
    const CustomAccordionSummary = styled$1((props) => (jsx(AccordionSummary, { expandIcon: jsx(ArrowForwardIosSharp, { sx: { fontSize: '0.9rem' } }), ...props })))(({ theme }) => ({
        flexDirection: 'row-reverse',
        backgroundColor: 'var(--bars-backgroud)',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(-180deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
            marginTop: '0px',
            marginBottom: '0px',
        },
    }));
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        setExpand(Expanded);
    }, [Expanded]);
    return (jsxs(CustomAccordion, { expanded: expand, children: [jsx(CustomAccordionSummary, { onClick: OnExpand, expandIcon: jsx(ExpandMore, {}), "aria-controls": "panel1a-content", id: "panel1a-header", children: Header }), children] }));
}

var css_248z$a = ".BarsAccordionItem-module_container__nGHKM {\n    border-top: 1px solid var(--bars-gray-mid1);\n}";
var styles$9 = {"container":"BarsAccordionItem-module_container__nGHKM"};
styleInject(css_248z$a);

function BarsAccordionItem({ children }) {
    return (jsx(AccordionDetails, { className: styles$9.container, children: children }));
}

var css_248z$9 = ".Container-module_container__JMoiT {\n    width: 100%;\n    border: 1px solid var(--bars-gray-mid1);\n    border-radius: 4px;\n    background-color: var(--bars-white);\n}\n\n.Container-module_containerHeader__oFxcL {\n    border-bottom: 1px solid var(--bars-gray-mid1);\n    line-height: 25px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 10px 15px 10px 15px;\n}\n\n.Container-module_Icon__XIVNp {\n    width: 25px;\n    height: 25px;\n    background-repeat: no-repeat;\n    background-position: center;\n    content: '';\n    cursor: pointer;\n}\n\n.Container-module_itemIcons__5-rf8 {\n    display: flex;\n    flex-direction: row;\n    gap: 10px\n}";
var styles$8 = {"container":"Container-module_container__JMoiT","containerHeader":"Container-module_containerHeader__oFxcL","Icon":"Container-module_Icon__XIVNp","itemIcons":"Container-module_itemIcons__5-rf8"};
styleInject(css_248z$9);

function Container({ HeaderElement, HeaderText, Buttons, children, headerStyle, className, style }) {
    return (jsxs("div", { style: style, className: className ? className + ' ' + styles$8.container : styles$8.container, children: [jsxs("div", { className: styles$8.containerHeader, style: headerStyle, children: [HeaderElement ? HeaderElement : (HeaderText ?? ''), jsx("div", { className: styles$8.itemIcons, children: Buttons ? Buttons.map((button, index) => (jsx("div", { onClick: button.OnClick, className: styles$8.Icon, style: { backgroundImage: `url(/${button.IconName})` } }, index)))
                            : null })] }), children] }));
}

var css_248z$8 = ".ContaineredList-module_Icon__-aFpk {\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    background-position: center;\n    content: '';\n    cursor: pointer;\n}\n\n.ContaineredList-module_ListInContainer__k-Lpl {\n    padding-top: 7px;\n}\n\n.ContaineredList-module_item__jp112 {\n    width: 100%;\n    padding: 5px 15px 5px 15px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.ContaineredList-module_itemIcons__t8PWC {\n    display: flex;\n    flex-direction: row;\n    gap: 5px\n}\n\n.ContaineredList-module_item__jp112:hover {\n    background-color: var(--bars-gray-low1); \n}\n\n.ContaineredList-module_activeItem__LWx1B {\n    background-color: var(--bars-gray-low1);\n    border-right: 2px solid var(--bars-green-primary);\n}\n\n.ContaineredList-module_bottomItem__slW0e {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    padding: 7px 16px 10px 16px;\n}";
var styles$7 = {"ListInContainer":"ContaineredList-module_ListInContainer__k-Lpl","bottomItem":"ContaineredList-module_bottomItem__slW0e"};
styleInject(css_248z$8);

var css_248z$7 = ".SimpleList-module_Icon__zNaaO {\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    background-position: center;\n    content: '';\n    cursor: pointer;\n}\n\n.SimpleList-module_item__GX3Sk {\n    width: 100%;\n    padding: 5px 15px 5px 15px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n    text-decoration: none;\n    color: var(--bars-black)\n}\n\n.SimpleList-module_itemIcons__yFa23 {\n    display: flex;\n}\n\n.SimpleList-module_item__GX3Sk:hover {\n    background-color: var(--bars-gray-low1); \n}\n\n.SimpleList-module_activeItem__o7adm {\n    background-color: var(--bars-gray-low1);\n    border-right: 2px solid var(--bars-green-primary);\n}\n\n.SimpleList-module_bottomItem__aYlUY {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    padding: 7px 16px 10px 16px;\n}";
var styles$6 = {"Icon":"SimpleList-module_Icon__zNaaO","item":"SimpleList-module_item__GX3Sk","itemIcons":"SimpleList-module_itemIcons__yFa23","activeItem":"SimpleList-module_activeItem__o7adm","bottomItem":"SimpleList-module_bottomItem__aYlUY"};
styleInject(css_248z$7);

function SimpleList({ items, BottomItem, ClassName, style }) {
    const [hoveredElementIndex, setHoveredElementIndex] = React.useState(-1);
    return (jsxs(Fragment, { children: [jsx("div", { className: ClassName, style: style, children: items ? items.map((value, index) => {
                    var element = value.Href ?
                        (jsxs(Link, { className: (value.IsChecked ? (styles$6.item + ' ' + styles$6.activeItem) : styles$6.item) + ' ' + value.ClassName, to: value.Href, style: value.Style, onClick: () => {
                                if (value.OnClick)
                                    value.OnClick();
                            }, onMouseEnter: () => setHoveredElementIndex(index), onMouseLeave: () => setHoveredElementIndex(-1), children: [value.Label, jsx("div", { className: styles$6.itemIcons, children: value.Buttons ? value.Buttons?.map((button, buttonIndex) => {
                                        return (jsx("div", { onClick: button.OnClick, className: styles$6.Icon, style: { backgroundImage: hoveredElementIndex == index ?
                                                    `url(/${button.IconName})` : 'unset' } }, buttonIndex));
                                    }) : null })] }, index)) :
                        (jsxs("div", { className: (value.IsChecked ? (styles$6.item + ' ' + styles$6.activeItem) : styles$6.item) + ' ' + value.ClassName, style: value.Style, onClick: () => {
                                if (value.OnClick)
                                    value.OnClick();
                            }, onMouseEnter: () => setHoveredElementIndex(index), onMouseLeave: () => setHoveredElementIndex(-1), children: [value.Label, jsx("div", { className: styles$6.itemIcons, children: value.Buttons ? value.Buttons?.map((button, buttonIndex) => {
                                        return (jsx("div", { onClick: button.OnClick, className: styles$6.Icon, style: { backgroundImage: hoveredElementIndex == index ?
                                                    `url(/${button.IconName})` : 'unset' } }, buttonIndex));
                                    }) : null })] }, index));
                    return element;
                }) : null }), BottomItem ?
                jsx("div", { className: styles$6.bottomItem, children: jsx(BottomItem, {}) }) : null] }));
}

function ContaineredList({ ListHeader, HeaderButtons, items, BottomItem, className, style }) {
    return (jsxs(Container, { className: className, style: style, HeaderText: ListHeader, Buttons: HeaderButtons, children: [jsx(SimpleList, { ClassName: styles$7.ListInContainer, items: items, BottomItem: BottomItem }), BottomItem ?
                jsx("div", { className: styles$7.bottomItem, children: jsx(BottomItem, {}) }) : null] }));
}

var css_248z$6 = ".Navigation-module_NavContainer__4n3co {\n}\n\n.Navigation-module_navRoot__K1rsM {\n    display: flex;\n    justify-content: center;\n}\n\n.Navigation-module_NavContainer__4n3co li {\n    font-size: 20px;\n}\n\n.Navigation-module_ButtonBack__j1KP9 {\n    align-items: center;\n    cursor: pointer;\n    margin: 5px 15px 9px 15px;\n}\n\n.Navigation-module_ButtonBack__j1KP9 a {\n    color: var(--bars-gray-mid2);\n    font-size: 15px;\n}\n\n.Navigation-module_NavItem__mlz6k {\n    cursor: auto;\n    color: var(--bars-gray-high2);\n    margin: 9px 15px 9px 15px;\n    font-size: 20px;\n}\n\n.Navigation-module_ActiveNavItem__fCjzi {\n    cursor: pointer;\n}";
var styles$5 = {"NavContainer":"Navigation-module_NavContainer__4n3co","navRoot":"Navigation-module_navRoot__K1rsM","ButtonBack":"Navigation-module_ButtonBack__j1KP9","NavItem":"Navigation-module_NavItem__mlz6k","ActiveNavItem":"Navigation-module_ActiveNavItem__fCjzi"};
styleInject(css_248z$6);

function Navigation({ onClickBack, items, styleRootNav, styleSpanLink }) {
    const breadcrumbs = items?.map((item, index) => {
        return (jsx("span", { style: styleSpanLink, onClick: item.OnClick, className: styles$5.NavItem + ' ' + (item.IsActive == true ? styles$5.ActiveNavItem : ''), children: item.element == undefined ? item.Label : item.element }, index));
    });
    return (jsxs("nav", { style: styleRootNav, className: styles$5.navRoot, children: [jsxs("span", { style: { display: onClickBack ? "flex" : "none" }, onClick: onClickBack, className: styles$5.ButtonBack, children: [jsx("svg", { width: "7", height: "10", viewBox: "0 0 7 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M5.96544 8.74118C6.01017 8.78412 6.04514 8.83463 6.06835 8.88982C6.09156 8.94502 6.10256 \n            9.00382 6.10072 9.06287C6.09888 9.12192 6.08423 9.18007 6.05762 9.23398C6.03101 9.2879 5.99295 9.33654\n            5.94561 9.37711C5.89828 9.41768 5.8426 9.4494 5.78176 9.47046C5.72091 9.49151 5.65609 9.50149 5.59099\n            9.49982C5.52589 9.49815 5.4618 9.48486 5.40236 9.46072C5.34292 9.43658 5.28931 9.40206 5.24458\n            9.35912L1.03046 5.3115C0.943433 5.22799 0.894941 5.11744 0.894941 5.00253C0.894941 4.88762 0.943433\n            4.77706 1.03046 4.69356L5.24458 0.645485C5.28901 0.601608 5.34262 0.566177 5.40227 0.541251C5.46193\n            0.516325 5.52645 0.502399 5.59209 0.500284C5.65772 0.498169 5.72317 0.507906 5.78463 0.528929C5.84608\n            0.549952 5.90232 0.581841 5.95007 0.622747C5.99783 0.663653 6.03615 0.712758 6.0628 0.767211C6.08946\n            0.821664 6.10392 0.880379 6.10535 0.939944C6.10678 0.999511 6.09515 1.05874 6.07113 1.11419C6.04711\n            1.16965 6.01119 1.22022 5.96544 1.26297L2.07259 5.00253L5.96544 8.74118Z", fill: "#C4C4C4" }) }), jsx("a", { style: { marginLeft: "15px" }, children: "\u041D\u0430\u0437\u0430\u0434" })] }), jsx(Breadcrumbs, { sx: styleSpanLink, separator: "\u203A", "aria-label": "breadcrumb", className: styles$5.NavContainer, children: breadcrumbs })] }));
}

var css_248z$5 = ".BarsInput-module_barsInputContainer__zjf-0 {\n    width: 100%;\n    height: 40px;\n    border: 1px solid var(--bars-gray-mid2);\n    border-radius: 4px;\n\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: nowrap;\n    background-color: white;\n}\n\n.BarsInput-module_barsInputContainer__zjf-0:focus {\n    border: 1px solid var(--bars-gray-high1) !important;\n    outline: none !important;\n}\n\n.BarsInput-module_barsInputContainer__zjf-0::-moz-placeholder {\n    color: var(--bars-gray-mid1) !important;\n}\n\n.BarsInput-module_barsInputContainer__zjf-0::placeholder {\n    color: var(--bars-gray-mid1) !important;\n}\n\n.BarsInput-module_barsInput__LegYB {\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n    border: unset;\n    background-color: white;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n    -webkit-background-clip: text;\n}\n\n.BarsInput-module_barsInput__LegYB:focus-visible {\n    outline: none;\n}\n\n.BarsInput-module_barsInputContainer__zjf-0:focus-within {\n    border: 1px solid var(--bars-gray-high1);\n}\n\n.BarsInput-module_barsInputImage__IgEMi {\n    max-width: 40px;\n    max-height: 40px;  \n    cursor: pointer;\n}";
var styles$4 = {"barsInputContainer":"BarsInput-module_barsInputContainer__zjf-0","barsInput":"BarsInput-module_barsInput__LegYB","barsInputImage":"BarsInput-module_barsInputImage__IgEMi"};
styleInject(css_248z$5);

function BarsInput({ defaultValue, placeholder, maxHeight, maxWidth, icon, backgroundColor, onChange, type, className, style, iconSrc, iconPosition, onIconClick }) {
    if (style && backgroundColor) {
        style.backgroundColor = backgroundColor;
    }
    const [value, setValue] = useState(defaultValue);
    const [inputType, setInputType] = useState(type ?? 'text');
    useEffect(() => {
        setInputType(type ?? 'text');
    }, [type]);
    return (jsxs("div", { className: `${styles$4.barsInputContainer} ${className}`, style: {
            flexDirection: iconPosition == 'start' ? 'row-reverse' : 'row',
            backgroundColor: backgroundColor,
            maxHeight: maxHeight,
            maxWidth: maxWidth
        }, children: [jsx("input", { className: `${styles$4.barsInput} ${className}`, style: style, value: value ?? '', placeholder: placeholder, type: inputType, onChange: (event) => {
                    setValue(event.target.value);
                    if (onChange)
                        onChange(event.target.value);
                } }), icon ?? (iconSrc ? jsx("img", { className: styles$4.barsInputImage, src: iconSrc, onClick: onIconClick }) : null)] }));
}

var css_248z$4 = ".BarsTabs-module_tab__rZY04 {\n    bottom: none !important;\n    border-bottom: 2px solid var(--bars-gray-mid2) !important;\n    min-height: 30px !important;\n    height: 30px !important;\n}\n\n.BarsTabs-module_tabs__B2DkT {\n    min-height: 30px !important;\n    height: 30px !important;\n}\n\n.BarsTabs-module_tabsContent__FDXC- {\n    padding-top: 22px;\n}";
var styles$3 = {"tab":"BarsTabs-module_tab__rZY04","tabs":"BarsTabs-module_tabs__B2DkT","tabsContent":"BarsTabs-module_tabsContent__FDXC-"};
styleInject(css_248z$4);

function BarsTabs({ tabs, style, className }) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    function getProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
            value: index,
        };
    }
    return (jsxs("div", { className: className ? (className + ' ' + styles$3.mainContainer) : styles$3.mainContainer, style: style, children: [jsx(Tabs, { className: styles$3.tabs, value: value, onChange: handleChange, textColor: "primary", indicatorColor: "primary", children: tabs.map((tab, index) => {
                    return (jsx(Tab, { className: styles$3.tab, label: tab.label, ...getProps(index) }, index));
                }) }), jsx("div", { className: styles$3.tabsContent, children: tabs[value]?.children ?? null })] }));
}

var css_248z$3 = ".BarsDrawer-module_drawerMainContainer__WIFvL {\n    padding-left: 7%;\n    padding-right: 7%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n.BarsDrawer-module_drawerHeaderText__MRymO {\n    margin-top: 25px;\n    font-size: 24px;\n    padding-top: 20px;\n    padding-bottom: 22px;\n    margin: 0;\n}\n\n.BarsDrawer-module_drawerButtonsContainer__-7Thn {\n    border-top: 1px solid var(--bars-gray-mid1);\n    padding-top: 18px;\n    padding-bottom: 18px;\n    margin-top: 25px;\n    width: 100%\n}\n\n.BarsDrawer-module_drawerButtonsContainer__-7Thn button:not(:last-child) {\n    margin-right: 8px;\n}";
var styles$2 = {"drawerMainContainer":"BarsDrawer-module_drawerMainContainer__WIFvL","drawerHeaderText":"BarsDrawer-module_drawerHeaderText__MRymO","drawerButtonsContainer":"BarsDrawer-module_drawerButtonsContainer__-7Thn"};
styleInject(css_248z$3);

function BarsDrawer({ children, drawerPosition, widthSizePercents, visible, onClose, headerText, buttonText, onClickButton, minWidthPx, style, loading, onClickButtonCancel }) {
    return (jsx(Drawer, { anchor: drawerPosition ?? "right", open: visible, onClose: onClose, style: style, children: jsxs("div", { style: {
                width: widthSizePercents ? `${widthSizePercents}vw` : 'unset',
                maxWidth: `90vw`,
                minWidth: minWidthPx ? `min(90vw, ${minWidthPx}px)` : 'unset'
            }, className: styles$2.drawerMainContainer, children: [jsxs("div", { children: [jsx("p", { className: styles$2.drawerHeaderText, children: headerText }), children] }), jsxs("div", { className: styles$2.drawerButtonsContainer, children: [buttonText ? jsx(BarsButton, { variant: 'green', text: buttonText, onClick: onClickButton, loading: loading, onClickCancel: onClickButtonCancel }) : null, jsx(BarsButton, { variant: 'white', text: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C', onClick: onClose })] })] }) }));
}

function BarsMenu({ anchorElement, setAnchorElement, items, style, children }) {
    const handleClose = () => {
        setAnchorElement(null);
    };
    useEffect(() => {
        console.log('anchor changed', anchorElement);
    }, [anchorElement]);
    const BarsMenu = styled((props) => (jsx(Menu, { style: style, elevation: 0, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
        }, ...props, children: props.children })))(({}) => ({
        '& .MuiPaper-root': {
            borderRadius: 4,
            boxShadow: 'none',
            border: '1px solid var(--bars-gray-mid1)'
        },
        '& .MuiMenuItem-root': {
            fontSize: 14,
            letterSpacing: 1,
            fontWeight: 400,
            color: 'var(--bars-black)',
            '& .MuiSvgIcon-root': {
                fontSize: 16,
            }
        }
    }));
    return (jsxs(BarsMenu, { anchorEl: anchorElement, open: Boolean(anchorElement), onClose: handleClose, children: [items?.map((item, index) => (jsx(MenuItem, { style: item.style, onClick: (e) => {
                    if (item.onClick)
                        item.onClick(e);
                }, children: item.label ?? item.lablel }, index))), children] }));
}

function BarsSwitch({ checked, OnClick, OnSemiEnabledClick, label }) {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        minWidth: "45px",
        maxWidth: "45px",
        minHeight: "24px",
        maxHeight: "24px",
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 14,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(22px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 4,
            '&.Mui-checked': {
                transform: 'translateX(22px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: 'var(--bars-green-primary)',
                },
            },
            '&.semi-checked': {
                transform: 'translateX(10px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: 'var(--bars-green-primary)',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 15,
            height: 15,
            borderRadius: 20,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 20,
            opacity: 1,
            backgroundColor: 'var(--bars-gray-low2)',
            boxSizing: 'border-box',
        },
    }));
    return (jsxs("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center' }, children: [checked == "semi-enabled" ?
                jsx("img", { src: '/swith-semi-enabled.svg', onClick: OnSemiEnabledClick }) :
                jsx(AntSwitch, { checked: checked, onClick: OnClick }), label ? jsx("div", { style: { paddingLeft: '10px' }, children: label }) : null] }));
}

var css_248z$2 = "#BarsButton-module_barsButton__F3Q1u {\n    min-width: 95px;\n    font-size: 14px;\n    height: 38px;\n    padding-left: 15px;\n    padding-right: 15px;\n    font-weight: 400;\n    align-items: flex-end;\n    text-align: center;\n}\n\n#BarsButton-module_barsButton__F3Q1u.BarsButton-module_greenButton__fpDrx {\n    color: var(--bars-white);\n    background-color: var(--bars-green-primary);\n}\n\n#BarsButton-module_barsButton__F3Q1u.BarsButton-module_whiteButton__Pogt4 {\n    background-color: var(--bars-white);\n    color: var(--bars-gray-mid2);\n}\n\n#BarsButton-module_barsButton__F3Q1u.BarsButton-module_redButton__5pVwe {\n    background-color: var(--bars-white);\n    color: var(--bars-red-high);\n}";
var styles$1 = {"barsButton":"BarsButton-module_barsButton__F3Q1u","greenButton":"BarsButton-module_greenButton__fpDrx","whiteButton":"BarsButton-module_whiteButton__Pogt4","redButton":"BarsButton-module_redButton__5pVwe"};
styleInject(css_248z$2);

function BarsButton({ className, text, variant, disabled, onClick, icon, iconPosition, style, loading, onClickCancel }) {
    const iconLoading = jsx(CircularProgress, { size: 20, color: "inherit", sx: { margin: "0 5px 4px 0" } });
    return (jsxs(Fragment, { children: [jsx(Button, { id: styles$1.barsButton, style: { alignItems: "center" }, sx: style, className: className + ' ' + (variant == 'red' ? styles$1.redButton :
                    (variant == 'white' ? styles$1.whiteButton : styles$1.greenButton)), variant: variant == 'white' ? 'outlined' : 'contained', disabled: loading ? true : disabled, onClick: onClick, startIcon: iconPosition == 'start' && icon != undefined ? icon :
                    iconPosition == 'start' && loading ? iconLoading : undefined, endIcon: iconPosition != 'start' && icon != undefined ? icon : loading ? iconLoading : undefined, disableElevation: true, children: text }), loading && jsx(Tooltip, { title: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", placement: "top", children: jsx(IconButton, { onClick: onClickCancel, children: jsx(Cancel, { color: "error", sx: { padding: "0px" } }) }) })] }));
}

var css_248z$1 = ".BarsTextField-module_barsInput__toHGh {\n    width: 100%;\n}\n\n.BarsTextField-module_styleButton__R2FWI {\n    background-color: var(--bars-green-primary);\n    box-sizing: border-box;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--bars-white);\n    cursor: pointer;\n    border-radius: 4px;\n}\n\n.BarsTextField-module_styleButtonsContainer__0dVhS {\n    display: flex;\n    gap: 5px;\n    margin-bottom: 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n\n.BarsTextField-module_textFieldWrapper__5IMoe {\n    position: relative;\n    width: auto;\n    display: flex;\n    align-items: center;\n    width: 100%;\n}\n\n.BarsTextField-module_smileIconWrapper__FE2zE {\n    position: absolute;\n    right: 6px;\n    top: 8px;\n}\n\n.BarsTextField-module_smileIcon__jTlRU {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    z-index: 10;\n}\n\n.BarsTextField-module_smileIcon__jTlRU:hover {\n    filter: brightness(0.7);\n}\n\n.BarsTextField-module_smileHint__z3gaO {\n    font-size: 12px;\n    text-align: center;\n    line-height: 1;\n    margin: 5px 0px;\n    color: var(--bars-black);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    cursor: pointer;\n}\n\n.BarsTextField-module_smileBar__UHvxi {\n    position: absolute;\n    opacity: 0.85;\n    width: 250px;\n    border: 1px solid var(--bars-green-primary);\n    border-radius: 5px;\n    background-color: var(--bars-backgroud);\n    z-index: 100;\n}\n\n.BarsTextField-module_smileRow__asR0O {\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    display: flex;\n    margin: 6px 0px;\n    justify-content: center;\n}\n\n.BarsTextField-module_smile__59MSZ {\n    min-width: 22px;\n    height: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.BarsTextField-module_smile__59MSZ:hover {\n    filter: brightness(0.6);\n}\n\n.BarsTextField-module_brightness__v-fv8 {\n    filter: brightness(0.5);\n}";
var styles = {"barsInput":"BarsTextField-module_barsInput__toHGh","styleButton":"BarsTextField-module_styleButton__R2FWI","styleButtonsContainer":"BarsTextField-module_styleButtonsContainer__0dVhS","textFieldWrapper":"BarsTextField-module_textFieldWrapper__5IMoe","smileIconWrapper":"BarsTextField-module_smileIconWrapper__FE2zE","smileIcon":"BarsTextField-module_smileIcon__jTlRU","smileHint":"BarsTextField-module_smileHint__z3gaO","smileBar":"BarsTextField-module_smileBar__UHvxi","smileRow":"BarsTextField-module_smileRow__asR0O","smile":"BarsTextField-module_smile__59MSZ","brightness":"BarsTextField-module_brightness__v-fv8"};
styleInject(css_248z$1);

function SmileIconSvg({ className, width, height, onClick, fill }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "20", height: height ?? "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6ZM10.24 9.4856C10.3146 9.41031 10.4035 9.3506 10.5014 9.30995C10.5993 9.26929 10.7043 9.24851 10.8104 9.2488C10.9164 9.2491 11.0213 9.27046 11.119 9.31165C11.2167 9.35284 11.3052 9.41304 11.3794 9.48874C11.4536 9.56445 11.5121 9.65415 11.5513 9.75264C11.5906 9.85112 11.6098 9.95643 11.608 10.0624C11.6062 10.1684 11.5834 10.273 11.5408 10.3701C11.4982 10.4672 11.4368 10.5549 11.36 10.628C10.4637 11.5089 9.25673 12.0017 8 12C6.74327 12.0017 5.53632 11.5089 4.64 10.628C4.49202 10.4787 4.40874 10.2772 4.40816 10.067C4.40758 9.85681 4.48975 9.65484 4.6369 9.50474C4.78405 9.35465 4.98436 9.2685 5.19453 9.26492C5.40469 9.26133 5.60782 9.34061 5.76 9.4856C6.35726 10.0733 7.1621 10.4018 8 10.4C8.872 10.4 9.6616 10.052 10.24 9.4856ZM5.2 4.8C5.51826 4.8 5.82348 4.92643 6.04853 5.15147C6.27357 5.37652 6.4 5.68174 6.4 6C6.4 6.31826 6.27357 6.62348 6.04853 6.84853C5.82348 7.07357 5.51826 7.2 5.2 7.2C4.88174 7.2 4.57652 7.07357 4.35147 6.84853C4.12643 6.62348 4 6.31826 4 6C4 5.68174 4.12643 5.37652 4.35147 5.15147C4.57652 4.92643 4.88174 4.8 5.2 4.8ZM10.8 4.8C11.1183 4.8 11.4235 4.92643 11.6485 5.15147C11.8736 5.37652 12 5.68174 12 6C12 6.31826 11.8736 6.62348 11.6485 6.84853C11.4235 7.07357 11.1183 7.2 10.8 7.2C10.4817 7.2 10.1765 7.07357 9.95147 6.84853C9.72643 6.62348 9.6 6.31826 9.6 6C9.6 5.68174 9.72643 5.37652 9.95147 5.15147C10.1765 4.92643 10.4817 4.8 10.8 4.8Z", fill: fill ?? "#CDD3D9" }) }));
}

const BarsTextFieldStyled = styled$1(TextField)({
    fontSize: "14px",
    fontFamily: `"Rubik", "sans-serif"`,
    "label": {
        fontFamily: `"Rubik", "sans-serif"`,
        fontSize: "12px",
        top: -4
    },
    "label.Mui-focused": {
        color: "#00824A",
        top: 1,
        fontSize: 13
    },
    ".MuiInputLabel-shrink": {
        top: 1,
        fontSize: 13
    },
    "div": {
        height: 40
    },
    "input": {
        fontSize: "14px",
        fontFamily: `"Rubik", "sans-serif"`,
    },
    ".MuiOutlinedInput-notchedOutline": {
        border: "1px solid #CDD3D9 !important", borderRadius: "4px !important"
    },
    //".MuiOutlinedInput-input": { textAlign: "center" },
    ':hover fieldset': {
        border: '1px solid #00824A !important' // Обводка при наведении
    },
    "input:focus ~ .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #00824A !important" // Обводка при клике
    },
    ".Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #C4C4C4 !important",
    },
    ".Mui-error .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #E53835 !important"
    },
    "legend": {},
    "p": {
        marginLeft: "3px"
    }
});
function BarsTextField({ className, id, error = false, label, helperText, style, value, onChange, onChangeWithAdvance, inputRef, placeholder, onKeyDown, inputProps, onFocus, onBlur, disabled, type, multiline, advanceEdit, emojiSupport }) {
    const [valueState, setValueState] = useState(value ?? '');
    const [emojiBarVisible, setEmojiBarVisible] = useState(false);
    const inputRefInternal = useRef();
    useEffect(() => {
        if (value)
            setValueState(value);
        else {
            setValueState('');
        }
    }, [value]);
    function insertTagToString(tagName, isLink) {
        const startSelect = inputRef?.current
            ? inputRef.current.selectionStart
            : inputRefInternal?.current?.selectionStart;
        const endSelect = inputRef?.current
            ? inputRef.current.selectionEnd
            : inputRefInternal?.current?.selectionEnd;
        const additionalData = isLink ? ` href="${askString('Введите направление ссылки')}"` : '';
        if (startSelect == undefined || startSelect == null || endSelect == null || endSelect == undefined) {
            setValueState(valueState + `<${tagName}${additionalData}></${tagName}>`);
        }
        else {
            const newString = valueState.slice(0, startSelect)
                + `<${tagName}${additionalData}>` + valueState.slice(startSelect, endSelect)
                + `</${tagName}>` + valueState.slice(endSelect);
            setValueState(newString);
        }
    }
    function askString(title) {
        return prompt(title) ?? '';
    }
    function insertListMarkers() {
        const startSelect = inputRef?.current ? inputRef.current.selectionStart : inputRefInternal?.current?.selectionStart;
        const endSelect = inputRef?.current ? inputRef.current.selectionEnd : inputRefInternal?.current?.selectionEnd;
        if (startSelect == undefined || startSelect == null || endSelect == null || endSelect == undefined) {
            alert('Сперва выделите текст');
            return;
        }
        let textToEdit = valueState.substring(startSelect, endSelect);
        if (textToEdit.indexOf('•') != -1) {
            alert('Текст уже содержит маркированый список');
            return;
        }
        textToEdit = '• ' + textToEdit;
        textToEdit = textToEdit.replace(/\n/g, '\n• ');
        setValueState(valueState.substring(0, startSelect) + textToEdit + valueState.substring(endSelect, valueState.length - 1));
    }
    function insertListEnumerable() {
        const startSelect = inputRef?.current ? inputRef.current.selectionStart : inputRefInternal?.current?.selectionStart;
        const endSelect = inputRef?.current ? inputRef.current.selectionEnd : inputRefInternal?.current?.selectionEnd;
        if (startSelect == undefined || startSelect == null || endSelect == null || endSelect == undefined) {
            alert('Сперва выделите текст');
            return;
        }
        let textToEdit = '1. ' + valueState.substring(startSelect, endSelect);
        let currentNumber = 2;
        for (let i = 0; i < textToEdit.length; i++) {
            if (textToEdit.charAt(i) == '\n') {
                textToEdit = textToEdit.substring(0, i + 1) + `${currentNumber}. ` + textToEdit.substring(i + 1, textToEdit.length);
                currentNumber++;
                i += 3;
            }
        }
        setValueState(valueState.substring(0, startSelect) + textToEdit + valueState.substring(endSelect, valueState.length));
    }
    function insertText(text) {
        const startSelect = inputRef?.current ? inputRef.current.selectionStart : inputRefInternal?.current?.selectionStart;
        if (startSelect != null && startSelect != undefined) {
            setValueState(valueState.substring(0, startSelect) + text + valueState.substring(startSelect, valueState.length));
        }
        else {
            setValueState(valueState + text);
        }
    }
    function InsertEmoji(val) {
        insertText(val);
        setEmojiBarVisible(false);
    }
    useEffect(() => {
        if (valueState && onChangeWithAdvance)
            onChangeWithAdvance(valueState);
    }, [valueState]);
    const emojis = [
        ['😀', '😅', '😂', '😎', '😍', '🤩', '😜', '🤔', '😬', '😴', '😭'],
        ['👍', '👋', '👨', '👩', '🥶', '🥵', '🤠', '😱', '😭', '😈', '🤬'],
        ['🙈', '😸', '👻', '👽', '👾', '🤡', '💯', '❤', '💘', '💌', '💫'],
        ['💤', '💥', '🔥', '🌏', '⌛', '💬', '📱', '🌟', '✅', '⚠', '❌'],
        ['🎡', '♨', '🌹', '🚀', '🌙', '👑', '☔', '☝', '🎮', '🎤', '⚡'],
        ['🐸', '🐟', '🐝', '🌲', '🍀', '🍄', '🍔', '🍫', '🍺', '🍰', '🍴'],
        ['🎉', '⚽', '🔮', '🚗', '✈', '➡', '⬅', '⬆', '⬇', '₽', '₸']
    ];
    return (jsxs(Fragment, { children: [advanceEdit ?
                jsxs("div", { className: styles.styleButtonsContainer, children: [jsx("div", { title: "\u0416\u0438\u0440\u043D\u044B\u0439", style: { fontWeight: '600' }, className: styles.styleButton, onClick: () => insertTagToString('b'), children: "\u0416" }), jsx("div", { title: "\u041A\u0443\u0440\u0441\u0438\u0432", style: { fontStyle: 'italic' }, className: styles.styleButton, onClick: () => insertTagToString('i'), children: "\u041A" }), jsx("div", { title: "\u041F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439", style: { textDecoration: 'underline' }, className: styles.styleButton, onClick: () => insertTagToString('u'), children: "\u041F" }), jsx("div", { title: "\u0417\u0430\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439", style: { textDecoration: 'line-through' }, className: styles.styleButton, onClick: () => insertTagToString('del'), children: "\u0417" }), jsx("div", { title: "\u041E\u0442\u0441\u0442\u0443\u043F (\u043A\u0440\u0430\u0441\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430)", className: styles.styleButton, onClick: () => insertText('&#182'), children: "Tab" }), jsx("div", { title: "\u0421\u0441\u044B\u043B\u043A\u0430", className: styles.styleButton, onClick: () => insertTagToString('a', true), children: "\uD83D\uDD17" }), jsx("div", { title: "\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A", className: styles.styleButton, onClick: () => insertListMarkers(), children: "\u22EE\u2263" }), jsx("div", { title: "\u041F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u044F\u0435\u043C\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A", className: styles.styleButton, onClick: () => insertListEnumerable(), children: "1\u2263" })] })
                : undefined, jsxs("div", { className: styles.textFieldWrapper, children: [jsx(BarsTextFieldStyled, { sx: multiline ? { "div": { height: 'unset' }, ...style } : style, value: valueState, itemType: "", disabled: disabled, onChange: ((e) => {
                            if (onChange)
                                onChange(e);
                            setValueState(e.currentTarget.value);
                        }), onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, className: `${styles.barsInput}${className ? ` ${className}` : ''}`, id: id, label: label, error: error, placeholder: placeholder, type: type ?? 'text', variant: "outlined", helperText: error ? helperText : undefined, inputRef: inputRef ?? inputRefInternal, InputProps: inputProps, multiline: multiline }), jsxs("div", { className: styles.smileIconWrapper, children: [emojiSupport ?
                                jsx(SmileIconSvg, { className: emojiBarVisible ? `${styles.smileIcon} ${styles.brightness}` : styles.smileIcon, onClick: () => {
                                        if (emojiBarVisible)
                                            setEmojiBarVisible(false);
                                        else
                                            setEmojiBarVisible(true);
                                    } })
                                : undefined, emojiBarVisible ?
                                jsxs("div", { className: styles.smileBar, style: {
                                        position: "absolute",
                                        left: -230, // 250 - ширина smileBar
                                        top: 18,
                                        width: 250,
                                    }, children: [jsx("p", { className: styles.smileHint, onClick: () => setEmojiBarVisible(false), children: "\u0412\u0438\u0434 \u044D\u043C\u043E\u0434\u0437\u0438 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F" }), emojis.map(set => jsx("p", { className: styles.smileRow, children: set.map(em => jsx("span", { className: styles.smile, onClick: () => InsertEmoji(em), children: em })) }))] })
                                : undefined] })] })] }));
}

function BarsTable({ columns, data, onRowSelectionChange, rowSelection, enableRowSelection, bodyAlign, headAlign, topCustomElements, bottomCustomElementsByRowSelection, style, noRecordsLabel, isLoading, showProgressBars, columnSeparator = false, enableDensityToggle, enableEditing, enableStickyHeader = true, enableColumnPinning, enableExpanding, getSubRows, columnVisibility, onColumnVisibilityChange, elementBottomToolbarCenter, elementBottomToolbarRigth, enablePagination = true, bottomCustomElements, maxHeight = '100%' }) {
    const [density, setDensity] = useState('compact');
    const MRT_Localization_RU_Custom = MRT_Localization_RU;
    MRT_Localization_RU_Custom.toggleFullScreen = 'Включить/Выключить полноэкранный режим';
    MRT_Localization_RU_Custom.sortByColumnAsc = "Сортировать по возврастанию";
    MRT_Localization_RU_Custom.sortByColumnDesc = "Сортировать по убыванию";
    MRT_Localization_RU_Custom.sortedByColumnAsc = "Отсортировано по возрастанию";
    MRT_Localization_RU_Custom.sortedByColumnDesc = "Отсортировано по убыванию";
    MRT_Localization_RU_Custom.filterByColumn = "Отфильтровать по значению";
    MRT_Localization_RU_Custom.filteringByColumn = "Отфильтровано по значению: {filterValue}";
    const BarsCheckBoxSelectedIcon = jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M16.9231 0H3.07692C2.26115 0.000890796 1.47904 0.325352 0.902194 0.902194C0.325352 1.47904 \n        0.000890796 2.26115 0 3.07692V16.9231C0.000890796 17.7389 0.325352 18.521 0.902194 19.0978C1.47904\n        19.6746 2.26115 19.9991 3.07692 20H16.9231C17.7389 19.9991 18.521 19.6746 19.0978 19.0978C19.6746\n        18.521 19.9991 17.7389 20 16.9231V3.07692C19.9991 2.26115 19.6746 1.47904 19.0978 0.902194C18.521\n        0.325352 17.7389 0.000890796 16.9231 0ZM15.2043 6.64856L8.74279 14.3409C8.67191 14.4253 8.58371 14.4935\n        8.48418 14.5409C8.38464 14.5882 8.27608 14.6136 8.16587 14.6154H8.15288C8.04507 14.6153 7.93846 14.5926\n        7.83998 14.5487C7.7415 14.5048 7.65335 14.4407 7.58125 14.3606L4.81202 11.2837C4.74169 11.2091 4.68698\n        11.1212 4.65111 11.0251C4.61524 10.9291 4.59892 10.8268 4.60313 10.7244C4.60733 10.622 4.63197 10.5214\n        4.67559 10.4286C4.71922 10.3359 4.78094 10.2527 4.85715 10.1842C4.93336 10.1156 5.0225 10.0629 5.11935\n        10.0293C5.21619 9.99567 5.31878 9.98174 5.42109 9.98832C5.5234 9.9949 5.62336 10.0219 5.7151 10.0676C5.80683\n        10.1134 5.8885 10.177 5.95529 10.2548L8.13269 12.674L14.0264 5.65914C14.1586 5.50629 14.3457 5.4116 14.5471\n        5.39555C14.7486 5.3795 14.9483 5.44337 15.103 5.57335C15.2577 5.70333 15.3551 5.88899 15.3741 6.09018C15.393\n        6.29138 15.3321 6.49196 15.2043 6.64856Z", fill: "#3AE099" }) });
    const BarsCheckBoxIcon = jsx("svg", { width: "20", height: "21", viewBox: "0 0 20 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("rect", { x: "0.5", y: "0.756958", width: "19", height: "19", rx: "3.5", stroke: "#ACB0B8" }) });
    const bottomTollbarDefault = jsxs("div", { style: { background: "#3A3A3A", height: 50, display: "flex",
            justifyContent: "space-between", alignItems: "center"
        }, children: [jsxs("div", { style: { marginLeft: "20px", color: "#fff", fontSize: 14 }, children: ["\u0412\u044B\u0431\u0440\u0430\u043D\u043E ", Object.keys(rowSelection).length, " \u0438\u0437 ", data.length, " \u0441\u0442\u0440\u043E\u043A"] }), elementBottomToolbarCenter ? elementBottomToolbarCenter : jsx("a", { style: { color: "transparent" }, children: "." }), elementBottomToolbarRigth ? elementBottomToolbarRigth : jsx("a", { style: { color: "transparent" }, children: "." })] });
    const table = useMaterialReactTable({
        localization: MRT_Localization_RU_Custom,
        layoutMode: "grid",
        columns: columns,
        data: data,
        enableColumnActions: false,
        enableTopToolbar: true,
        enableRowSelection: enableRowSelection,
        enableColumnOrdering: true,
        enablePagination: enablePagination,
        paginationDisplayMode: "pages",
        enableColumnResizing: true,
        enableDensityToggle: enableDensityToggle,
        onDensityChange: setDensity,
        enableEditing: enableEditing,
        enableStickyHeader: enableStickyHeader,
        enableColumnPinning: enableColumnPinning,
        onColumnVisibilityChange: onColumnVisibilityChange,
        editDisplayMode: 'cell',
        columnFilterDisplayMode: 'popover',
        positionToolbarAlertBanner: 'bottom',
        enableExpanding: enableExpanding,
        getSubRows: getSubRows,
        renderBottomToolbar: Object.keys(rowSelection).length == 0 ? undefined : bottomCustomElementsByRowSelection ?
            bottomCustomElementsByRowSelection : bottomTollbarDefault,
        renderTopToolbarCustomActions: topCustomElements,
        renderBottomToolbarCustomActions: bottomCustomElements,
        onRowSelectionChange: onRowSelectionChange,
        initialState: { density: density, pagination: { pageSize: 20, pageIndex: 0 } },
        state: {
            rowSelection: rowSelection,
            isLoading: isLoading,
            /*pagination: { pageSize: pageSize, pageIndex: 0 },*/
            density: density,
            columnVisibility: columnVisibility,
            showProgressBars: showProgressBars,
        },
        getRowId: (originalRow) => originalRow.id,
        renderEmptyRowsFallback: noRecordsLabel ? () => (jsx("span", { style: {
                textAlign: "center",
                marginTop: "40px"
            }, children: noRecordsLabel })) : undefined,
        // Стили
        muiTableProps: { sx: style },
        muiTableContainerProps: { sx: { maxHeight: maxHeight,
                ".MuiTableHead-root": { opacity: 1 } } },
        muiTablePaperProps: {
            sx: {
                borderRadius: "4px", boxShadow: "none", background: "#FAFAFA",
                ".MuiTableRow-head": { minHeight: "40px", maxHeight: "40px", background: "#F9F9FB" },
                ".Mui-ToolbarDropZone + div": { background: "#E6E9EC",
                    ".MuiButtonBase-root:nth-of-type(2) path": {}
                },
                // Футер таблицы
                ".MuiTableContainer-root + div": { boxShadow: "none",
                    display: data.length == 0 ? 'none' : 'grid'
                },
                "> .MuiBox-root:last-of-type": { "> .MuiBox-root": {
                        display: 'block',
                        "> .MuiBox-root": {
                            width: "100%",
                            "> .MuiTablePagination-root": {
                                width: "100%",
                                "label": { color: "#313131", fontFamily: `'Rubik', sans-serif` },
                                ".MuiSelect-select": {
                                    paddingLeft: "5px",
                                    color: "#ACB0B8",
                                    fontFamily: `'Rubik', sans-serif`,
                                    lineHeight: "21px"
                                },
                                "> .MuiPagination-text": {
                                    ".MuiPaginationItem-text": { color: "#ACB0B8", fontFamily: `'Rubik', sans-serif` },
                                    ".MuiPaginationItem-text:not(.Mui-disabled) .MuiPaginationItem-icon": { fill: "#3A3A3A" },
                                    ".Mui-selected": { backgroundColor: "transparent", color: "#313131" }
                                }
                            }
                        }
                    }
                }
            }
        },
        muiTableBodyProps: {
            sx: {
                fontFamily: `'Rubik', sans-serif`, "tr.Mui-selected:hover": { background: "#ffffff" },
                ".MuiTableRow-root": { "td:after": { backgroundColor: "transparent" } }, //Цвет выделения строк при их выборе
                ".MuiTableRow-root:hover": { "td:after": { backgroundColor: "#F2F3F6 !important" } }, //Цвет выделения строки при наведении
                tr: {
                    minHeight: "39px", background: "#FAFAFA !important",
                    "td:first-of-type": {
                        padding: density === "compact" ? "0px" : density == "comfortable" ? "1rem" : "1.5rem"
                    }
                },
                ".MuiCheckbox-sizeSmall": { width: "2.5rem", height: "2.5rem" }
            }
        },
        muiTableHeadProps: {
            sx: {
                ".css-lapokc": { whiteSpace: "normal" },
                ".MuiCheckbox-sizeSmall": { width: "2.5rem", height: "2.5rem" }
            }
        },
        muiTableHeadRowProps: { sx: { "th:first-of-type": { borderLeft: "none", textAlign: headAlign ?? 'center' } } },
        muiTableHeadCellProps: {
            sx: {
                textAlign: headAlign ?? 'center', borderBottom: "1px solid #ACB0B8",
                borderTop: "1px solid #ACB0B8", fontSize: "14px", justifyContent: "center",
                padding: "0.5rem", paddingLeft: "5px", paddingRight: "5px",
                /*paddingTop: density == "compact" ? "7px" : "13.5px",
                paddingBottom: density == "compact" ? "-1px" : "10.5px",*/
                paddingTop: "-1px", paddingBottom: "-1px",
                //":first-of-type": { borderRight: "1px solid #ACB0B8" },
                ":last-of-type": {
                    ".Mui-TableHeadCell-ResizeHandle-Wrapper": { marginRight: "-5px" }
                },
                ".Mui-TableHeadCell-Content": { justifyContent: "center", fontWeight: "400", height: "100%",
                    ".Mui-TableHeadCell-Content-Actions": { display: "none" },
                    ".Mui-TableHeadCell-Content-Wrapper + span": { zIndex: 200 },
                    ".Mui-TableHeadCell-Content-Labels .MuiBadge-root": { position: "absolute", opacity: "0",
                        width: "calc(100% - 20px)", left: 0, right: 0, zIndex: 100
                    },
                    ".Mui-TableHeadCell-ResizeHandle-Wrapper": { height: "40px" }
                },
                ".Mui-TableHeadCell-ResizeHandle-Wrapper": {
                    height: "100%", width: "1px", paddingLeft: "6px", paddingRight: "4px", marginRight: "-8px",
                    "*": {
                        height: "100%", transform: "translateX(-0.6px)", borderWidth: "1px", borderColor: 'transparent'
                    }
                },
                "svg": { color: "transparent !important" },
                ".MuiCollapse-vertical input": {
                    padding: "2px 0 2px", textAlign: "center",
                    fontFamily: `'Rubik', sans-serif`
                },
                ":hover": { borderLeft: "1px solid #676F79",
                    ".Mui-TableHeadCell-ResizeHandle-Wrapper *": { borderColor: '#676F79 !important' },
                    "svg": { color: "#676F79 !important" } },
                ".MuiInputBase-formControl::after": { borderBottom: "2px solid #00824A" }
            }
        },
        muiTableBodyCellProps: ({ cell, column, table }) => ({
            sx: {
                fontFamily: `'Rubik', sans-serif`, fontWeight: "400", fontSize: "14px", whiteSpace: "normal",
                textAlign: "center", outline: 'none !important', cursor: 'auto',
                padding: density === "compact" ? "0.5rem" : density == "comfortable" ? "1rem" : "1.5rem",
                "input": { textAlign: "center" }
            },
            onClick: () => {
                table.setEditingCell(cell);
                queueMicrotask(() => {
                    const textField = table.refs.editInputRefs.current[column.id];
                    if (textField) {
                        textField.focus();
                        textField.select?.();
                    }
                });
            },
        }),
        muiTableBodyRowProps: {
            sx: {
                td: {
                    borderBottom: "1px solid #ACB0B8",
                    justifyContent: bodyAlign ?? 'center',
                    ':not(:first-of-type)': { borderLeft: columnSeparator ? "1px solid #ACB0B8" : "none" }
                }
            }
        },
        muiEditTextFieldProps: {
            sx: { ".MuiInputBase-formControl::after": { borderBottom: "2px solid #00824A" } }
        },
        muiFilterTextFieldProps: { placeholder: 'Введите значение', sx: { ".MuiInputBase-root:after": { borderBottom: "2px solid #00824A" } } },
        muiCircularProgressProps: {
            color: 'secondary',
            thickness: 5,
            size: 0,
        },
        muiLinearProgressProps: {
            color: 'success',
            sx: { color: "#00824A" }
        },
        muiSkeletonProps: {
            animation: 'pulse',
            height: 28,
        },
        muiSelectCheckboxProps: {
            icon: BarsCheckBoxIcon,
            checkedIcon: BarsCheckBoxSelectedIcon
        },
        muiSelectAllCheckboxProps: {
            icon: BarsCheckBoxIcon,
            checkedIcon: BarsCheckBoxSelectedIcon,
            indeterminateIcon: BarsCheckBoxIcon
        },
        muiSearchTextFieldProps: {
            placeholder: "Поиск по"
        },
        muiTopToolbarProps: {
            sx: {
                '.MuiBox-root': {
                    display: 'flex', flexDirection: 'row-reverse',
                    ".MuiTextField-root .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ACB0B8",
                        borderRadius: "4px",
                        background: "fff"
                    }
                }
            }
        },
        muiToolbarAlertBannerProps: {
            sx: {
                backgroundColor: '#3A3A3A', color: 'white',
                // Тест
                height: "50px", alignItems: "center",
                ".MuiStack-root": { padding: "0 0 0 15px" },
                ".MuiButton-root": { color: "#3AE099", padding: "6px" },
            }
        },
        muiPaginationProps: {
            rowsPerPageOptions: [20, 50, 100],
            sx: {
                ".MuiSelect-select": { paddingLeft: "5px" }
            }
        }
    });
    const globalTheme = createTheme({
        palette: {
            common: {
                black: '#000'
            },
            success: {
                main: '#00824A'
            }
        }
    });
    const tableTheme = useMemo(() => createTheme({
        palette: {
            primary: globalTheme.palette.success, // Глобальный цвет кнопок
            divider: '#0000001f',
            background: {},
        },
        typography: { button: { fontWeight: 600 } },
        components: {
            MuiTooltip: {
                styleOverrides: { tooltip: {} }
            },
            MuiButton: { styleOverrides: { colorSuccess: "#000" } },
            MuiSwitch: {
                styleOverrides: {
                    thumb: {
                        color: '#00824A', // Цвет переключателя
                    },
                    track: {
                        backgroundColor: '#C4C4C4'
                    }
                }
            }
        }
    }), [globalTheme]);
    return (jsx(ThemeProvider, { theme: tableTheme, children: jsx(MaterialReactTable, { table: table }) }));
}

var css_248z = ".BarsSelect-module_wrapper__MX5YV {\n    position: relative;\n    height: 40px;\n    border-radius: 4px;\n    background-color: transparent;\n    max-width: 100%;\n}\n\n    .BarsSelect-module_wrapper__MX5YV input {\n        background: #fff;\n    }\n\n.BarsSelect-module_select_name__GCZkt p {\n    padding: 5px 0 0 12px;\n    font-size: 9px;\n    color: #676F79;\n}\n\n.BarsSelect-module_wrapper__MX5YV .BarsSelect-module_select__mGxru {\n    height: 60%;\n}\n\n.BarsSelect-module_wrapper_amount__BZQtZ {\n    position: absolute;\n    right: 40px;\n    top: 6px;\n    z-index: 50;\n    width: 25px;\n    height: 25px;\n    border-radius: 8px;\n    background-color: #3AE099;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    font-size: 14px;\n}\n";
var classes = {"wrapper":"BarsSelect-module_wrapper__MX5YV","wrapper_amount":"BarsSelect-module_wrapper_amount__BZQtZ"};
styleInject(css_248z);

const styleLabel = {
    fontFamily: `"Rubik", "sans-serif"`,
    fontSize: "12px",
    top: -4,
    "&.Mui-focused": {
        color: "#00824A",
        top: 1,
        fontSize: 13
    },
    "&.MuiInputLabel-shrink": {
        top: 1,
        fontSize: 13
    },
};
const BarsSelectStyled = styled(Select)({
    background: "#ffffff",
    fontSize: "14px",
    fontFamily: `"Rubik", "sans-serif"`,
    fontWeight: 400,
    minHeight: "100%",
    "&.MuiOutlinedInput-root:hover:not(.Mui-error)": {
        ".MuiOutlinedInput-notchedOutline": { borderColor: "#00824A" }
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: "#00824A",
        borderWidth: "1px !important"
    },
    ".MuiSelect-icon": {
        width: "10px",
        right: 20,
    },
    ".MuiOutlinedInput-root": { width: "100%" },
    ".MuiSelect-select": {
        paddingTop: "12px",
        paddingBottom: "8px",
        paddingRight: "40px !important",
        width: '100%'
    }
});
function BarsSelect({ className, id, styleSelect, styleRootDiv, value, label, onChange, onClose, multiple, children, displayEmpty = false, autoFocus = false, maxHeightList = "50vh", renderValue, error, helperText }) {
    function IconFilters(props) {
        return (jsx(SvgIcon, { ...props, width: "12", height: "6", viewBox: "0 0 12 6", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10.9882 0.16124C11.0455 0.109734 11.1128 0.0694692 11.1864 0.0427424C11.26 0.0160155 \n        11.3384 0.00335046 11.4172 0.00547096C11.4959 0.00759147 11.5734 0.0244558 11.6453 0.0551008C11.7172\n        0.0857459 11.782 0.129571 11.8361 0.184076C11.8902 0.23858 11.9325 0.302695 11.9606 0.372761C11.9887\n        0.442826 12.002 0.517469 11.9998 0.592429C11.9975 0.667389 11.9798 0.741198 11.9476 0.80964C11.9154\n        0.878083 11.8694 0.939819 11.8122 0.991324L6.41533 5.84395C6.30399 5.94416 6.15659 6 6.00337 6C5.85015\n        6 5.70275 5.94416 5.59141 5.84395L0.193979 0.991324C0.135476 0.940159 0.0882358 0.878436 0.0550012\n        0.809742C0.0217657 0.741048 0.00319859 0.666751 0.000378583 0.591168C-0.00244238 0.515584 0.01054\n        0.44022 0.0385713 0.369454C0.0666017 0.298687 0.109121 0.233928 0.163663 0.178939C0.218204 0.12395\n        0.283676 0.0798265 0.35628 0.0491316C0.428884 0.0184366 0.50717 0.00178218 0.586592\n        0.000135441C0.666013 -0.00151129 0.744987 0.0118824 0.818925 0.0395389C0.892863 0.0671955 0.960293\n        0.108563 1.0173 0.16124L6.00337 4.64392L10.9882 0.16124Z", fill: "black" }) }));
    }
    return (jsxs(FormControl, { className: classes.wrapper, sx: styleRootDiv, children: [value && value.length > 1 && multiple == true && jsx("div", { className: classes.wrapper_amount, children: value.length }), jsx(InputLabel, { id: "select-label", sx: styleLabel, children: label }), jsx(BarsSelectStyled, { className: className, id: id, labelId: "select-label", sx: styleSelect, multiple: multiple, value: value, onChange: onChange, onClose: onClose, renderValue: renderValue, error: error, displayEmpty: displayEmpty, input: jsx(OutlinedInput, { label: label }), IconComponent: IconFilters, MenuProps: { autoFocus: autoFocus,
                    PaperProps: { sx: { marginTop: "1px", maxHeight: maxHeightList, ".MuiList-padding": { paddingTop: 0 } } }
                }, children: children }), jsx(FormHelperText, { sx: { marginLeft: "3px", color: "#d32f2f" }, children: error ? helperText : ' ' })] }));
}

const BarsMenuItemStyled = styled$1(MenuItem)({
    color: "#3A3A3A",
    fontFamily: `"Rubik", "sans-serif"`,
    fontSize: "14px",
    fontWeight: 400,
    "> svg": {
        marginLeft: "auto",
        visibility: "hidden"
    },
    "&.Mui-selected": {
        color: "#00824A",
        background: "#fff",
        "> svg": {
            visibility: "visible",
        }
    },
    "&.Mui-disabled": {
        color: "#000",
    },
});
//TODO: Переименовать в BarsSelectItem т.к. путаница с аналогичным по названию компонентом в меню
/**
* @deprecated Устаревший компонент. Используйте компонент {@link BarsSelectItem}.
*/
function BarsMenuItem(props) {
    function IconSelect() {
        return (jsx(SvgIcon, { ...props, width: "15", height: "11", viewBox: "0 0 15 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", sx: { heiht: 11, width: 15 }, children: jsx("path", { d: "M4.49996 8.47501L1.60829 5.58334C1.45248 5.42752 1.24115 5.33999 1.02079 5.33999C0.800436 \n        5.33999 0.589107 5.42752 0.433292 5.58334C0.277477 5.73915 0.189941 5.95048 0.189941 6.17084C0.189941\n        6.27995 0.211432 6.38799 0.253186 6.48879C0.29494 6.58959 0.35614 6.68119 0.433292 6.75834L3.91663\n        10.2417C4.24163 10.5667 4.76662 10.5667 5.09163 10.2417L13.9083 1.425C14.0641 1.26919 14.1516 1.05786\n        14.1516 0.837504C14.1516 0.617148 14.0641 0.405818 13.9083 0.250004C13.7525 0.0941888 13.5411\n        0.00665283 13.3208 0.00665283C13.1004 0.00665283 12.8891 0.0941888 12.7333 0.250004L4.49996 8.47501Z", fill: "#3AE099" }) }));
    }
    return (jsxs(BarsMenuItemStyled, { ...props, children: [props.children, !props.disabled && jsx(IconSelect, {})] }));
}
function BarsSelectItem(props) {
    return jsx(BarsMenuItem, { ...props });
}

function BarsCheckbox({ state, controlledState, indeterminate, handleChange, disabled }) {
    return (jsx(Checkbox, { defaultChecked: state, checked: controlledState, onChange: handleChange, indeterminate: indeterminate, disabled: disabled, sx: {
            '&.Mui-checked': {
                color: 'var(--bars-green-secondary)',
            },
        } }));
}

function BarsSnackbar({ id, open, message, onClose, type = "info", autoHideDuration = 5000, action, styleSnackbar, styleAlert }) {
    return (jsx(Snackbar, { id: id, open: open, onClose: onClose, autoHideDuration: autoHideDuration, style: styleSnackbar, sx: { left: "110px !important", bottom: "10px !important", zIndex: 2000 }, anchorOrigin: { vertical: "bottom", horizontal: "left" }, TransitionComponent: (props) => jsx(Slide, { ...props, direction: "right" }), children: jsx(Alert, { severity: type, variant: "filled", onClose: onClose, action: action, style: styleAlert, sx: { ".MuiAlert-message": { margin: "auto" } }, children: message }) }));
}

function BarsRadioGroup({ items, onChange, value, defaultValue, className, labelClassName, radioClassName, row, groupName }) {
    return (jsx(RadioGroup, { radioGroup: groupName, value: value, defaultValue: defaultValue, row: row, className: className, onChange: onChange, children: items.map((val, i) => (jsx(FormControlLabel, { className: labelClassName, value: val.value, label: val.label, control: jsx(Radio, { className: radioClassName }) }, i))) }));
}

function ThreeDotIconSvg({ className, width, height, onClick, fill }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "40", height: height ?? "40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M19.9103 9.99034C19.6797 9.99034 19.4513 10.0352 19.2382 10.1225C19.0252 10.2097 18.8316 10.3376 18.6685 10.4988C18.5054 10.66 18.376 10.8514 18.2878 11.0621C18.1995 11.2727 18.1541 11.4985 18.1541 11.7265C18.1541 11.9544 18.1995 12.1802 18.2878 12.3908C18.376 12.6015 18.5054 12.7929 18.6685 12.9541C18.8316 13.1153 19.0252 13.2432 19.2382 13.3304C19.4513 13.4177 19.6797 13.4626 19.9103 13.4626C20.1409 13.4626 20.3693 13.4177 20.5824 13.3304C20.7954 13.2432 20.989 13.1153 21.1521 12.9541C21.3152 12.7929 21.4446 12.6015 21.5328 12.3908C21.6211 12.1802 21.6665 11.9544 21.6665 11.7265C21.6665 11.4985 21.6211 11.2727 21.5328 11.0621C21.4446 10.8514 21.3152 10.66 21.1521 10.4988C20.989 10.3376 20.7954 10.2097 20.5824 10.1225C20.3693 10.0352 20.1409 9.99034 19.9103 9.99034ZM19.9103 18.6709C19.4445 18.6709 18.9978 18.8538 18.6685 19.1794C18.3391 19.505 18.1541 19.9466 18.1541 20.407C18.1541 20.8675 18.3391 21.309 18.6685 21.6346C18.9978 21.9602 19.4445 22.1431 19.9103 22.1431C20.3761 22.1431 20.8228 21.9602 21.1521 21.6346C21.4815 21.309 21.6665 20.8675 21.6665 20.407C21.6665 19.9466 21.4815 19.505 21.1521 19.1794C20.8228 18.8538 20.3761 18.6709 19.9103 18.6709ZM19.9103 27.3515C19.4445 27.3515 18.9978 27.5344 18.6685 27.8599C18.3391 28.1855 18.1541 28.6271 18.1541 29.0876C18.1541 29.548 18.3391 29.9896 18.6685 30.3152C18.9978 30.6408 19.4445 30.8237 19.9103 30.8237C20.3761 30.8237 20.8228 30.6408 21.1521 30.3152C21.4815 29.9896 21.6665 29.548 21.6665 29.0876C21.6665 28.6271 21.4815 28.1855 21.1521 27.8599C20.8228 27.5344 20.3761 27.3515 19.9103 27.3515Z", fill: fill ?? "#3A3A3A" }) }));
}

function CalendarIconSvg({ className, width, height, onClick, fill }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "20", height: height ?? "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M17.7778 18H2.22222V7H17.7778M14.4444 0V2H5.55556V0H3.33333V2H2.22222C0.988889 2 0 2.89 0 4V18C0 18.5304 0.234126 19.0391 0.650874 19.4142C1.06762 19.7893 1.63285 20 2.22222 20H17.7778C18.3671 20 18.9324 19.7893 19.3491 19.4142C19.7659 19.0391 20 18.5304 20 18V4C20 3.46957 19.7659 2.96086 19.3491 2.58579C18.9324 2.21071 18.3671 2 17.7778 2H16.6667V0M15.5556 11H10V16H15.5556V11Z", fill: fill ?? "#707070" }) }));
}

function ArrowtIconSvg({ className, width, height, onClick, fill }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "20", height: height ?? "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4.51176 12.3388C4.45451 12.3903 4.38716 12.4305 4.31357 12.4573C4.23997 12.484 4.16157 12.4966 4.08284 12.4945C4.0041 12.4924 3.92658 12.4755 3.85469 12.4449C3.7828 12.4143 3.71795 12.3704 3.66385 12.3159C3.60975 12.2614 3.56746 12.1973 3.53939 12.1272C3.51132 12.0572 3.49801 11.9825 3.50024 11.9076C3.50247 11.8326 3.52018 11.7588 3.55237 11.6904C3.58456 11.6219 3.63059 11.5602 3.68784 11.5087L9.08467 6.65605C9.19601 6.55584 9.34341 6.5 9.49663 6.5C9.64985 6.5 9.79725 6.55584 9.90859 6.65605L15.306 11.5087C15.3645 11.5598 15.4118 11.6216 15.445 11.6903C15.4782 11.759 15.4968 11.8332 15.4996 11.9088C15.5024 11.9844 15.4895 12.0598 15.4614 12.1305C15.4334 12.2013 15.3909 12.2661 15.3363 12.3211C15.2818 12.376 15.2163 12.4202 15.1437 12.4509C15.0711 12.4816 14.9928 12.4982 14.9134 12.4999C14.834 12.5015 14.755 12.4881 14.6811 12.4605C14.6071 12.4328 14.5397 12.3914 14.4827 12.3388L9.49663 7.85608L4.51176 12.3388Z", fill: fill ?? "black" }) }));
}

export { ArrowtIconSvg as ArrowIconSvg, BarsAccordion, BarsAccordionItem, BarsButton, BarsCheckbox as BarsCheckBox, BarsDialog, BarsDrawer, BarsInput, BarsMenu, BarsMenuItem, BarsRadioGroup, BarsSelect, BarsSelectItem, BarsSnackbar, BarsSwitch, BarsTable, BarsTabs, BarsTextField, CalendarIconSvg, Container, ContaineredList, EntryPointBase, EntryPointClient, Navigation, SimpleList, ThreeDotIconSvg };
