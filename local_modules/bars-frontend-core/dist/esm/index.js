import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Link, useNavigate, useLocation, matchPath, createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import React__default, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { SecurityAuthService } from 'bars-frontend-auth-libs';
import { EntryPointClient, BarsInput, BarsCheckBox, BarsDialog, BarsButton, BarsMenu, SimpleList } from 'bars-frontend-shared';
import { styled, Tooltip, tooltipClasses, Menu as Menu$1, Button, Switch } from '@mui/material';
import { ReactSVG } from 'react-svg';
import { DockviewReact } from 'dockview';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';

function Snackbar() {
    return (jsx("a", {}));
    /* const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref,) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    const changeSnckbar = useChangeSnackbar()
    const snackbarData = useGetShackbar()
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      changeSnckbar({
        message: '',
        visible: false,
        severity: 'info'})
    }
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <BaseSnackbar open={snackbarData.visible} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackbarData.severity ?? 'info'} sx={{ width: '100%' }}>
            {snackbarData.message}
          </Alert>
        </BaseSnackbar>
      </Stack>
    ); */
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

var css_248z$a = "@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap');\n\n:root {\n\n  --bs-body-font-family: Rubik, system-ui, Arial, sans-serif;\n  \n  font-family: var(--bs-body-font-family);\n  font-weight: 400;\n  font-size: 14px;\n\n  line-height: 1.5;\n\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n\n  --bars-black: #000000;\n  --bars-white: #FFFFFF;\n\n  --bars-green-primary: #00824A;\n  --bars-green-secondary: #3AE099;\n\n  --bars-red-low: #FED3D3;\n  --bars-red-mid: #EB5757;\n  --bars-red-high: #CA0000;\n\n  --bars-backgroud: #FAFAFA;\n\n  --bars-gray-low1: #F2F3F6;\n  --bars-gray-low2: #EFEFEF;\n  --bars-gray-mid1: #CDD3D9;\n  --bars-gray-mid2: #ACB0B8;\n  --bars-gray-high1: #676F79;\n  --bars-gray-high2: #3A3A3A;\n\n  --header-height: 45px;\n  --menu-width: 100px;\n\n  --large-menu-width: 100px;\n\n  --dv-tabs-and-actions-container-font-size: 16px !important;\n  \n  @media (min-width: 300px)  {\n    --large-menu-width: 100vw;\n    --menu-width: 100px;\n  }\n  @media (min-width: 300px)  {\n    --large-menu-width: 100px;\n    --menu-width: 100px;\n  }\n  @media (min-width: 600px)  {\n    --menu-width: 100px;\n  }\n}\n\n/* Последние изменения */\n\n.dv-void-container {\n  -webkit-app-region: drag;\n}\n\n.dv-tabs-and-actions-container .dockview-react-part {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.singleTabMode .dv-default-tab-action {\n  display: none !important;\n}\n\n.singleTabMode .dv-tabs-container {\n  /* width: 100%; */\n  display: none;\n}\n\n/* .singleTabMode .dv-tab.dv-active-tab {\n  width: 100%;\n}\n\n.singleTabMode .dv-default-tab-content {\n  text-align: center;\n}\n\n.singleTabMode .dv-default-tab {\n  cursor: default;\n} */\n\n.dv-tabs-container {\n  overflow: hidden !important;\n}\n\n.dv-pre-actions-container {\n  max-width: 64px;\n}\n\n.dv-tab {\n  height: 100%;\n  margin-left: 0px !important;\n  -webkit-app-region: no-drag;\n}\n\n.dv-tab:hover {\n  filter: brightness(0.95);\n}\n\n.dv-tab::after {\n  display: none;  \n}\n\n.dv-tab::before {\n  display: none;  \n}\n\n.dv-active-tab {\n  border-bottom: 2px solid var(--bars-green-primary);\n}\n\n\n\n.dv-tab:not(:first-child)::before,\n.dv-tab:not(:first-child):focus::before,\n.dv-tab:not(:first-child):focus-visible::before,\n.dv-tab:not(:first-child):focus-within::before,\n.dv-tab:not(:first-child):active::before {\n  content: '' !important;\n  position: absolute !important;\n  left: 0 !important;\n  top: 10% !important;\n  height: 70% !important;\n  width: 1px !important;\n  background-color: var(--bars-gray-mid1) !important;\n  display: block !important;\n  z-index: 1 !important;\n  transform: none !important;\n  transition: none !important;\n  outline: none !important;\n  margin-right: 9px !important; \n}\n\n\n\n\n\n\nbody {\n  margin: 0;\n}\n\n.formcontainer {\n  font: var(--bs-body-font-family); \n}\n\n.formcontainer input {\n  margin-top: 10px;\n}\n\n.formcontainer input[type=\"text\"],\n.formcontainer input[type=\"password\"],\n.formcontainer input[type=\"email\"],\n.formcontainer input[type=\"tel\"],\n.formcontainer input[type=\"input\"] {\n  display: flex;\n  border: 1px solid var(--bars-gray-mid2);\n  border-radius: 4px;\n  height: 42px;\n  width: 100%;\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.formcontainer input:hover,\n.formcontainer input:focus-visible,\n.formcontainer input:focus {\n  border: 1px solid var(--bars-gray-high2) !important;\n}\n\n.formcontainer input[type=\"button\"],\n.formcontainer input[type=\"submit\"],\n.formcontainer .long-element {\n  display: flex;\n  border: 1px solid var(--bars-gray-mid2);\n  border-radius: 4px;\n  height: 42px;\n  width: 100%;\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--bars-green-primary);\n  background-color: var(--bars-white);\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.green-input {\n  background-color: var(--bars-green-primary) !important;\n  color: var(--bars-white) !important;\n}\n\n.circular {\n  border-radius: 50%;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.gray-background {\n  background-color: var(--bars-gray-low2);\n}\n\n.relative {\n  position: relative;\n}\n\n.inline {\n  display: inline-block;\n}\n\n.drop-down::after {\n  content: ' ';\n  background-image: url('/arrow-down.svg');\n  width: 8px;\n  background-repeat: no-repeat;\n  background-position: right;\n  padding-left: 4px;\n  box-sizing: content-box;\n}\n\n.icon-menu-item {\n  width: 14px;\n  height: 14px;\n}\n\n.icon-menu-container {\n  margin-right: 8px;\n}\n\n.back-arrow {\n  content: ' ';\n  display: flex;\n  width: 12px;\n  height: 12px;\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-right: 10px;\n  cursor: pointer;\n}\n\n.expand-arrow {\n  content: ' ';\n  display: flex;\n  margin-top: auto;\n  margin-bottom: auto;\n  cursor: pointer;\n}\n\n.collapse-arrow {\n  content: ' ';\n  display: flex;\n  margin-top: auto;\n  margin-bottom: auto;\n  cursor: pointer;\n}\n\n.menuBtn {\n  min-width: var(--menu-width);\n  height: 100%;\n  min-height: 31px;\n  display: flex;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.menuItemContainer {\n  display: flex;\n  cursor: pointer;\n}\n\n.menuImgContainer {\n  margin-top: auto;\n  margin-bottom: auto;\n  background-color: var(--bars-green-primary);\n}\n\n.tab .dockview-react-tab {\n  display: flex;\n  padding: 0px 8px;\n  align-items: center;\n  height: 100%;\n}\n.tab .dockview-react-tab .dockview-react-tab-title {\n  padding: 0px 8px;\n  flex-grow: 1;\n}\n.tab .dockview-react-tab .dockview-react-tab-action {\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.tab .dockview-react-tab .dockview-react-tab-action:hover {\n  border-radius: 2px;\n  background-color: var(--dv-icon-hover-background-color);\n}\n.tab.inactive-tab:not(:hover) .dockview-react-tab-action {\n  visibility: hidden;\n}\n.dockview-react-part {\n  height: 100% !important; \n  width: 100%;\n}\n.dockview-svg {\n  display: inline-block;\n  fill: currentcolor;\n  line-height: 1;\n  stroke: currentcolor;\n  stroke-width: 0;\n}\n\ndiv .dockview-theme-vs {\n  --dv-background-color: #FAFAFA;\n  --dv-paneview-active-outline-color: dodgerblue;\n  --dv-tabs-and-actions-container-font-size: 13px;\n  --dv-tabs-and-actions-container-height: 45px;\n  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);\n  --dv-drag-over-border-color: white;\n  --dv-tabs-container-scrollbar-color: #888;\n  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);\n  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);\n  --dv-group-view-background-color: #FAFAFA;\n  --dv-tabs-and-actions-container-background-color: white;\n  --dv-activegroup-hiddenpanel-tab-background-color: var(--bars-white);\n  --dv-inactivegroup-visiblepanel-tab-background-color: var(--bars-white);\n  --dv-inactivegroup-hiddenpanel-tab-background-color: var(--bars-white);\n  --dv-tab-divider-color: #1e1e1e;\n  --dv-activegroup-visiblepanel-tab-color: var(--bars-white);\n  --dv-activegroup-hiddenpanel-tab-color: var(--bars-gray-high2);\n  --dv-inactivegroup-visiblepanel-tab-color: var(--bars-white);\n  --dv-inactivegroup-hiddenpanel-tab-color: var(--bars-gray-high2);\n  --dv-separator-border: rgb(68, 68, 68);\n  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);\n  --dv-tabs-and-actions-container-height: 45px;\n  --dv-tabs-and-actions-container-font-size: 11px;\n  --dv-activegroup-visiblepanel-tab-background-color: var(--bars-white);\n  --dv-inactivegroup-visiblepanel-tab-background-color: var(--bars-white);\n  --dv-activegroup-visiblepanel-tab-color: var(--bars-green-primary);\n  --dv-inactivegroup-visiblepanel-tab-color: var(--bars-green-primary);\n  --dv-inactivegroup-hiddenpanel-tab-color: var(--bars-gray-high2);\n}\n.dockview-theme-vs .groupview.active-group > .tabs-and-actions-container {\n  box-sizing: content-box;\n  border-bottom: 2px solid var(--bars-gray-low2);\n}\n\n.dockview-theme-vs .groupview.inactive-group > .tabs-and-actions-container {\n  box-sizing: content-box;\n  border-bottom: 2px solid var(--bars-gray-low2);\n}\n.dockview-theme-vs .groupview.inactive-group > .tabs-and-actions-container .tab.active-tab {\n  border-bottom: 2px solid var(--bars-gray-low2);\n}\n.dockview-theme-vs .groupview.inactive-group > .tabs-and-actions-container .tab.inactive-tab {\n  border-bottom: 2px solid var(--bars-gray-low2);\n}\n.drop-target {\n  position: relative;\n}\n.drop-target > .drop-target-dropzone {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: 1000;\n  pointer-events: none;\n}\n.drop-target > .drop-target-dropzone > .drop-target-selection {\n  position: relative;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  background-color: var(--dv-drag-over-background-color);\n  transition: top 70ms ease-out, left 70ms ease-out, width 70ms ease-out, height 70ms ease-out, opacity 0.15s ease-out;\n  will-change: transform;\n  pointer-events: none;\n}\n.drop-target > .drop-target-dropzone > .drop-target-selection.small-top {\n  border-top: 1px solid var(--dv-drag-over-border-color);\n}\n.drop-target > .drop-target-dropzone > .drop-target-selection.small-bottom {\n  border-bottom: 1px solid var(--dv-drag-over-border-color);\n}\n.drop-target > .drop-target-dropzone > .drop-target-selection.small-left {\n  border-left: 1px solid var(--dv-drag-over-border-color);\n}\n.drop-target > .drop-target-dropzone > .drop-target-selection.small-right {\n  border-right: 1px solid var(--dv-drag-over-border-color);\n}\n\n\n.dv-resize-container {\n  position: absolute;\n  z-index: 997;\n  border: 1px solid var(--dv-tab-divider-color);\n  box-shadow: var(--dv-floating-box-shadow);\n}\n.dv-resize-container.dv-bring-to-front {\n  z-index: 998;\n}\n.dv-resize-container.dv-resize-container-dragging {\n  opacity: 0.5;\n}\n.dv-resize-container .dv-resize-handle-top {\n  height: 4px;\n  width: calc(100% - 8px);\n  left: 4px;\n  top: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: ns-resize;\n}\n.dv-resize-container .dv-resize-handle-bottom {\n  height: 4px;\n  width: calc(100% - 8px);\n  left: 4px;\n  bottom: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: ns-resize;\n}\n.dv-resize-container .dv-resize-handle-left {\n  height: calc(100% - 8px);\n  width: 4px;\n  left: -2px;\n  top: 4px;\n  z-index: 999;\n  position: absolute;\n  cursor: ew-resize;\n}\n.dv-resize-container .dv-resize-handle-right {\n  height: calc(100% - 8px);\n  width: 4px;\n  right: -2px;\n  top: 4px;\n  z-index: 999;\n  position: absolute;\n  cursor: ew-resize;\n}\n.dv-resize-container .dv-resize-handle-topleft {\n  height: 4px;\n  width: 4px;\n  top: -2px;\n  left: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: nw-resize;\n}\n.dv-resize-container .dv-resize-handle-topright {\n  height: 4px;\n  width: 4px;\n  right: -2px;\n  top: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: ne-resize;\n}\n.dv-resize-container .dv-resize-handle-bottomleft {\n  height: 4px;\n  width: 4px;\n  left: -2px;\n  bottom: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: sw-resize;\n}\n.dv-resize-container .dv-resize-handle-bottomright {\n  height: 4px;\n  width: 4px;\n  right: -2px;\n  bottom: -2px;\n  z-index: 999;\n  position: absolute;\n  cursor: se-resize;\n}\n.dv-dockview {\n  position: relative;\n  background-color: var(--dv-group-view-background-color);\n}\n.dv-dockview .dv-watermark-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.groupview.active-group > .tabs-and-actions-container > .tabs-container > .tab.active-tab {\n  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);\n  color: var(--dv-activegroup-visiblepanel-tab-color);\n  border-bottom: 2px solid #00824A;\n}\n.groupview.active-group > .tabs-and-actions-container > .tabs-container > .tab.inactive-tab {\n  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);\n  color: var(--dv-activegroup-hiddenpanel-tab-color);\n}\n.groupview.inactive-group > .tabs-and-actions-container > .tabs-container > .tab.active-tab {\n  background-color: var(--dv-inactivegroup-visiblepanel-tab-background-color);\n  color: var(--dv-inactivegroup-visiblepanel-tab-color);\n}\n.groupview.inactive-group > .tabs-and-actions-container > .tabs-container > .tab.inactive-tab {\n  background-color: var(--dv-inactivegroup-hiddenpanel-tab-background-color);\n  color: var(--dv-inactivegroup-hiddenpanel-tab-color);\n}\n\n/**\n * when a tab is dragged we lose the above stylings because they are conditional on parent elements\n * therefore we also set some stylings for the dragging event\n **/\n.tab.dv-tab-dragging {\n  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);\n  color: var(--dv-activegroup-visiblepanel-tab-color);\n}\n.groupview {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: var(--dv-group-view-background-color);\n}\n.groupview:focus {\n  outline: none;\n}\n.groupview.empty > .tabs-and-actions-container {\n  display: none;\n}\n.groupview > .content-container {\n  flex-grow: 1;\n  overflow: auto;\n  outline: none;\n}\n.grid-view,\n.branch-node {\n  height: 100%;\n  width: 100%;\n}\n.pane-container {\n  height: 100%;\n  width: 100%;\n}\n.pane-container.animated .view {\n  transition-duration: 0.15s;\n  transition-timing-function: ease-out;\n}\n.pane-container .view {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 0px !important;\n}\n.pane-container .view:not(:first-child)::before {\n  background-color: transparent !important;\n}\n.pane-container .view:not(:first-child) .pane > .pane-header {\n  border-bottom: 1px solid var(--dv-paneview-header-border-color);\n}\n.pane-container .view .default-header {\n  background-color: var(--dv-group-view-background-color);\n  color: var(--dv-activegroup-visiblepanel-tab-color);\n  display: flex;\n  padding: 0px 8px;\n  cursor: pointer;\n}\n.pane-container .view .default-header .dockview-pane-header-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pane-container .view .default-header > span {\n  padding-left: 8px;\n  flex-grow: 1;\n}\n.pane-container:first-of-type > .pane > .pane-header {\n  border-bottom: none !important;\n}\n.pane-container .pane {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.pane-container .pane .pane-header {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: relative;\n  outline: none;\n}\n.pane-container .pane .pane-header.pane-draggable {\n  cursor: pointer;\n}\n.pane-container .pane .pane-header:focus:before, .pane-container .pane .pane-header:focus-within:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  content: \"\";\n  pointer-events: none;\n  outline: 1px solid;\n  outline-width: -1px;\n  outline-style: solid;\n  outline-offset: -1px;\n  outline-color: var(--dv-paneview-active-outline-color);\n}\n.pane-container .pane .pane-body {\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-grow: 1;\n  position: relative;\n  outline: none;\n}\n.pane-container .pane .pane-body:focus:before, .pane-container .pane .pane-body:focus-within:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  content: \"\";\n  pointer-events: none;\n  outline: 1px solid;\n  outline-width: -1px;\n  outline-style: solid;\n  outline-offset: -1px;\n  outline-color: var(--dv-paneview-active-outline-color);\n}\n\n.split-view-container {\n  position: relative;\n\n  height: 100%;\n  width: 100%;\n}\n.split-view-container.animation .view,\n.split-view-container.animation .sash {\n  transition-duration: 0.15s;\n  transition-timing-function: ease-out;\n}\n.split-view-container.horizontal {\n  height: 100%;\n}\n.split-view-container.horizontal > .sash-container > .sash {\n  height: 100%;\n  width: 4px;\n}\n.split-view-container.horizontal > .sash-container > .sash.enabled {\n  cursor: ew-resize;\n}\n.split-view-container.horizontal > .sash-container > .sash.disabled {\n  cursor: default;\n}\n.split-view-container.horizontal > .sash-container > .sash.maximum {\n  cursor: w-resize;\n}\n.split-view-container.horizontal > .sash-container > .sash.minimum {\n  cursor: e-resize;\n}\n.split-view-container.horizontal > .view-container > .view:not(:first-child)::before {\n  height: 100%;\n  width: 1px;\n}\n.split-view-container.vertical {\n  width: 100%;\n}\n.split-view-container.vertical > .sash-container > .sash {\n  width: 100%;\n  height: 4px;\n}\n.split-view-container.vertical > .sash-container > .sash.enabled {\n  cursor: ns-resize;\n}\n.split-view-container.vertical > .sash-container > .sash.disabled {\n  cursor: default;\n}\n.split-view-container.vertical > .sash-container > .sash.maximum {\n  cursor: n-resize;\n}\n.split-view-container.vertical > .sash-container > .sash.minimum {\n  cursor: s-resize;\n}\n.split-view-container.vertical > .view-container > .view {\n  width: 100%;\n}\n.split-view-container.vertical > .view-container > .view:not(:first-child)::before {\n  height: 1px;\n  width: 100%;\n}\n.split-view-container .sash-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n.split-view-container .sash-container .sash {\n  position: absolute;\n  z-index: 99;\n  outline: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  touch-action: none;\n}\n.split-view-container .sash-container .sash:active {\n  transition: background-color 0.1s ease-in-out;\n  background-color: var(--dv-active-sash-color, transparent);\n}\n.split-view-container .sash-container .sash:hover {\n  background-color: var(--dv-active-sash-color, transparent);\n  transition: background-color 0.1s ease-in-out;\n  transition-delay: 0.5s;\n}\n.split-view-container .view-container {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: var(--dv-background-color);\n}\n.split-view-container .view-container .view {\n  height: 100%;\n  box-sizing: border-box;\n  overflow: auto;\n  position: absolute;\n}\n.split-view-container.separator-border .view:not(:first-child)::before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  pointer-events: none;\n  background-color: var(--dv-separator-border);\n}\n.dv-dragged {\n  transform: translate3d(0px, 0px, 0px); /* forces tab to be drawn on a separate layer (see https://github.com/microsoft/vscode/issues/18733) */\n}\n\n.tab.dv-tab-dragging .tab-action {\n  background-color: var(--dv-activegroup-visiblepanel-tab-color);\n}\n.tab.active-tab > .default-tab .tab-action {\n  visibility: visible;\n}\n.tab.inactive-tab > .default-tab .tab-action {\n  visibility: visible;\n}\n.tab.inactive-tab > .default-tab:hover .tab-action {\n  visibility: visible;\n}\n.tab.active-tab > .dv-default-tab .tab-action {\n  visibility: visible;\n}\n.tab.inactive-tab > .dv-default-tab .tab-action {\n  visibility: visible;\n}\n.tab.inactive-tab > .dv-default-tab:hover .tab-action {\n  visibility: visible;\n}\n.tab .default-tab {\n  position: relative;\n  height: 100%;\n  display: flex;\n  min-width: 80px;\n  align-items: center;\n  padding: 0px 8px;\n  white-space: nowrap;\n  text-overflow: elipsis;\n}\n.tab .dv-default-tab {\n  font-size: 12px;\n  line-height: 2px;\n  position: relative;\n  height: 100%;\n  display: flex;\n  min-width: 80px;\n  align-items: center;\n  padding: 0px 8px;\n  white-space: nowrap;\n  text-overflow: elipsis;\n}\n.tab .default-tab .tab-content {\n  padding: 0px 8px;\n  flex-grow: 1;\n}\n.tab .dv-default-tab .tab-content {\n  padding: 0px 8px;\n  flex-grow: 1;\n}\n\n\n.tab-content {\n  font-size: 14px;\n  line-height: 300;\n  letter-spacing: -0.1px;\n}\n\n.tab .default-tab .action-container {\n  text-align: right;\n  display: flex;\n}\n.tab .default-tab .action-container .tab-list {\n  display: flex;\n  padding: 0px;\n  margin: 0px;\n  justify-content: flex-end;\n}\n.tab .default-tab .action-container .tab-list .tab-action {\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.tab .default-tab .action-container .tab-list .tab-action:hover {\n  border-radius: 2px;\n  background-color: var(--dv-icon-hover-background-color);\n}\n.tab .dv-default-tab .action-container {\n  text-align: right;\n  display: flex;\n}\n.tab .dv-default-tab .action-container .tab-list {\n  display: flex;\n  padding: 0px;\n  margin: 0px;\n  justify-content: flex-end;\n}\n.tab .dv-default-tab .action-container .tab-list .tab-action {\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.tab .dv-default-tab .action-container .tab-list .tab-action:hover {\n  border-radius: 2px;\n  background-color: var(--dv-icon-hover-background-color);\n}\n.tabs-and-actions-container {\n  display: flex;\n  background-color: var(--dv-tabs-and-actions-container-background-color);\n  flex-shrink: 0;\n  box-sizing: border-box;\n  height: var(--dv-tabs-and-actions-container-height);\n  font-size: var(--dv-tabs-and-actions-container-font-size);\n\n}\n.dv-tabs-and-actions-container {\n  display: flex;\n  background-color: var(--dv-tabs-and-actions-container-background-color);\n  flex-shrink: 0;\n  box-sizing: border-box;\n  height: var(--dv-tabs-and-actions-container-height);\n  font-size: var(--dv-tabs-and-actions-container-font-size);\n\n}\n.tabs-and-actions-container.hidden {\n  display: none;\n}\n\n.tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .tabs-container {\n  flex-grow: 1;\n}\n.tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .tabs-container .tab {\n  flex-grow: 1;\n}\n.tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .void-container {\n  flex-grow: 0;\n}\n\n.tabs-and-actions-container .void-container {\n  display: flex;\n  flex-grow: 1;\n  cursor: grab;\n}\n.tabs-and-actions-container .tabs-container {\n  display: flex;\n  overflow-x: overlay;\n  overflow-y: hidden;\n  scrollbar-width: thin;\n  /* Track */\n  /* Handle */\n}\n.tabs-and-actions-container .tabs-container::-webkit-scrollbar {\n  height: 5px;\n}\n.tabs-and-actions-container .tabs-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n.tabs-and-actions-container .tabs-container::-webkit-scrollbar-thumb {\n  background: var(--dv-tabs-container-scrollbar-color);\n}\n.tabs-and-actions-container .tabs-container .tab {\n  -webkit-user-drag: element;\n  outline: none;\n  min-width: 75px;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  margin-right: 5px;\n}\n/* .tabs-and-actions-container .tabs-container .tab::after {\n  content: \" \";\n  position: absolute;\n  top: 15%;\n  right: 0;\n  z-index: 5;\n  pointer-events: none;\n  background-color: var(--dv-tab-divider-color);\n  width: 1px;\n  height: 70%;\n} */\n\n.tabs-and-actions-container .tabs-container .tab::after {\n  display: none;\n}\n\n.tabs-and-actions-container .tabs-container .active-tab .default-tab::before {\n  content: \" \";\n  top: 15%;\n  left: 3%;\n  z-index: 5;\n  pointer-events: none;\n  height: 70%;\n  width: 12px;\n  padding-right: 2px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('/check.svg');\n}\n\n.tabs-and-actions-container .tabs-container .tab:not(:first-child)::before {\n  background-color: var(--bars-gray-low1);\n  height: 27px;\n  top: 9px;\n  left: -5px\n}\n\n/* .tabs-and-actions-container .tabs-container .active-tab .dv-default-tab::before {\n  content: \" \";\n  top: 15%;\n  left: 3%;\n  z-index: 5;\n  pointer-events: none;\n  height: 70%;\n  width: 12px;\n  padding-right: 2px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('/check.svg');\n} */\n\n\n.watermark {\n  display: flex;\n  width: 100%;\n}\n.watermark.has-actions .watermark-title .actions-container {\n  display: none;\n}\n.watermark .watermark-title {\n  height: 35px;\n  width: 100%;\n  display: flex;\n}\n.watermark .watermark-content {\n  flex-grow: 1;\n}\n.watermark .actions-container {\n  display: flex;\n  align-items: center;\n  padding: 0px 8px;\n}\n.watermark .actions-container .close-action {\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: var(--dv-activegroup-hiddenpanel-tab-color);\n}\n.watermark .actions-container .close-action:hover {\n  border-radius: 2px;\n  background-color: var(--dv-icon-hover-background-color);\n}\n\n@font-face {\n  font-family: \"Rubik\";\n  src: url(/fonts/Rubik.ttf);\n  font-style: normal; \n  font-weight: 400;\n}\n\n\n/* Стили для электрона */\n\n.window-controls {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  -webkit-app-region: drag;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar {\n  background-color: #00824A;\n  align-items: center;\n  border-bottom: none !important;\n  -webkit-app-region: drag;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-pre-actions-container {\n  max-width: -moz-min-content;\n  max-width: min-content;\n}\n\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container {\n  height: 35px;\n  align-self: flex-end;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container .dv-tab {\n  margin-right: 2px;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container .dv-tab::before {\n  display: none !important;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container .dv-tab {\n  border-bottom: 2px solid var(--bars-green-primary) !important;\n  border-bottom: none !important;\n  border-radius: 3px 3px 0 0;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-inactive-tab {\n  background-color: #E5E5E5 !important;\n  border: none !important;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container .dv-active-tab {\n  background-color: var(--dv-group-view-background-color) !important;\n  border-top: 2px solid var(--dv-group-view-background-color) !important;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-tabs-container {\n  border-radius: 3px 3px 0 0;\n}\n\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-void-container {\n  -webkit-app-region: drag;\n  height: 100%;\n}\n\n.dv-tabs-and-actions-container.tabs-and-actions-container-titlebar .dv-right-actions-container {\n  -webkit-app-region: drag;\n}\n\n\n.titlebar-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 45px;\n  height: 45px;\n  background: transparent;\n  border: none;\n  color: #fff;\n  -webkit-app-region: no-drag;\n}\n\n.titlebar-button:hover {\n  background: #006238;\n  color: #fff;\n}\n\n.titlebar-button.close {\n  margin: 0px\n}\n\n.titlebar-button.close:hover {\n  background: #e81123;\n  color: #fff;\n}\n\n.titlebar-button.settings {\n  margin: 0 10px 0 10px;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n}\n.titlebar-button.settings:hover {\n  border-radius: 50%;\n}\n\n.titlebar-button span {\n  font-size: 16px;\n  line-height: 1;\n}\n\n.menuButtonSettings {\n  color: #3A3A3A !important;\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  box-shadow: none !important;\n  height: 30px !important;\n  border-radius: 0 !important;\n  background-color: #fff !important;\n  text-transform: none !important;\n  font-family: 'Rubik', sans-serif !important;\n  justify-content: flex-start !important;\n  -webkit-app-region: no-drag;\n}\n.menuButtonSettings:hover {\n  background-color: #EFEFEF !important;\n}\n\n.menuButtonMenu {\n  color: #3A3A3A !important;\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  box-shadow: none !important;\n  width: 100% !important;\n  height: 30px !important;\n  border-radius: 0 !important;\n  background-color: #fff !important;\n  text-transform: none !important;\n  font-family: 'Rubik', sans-serif !important;\n  align-items: flex-start !important;\n}\n.menuButtonMenu:hover {\n  background-color: #EFEFEF !important;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = ".NotFoundPage-module_errorPageContainer__PGzIE {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: calc(100vh - var(--header-height) - var(--dv-tabs-and-actions-container-height) - 2px);\n}\n\n.NotFoundPage-module_errorCode__q-hOd {\n    font-weight: 500;\n    color: var(--bars-green-primary);\n    line-height: 0.8;\n    font-size: 180px;\n    @media(max-width: 500px)\n    {\n        font-size: 140px;\n    }\n    @media(max-width: 350px)\n    {\n        font-size: 100px;\n    }\n}\n\n.NotFoundPage-module_errorName__9hG40 {\n    font-weight: 500;\n    font-size: 52px;\n    @media(max-width: 650px)\n    {\n        font-size: 42px;\n    }\n    @media(max-width: 500px)\n    {\n        font-size: 36px;\n    }\n    @media(max-width: 350px)\n    {\n        font-size: 28px;\n    }     \n}\n\n.NotFoundPage-module_errorDescription__542cI {\n    margin: 0px 20px 0px 20px;\n    font-size: 22px;\n    @media(max-width: 500px)\n    {\n        font-size: 18px;\n    }\n}\n\n.NotFoundPage-module_link__Hx1Eb {\n    color: var(--bars-green-primary);\n    font-size: 22px;\n    cursor: pointer;\n    text-decoration: none;\n    @media(max-width: 500px)\n    {\n        font-size: 18px;        \n    }\n}";
var styles$9 = {"errorPageContainer":"NotFoundPage-module_errorPageContainer__PGzIE","errorCode":"NotFoundPage-module_errorCode__q-hOd","errorName":"NotFoundPage-module_errorName__9hG40","errorDescription":"NotFoundPage-module_errorDescription__542cI","link":"NotFoundPage-module_link__Hx1Eb"};
styleInject(css_248z$9);

function NotFoundPage() {
    return (jsxs("div", { className: styles$9.errorPageContainer, children: [jsx("div", { className: styles$9.errorCode, children: "404" }), jsx("div", { className: styles$9.errorName, children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" }), jsxs("div", { className: styles$9.errorDescription, children: ["\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u043D\u044E \u0441\u043B\u0435\u0432\u0430 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 ", jsx(Link, { className: styles$9.link, to: '/main', children: "\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443." })] })] }));
}

var css_248z$8 = ".MainPage-module_homeContainer__50Oiu {\n    vertical-align: middle;\n    text-align: center;\n    margin: auto;\n    padding-top: 10px;\n    font-size: 22px;\n}";
var styles$8 = {"homeContainer":"MainPage-module_homeContainer__50Oiu"};
styleInject(css_248z$8);

function MainPage() {
    return (jsxs("div", { className: styles$8.homeContainer, children: [jsx("p", { children: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 Bars!" }), jsx("p", { children: "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443, \u0432\u044B\u0431\u0440\u0430\u0432 \u0440\u0430\u0437\u0434\u0435\u043B \u0432 \u043C\u0435\u043D\u044E \u0441\u043B\u0435\u0432\u0430." })] }));
}

var css_248z$7 = ".InternalError-module_errorPageContainer__3ENbX {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    height: 100vh;\n    width: 100%;\n}\n\n.InternalError-module_errorPageContainer__3ENbX span {\n    color: var(--bars-green-primary);\n}\n\n.InternalError-module_errorCode__4WsFO {\n    font-weight: 500;\n    color: var(--bars-green-primary);\n    line-height: 0.8;\n    font-size: 180px;\n    @media(max-width: 500px)\n    {\n        font-size: 140px;\n    }\n    @media(max-width: 350px)\n    {\n        font-size: 100px;\n    }\n}\n\n.InternalError-module_errorName__Cc70D {\n    font-weight: 500;\n    font-size: 52px;\n    @media(max-width: 650px)\n    {\n        font-size: 42px;\n    }\n    @media(max-width: 500px)\n    {\n        font-size: 36px;\n    }\n    @media(max-width: 350px)\n    {\n        font-size: 28px;\n    }     \n}\n\n.InternalError-module_errorDescription__QlukB {\n    margin: 0px 20px 0px 20px;\n    font-size: 22px;\n    @media(max-width: 500px)\n    {\n        font-size: 18px;\n    }\n}\n\n.InternalError-module_link__ruL02 {\n    color: var(--bars-green-primary);\n    font-size: 22px;\n    cursor: pointer;\n    text-decoration: none;\n    @media(max-width: 500px)\n    {\n        font-size: 18px;        \n    }\n}";
var styles$7 = {"errorPageContainer":"InternalError-module_errorPageContainer__3ENbX","errorCode":"InternalError-module_errorCode__4WsFO","errorName":"InternalError-module_errorName__Cc70D","errorDescription":"InternalError-module_errorDescription__QlukB","link":"InternalError-module_link__ruL02"};
styleInject(css_248z$7);

function GetManyPageSupport(routes, pageType) {
    const mathPage = routes.find(v => v.component.typeName.match(pageType));
    if (mathPage)
        return mathPage.canDublicate ?? false;
    return false;
}
function GetPageTitle(routes, pageType) {
    const mathPage = routes.find(v => v.component.typeName.match(pageType));
    if (mathPage)
        return mathPage.name;
    switch (pageType) {
        case 'MainPage':
            return 'Главная страница';
        case 'DefaultPage':
            return 'Главная страница';
        case 'Account':
            return 'Аккаунт';
        case 'EditCenters':
            return 'Редактирование РЦ';
        case 'OrderReports':
            return 'Отчёты по заказам';
        case 'SecurityUsers':
            return 'Пользователи';
        case 'SecurityGroups':
            return 'Группы';
        case 'SecurityUserPermissions':
            return 'Права пользователей';
        case 'SecurityAudit':
            return 'Аудит';
        case 'AuthPage':
            return 'Аккаунт';
        case 'SecurityAccountInfo':
            return 'Информация об аккаунте';
        case 'Documents':
            return 'Документооборот';
        case 'Operations':
            return 'Операции';
        case 'CreateDocument':
            return 'Создание операции';
        case 'Organizations':
            return 'Справочник органзаций';
        case 'CreateOrganizations':
            return 'Создание органзации';
        case '404Error':
            return 'Страница не найдена';
        default:
            return 'Неизвестная вкладка';
    }
}
function GetSavedTabs() {
    const savedTabs = localStorage.getItem('SavedTabs');
    if (!savedTabs || savedTabs == '')
        return [];
    return JSON.parse(savedTabs ?? "[]");
}
function SaveTab(id, pageType, props, api, title, params) {
    const storageData = localStorage.getItem('SavedTabs');
    let jsonData = storageData == '' ? []
        : JSON.parse(storageData ?? "[]");
    // Сохраняем список ID записей до фильтрации
    const beforeIds = jsonData.map(x => x.id);
    if (pageType === 'MainPage') {
        jsonData = jsonData.filter(f => f.type !== 'MainPage');
    }
    else {
        jsonData = jsonData.filter(f => f.id !== id &&
            !(f.type === pageType && (f.props && f.props !== '' ? JSON.parse(f.props)?.canDublicate !== true : false)));
    }
    // Находим удаленные ID и удаляем соответствующие панели
    if (api) {
        const removedIds = beforeIds.filter(x => !jsonData.some(j => j.id === x));
        removedIds.forEach(removedId => {
            const panel = api.panels.find(p => p.id === removedId);
            if (panel) {
                api.removePanel(panel);
            }
        });
    }
    jsonData.push({ id: id, type: pageType, props: props ?? '' });
    localStorage.setItem('SavedTabs', JSON.stringify(jsonData));
    console.log('saved tab: ', jsonData);
    // Добавляем новую панель если её еще нет
    if (api && !api.panels.some(p => p.id === id)) {
        api.addPanel({
            id: id,
            component: pageType,
            title: title,
            params: params
        });
    }
}
function RemoveSavedTab(id) {
    const storageData = localStorage.getItem('SavedTabs');
    let jsonData = JSON.parse(storageData ?? "[]");
    jsonData = jsonData.filter(f => f.id != id);
    localStorage.setItem('SavedTabs', JSON.stringify(jsonData));
}
function ClearAllTabls() {
    localStorage.removeItem('SavedTabs');
}

function InternalErrorPage() {
    function CloseAllTabls() {
        ClearAllTabls();
        location.replace('/');
    }
    function EraseAllData() {
        localStorage.clear();
        location.replace('/');
    }
    return (jsxs("div", { className: styles$7.errorPageContainer, children: [jsx("div", { className: styles$7.errorCode, children: "500" }), jsx("div", { className: styles$7.errorName, children: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0448\u0438\u0431\u043A\u0430" }), jsxs("div", { className: styles$7.errorDescription, children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435:", jsxs("li", { children: ["\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 ", jsx(Link, { className: styles$7.link, to: '/main', children: "\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443." })] }), jsxs("li", { children: ["\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0436\u0451\u0441\u0442\u043A\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0435\u0439 ", jsx("span", { children: "Ctrl+Shift+R" })] }), jsx("li", { children: "\u041E\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u043A\u044D\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u0439\u0442 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E" }), jsx("li", { className: styles$7.link, onClick: CloseAllTabls, children: "\u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0432\u0441\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438" }), jsx("li", { className: styles$7.link, onClick: EraseAllData, children: "\u0423\u0434\u0430\u043B\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435" }), jsx("li", { children: "\u0415\u0441\u043B\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u043C\u043E\u0433\u043B\u043E, \u0442\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0438 \u043C\u044B \u043F\u0440\u0438\u0434\u0451\u043C \u043D\u0430 \u043F\u043E\u043C\u043E\u0449\u044C!" })] })] }));
}

async function LogIn(login, password) {
    return false;
}
async function LogInSecurity(login, password) {
    let serviceAddress = '';
    const sessionStorageCustomService = sessionStorage.getItem('customAuthService');
    if (sessionStorageCustomService)
        serviceAddress = sessionStorageCustomService;
    else {
        const allServices = EntryPointClient.GetServicesList();
        if (allServices) {
            const serviceInfo = allServices.find(v => v.serviceName.toLowerCase() == 'bars.security.service');
            if (serviceInfo) {
                serviceAddress = serviceInfo.address;
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    }
    const authService = new SecurityAuthService(serviceAddress);
    return await authService.LogIn(login, password, () => { });
}

var css_248z$6 = ".Login-module_mainContainer__XApIJ {\n    box-sizing: border-box;\n    @media(min-width: 900px){\n        display: flex;\n        align-items: center;\n    }\n    @media(max-width: 899px){\n        margin-top: 100px;\n        height: unset;\n        padding: unset;\n    }\n    width: 100%;\n    height: 100vh;\n    padding-left: 15px;\n}\n\n.Login-module_formContainer__74oWZ {\n    height: 100%;\n    width: 100%;\n    @media(min-width: 900px){  \n        height: 100%;\n        width: 35%;\n        min-width: 420px;\n        padding-bottom: 40px;\n    }\n\n    display: flex;\n    align-items: center;\n}\n\n.Login-module_imageContainer__O2yxC {\n    @media(max-width: 900px){\n        visibility: hidden;\n        width: 1px;\n        height: 1px;\n    }\n    height: 100%;\n    max-width: 65%;\n    width: 65%;\n    min-width: 50%;\n    box-shadow: -2px 0px 15px gray;\n    display: flex;\n    align-items: center;\n    margin-left: 15px;\n}\n\n.Login-module_cardIcon__KWibi {\n    padding-right: 10px;\n}\n\n.Login-module_loginForm__LmBbJ {\n    min-width: 360px;\n    max-width: 360px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: auto auto;\n    gap: 10px;\n    width: 100%;\n    padding-bottom: 20px;\n}\n\n.Login-module_loginForm__LmBbJ * {\n    box-sizing: border-box;\n}\n\n.Login-module_loginTopText__vVBgs {\n    font-size: 26px;\n    color: var(--bars-gray-high2);\n    font-weight: 400;\n    padding-top: 38px;\n    padding-bottom: 18px;\n    margin: 0;\n}\n\n.Login-module_loginBottomText__msd-H {\n    font-size: 20px;\n    color: var(--bars-black);\n    font-weight: 500;\n    text-align: center;\n}\n\n.Login-module_middleSection__VQS5a {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    font-size: 14px;\n    color: var(--bars-green-primary);\n    font-weight: 500;\n    text-align: right;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.Login-module_maxWidth__RJTSX {\n    width: 100% !important;\n}\n\n.Login-module_middleSection__VQS5a label input {\n    margin-right: 5px;\n}\n\n.Login-module_middleSection__VQS5a label {\n    color: var(--bars-gray-high2);\n    cursor: pointer;\n}\n\n.Login-module_middleSection__VQS5a span, .Login-module_eyeButton__bqqV- {\n    cursor: pointer;\n}\n\n.Login-module_loginLogo__79gdd {\n    width: 90%;\n}\n\n.Login-module_loginBigImage__AvQFk {\n    visibility: hidden;\n    max-height: 0px;\n    @media(min-width: 900px){\n        visibility: visible;\n        max-height: 800px;\n        min-width: 200px;\n        max-width: 800px;\n        margin: auto;\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n}\n\n.Login-module_loginButton__vxjNy {\n    width: 360px;\n}";
var styles$6 = {"mainContainer":"Login-module_mainContainer__XApIJ","formContainer":"Login-module_formContainer__74oWZ","imageContainer":"Login-module_imageContainer__O2yxC","cardIcon":"Login-module_cardIcon__KWibi","loginForm":"Login-module_loginForm__LmBbJ","loginTopText":"Login-module_loginTopText__vVBgs","loginBottomText":"Login-module_loginBottomText__msd-H","middleSection":"Login-module_middleSection__VQS5a","maxWidth":"Login-module_maxWidth__RJTSX","eyeButton":"Login-module_eyeButton__bqqV-","loginLogo":"Login-module_loginLogo__79gdd","loginBigImage":"Login-module_loginBigImage__AvQFk","loginButton":"Login-module_loginButton__vxjNy"};
styleInject(css_248z$6);

function CardIconSvg({ className, width, height, onClick }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "25", height: height ?? "21", viewBox: "0 0 25 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M22.4515 0.921387H2.72888C1.36925 0.921387 0.26355 2.04436 0.26355 3.42524V18.4484C0.26355 19.8292 1.36925 20.9522 2.72888 20.9522H22.4515C23.8112 20.9522 24.9169 19.8292 24.9169 18.4484V3.42524C24.9169 2.04436 23.8112 0.921387 22.4515 0.921387ZM8.5409 5.92909C9.9597 5.92909 11.0062 6.99198 11.0062 8.43294C11.0062 9.87391 9.9597 10.9368 8.5409 10.9368C7.1221 10.9368 6.07557 9.87391 6.07557 8.43294C6.07557 6.99198 7.12087 5.92909 8.5409 5.92909ZM13.1203 15.9445H3.96155V15.3624C3.96155 13.6435 6.02749 11.8757 8.5409 11.8757C11.0543 11.8757 13.1203 13.6435 13.1203 15.3624V15.9445ZM21.2189 14.6926H16.2882V12.1887H21.2189V14.6926ZM21.2189 9.68487H15.0555V7.18102H21.2189V9.68487Z", fill: "#00824A" }) }));
}
function EyeIconSvg({ className, width, height, onClick }) {
    return (jsxs("svg", { onClick: onClick, className: className, width: width ?? "16", height: height ?? "12", viewBox: "0 0 16 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6Z", fill: "#BCBCBC" }), jsx("path", { d: "M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5Z", fill: "#BCBCBC" })] }));
}

var css_248z$5 = ".ServerSelect-module_serverContainer__iVpyy {\n    position: absolute;\n    left: 10px;\n    bottom: 5px; \n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.ServerSelect-module_statusDot__rjuff {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n}\n\n.ServerSelect-module_serverString__G9Zp- {\n    display: flex;\n}\n\n.ServerSelect-module_serverSelect__qoZ2C {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.ServerSelect-module_dialogInput__7w-ae {\n    box-sizing: border-box;\n}\n\n.ServerSelect-module_customEntryPointCheckbox__RLh-b {\n    margin-top: 5px;\n}";
var styles$5 = {"serverContainer":"ServerSelect-module_serverContainer__iVpyy","statusDot":"ServerSelect-module_statusDot__rjuff","serverString":"ServerSelect-module_serverString__G9Zp-","serverSelect":"ServerSelect-module_serverSelect__qoZ2C","dialogInput":"ServerSelect-module_dialogInput__7w-ae","customEntryPointCheckbox":"ServerSelect-module_customEntryPointCheckbox__RLh-b"};
styleInject(css_248z$5);

function ServerSelect({ entryPointAddress, customEntryPointClient }) {
    let serverAddress = entryPointAddress ?? localStorage.getItem('configurationServer');
    const [serverStatus, setServerStatus] = useState('gray');
    const [dialogVisible, setDialogVisible] = useState(false);
    const [connectToCustom, setConnectToCustom] = useState(localStorage.getItem('customEntryPoint') == 'true');
    const newServerAddress = useRef(serverAddress ?? '');
    useEffect(() => {
        PingServer(serverAddress);
    }, []);
    useEffect(() => {
        localStorage.setItem('customEntryPoint', connectToCustom == true ? 'true' : 'false');
    }, [connectToCustom]);
    function PingServer(address) {
        if (address) {
            setServerStatus('gray');
            PingServerInternal(address);
        }
        else {
            setServerStatus('red');
        }
        async function PingServerInternal(address) {
            const client = (customEntryPointClient && connectToCustom)
                ? customEntryPointClient
                : new EntryPointClient(address);
            await client.OnServerAddressEntered(address);
            const allServices = await client.GetAllServices((msg) => {
                console.warn('Не удалось загрузить данные с EntryPoint: ' + msg);
                setServerStatus('red');
            });
            if (!allServices)
                return;
            if (allServices.success) {
                setServerStatus('green');
                EntryPointClient.SetServicesList(allServices.data);
            }
            else {
                console.warn('Ошибка при пролучении данных с EntryPoint: ' + allServices.message);
                setServerStatus('red');
            }
            return;
        }
    }
    const onChangeServer = async () => {
        if (!newServerAddress.current.toLowerCase().startsWith('http')) {
            newServerAddress.current = 'http://' + newServerAddress.current;
        }
        localStorage.setItem('configurationServer', newServerAddress.current);
        serverAddress = newServerAddress.current;
        setDialogVisible(false);
        PingServer(serverAddress);
    };
    const DialogChild = (jsxs("div", { style: { minWidth: 'min(350px, 70vw)' }, children: [jsx(BarsInput, { placeholder: '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430', className: styles$5.dialogInput, defaultValue: serverAddress ?? undefined, onChange: (t) => newServerAddress.current = t }), customEntryPointClient ?
                jsxs("div", { className: styles$5.customEntryPointCheckbox, children: [jsx(BarsCheckBox, { controlledState: connectToCustom, handleChange: (e) => setConnectToCustom(e.currentTarget.checked) }), "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043A \u0441\u043B\u0443\u0436\u0431\u0435"] }) : undefined] }));
    return (jsxs(Fragment, { children: [jsxs("div", { className: styles$5.serverContainer, children: [jsx("div", { className: styles$5.statusDot, style: { backgroundColor: serverStatus } }), "\u0421\u0435\u0440\u0432\u0435\u0440", jsx("div", { onClick: () => setDialogVisible(true), className: styles$5.serverSelect, children: serverAddress ?? 'не задан' })] }), jsx(BarsDialog, { onButtonClick: onChangeServer, buttonText: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C', children: DialogChild, dialogTitle: '\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430', isVisible: dialogVisible, onClose: () => setDialogVisible(false) })] }));
}

function LoginPage({ authService, entryPointAddress, customEntryPointClient, ipcRenderer }) {
    const [settingsAnchorEl, setSettingsAnchorEl] = React.useState(null);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [remember, setRemember] = React.useState('');
    const [passwordInputType, setPasswordInputType] = React.useState('password');
    const [isAuthorized, setIsAuthorized] = React.useState(false);
    const onSubmit = async () => {
        var loginResult = false;
        if (remember == 'on')
            loginResult = await LogInSecurity(login, password);
        else {
            if (authService) {
                loginResult = await authService.LogIn(login, password, () => { });
            }
            else {
                console.warn('auth service not set, use default...');
                loginResult = await LogIn();
            }
        }
        if (loginResult == true) {
            setIsAuthorized(true);
            location.reload();
        }
        else if (loginResult != null)
            console.warn('Неверный логин или пароль');
    };
    const onCardClick = async () => {
        console.warn('Вход по карте недоступен');
    };
    const onForgetClick = async () => {
        console.warn('Восстановление пароля недоступно, обратитесь в поддержку');
    };
    React.useEffect(() => {
        setIsAuthorized(localStorage.getItem('isLoggedIn') == 'true');
    });
    const BootstrapTooltip = styled(({ className, ...props }) => (jsx(Tooltip, { ...props, arrow: true, classes: { popper: className } })))(() => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: '#3A3A3A',
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#3A3A3A',
            marginTop: '0px !important',
        }
    }));
    function WindowControls() {
        return (jsxs("div", { style: { background: localStorage.getItem('isUsedDesktop') === 'true' ? '#00824A' : '#FFF' }, className: 'window-controls', children: [jsx(BootstrapTooltip, { sx: { marginTop: '5px !important' }, title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", children: jsx("button", { className: "titlebar-button settings", onClick: (e) => setSettingsAnchorEl(e.currentTarget), children: jsxs("svg", { width: "20", height: "20", viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", fill: "white", children: [jsx("title", {}), jsx("path", { d: "M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" }), jsx("path", { d: "M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" })] }) }) }), jsx("button", { className: "titlebar-button", onClick: () => ipcRenderer?.send('window-minimize'), children: jsx("svg", { width: "10", height: "1", viewBox: "0 0 10 1", children: jsx("path", { d: "M0 0h10v1H0z", fill: "currentColor" }) }) }), jsx("button", { className: "titlebar-button", onClick: () => ipcRenderer?.send('window-maximize'), children: jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", children: jsx("path", { d: "M0 0v10h10V0H0zm9 9H1V1h8v8z", fill: "currentColor" }) }) }), jsx("button", { className: "titlebar-button close", onClick: () => ipcRenderer.send('window-close'), children: jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", children: jsx("path", { d: "M9.1 1.1L8.9 0.9C8.7 0.7 8.3 0.7 8.1 0.9L5 4L1.9 0.9C1.7 0.7 1.3 0.7 1.1 0.9L0.9 1.1C0.7 1.3 0.7 1.7 0.9 1.9L4 5L0.9 8.1C0.7 8.3 0.7 8.7 0.9 8.9L1.1 9.1C1.3 9.3 1.7 9.3 1.9 9.1L5 6L8.1 9.1C8.3 9.3 8.7 9.3 8.9 9.1L9.1 8.9C9.3 8.7 9.3 8.3 9.1 8.1L6 5L9.1 1.9C9.3 1.7 9.3 1.3 9.1 1.1Z", fill: "currentColor" }) }) })] }));
    }
    return (jsxs(Fragment, { children: [localStorage.getItem('isUsedDesktop') === 'true' &&
                WindowControls(), jsxs("div", { className: styles$6.mainContainer, style: { height: localStorage.getItem('isUsedDesktop') === 'true' ? 'calc(100vh - 45px)' : '100vh' }, children: [isAuthorized ?
                        jsx("div", { className: styles$6.loginForm, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0411\u0430\u0440\u0441. \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440..." })
                        :
                            jsxs("form", { className: styles$6.loginForm, onSubmit: onSubmit, children: [jsx("img", { src: import.meta?.env?.isStandalone ? 'web/bars-logo.svg' : '/bars-logo.svg', className: styles$6.loginLogo }), jsx("p", { className: styles$6.loginTopText, children: "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443" }), jsx(BarsInput, { placeholder: '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F', onChange: e => setLogin(e) }), jsx(BarsInput, { placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C', onChange: e => setPassword(e), type: passwordInputType, icon: jsx(EyeIconSvg, { className: styles$6.eyeButton, onClick: () => passwordInputType == 'text' ? setPasswordInputType('password') : setPasswordInputType('text') }) }), jsxs("p", { className: styles$6.middleSection + ' ' + styles$6.maxWidth, children: [jsxs("label", { children: [jsx("input", { type: 'checkbox', name: 'remember', onChange: e => setRemember(e.target.value) }), "\u0412\u0445\u043E\u0434 \u0432 Bars.Security"] }), jsx("span", { onClick: onForgetClick, children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?" })] }), jsx(BarsButton, { className: styles$6.loginButton, text: '\u0412\u0445\u043E\u0434', variant: 'green', onClick: onSubmit }), jsx(BarsButton, { className: styles$6.loginButton, style: { borderColor: 'var(--bars-gray-mid2)', color: 'var(--bars-green-primary)', alignItems: 'center' }, text: '\u0412\u0445\u043E\u0434 \u043F\u043E \u043A\u0430\u0440\u0442\u0435', variant: 'white', onClick: onCardClick, iconPosition: 'start', icon: jsx(CardIconSvg, { className: styles$6.cardIcon }) })] }), jsx("div", { className: styles$6.imageContainer, children: jsx("img", { className: styles$6.loginBigImage, src: import.meta?.env?.isStandalone ? 'web/login-ad.png' : '/login-ad.png' }) }), jsx(ServerSelect, { entryPointAddress: entryPointAddress, customEntryPointClient: customEntryPointClient }), jsxs(Menu$1, { anchorEl: settingsAnchorEl, open: !!settingsAnchorEl, onClose: () => setSettingsAnchorEl(null), sx: {
                            '& .MuiMenu-paper': {
                                position: 'absolute !important',
                                right: '155px !important',
                                left: 'auto !important',
                                top: '35px !important',
                                marginTop: '10px',
                                boxShadow: "none",
                                border: "1px solid #C4C4C4"
                            },
                        }, MenuListProps: { sx: { display: 'flex', flexDirection: 'column' } }, children: [jsx(Button, { color: 'success', className: 'menuButtonSettings', onClick: () => {
                                    window.location.reload();
                                }, children: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C" }), jsx(Button, { color: 'success', className: 'menuButtonSettings', children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 2" })] })] })] }));
}

var css_248z$4 = ".Header-module_header__wTqSv {\n    background-color: var(--bars-white);\n    height: var(--header-height);\n    box-sizing: border-box;\n    width: auto;\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 10px;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    /* border-bottom: 2px solid var(--bars-gray-low2); */\n}\n\n.Header-module_header__wTqSv * {\n    box-sizing: content-box;\n    font-family: Rubik, system-ui, Arial, sans-serif;\n}\n\n.Header-module_headerElements__cMjtg {\n    display: flex;\n    gap: 10px;\n}\n\n.Header-module_headerLink__MRsvJ {\n    min-width: 42px;\n    max-width: 42px;\n    min-height: 42px;\n    max-height: 42px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-app-region: no-drag;\n}\n\n.Header-module_headerLink__MRsvJ img {\n    min-width: 26px;\n    min-height: 26px;\n}\n\n.Header-module_headerElements__cMjtg :hover {\n    color: #000000;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n\n.Header-module_headerElements__cMjtg :visited {\n    color: #8F8E8E; \n    cursor: pointer;\n} \n\n.Header-module_headerImg__m-5TH {\n    height: 35px;\n    width: 35px;\n    margin-top: auto;\n    margin-bottom: auto;\n    border-radius: 50%;\n    background-color: var(--bars-gray-low2);\n    -webkit-app-region: no-drag;\n}\n\n.Header-module_relativeContainer__K7fK7 {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 100%;\n}\n\n.Header-module_counter__B9KRU {\n    color: var(--bars-white);\n    background-color: var(--bars-green-primary);\n    border-radius: 50%;\n    font-size:xx-small;\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    left: 60%;\n    bottom: 60%;\n    z-index: 100;\n  }";
var styles$4 = {"header":"Header-module_header__wTqSv","headerElements":"Header-module_headerElements__cMjtg","headerLink":"Header-module_headerLink__MRsvJ","headerImg":"Header-module_headerImg__m-5TH","relativeContainer":"Header-module_relativeContainer__K7fK7","counter":"Header-module_counter__B9KRU"};
styleInject(css_248z$4);

var css_248z$3 = ".LoggedInfo-module_LoggedContainer__ubKtM {\n    width: 290px;\n    margin: 5px 10px 10px 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.LoggedInfo-module_topSection__iav3w {\n    box-sizing: border-box;\n    width: 290px;\n    height: 75px;\n    border-radius: 5px;\n    background: var(--bars-backgroud) no-repeat right;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: row;\n    gap: 15px;\n    padding: 0px 20px 0px 20px;\n    letter-spacing: 1px;\n    overflow: hidden;  \n}\n\n.LoggedInfo-module_userImg__f-aN- {\n    height: 35px;\n    background-color: var(--bars-gray-low2);\n    border-radius: 50%;\n}\n\n.LoggedInfo-module_background__7Oi-F {\n    position: absolute;\n    right: 5px;\n    content: '';\n    width: 290px;\n    height: 75px;\n}\n\n.LoggedInfo-module_textSection__5ilbg {\n    max-width: 290px;\n    height: 20px;\n    padding: 0px 5px 0px 5px;\n    display: flex;\n    gap: 10px;\n    letter-spacing: 1px;\n    font-size: 14px;\n    margin-top: 10px;\n    cursor: pointer;  \n}";
var styles$3 = {"LoggedContainer":"LoggedInfo-module_LoggedContainer__ubKtM","topSection":"LoggedInfo-module_topSection__iav3w","userImg":"LoggedInfo-module_userImg__f-aN-","background":"LoggedInfo-module_background__7Oi-F","textSection":"LoggedInfo-module_textSection__5ilbg"};
styleInject(css_248z$3);

function BellIconSvg({ className, width, height, onClick }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "14", height: height ?? "14", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M17.2307 16.2625L17.1583 16.3315L17.2307 16.2625C15.6802 14.6384 14.8264 12.5049 14.8264 10.2546V8.47851C14.8264 5.8685 13.1164 3.65253 10.7625 2.90056V2.16992C10.7625 1.19432 9.97237 0.4 9.00002 0.4C8.02767 0.4 7.23752 1.19432 7.23752 2.16992V2.90056C4.88364 3.65253 3.17365 5.86847 3.17365 8.47851V10.2546C3.17365 12.505 2.31983 14.6384 0.76938 16.2625C0.588072 16.4524 0.537214 16.7324 0.639906 16.9743C0.742627 17.2162 0.979353 17.3734 1.24171 17.3734H6.20439C6.50102 18.6476 7.64138 19.6 9.00002 19.6C10.3587 19.6 11.499 18.6476 11.7956 17.3734H16.7583C17.0207 17.3734 17.2574 17.2162 17.3601 16.9743C17.4628 16.7325 17.4119 16.4524 17.2307 16.2625ZM8.54585 2.16992C8.54585 1.9178 8.7501 1.71328 9.00002 1.71328C9.24994 1.71328 9.45418 1.9178 9.45418 2.16992V2.64444C9.30435 2.63271 9.1529 2.62656 9.00002 2.62656C8.84713 2.62656 8.69568 2.63271 8.54585 2.64444V2.16992ZM9.00002 18.2867C8.3722 18.2867 7.82924 17.9124 7.58121 17.3734H10.4188C10.1708 17.9124 9.62783 18.2867 9.00002 18.2867ZM2.63253 16.0602C3.83318 14.3751 4.48198 12.3589 4.48198 10.2546V8.47851C4.48198 5.97556 6.50928 3.93984 9.00002 3.93984C11.4908 3.93984 13.5181 5.97556 13.5181 8.47851V10.2546C13.5181 12.3589 14.1669 14.3751 15.3675 16.0602H2.63253Z", fill: localStorage.getItem('isUsedDesktop') == 'true' ? "#fff" : "#A4A9B8", stroke: "#A4A9B8", strokeWidth: "0.2" }) }));
}
function LoggedIconSvg({ className, width, height, onClick }) {
    return (jsx("svg", { onClick: onClick, className: className, version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: width ?? "35", height: height ?? "35", viewBox: "0 0 1000 1000", enableBackground: "new 0 0 1000 1000", children: jsx("g", { children: jsx("path", { d: "M71.2,928.1V866c0-24.3,18.3-32,25.5-35.3l268.7-126.8c19.3-8.8,32.6-27.1,35.1-48.1c2.6-21-5.9-41.9-22.4-55.2c-63.6-51-93.2-163.2-93.2-223V224.8c0-63.9,111.3-152.8,214.3-152.8c103.9,0,214.1,87.5,214.1,152.8v152.9c0,58.8-24.5,171.4-90.1,223.1c-16.7,13.2-25.4,34.1-22.9,55.3c2.5,21.2,15.9,39.5,35.2,48.4l155.1,73.9l36.5-51.7l-166-77.8c84.8-66.7,113.5-197.8,113.5-271.2V224.8c0-101.3-140.2-214-275.3-214c-135.1,0-275.5,112.8-275.5,214v152.9c0,66.8,30.5,202,116.1,270.7L71.1,775.1c0,0-61.1,27.3-61.1,61.2v91.8c0,33.8,27.4,61.2,61.1,61.2h611.6l-49.7-61.2L71.2,928.1z M978.3,702.2c-13.3-10.4-32.5-8.1-43,5.2L804.5,907l-81.3-81.3c-12-12-31.3-12-43.3,0c-12,11.9-12,31.3,0,43.3L788,977.1c12,11.9,31.3,11.9,43.3,0c2.9-2.9,5.1-6.3,6.6-9.9l145.6-222.1C993.9,731.9,991.6,712.6,978.3,702.2z" }) }) }));
}
function NotLoggedIconSvg({ className, width, height, onClick }) {
    return (jsx("svg", { onClick: onClick, className: className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 122.88 101.94", width: width ?? "35", height: height ?? "35", children: jsx("path", { d: "M96.58,79.83,85.4,95.56l1,6.38,6.33-1L92,96.11l5.24-.85L96.38,90l5-.82.68-5a14.88,14.88,0,0,0,8.54,1.12A14,14,0,1,0,94,73.87a13.4,13.4,0,0,0,2.54,6ZM40.06,54.9c.28-2.41-6.86-9.52-8.16-13.92-2.79-4.46-3.79-11.52-.74-16.22,1.22-1.87.69-3,.69-5.57,0-25.58,44.83-25.59,44.83,0,0,3.24-.75,3.5,1,6,2.94,4.25,1.42,11.78-1,15.74-1.59,4.63-9.09,11.29-8.56,13.92.44,13.14-28.11,12.69-28,0ZM0,90c1.21-15.69-1.87-11.87,11.27-16.8,6.56-2.46,14.94-5.58,21-9.33L43.51,90ZM56.38,77.61H58A2.59,2.59,0,0,0,60.53,75V70.84A2.59,2.59,0,0,0,58,68.26H48.61A2.59,2.59,0,0,0,46,70.84V75a2.59,2.59,0,0,0,2.58,2.58H50.2L47.15,90H59.32L56.38,77.61ZM74.83,62.55a59.8,59.8,0,0,0,8.54,4.38,24.43,24.43,0,0,0,.56,11.78l-7.46,10.5c-.19.27-.37.54-.54.82H63.19L74.83,62.55Zm34.88,4.22a2.59,2.59,0,1,0,3,2.15,2.6,2.6,0,0,0-3-2.15Z" }) }));
}
function LogoutButtonSvg({ className, width, height, onClick }) {
    return (jsx("svg", { onClick: onClick, className: className, width: width ?? "20", height: height ?? "20", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M7.42857 1.31909H1V10.0691C1 10.4006 1.13546 10.7186 1.37658 10.953C1.6177 11.1874 1.94472 11.3191 2.28571 11.3191H7.42857M9 8.06909L11 6.31909M11 6.31909L9 4.31909M11 6.31909H5", stroke: "#A4A9B8", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
function HelpButtonSvg({ className, width, height, onClick }) {
    return (jsxs("svg", { onClick: onClick, className: className, width: width ?? "20", height: height ?? "20", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxs("g", { clipPath: "url(#clip0_72_2364)", children: [jsx("path", { d: "M7.00092 11.0332C7.37845 11.0332 7.68451 10.7271 7.68451 10.3496C7.68451 9.97207 7.37845 9.66602 7.00092 9.66602C6.62338 9.66602 6.31732 9.97207 6.31732 10.3496C6.31732 10.7271 6.62338 11.0332 7.00092 11.0332Z", fill: "#A4A9B8" }), jsx("path", { d: "M7 0C3.1313 0 0 3.13078 0 7C0 10.8687 3.13078 14 7 14C10.8687 14 14 10.8692 14 7C14 3.1313 10.8692 0 7 0ZM7 12.9062C3.73579 12.9062 1.09375 10.2647 1.09375 7C1.09375 3.73579 3.73535 1.09375 7 1.09375C10.2642 1.09375 12.9062 3.73535 12.9062 7C12.9062 10.2642 10.2647 12.9062 7 12.9062Z", fill: "#A4A9B8" }), jsx("path", { d: "M7 3.51367C5.79381 3.51367 4.8125 4.49498 4.8125 5.70117C4.8125 6.00321 5.05734 6.24805 5.35938 6.24805C5.66141 6.24805 5.90625 6.00321 5.90625 5.70117C5.90625 5.09808 6.39691 4.60742 7 4.60742C7.60309 4.60742 8.09375 5.09808 8.09375 5.70117C8.09375 6.30427 7.60309 6.79492 7 6.79492C6.69796 6.79492 6.45312 7.03976 6.45312 7.3418V8.70898C6.45312 9.01102 6.69796 9.25586 7 9.25586C7.30204 9.25586 7.54688 9.01102 7.54688 8.70898V7.81946C8.4893 7.57602 9.1875 6.71861 9.1875 5.70117C9.1875 4.49498 8.20619 3.51367 7 3.51367Z", fill: "#A4A9B8" })] }), jsx("defs", { children: jsx("clipPath", { id: "clip0_72_2364", children: jsx("rect", { width: width ?? "20", height: height ?? "20", fill: "white" }) }) })] }));
}
function BarsSpotsSvg({ className, width, height, onClick }) {
    return (jsxs("svg", { onClick: onClick, className: className, width: width ?? "291", height: height ?? 75, viewBox: "0 0 291 75", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("mask", { id: "mask0_2885_561", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "291", height: "75", children: jsx("rect", { width: "291", height: "75", rx: "5", fill: "#EFEFEF", fillOpacity: "0.8" }) }), jsx("g", { mask: "url(#mask0_2885_561)", children: jsxs("g", { opacity: "0.5", children: [jsx("mask", { id: "mask1_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask1_2885_561)", children: jsx("path", { d: "M186.518 92.1147L178.139 79.7002L182.484 65.1132C182.794 63.9752 183.932 63.3545 185.07 63.7683L199.45 68.2168C200.071 68.4237 200.485 68.8375 200.692 69.3548L208.14 86.4248C208.658 87.6662 207.933 89.1146 206.485 89.3215L186.518 92.1147Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask2_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask2_2885_561)", children: jsx("path", { d: "M256.557 91.9079L247.039 73.9068C246.729 73.2861 246.729 72.5619 247.143 71.9412L263.695 48.2502C264.213 47.526 265.04 47.3191 265.868 47.526L286.972 55.0782L287.386 83.4246L256.557 91.9079Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask3_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask3_2885_561)", children: jsx("path", { d: "M269.075 -16.2017L284.8 -24.1677L284.283 -5.95978L271.04 -0.993977C269.385 -0.373251 268.144 -1.30434 268.247 -3.06306L269.075 -16.2017Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask4_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask4_2885_561)", children: jsx("path", { d: "M165.931 -3.37343L179.07 -0.476717C180.311 -0.166353 181.449 -0.890532 181.656 -2.13198L183.518 -14.3396L162 -27.4783L165.931 -3.37343Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask5_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask5_2885_561)", children: jsx("path", { d: "M269.592 29.5251C268.454 30.7666 268.661 32.6287 270.006 33.6633L286.766 45.8709C288.524 47.6296 291.421 46.9054 292.145 44.526L297.008 28.8009C297.214 28.1802 297.214 27.5595 297.008 26.9387L292.456 11.1103C291.731 8.42044 288.214 7.90317 286.662 10.1792L269.592 29.5251Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask6_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.1479V0.0405254V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373293C224.59 -0.166384 225.21 -0.166384 225.728 -0.373293L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.1479C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask6_2885_561)", children: jsx("path", { d: "M205.554 1.90269L212.899 3.97178C214.141 4.28214 215.486 4.07523 216.52 3.2476L234.004 -11.1325C235.97 -12.6844 235.97 -15.6845 234.004 -17.2363L217.141 -31.0992C214.968 -32.8579 211.658 -31.9268 210.83 -29.237L202.761 -3.06311C202.14 -0.890574 203.382 1.38542 205.554 1.90269Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }) }), jsx("mask", { id: "mask7_2885_561", maskUnits: "userSpaceOnUse", x: "165", y: "-22", width: "120", height: "128", children: jsx("path", { d: "M283.765 70.9067L225.831 104.943C225.314 105.253 224.59 105.253 223.969 104.943L166.035 70.9067C165.414 70.4929 165 69.8721 165 69.148V0.0405273V-20.34C165 -21.478 166.241 -22.3056 167.379 -21.8918L224.072 -0.373291C224.59 -0.166382 225.21 -0.166382 225.728 -0.373291L282.421 -21.7883C283.559 -22.2021 284.8 -21.478 284.8 -20.2365V69.148C284.8 69.7687 284.386 70.4929 283.765 70.9067Z", fill: "white" }) }), jsx("g", { mask: "url(#mask7_2885_561)", children: jsx("path", { d: "M222.003 -10.5117C220.658 -9.99441 220.244 -8.33915 221.072 -7.3046L229.555 3.14427C230.176 3.86845 231.211 4.17882 232.245 3.97191L240.625 1.79937C241.556 1.59246 242.28 0.868282 242.487 -0.0628052L245.901 -15.6844C246.211 -17.2362 244.66 -18.5811 243.211 -18.0638L222.003 -10.5117Z", fill: "#ACB0B8" }) }), jsx("path", { d: "M171.724 46.5949L198.209 14.2137C198.519 13.7999 199.036 13.4895 199.554 13.4895C212.382 11.5239 223.245 9.86864 233.073 8.42028C236.383 8.00646 241.246 7.17883 245.487 3.45447C248.074 1.28193 251.591 -8.54622 251.591 -8.54622L262.867 -12.7878L258.109 19.8002C258.005 20.421 257.591 21.0417 256.971 21.3521L240.728 29.5249C238.866 30.456 237.521 32.1113 236.797 34.0769L231.004 51.6642C230.797 52.2849 230.383 52.6987 229.762 52.9056L206.692 61.6992C206.278 61.9061 205.761 61.9061 205.243 61.6992L172.552 49.9054C171.207 49.3882 170.793 47.7329 171.724 46.5949Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M251.488 48.4571C252.419 47.0087 251.281 45.1465 249.522 45.25L242.28 45.8707C241.246 45.9742 240.418 46.8018 240.418 47.9398L238.866 58.1818C238.556 60.3543 241.349 61.4923 242.591 59.6301L251.488 48.4571Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M273.213 10.9032L276.317 7.2823C276.938 6.55812 276.213 5.42013 275.282 5.62704L270.524 6.66158C270.11 6.76503 269.903 7.07539 269.799 7.38576L269.075 9.86866C268.868 10.4894 269.386 11.1101 270.006 11.2136L272.386 11.317C272.696 11.317 273.006 11.1101 273.213 10.9032Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M250.971 37.9047L258.626 42.974C259.454 43.4912 260.488 42.6636 260.178 41.7325L257.074 32.9389C256.971 32.6285 256.661 32.3182 256.247 32.2147L251.385 31.4905C250.764 31.3871 250.143 31.9044 250.143 32.5251L250.453 37.0771C250.557 37.4909 250.764 37.8012 250.971 37.9047Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M189.312 1.59234L194.485 9.1445C195.002 9.97213 196.347 9.55831 196.347 8.62723L196.864 -0.683655C196.864 -1.09747 196.657 -1.40783 196.347 -1.61474L192.105 -4.09764C191.588 -4.40801 190.76 -4.2011 190.553 -3.58037L189.105 0.661249C189.105 0.971611 189.105 1.28198 189.312 1.59234Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M185.381 14.1104L184.243 18.7659C184.036 19.6969 185.174 20.4211 185.898 19.8004L189.622 16.6968C189.932 16.4899 190.036 16.076 190.036 15.6622L189.519 13.1793C189.415 12.5586 188.691 12.1448 188.07 12.4552L185.898 13.3862C185.691 13.5932 185.484 13.8001 185.381 14.1104Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" }), jsx("path", { d: "M233.486 69.2515L238.038 67.9066C238.97 67.5962 239.073 66.3548 238.142 65.941L233.59 64.1822C233.28 64.0788 232.866 64.0788 232.555 64.3891L230.59 66.0444C230.073 66.4582 230.072 67.2859 230.693 67.6997L232.555 69.148C232.762 69.355 233.176 69.3549 233.486 69.2515Z", fill: "#ACB0B8", stroke: "#ACB0B8", strokeWidth: "3", strokeMiterlimit: "10" })] }) })] }));
}

function LoggedInfo({ authService }) {
    const onLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        if (authService)
            console.info("Вышел из аккаунта");
        else
            console.info("Вы не вошли в аккаунт");
        location.reload();
    };
    return (jsxs("div", { className: styles$3.LoggedContainer, children: [jsxs("div", { className: styles$3.topSection, children: [jsx(BarsSpotsSvg, { className: styles$3.background }), jsx(LoggedIconSvg, { className: styles$3.userImg }), jsx("div", { children: localStorage.getItem('login') ?? 'Неизвестное имя' }), jsx("div", { className: styles$3.background })] }), jsxs("div", { className: styles$3.textSection, children: [jsx(HelpButtonSvg, {}), "\u041F\u043E\u043C\u043E\u0449\u044C"] }), jsxs("div", { className: styles$3.textSection, onClick: () => { onLogout(); }, children: [jsx(LogoutButtonSvg, {}), "\u0412\u044B\u0445\u043E\u0434"] })] }));
}

function Header({ authService }) {
    const [logged, setLogged] = React.useState(localStorage.getItem("isLoggedIn"));
    const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
    React.useEffect(() => {
        setLogged(localStorage.getItem('isLoggedIn'));
    }, [localStorage.getItem('isLoggedIn')]);
    const onUserClick = (anchor) => {
        setMenuAnchorEl(anchor);
    };
    return (jsxs("div", { className: styles$4.header, style: { backgroundColor: localStorage.getItem('isUsedDesktop') == 'true' ? '#00824A' : 'var(--bars-white)' }, children: [jsxs("span", { className: styles$4.headerElements, children: [jsx("span", { className: styles$4.headerLink, children: jsx("div", { className: styles$4.relativeContainer, children: jsx(BellIconSvg, { width: 26, height: 26 }) }) }), logged == 'true' ? jsx(LoggedIconSvg, { className: styles$4.headerImg, onClick: (e) => onUserClick(e.currentTarget) })
                        : jsx(NotLoggedIconSvg, { className: styles$4.headerImg })] }), jsx(BarsMenu, { anchorElement: menuAnchorEl, setAnchorElement: setMenuAnchorEl, items: null, children: jsx(LoggedInfo, { authService: authService }) })] }));
}

var css_248z$2 = ".Menu-module_menu__GsIVq {\n    background-color: var(--bars-green-primary);\n    height: 100vh;\n    min-width: var(--menu-width);\n    max-width: var(--menu-width);\n    color: var(--bars-white);\n    margin: 0;\n    z-index: 100;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    overflow-y: auto;\n    overflow-x: hidden;\n    scrollbar-width: thin;\n    scrollbar-color: var(--bars-green-secondary) var(--bars-green-primary);\n\n}\n\n.Menu-module_menu__GsIVq::-webkit-scrollbar {\n    width: 7px;\n}\n\n.Menu-module_menu__GsIVq::-webkit-scrollbar-thumb {\n    background-color: var(--bars-green-secondary);\n    border-radius: 5px;\n}\n\n.Menu-module_menu__GsIVq * {\n    box-sizing: content-box;\n    font-family: Rubik, system-ui, Arial, sans-serif;\n}\n\n.Menu-module_content__ciT7S {\n    position: absolute;\n    top: 0px;\n    width: calc(100% - var(--menu-width));\n}\n\n.Menu-module_expandedMenuContent__jURy3 {\n    position: absolute;\n    top: 0px;\n    width: calc(100% - var(--large-menu-width));\n\n    @media (max-width: 800px) {\n        filter: brightness(40%)\n    }\n}\n\n.Menu-module_buttonsGroupContainer__p-PLD {\n    margin-bottom: 50px;\n}\n\n.Menu-module_buttonsGroupContainer__p-PLD:last-of-type {\n    margin-bottom: 0px;\n}\n\n.Menu-module_buttonsGroupContainer__p-PLD .Menu-module_menuSectionLabel__ZpsUj {\n    margin-left: var(--menu-width);\n    padding: 10px 0 10px 30px;\n    font-size: 14px;\n    color: var(--bars-gray-mid1);\n    border-top: 1px solid #F2F3F6;\n    border-bottom: 1px solid #F2F3F6;\n    margin-bottom: 0px;\n    margin-top: 0px;\n}\n\n.Menu-module_menuLogoContainer__eDvan {\n    display: flex;\n    justify-content: center;\n    padding: 20px 0px 30px 0px;\n    cursor: pointer;\n}\n\n.Menu-module_mainContainer__RjnqB {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    width: 100%;\n    position: absolute;\n}\n\n.Menu-module_contentContainer__iCtih {\n    /* @media (max-width: 800px) {\n        position: absolute;\n        left: var(--menu-width);\n        min-width: 100% !important;\n        max-width: 100% !important;\n    } */\n}\n\n.Menu-module_menuItem__jIsDx {\n    text-decoration: none;\n    cursor: pointer;\n    color: var(--bars-black);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 8px 2px;\n}\n\n.Menu-module_menuTextItem__NrHc5 {\n    text-align: center;\n    margin: 0;\n    font-size: 12px;\n    font-weight: 300;\n    cursor: pointer;\n    display: flex;\n    box-sizing: border-box;\n    text-decoration: none;\n    color: var(--bars-white);\n}\n\n.Menu-module_menuItem__jIsDx:hover, .Menu-module_menuLogoContainer__eDvan:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n\n.Menu-module_menuItem__jIsDx:hover .Menu-module_itemIcon__g-rla {\n    color: var(--bars-green-secondary);\n}\n\n.Menu-module_menuItem__jIsDx:hover p {\n  color: var(--bars-green-secondary);\n}\n\n.Menu-module_itemIcon__g-rla {\n    color: var(--bars-white);\n    height: 30px;\n    /* width: 30px; */\n    margin: 0px 0px 10px 0px;\n}\n\n.Menu-module_collapsedMenuItem__gAxz8:hover::before {\n    content: attr(customTitle);\n    position: absolute;\n    left: calc(var(--menu-width) + 5px);\n    font-size: 12px;\n    line-height: 2;\n    text-indent: 7px;\n    border-radius: 5px;\n    color: var(--bars-gray-high2);\n    background-color: var(--bars-green-secondary);\n}";
var styles$2 = {"menu":"Menu-module_menu__GsIVq","content":"Menu-module_content__ciT7S","expandedMenuContent":"Menu-module_expandedMenuContent__jURy3","buttonsGroupContainer":"Menu-module_buttonsGroupContainer__p-PLD","menuSectionLabel":"Menu-module_menuSectionLabel__ZpsUj","menuLogoContainer":"Menu-module_menuLogoContainer__eDvan","mainContainer":"Menu-module_mainContainer__RjnqB","contentContainer":"Menu-module_contentContainer__iCtih","menuItem":"Menu-module_menuItem__jIsDx","menuTextItem":"Menu-module_menuTextItem__NrHc5","itemIcon":"Menu-module_itemIcon__g-rla","collapsedMenuItem":"Menu-module_collapsedMenuItem__gAxz8"};
styleInject(css_248z$2);

var css_248z$1 = ".AdditionalMenu-module_additionalMenu__kX-k2 {\n    position: absolute;\n    height: 100vh;\n    min-width: calc(var(--large-menu-width) + var(--menu-width) + 100px);\n    max-width: calc(var(--large-menu-width) + var(--menu-width) + 100px);\n    background-color: var(--bars-white);\n    border-right: 2px solid var(--bars-gray-low1);\n    z-index: 101;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    display: block;\n    color: var(--bars-gray-high2);\n}\n\n.AdditionalMenu-module_additionalMenuWithBlackout__pHlKQ {\n    z-index: 101;\n    display: flex; \n}\n\n.AdditionalMenu-module_Blackout__TVGLF {\n    content: '';\n    width: 100%;\n    height: 100vh;\n    background-color: black;\n    opacity: 0.4;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    display: block;\n    z-index: 100;\n    cursor: pointer; \n}\n\n.AdditionalMenu-module_additionalMenu__kX-k2 p {\n    margin: 0;\n}\n\n.AdditionalMenu-module_additionalMenu__kX-k2 * {\n    box-sizing: content-box;\n}\n\n.AdditionalMenu-module_collapseBtnSection__VlCGE {\n    border-bottom: 2px solid var(--bars-gray-low1);\n    padding: 30px 0px 25px 25px;\n    display: flex;\n    cursor: pointer;\n}\n\n.AdditionalMenu-module_collapseBtn__BseGh {\n    font-weight: 300;\n    font-size: 14px;\n    width: 100%;\n    display: flex;\n    color: var(--bars-gray-high2);\n}\n\n.AdditionalMenu-module_section__-5uRI {\n    font-size: 14px;\n    font-weight: 400;\n    padding: 25px 0px 0px 0px;\n}\n\n.AdditionalMenu-module_sectionHeader__iYFZe {\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 1px;\n    padding-top: 8px;\n    padding-bottom: 9px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.AdditionalMenu-module_section__-5uRI .AdditionalMenu-module_sectionHeader__iYFZe {\n    margin-left: 15px;\n    margin-right: 22px;\n}\n\n.AdditionalMenu-module_additionalMenu__kX-k2 .AdditionalMenu-module_sectionItem__8t41O:hover {\n    padding-left: 30px;\n    border-right: 2px solid var(--bars-green-primary);\n    color: var(--bars-green-primary);\n}\n\n.AdditionalMenu-module_additionalMenu__kX-k2 .AdditionalMenu-module_sectionItem__8t41O {\n    padding: 10px 15px 10px 15px;\n    padding-left: 25px;\n    width: unset;\n}\n\n.AdditionalMenu-module_main__nmAoI {\n    display: flex;\n    width: 100px;\n    height: 100px;\n}\n\n.AdditionalMenu-module_secImg__5g0JB {\n    background-image: url(/reports.svg);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.AdditionalMenu-module_main__nmAoI:hover .AdditionalMenu-module_secImg__5g0JB {\n    background-image: url(/loyalty.svg);\n}\n\n.AdditionalMenu-module_main__nmAoI:hover .AdditionalMenu-module_secText__Xcpz1 {\n    background-color: red;\n}\n\n.AdditionalMenu-module_main__nmAoI:hover:nth-child(1) {\n    background-color: gray;\n}";
var styles$1 = {"additionalMenu":"AdditionalMenu-module_additionalMenu__kX-k2","additionalMenuWithBlackout":"AdditionalMenu-module_additionalMenuWithBlackout__pHlKQ","Blackout":"AdditionalMenu-module_Blackout__TVGLF","collapseBtnSection":"AdditionalMenu-module_collapseBtnSection__VlCGE","collapseBtn":"AdditionalMenu-module_collapseBtn__BseGh","section":"AdditionalMenu-module_section__-5uRI","sectionHeader":"AdditionalMenu-module_sectionHeader__iYFZe","sectionItem":"AdditionalMenu-module_sectionItem__8t41O","main":"AdditionalMenu-module_main__nmAoI","secImg":"AdditionalMenu-module_secImg__5g0JB","secText":"AdditionalMenu-module_secText__Xcpz1"};
styleInject(css_248z$1);

function LongArrow({ className, width, height, onClick }) {
    return (jsx("svg", { className: className, onClick: onClick, width: width ?? "12", height: height ?? "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4C12 3.88214 11.9548 3.76911 11.8745 3.68578C11.7941 3.60244 11.6851 3.55562 11.5715 3.55562H1.46381L4.16107 0.759566C4.24154 0.676123 4.28675 0.56295 4.28675 0.444943C4.28675 0.326937 4.24154 0.213764 4.16107 0.130321C4.0806 0.0468777 3.97146 2.78032e-09 3.85766 0C3.74386 -2.78032e-09 3.63472 0.0468777 3.55425 0.130321L0.1259 3.68538C0.0859919 3.72666 0.0543289 3.7757 0.0327244 3.82968C0.0111208 3.88367 0 3.94155 0 4C0 4.05845 0.0111208 4.11633 0.0327244 4.17032C0.0543289 4.2243 0.0859919 4.27334 0.1259 4.31462L3.55425 7.86968C3.63472 7.95312 3.74386 8 3.85766 8C3.97146 8 4.0806 7.95312 4.16107 7.86968C4.24154 7.78624 4.28675 7.67306 4.28675 7.55506C4.28675 7.43705 4.24154 7.32388 4.16107 7.24043L1.46381 4.44438H11.5715C11.6851 4.44438 11.7941 4.39756 11.8745 4.31423C11.9548 4.23089 12 4.11786 12 4Z", fill: "#888888" }) }));
}
function ExpandArrow({ className, width, height, onClick }) {
    return (jsx("svg", { className: className, onClick: onClick, width: width ?? "8", height: height ?? "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.51928 6L0.693763 1.71677C0.324701 1.38918 0.324701 0.812757 0.693763 0.48517C1.0056 0.208378 1.47512 0.208379 1.78696 0.485171L7.32085 5.39717C7.68214 5.71786 7.68214 6.28214 7.32085 6.60283L1.78695 11.5148C1.47512 11.7916 1.0056 11.7916 0.693763 11.5148C0.324701 11.1872 0.324702 10.6108 0.693764 10.2832L5.51928 6Z", fill: "black" }) }));
}
function CollapseArrow({ className, width, height, onClick }) {
    return (jsx("svg", { className: className, onClick: onClick, width: width ?? "13", height: height ?? "7", viewBox: "0 0 13 7", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M11.4882 0.66124C11.5455 0.609735 11.6128 0.569469 11.6864 0.542742C11.76 0.516016 11.8384 0.503351 11.9172 0.505471C11.9959 0.507592 12.0734 0.524456 12.1453 0.555101C12.2172 0.585746 12.282 0.629571 12.3361 0.684076C12.3902 0.73858 12.4325 0.802695 12.4606 0.872761C12.4887 0.942826 12.502 1.01747 12.4998 1.09243C12.4975 1.16739 12.4798 1.2412 12.4476 1.30964C12.4154 1.37808 12.3694 1.43982 12.3122 1.49132L6.91533 6.34395C6.80399 6.44416 6.65659 6.5 6.50337 6.5C6.35015 6.5 6.20275 6.44416 6.09141 6.34395L0.693979 1.49133C0.635477 1.44016 0.588237 1.37844 0.555001 1.30974C0.521766 1.24105 0.5032 1.16675 0.500379 1.09117C0.497558 1.01559 0.510541 0.940221 0.538571 0.869455C0.566602 0.798688 0.609122 0.733929 0.663663 0.67894C0.718204 0.623951 0.783677 0.579827 0.85628 0.549132C0.928884 0.518437 1.00717 0.501783 1.08659 0.500136C1.16601 0.498489 1.24499 0.511883 1.31892 0.53954C1.39286 0.567196 1.46029 0.608564 1.5173 0.661241L6.50337 5.14392L11.4882 0.66124Z", fill: "black" }) }));
}
function MenuLogo({ className, width, height, onClick }) {
    return (jsx("svg", { className: className, onClick: onClick, width: width ?? "64", height: height ?? "20", viewBox: "0 0 64 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.1175 19.3011C55.6189 19.3011 54.3616 19.0772 53.3453 18.6294C52.3291 18.1643 51.5454 17.5701 50.9942 16.8466C50.4603 16.106 50.1761 15.3223 50.1416 14.4955C50.1416 14.3577 50.1933 14.2372 50.2966 14.1338C50.4172 14.0132 50.555 13.953 50.71 13.953H52.0277C52.2344 13.953 52.3894 14.0046 52.4927 14.108C52.5961 14.2113 52.665 14.3319 52.6994 14.4697C52.7855 14.8831 52.9922 15.2965 53.3195 15.7098C53.664 16.106 54.1377 16.4419 54.7405 16.7175C55.3606 16.9758 56.1529 17.105 57.1175 17.105C58.5988 17.105 59.6839 16.8466 60.3729 16.3299C61.0791 15.796 61.4322 15.0898 61.4322 14.2113C61.4322 13.6085 61.2427 13.1262 60.8638 12.7645C60.502 12.3855 59.9422 12.0497 59.1844 11.7569C58.4265 11.464 57.4447 11.1454 56.239 10.8009C54.9816 10.4392 53.9396 10.043 53.1128 9.61244C52.286 9.18183 51.666 8.64787 51.2526 8.01057C50.8564 7.37327 50.6583 6.56373 50.6583 5.58195C50.6583 4.65183 50.9081 3.82507 51.4076 3.10164C51.9071 2.361 52.6219 1.77537 53.552 1.34476C54.4994 0.914156 55.6448 0.698853 56.9883 0.698853C58.0562 0.698853 58.9863 0.845259 59.7786 1.13807C60.5882 1.41366 61.2599 1.7926 61.7939 2.27488C62.3278 2.73993 62.7326 3.24805 63.0082 3.79923C63.2838 4.33318 63.4302 4.85852 63.4474 5.37525C63.4474 5.49582 63.4043 5.61639 63.3182 5.73696C63.2321 5.84031 63.0943 5.89198 62.9048 5.89198H61.5355C61.4149 5.89198 61.2857 5.85754 61.148 5.78864C61.0274 5.71974 60.9326 5.59056 60.8638 5.40109C60.7604 4.69489 60.3642 4.10066 59.6753 3.61837C58.9863 3.13609 58.0906 2.89495 56.9883 2.89495C55.8687 2.89495 54.9558 3.11026 54.2496 3.54086C53.5606 3.97147 53.2162 4.64322 53.2162 5.55611C53.2162 6.14174 53.3798 6.63263 53.707 7.02879C54.0343 7.40772 54.551 7.7436 55.2572 8.03641C55.9634 8.32922 56.8849 8.63926 58.0217 8.96652C59.3997 9.34546 60.5279 9.75023 61.4063 10.1808C62.2848 10.5942 62.9307 11.1196 63.3441 11.7569C63.7747 12.3769 63.99 13.1779 63.99 14.1597C63.99 15.2448 63.7058 16.1749 63.1374 16.95C62.569 17.7079 61.768 18.2935 60.7346 18.7069C59.7183 19.103 58.5126 19.3011 57.1175 19.3011ZM0.164784 18.8877C0.26813 18.9911 0.414537 19.0427 0.604005 19.0427H7.86406C9.12143 19.0427 10.1721 18.8102 11.0161 18.3452C11.8773 17.8629 12.5232 17.2256 12.9538 16.4333C13.3844 15.6409 13.5998 14.7711 13.5998 13.8238C13.5998 12.7731 13.3328 11.8774 12.7988 11.1368C12.2821 10.3961 11.6879 9.86219 11.0161 9.53493C11.3434 9.36268 11.6792 9.12154 12.0237 8.8115C12.3682 8.48424 12.6524 8.07086 12.8763 7.57135C13.1175 7.05462 13.238 6.44316 13.238 5.73696C13.238 4.8413 13.04 4.03176 12.6438 3.30834C12.2649 2.58492 11.662 2.01651 10.8352 1.60313C10.0257 1.17252 8.97502 0.957217 7.6832 0.957217H0.604005C0.414537 0.957217 0.26813 1.0175 0.164784 1.13807C0.0614386 1.24142 0.00976562 1.38782 0.00976562 1.57729V18.4485C0.00976562 18.6208 0.0614386 18.7672 0.164784 18.8877ZM7.52818 16.95H2.54174V10.6717H7.52818C8.64776 10.6717 9.50898 10.9732 10.1118 11.576C10.7147 12.1616 11.0161 12.9109 11.0161 13.8238C11.0161 14.7022 10.7147 15.4429 10.1118 16.0457C9.50898 16.6486 8.64776 16.95 7.52818 16.95ZM7.29565 8.60481H2.54174V3.04997H7.29565C8.39801 3.04997 9.23339 3.2825 9.80179 3.74756C10.3702 4.21261 10.6544 4.88436 10.6544 5.7628C10.6544 6.64124 10.3702 7.33883 9.80179 7.85556C9.23339 8.35506 8.39801 8.60481 7.29565 8.60481ZM34.5293 18.8877C34.6327 18.9911 34.7791 19.0427 34.9685 19.0427H36.2862C36.4757 19.0427 36.6221 18.9911 36.7254 18.8877C36.846 18.7672 36.9063 18.6208 36.9063 18.4485V11.7827H41.4277L45.1739 18.3452C45.2773 18.5002 45.3979 18.6552 45.5357 18.8102C45.6735 18.9652 45.8888 19.0427 46.1816 19.0427H47.4217C47.5595 19.0427 47.6801 18.9911 47.7834 18.8877C47.904 18.7844 47.9643 18.6638 47.9643 18.526C47.9643 18.4399 47.9384 18.3452 47.8868 18.2418L43.908 11.3693C45.0448 11.0421 45.9404 10.465 46.595 9.63827C47.2667 8.79428 47.6026 7.70915 47.6026 6.38288C47.6026 4.59155 47.0342 3.23944 45.8974 2.32655C44.7606 1.41366 43.219 0.957217 41.2726 0.957217H34.9685C34.7791 0.957217 34.6327 1.0175 34.5293 1.13807C34.426 1.24142 34.3743 1.38782 34.3743 1.57729V18.4485C34.3743 18.6208 34.426 18.7672 34.5293 18.8877ZM41.1693 9.5866H36.9063V3.12748H41.1693C42.4783 3.12748 43.4429 3.40307 44.063 3.95425C44.7003 4.50543 45.0189 5.30636 45.0189 6.35704C45.0189 7.42495 44.7003 8.23449 44.063 8.78567C43.4257 9.31962 42.4611 9.5866 41.1693 9.5866ZM15.4899 18.8877C15.5932 18.9911 15.7138 19.0427 15.8516 19.0427H17.1692C17.3759 19.0427 17.5309 18.9911 17.6343 18.8877C17.7376 18.7844 17.7979 18.6896 17.8151 18.6035L19.2361 14.9347L19.9854 12.7128L23.4733 3.54086L26.9612 12.7128L27.7105 14.9347L29.1315 18.6035C29.166 18.6896 29.2262 18.7844 29.3124 18.8877C29.4157 18.9911 29.5707 19.0427 29.7774 19.0427H31.0951C31.2329 19.0427 31.3534 18.9911 31.4568 18.8877C31.5601 18.7844 31.6118 18.6638 31.6118 18.526C31.6118 18.4399 31.5946 18.3452 31.5601 18.2418L25.1785 1.52562C25.1096 1.35338 25.0063 1.21558 24.8685 1.11224C24.7479 1.00889 24.5757 0.957217 24.3518 0.957217H22.5949C22.3537 0.957217 22.1729 1.00889 22.0523 1.11224C21.9317 1.21558 21.837 1.35338 21.7681 1.52562L15.3607 18.2418C15.3434 18.3452 15.3348 18.4399 15.3348 18.526C15.3348 18.6638 15.3865 18.7844 15.4899 18.8877ZM22.7352 9.58003C22.2644 9.58003 21.8481 9.88605 21.7077 10.3355C21.4911 11.0287 22.009 11.7331 22.7352 11.7331H24.3819C25.1082 11.7331 25.6261 11.0287 25.4094 10.3355C25.269 9.88603 24.8528 9.58003 24.3819 9.58003H22.7352Z", fill: "white" }) }));
}

function AdditionalMenu({ isVisible, setIsVisible, items }) {
    const [sectionsStatus, setSectionsStatus] = React__default.useState([]);
    function CloseMenu() {
        localStorage.removeItem("activeAdditionalMenuName");
        setIsVisible(false);
    }
    function ChangeSectionStatus(index) {
        const newState = [...sectionsStatus];
        newState[index] = !newState[index];
        setSectionsStatus(newState);
    }
    React__default.useEffect(() => {
        if (items) {
            setSectionsStatus(new Array(items.length).fill(true));
        }
    }, [items]);
    return (isVisible ? (jsxs("div", { className: styles$1.additionalMenuWithBlackout, children: [jsxs("div", { className: styles$1.additionalMenu, children: [jsxs("div", { className: styles$1.collapseBtnSection, onClick: CloseMenu, children: [jsx(LongArrow, { className: "back-arrow" }), jsx("p", { className: styles$1.collapseBtn, children: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C" })] }), items ? items.map((headItem, index) => jsxs("div", { className: styles$1.section, children: [jsxs("p", { className: styles$1.sectionHeader + (sectionsStatus[index] ? ' collapse-arrow' : ' expand-arrow'), onClick: () => ChangeSectionStatus(index), children: [sectionsStatus[index] ? jsx(CollapseArrow, {}) : jsx(ExpandArrow, {}), headItem.sectionName] }), sectionsStatus[index] ?
                                jsx(SimpleList, { items: headItem.items ? headItem.items.map((subItem) => {
                                        return {
                                            Label: subItem.label,
                                            OnClick: subItem.onClick ?? CloseMenu,
                                            Href: subItem.href,
                                            ClassName: styles$1.sectionItem
                                        };
                                    }) : undefined })
                                : null] }, `section_${index}`)) : null] }), jsx("div", { className: styles$1.Blackout, onClick: CloseMenu })] })) :
        (null));
}

const DockviewContext = createContext(null);
const useDockviewContext = () => {
    const context = useContext(DockviewContext);
    if (!context) {
        throw new Error('useDockviewContext must be used within a DockviewProvider');
    }
    return context;
};

function Menu({ children, sections }) {
    const { api } = useDockviewContext();
    const [menuExpanded, setMenuExpanded] = React.useState(false);
    const [additionalMenuVisible, setAdditionalMenuVisible] = React.useState(false);
    const [additionalMenuItems, setAdditionalMenuItems] = React.useState();
    const navigate = useNavigate();
    const callAdditionalMenu = (items) => {
        setAdditionalMenuItems(items);
        setAdditionalMenuVisible(true);
    };
    const onChangePage = (pageName) => {
        setAdditionalMenuVisible(false);
        navigate(`/${pageName}`); //Временный (или постоянный) костыль, чтобы работало хоть как-то
    };
    const [menuItems, setMenuItems] = React.useState(sections);
    React.useEffect(() => {
        setMenuItems(sections);
    }, [sections]);
    function clickOnContent() {
        setAdditionalMenuVisible(false);
        if (window.innerWidth <= 800) {
            setMenuExpanded(false);
        }
    }
    function generateItemProps(item, itemIndex) {
        const customElement = item.CustomElement ? item.CustomElement({}) : undefined;
        const genericProps = {
            key: `menuItem_${itemIndex}`,
            className: menuExpanded
                ? styles$2.menuItem
                : styles$2.menuItem + ' ' + styles$2.collapsedMenuItem,
            onClick: () => {
                if (item.ExpandOnClick)
                    setMenuExpanded(true);
                if (item.OnClick)
                    item.OnClick();
                if (item.ChangePage)
                    onChangePage(item.ChangePage);
                if (localStorage.getItem("activeAdditionalMenuName") != item.Name && item.Children) {
                    localStorage.setItem("activeAdditionalMenuName", item.Name);
                    callAdditionalMenu(item.Children);
                }
                else if (localStorage.getItem("activeAdditionalMenuName") == item.Name) {
                    localStorage.removeItem("activeAdditionalMenuName");
                    setAdditionalMenuVisible(false);
                }
            }
        };
        if (item.Href)
            return (jsxs(Link, { to: item.Href, ...genericProps, children: [jsx(ReactSVG, { className: item.SvgClass ? styles$2.itemIcon + ' ' + item.SvgClass : styles$2.itemIcon, src: import.meta?.env?.isStandalone ? '/web' + item.SvgSrc : item.SvgSrc }), customElement ? customElement : jsx("p", { className: styles$2.menuTextItem, children: item.Name })] }));
        return (jsxs("div", { ...genericProps, children: [jsx(ReactSVG, { className: item.SvgClass ? styles$2.itemIcon + ' ' + item.SvgClass : styles$2.itemIcon, src: import.meta?.env?.isStandalone ? '/web' + item.SvgSrc : item.SvgSrc }), customElement ? customElement : jsx("p", { className: styles$2.menuTextItem, children: item.Name })] }));
    }
    return (jsxs("div", { className: styles$2.mainContainer, children: [jsxs("div", { className: styles$2.menu, children: [jsx("div", { className: styles$2.menuLogoContainer, onClick: () => {
                            setMenuExpanded(!menuExpanded);
                            if (api)
                                SaveTab('MainPage', 'MainPage', "", api, 'Главная страница', undefined);
                        }, children: jsx(MenuLogo, {}) }), menuItems?.map((group, groupIndex) => (jsx("div", { className: styles$2.buttonsGroupContainer, children: group.Items.map((item, itemIndex) => (generateItemProps(item, itemIndex))) }, groupIndex)))] }), jsxs("div", { className: styles$2.contentContainer, style: {
                    maxWidth: menuExpanded ? 'calc(100% - var(--large-menu-width))' : 'calc(100% - var(--menu-width))',
                    minWidth: menuExpanded ? 'calc(100% - var(--large-menu-width))' : 'calc(100% - var(--menu-width))'
                }, children: [jsx(AdditionalMenu, { isVisible: additionalMenuVisible, setIsVisible: setAdditionalMenuVisible, items: additionalMenuItems }), jsx("div", { className: menuExpanded ? styles$2.expandedMenuContent : styles$2.content, children: jsx("div", { className: additionalMenuVisible ? 'clickable' : undefined, onClick: () => clickOnContent(), children: children }) })] })] }));
}

var css_248z = ".Dockview-module_Dockview__-WuDb {\n  height: calc(100vh);\n}\n\n.Dockview-module_Dockview__-WuDb .fixed-tab-button {\n  position: sticky;\n  left: 0;\n  z-index: 10;\n  height: 100%;\n  padding: 0 16px;\n  background-color: var(--bars-white);\n  border: none;\n  border-right: 1px solid var(--bars-gray-low2);\n  color: var(--bars-green-primary);\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.Dockview-module_Dockview__-WuDb .fixed-tab-button:hover {\n  background-color: var(--bars-gray-low1);\n}\n\n/* Обеспечиваем правильное позиционирование остальных вкладок */\n.Dockview-module_Dockview__-WuDb .dv-tabs-container {\n  display: flex;\n  align-items: center;\n}\n\n.Dockview-module_Dockview__-WuDb .dv-tab {\n  margin-left: 5px;\n}\n\n.Dockview-module_treeDotsMenuItem__X7-sV {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\n.Dockview-module_treeDotsMenuItem__X7-sV:hover {\n  text-decoration: underline;\n}\n\n.Dockview-module_menuButtonTabs__FsiMa {\n  color: #3A3A3A !important;\n  font-weight: 400 !important;\n  font-size: 14px !important;\n  box-shadow: none !important;\n  width: 100% !important;\n  height: 30px !important;\n  border-radius: 0 !important;\n  background-color: #fff !important;\n}\n\n.Dockview-module_menuButtonTabs__FsiMa:hover {\n  background-color: #EFEFEF !important;\n}\n";
var styles = {"Dockview":"Dockview-module_Dockview__-WuDb","treeDotsMenuItem":"Dockview-module_treeDotsMenuItem__X7-sV","menuButtonTabs":"Dockview-module_menuButtonTabs__FsiMa"};
styleInject(css_248z);

// import { BackboneApi } from '../BackboneApi'
// import { LoginPage } from '../../pages/auth/login';
// import { MainPage } from '../../pages/basePages/MainPage/MainPage';
const customComponents = (routes) => {
    const panels = {};
    routes.forEach((v) => panels[v.component.typeName] =
        () => (jsx("div", { className: styles.DockContainer, children: jsx(v.component.customComponent, { ...v.component.componentProps }) })));
    return panels;
};
const getComponents = (routes) => {
    const collection = routes ? customComponents(routes) : customComponents([]);
    return { ...collection,
        '404Error': (props) => {
            return (jsx("div", { className: styles.DockContainer, children: jsx(NotFoundPage, {}) }));
        },
        DefaultPage: (props) => {
            return (jsx("div", { className: styles.DockContainer, children: jsx(MainPage, {}) }));
        },
        MainPage: (props) => {
            return (jsx("div", { className: styles.DockContainer, children: jsx(MainPage, {}) }));
        },
    };
};
const IOSSwitch = styled((props) => (jsx(Switch, { focusVisibleClassName: ".Mui-focusVisible", disableRipple: true, ...props })))(({ theme }) => ({
    width: 34,
    height: 17,
    padding: 0,
    marginRight: '15px !important',
    cursor: 'pointer',
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#00824A',
                opacity: 1,
                border: 0,
                ...theme.applyStyles('dark', {
                    backgroundColor: '#00824A',
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.grey[100],
            ...theme.applyStyles('dark', {
                color: theme.palette.grey[600],
            }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
            ...theme.applyStyles('dark', {
                opacity: 0.3,
            }),
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 13,
        height: 13,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
        ...theme.applyStyles('dark', {
            backgroundColor: '#39393D',
        }),
    },
}));

const Dockview = ({ startItem, routes, header }) => {
    const context = useContext(DockviewContext);
    const components = getComponents(routes);
    const [api, setApi] = useState();
    const currentLocation = useLocation();
    const tabsAndActionsContainer = useRef(null);
    const voidContainer = useRef(null);
    const resizeObserverRef = useRef(null);
    const isActiveArrows = useRef(false);
    const tabWidthRef = useRef(undefined);
    const [refresh, setRefresh] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSingleTabMode, setIsSingleTabMode] = useState(localStorage.getItem('isSingleTabMode') === 'true');
    useEffect(() => {
        tabsAndActionsContainer.current = document.querySelector('.dv-tabs-and-actions-container') || document.querySelector('.tabs-and-actions-container');
        voidContainer.current = document.querySelector('.dv-void-container');
        if (voidContainer.current) {
            resizeObserverRef.current = new ResizeObserver(() => {
                updateOverflow();
            });
            resizeObserverRef.current.observe(voidContainer.current);
        }
        return () => {
            if (resizeObserverRef.current)
                resizeObserverRef.current.disconnect();
        };
    }, []);
    // Обновляет стрелок для вкладок
    const updateOverflow = () => {
        if (voidContainer.current && localStorage.getItem('isSingleTabMode') !== 'true') {
            isActiveArrows.current = voidContainer.current.clientWidth == 0;
        }
    };
    // Срабатывает при включении режима одной вкладки
    const handleTabModeChange = (event) => {
        setIsSingleTabMode(event.target.checked);
        if (event.target.checked && api && api.panels.length > 1) {
            // Оставляем только активную вкладку
            api.panels.forEach(panel => {
                if (panel.id !== api.activePanel?.id) {
                    RemoveSavedTab(panel.id);
                    api.removePanel(panel);
                }
            });
        }
    };
    function generateUniqueId(dublicatedId, api) {
        let id = dublicatedId;
        let doubleIdCount = 0;
        if (api) {
            if (!api.panels.find((p) => p.id === id))
                return id;
            while (api.panels.find((p) => p.id === id) && doubleIdCount < 15) {
                doubleIdCount += 1;
                id = id + `_${doubleIdCount}`;
            }
            if (doubleIdCount >= 15) {
                console.warn('detected tab with existing ID, max doubles count reached');
                return undefined;
            }
            else {
                console.warn('detected tab with existing ID, added bypass suffix');
                return id;
            }
        }
        return undefined;
    }
    // Срабатывает при загрузке компонента
    const onReady = (event) => {
        setApi(event.api);
        if (context) {
            Object.assign(context, { api: event.api });
        }
        const updateOverflow = () => {
            const tabsContainer = document.querySelector('.dv-tabs-container');
            isActiveArrows.current = tabsContainer && tabsContainer.scrollWidth > tabsContainer.clientWidth;
            setRefresh(!refresh);
        };
        event.api.onDidAddPanel(updateOverflow);
        event.api.onDidRemovePanel(updateOverflow);
        updateOverflow();
        let tabs = GetSavedTabs();
        if (localStorage.getItem('isSingleTabMode') === 'true' && tabs.length > 1) {
            localStorage.setItem('SavedTabs', JSON.stringify(tabs.slice(1)));
            tabs = tabs.slice(1);
        }
        if (!tabs || tabs.length === 0) {
            SaveTab('MainPage', 'MainPage', "", api, GetPageTitle(routes ?? [], 'MainPage'));
        }
        else {
            tabs.forEach(e => {
                if (components[e.type] && e.type != startItem?.component.typeName) {
                    const newId = generateUniqueId(e.id, event.api);
                    if (newId) {
                        event.api.addPanel({
                            id: e.id,
                            component: e.type,
                            title: GetPageTitle(routes ?? [], e.type)
                        });
                    }
                }
                else {
                    console.warn(`can't find page with type ${e.type}, skip`);
                }
            });
        }
        if (startItem && startItem.component && event.api) {
            let id = startItem.id ?? 'RoutePage';
            id = generateUniqueId(id, event.api);
            if (!id)
                return;
            let canAddStartTab = true;
            if (event.api.panels.some(p => p.params?.type && p.params.type === startItem.component.typeName)) {
                if (!GetManyPageSupport(routes ?? [], startItem.component.typeName)) {
                    console.info("Tab with this type already exists");
                    canAddStartTab = false;
                }
            }
            if (canAddStartTab) {
                SaveTab(id, startItem.component.typeName, JSON.stringify({
                    canDublicate: startItem.canDublicate
                }), event.api, startItem.name, {
                    ...startItem.component.componentProps,
                    type: startItem.component.typeName
                });
            }
        }
    };
    api?.onDidActivePanelChange((event) => {
        console.log('active panel changed -> ' + event?.title);
        document.title = event?.title ?? 'Барс.Администратор';
        const route = routes?.find(r => r.component?.typeName === event?.api.component);
        if (route) {
            window.history.pushState({}, '', route.patch);
        }
        else if (event?.api.component === 'MainPage') {
            window.history.pushState({}, '', '/main');
        }
        else if (event?.api.component === '404Error') {
            window.history.pushState({}, '', '/not-found');
        }
    });
    // Срабатывает при закрытии вкладки
    api?.onDidRemovePanel((event) => {
        if (localStorage.getItem('isSingleTabMode') === 'true')
            return;
        if (api?.panels.length === 0) {
            RemoveSavedTab(event.api.id);
            SaveTab('MainPage', 'MainPage', "", api, GetPageTitle(routes ?? [], 'MainPage'), {
                type: 'MainPage',
            });
        }
        else {
            RemoveSavedTab(event.api.id);
        }
    });
    const updateTabWidths = () => {
        if (localStorage.getItem('isSingleTabMode') === 'true')
            return;
        const tabs = document.querySelectorAll('.dv-tab');
        if (!tabs.length)
            return;
        // Находим самую длинную вкладку
        let maxWidth = 0;
        tabs.forEach(tab => {
            const width = tab.scrollWidth;
            maxWidth = Math.max(maxWidth, width);
        });
        // Ограничиваем максимальную ширину
        const finalWidth = Math.min(Math.max(maxWidth, 120), 250);
        tabWidthRef.current = finalWidth;
        // Применяем одинаковую ширину ко всем вкладкам
        tabs.forEach(tab => {
            tab.style.width = `${finalWidth}px`;
        });
    };
    useEffect(() => {
        if (!api) {
            return;
        }
        const disposables = [
            api.onDidAddPanel(updateTabWidths),
            api.onDidRemovePanel(updateTabWidths),
            // Разрешаем перетаскивание только внутри группы
            api.onWillDragPanel((e) => {
                const sourceGroup = e.panel.group;
                // Добавляем данные о группе в объект перетаскивания
                e.nativeEvent.dataTransfer?.setData('sourceGroupId', sourceGroup.id);
            }),
            // Предотвращаем отображение оверлея для неразрешенных зон
            api.onWillShowOverlay((e) => {
                const sourceGroupId = e.nativeEvent.dataTransfer?.getData('sourceGroupId');
                const targetGroup = e.group;
                // Если целевая группа отличается от исходной - отменяем
                if (sourceGroupId && targetGroup && sourceGroupId !== targetGroup.id) {
                    e.preventDefault();
                }
                // Запрещаем все позиции кроме center/within
                if (!['center', 'within'].includes(e.position)) {
                    e.preventDefault();
                }
            }),
            // Отключаем перетаскивание групп полностью
            api.onWillDragGroup((e) => {
                e.nativeEvent.preventDefault();
            }),
        ];
        // Очистка обработчиков при размонтировании
        return () => {
            disposables.forEach(disposable => disposable.dispose());
        };
    }, [api]);
    // Срабатывает при переходе по ссылке
    useEffect(() => {
        // Возможно удалить 
        if (api && localStorage.getItem('isSingleTabMode') === 'true' && api?.panels.length > 1) {
            const activePanel = api.activePanel;
            api.panels.forEach(panel => {
                if (panel.api.id !== activePanel?.api.id) {
                    /* RemoveSavedTab(panel.id); */
                    api.removePanel(panel);
                }
            });
        }
        const componentInfo = routes ? routes
            .find(v => matchPath(v.patch, location.pathname) ||
            matchPath(v.patch, location.hash?.length > 1 ? location.hash.substring(1) : location.hash))
            : undefined;
        /* const componentInfo = routes?.find(v =>
            matchPath(v.patch, currentLocation.pathname) ||
            matchPath(v.patch, currentLocation.hash?.length > 1 ? currentLocation.hash.substring(1) : currentLocation.hash)
        ); */
        if (componentInfo) {
            if (componentInfo.removePreviousTab === true && api?.activePanel !== undefined) {
                RemoveSavedTab(api.activePanel.id);
                api?.removePanel(api.activePanel);
            }
            if (localStorage.getItem('isSingleTabMode') === 'true') {
                if (api?.activePanel) {
                    RemoveSavedTab(api.activePanel.id);
                    api.removePanel(api.activePanel);
                    let id = generateUniqueId(componentInfo.id ? componentInfo.id : (componentInfo.component.typeName), api);
                    if (id) {
                        SaveTab(id, componentInfo.component.typeName, JSON.stringify({
                            canDublicate: componentInfo.canDublicate
                        }), api, componentInfo.name, {
                            ...componentInfo.component.componentProps,
                            type: componentInfo.component.typeName
                        });
                    }
                    return;
                }
            }
            const existPage = api?.panels?.find(p => p.params?.type && p.params.type === componentInfo.component.typeName && (!componentInfo.canDublicate));
            if (existPage) {
                if (!GetManyPageSupport(routes ?? [], componentInfo.component.typeName)) {
                    console.info("Tab with this type already exists, switch to it");
                    existPage.group.setActive(true);
                    existPage.group.setVisible(true);
                    existPage.api.setActive();
                    // Ломает режим одной вкладки
                    /* existPage.api.moveTo({
                        group: existPage.group,
                        position: "center",
                        index: 0
                    }); */
                }
                return;
            }
            else {
                let newId = generateUniqueId(componentInfo.id ? componentInfo.id : (componentInfo.component.typeName), api);
                if (newId) {
                    SaveTab(newId, componentInfo.component.typeName, JSON.stringify({
                        canDublicate: componentInfo.canDublicate
                    }), api, componentInfo.name, {
                        ...componentInfo.component.componentProps,
                        type: componentInfo.component.typeName
                    });
                }
                else {
                    console.warn("can't generate unique id for tab", componentInfo);
                }
            }
        }
        else {
            console.warn('component associated with this location not found', currentLocation);
            if (api && api?.activePanel && localStorage.getItem('isSingleTabMode') === 'true') {
                api?.removePanel(api.activePanel);
            }
            let newId = generateUniqueId('404', api);
            if (newId && api && (!(localStorage.getItem('isSingleTabMode') === 'true') ||
                (localStorage.getItem('isSingleTabMode') === 'true' && (api.panels.length < 1 || GetSavedTabs().length < 1)))) {
                SaveTab(newId, '404Error', "", api, 'Страница не найдена', undefined);
            }
            else {
                console.warn("can't generate 404");
            }
        }
    }, [currentLocation, isSingleTabMode]);
    const LeftHeader = () => {
        return (jsx(Fragment, { children: localStorage.getItem('isSingleTabMode') === 'true' || !isActiveArrows.current ? jsx(Fragment, {}) : (jsx(Button, { disabled: !isActiveArrows.current, sx: { minHeight: '35px', minWidth: '35px', marginLeft: '5px', marginRight: '5px', backgroundColor: '#FFF',
                    '&:hover': { backgroundColor: '#E8F5E9' } }, onClick: () => {
                    const tabsContainer = document.querySelector('.dv-tabs-container');
                    if (tabsContainer) {
                        tabsContainer.scrollTo({
                            left: tabsContainer.scrollLeft - tabWidthRef.current,
                            behavior: 'smooth'
                        });
                    }
                }, children: jsx("svg", { width: "16", height: "16", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10 12L6 8L10 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })) }));
    };
    const RightHeader = () => {
        return (jsxs("div", { style: { display: 'flex', alignItems: 'center', height: '45px', minWidth: '152px' }, children: [localStorage.getItem('isSingleTabMode') === 'true' || !isActiveArrows.current ? jsx(Fragment, {}) :
                    jsx(Button, { disabled: !isActiveArrows.current, sx: { minHeight: '35px', height: '35px', minWidth: '35px', marginLeft: '10px', backgroundColor: '#FFF',
                            '&:hover': { backgroundColor: '#E8F5E9' } }, onClick: () => {
                            const tabsContainer = document.querySelector('.dv-tabs-container');
                            if (tabsContainer) {
                                tabsContainer.scrollTo({
                                    left: tabsContainer.scrollLeft + tabWidthRef.current,
                                    behavior: 'smooth'
                                });
                            }
                        }, children: jsx("svg", { width: "16", height: "16", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4 12L8 8L4 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), jsx(Button, { sx: { cursor: 'pointer', minWidth: '35px', width: '35px', height: '35px', margin: '0 5px', borderRadius: '50%', '&:hover': { backgroundColor: '#E8F5E9' } }, onClick: (event) => setAnchorEl(event.currentTarget), children: jsxs("svg", { width: "35", height: "35", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { cx: "7", cy: "3", r: "1.2", fill: "#000" }), jsx("circle", { cx: "7", cy: "8", r: "1.2", fill: "#000" }), jsx("circle", { cx: "7", cy: "13", r: "1.2", fill: "#000" })] }) }), jsx("div", { style: { width: '1px', height: '100%', backgroundColor: '#F2F3F6', marginRight: '10px' } }), header && header({})] }));
    };
    return (jsxs("div", { className: styles.Dockview, children: [jsx(DockviewReact, { components: components, onReady: onReady, rightHeaderActionsComponent: RightHeader, prefixHeaderActionsComponent: LeftHeader, className: `dockview-theme-vs ${localStorage.getItem('isSingleTabMode') === 'true' ? 'singleTabMode' : ''}`, rootOverlayModel: {
                    size: { value: 0, type: 'pixels' }, // Отключаем оверлей корневого уровня
                    activationSize: { value: 0, type: 'percentage' },
                } }), jsx(BarsMenu, { anchorElement: anchorEl, setAnchorElement: setAnchorEl, children: jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [localStorage.getItem('isSingleTabMode') === 'true' ? jsx(Fragment, {}) :
                            jsx(Button, { color: 'success', disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                    if (!(localStorage.getItem('isSingleTabMode') === 'true') && api) {
                                        api.panels.forEach(panel => {
                                            api.removePanel(panel);
                                        });
                                    }
                                }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438" }), localStorage.getItem('isSingleTabMode') === 'true' ? jsx(Fragment, {}) :
                            jsx(Button, { color: "success", disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                    if (!(localStorage.getItem('isSingleTabMode') === 'true') && api && api.activePanel) {
                                        api.removePanel(api.activePanel);
                                    }
                                }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0432\u043A\u043B\u0430\u0434\u043A\u0443" }), localStorage.getItem('isSingleTabMode') === 'true' ? jsx(Fragment, {}) :
                            jsx(Button, { color: 'success', disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                    if (!(localStorage.getItem('isSingleTabMode') === 'true') && api && api.activePanel) {
                                        api.panels.forEach(panel => {
                                            if (panel.id !== api.activePanel?.id) {
                                                api.removePanel(panel);
                                            }
                                        });
                                    }
                                }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u043A\u0440\u043E\u043C\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439" }), localStorage.getItem('isSingleTabMode') === 'true' ? jsx(Fragment, {}) :
                            jsx("div", { style: { width: '90%', height: '1px', backgroundColor: '#EFEFEF',
                                    borderRadius: '10px', margin: '6px 0'
                                } }), jsxs("div", { style: { display: 'flex', alignItems: 'center', marginRight: '10px' }, children: [jsx(IOSSwitch, { sx: { m: 1 }, checked: isSingleTabMode, onChange: (e) => {
                                        localStorage.setItem('isSingleTabMode', e.target.checked.toString());
                                        if (e.target.checked)
                                            setAnchorEl(null);
                                        handleTabModeChange(e);
                                    } }), jsx("span", { children: localStorage.getItem('isSingleTabMode') === 'true' ? 'Включить вкладки' : 'Отключить вкладки' })] })] }) })] }));
};

const DockviewTitleBar = ({ startItem, routes, header, ipcRenderer }) => {
    const context = useContext(DockviewContext);
    const components = getComponents(routes);
    const [api, setApi] = useState();
    const currentLocation = useLocation();
    const tabsAndActionsContainer = useRef(null);
    const voidContainer = useRef(null);
    const resizeObserverRef = useRef(null);
    const tabWidthRef = useRef(120);
    const isActiveArrows = useRef(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isTabsUnderHeader, setIsTabsUnderHeader] = useState(localStorage.getItem('isTabsUnderHeader') === 'true');
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
    useEffect(() => {
        tabsAndActionsContainer.current = document.querySelector('.dv-tabs-and-actions-container') || document.querySelector('.tabs-and-actions-container');
        voidContainer.current = document.querySelector('.dv-void-container');
        if (voidContainer.current) {
            resizeObserverRef.current = new ResizeObserver(() => {
                updateOverflow();
            });
            resizeObserverRef.current.observe(voidContainer.current);
        }
        return () => {
            if (resizeObserverRef.current)
                resizeObserverRef.current.disconnect();
        };
    }, []);
    // Обновляет стрелок для вкладок
    const updateOverflow = () => {
        if (voidContainer.current) {
            isActiveArrows.current = voidContainer.current.clientWidth == 0;
        }
    };
    // Срабатывает при включении режима вкладок под заголовком
    const handleTabModeChange = (event) => {
        if (tabsAndActionsContainer) {
            if (localStorage.getItem('isTabsUnderHeader') === 'true') {
                tabsAndActionsContainer.current?.classList.remove('tabs-and-actions-container-titlebar');
            }
            else {
                tabsAndActionsContainer.current?.classList.add('tabs-and-actions-container-titlebar');
            }
        }
        setIsTabsUnderHeader(event.target.checked);
    };
    function generateUniqueId(dublicatedId, api) {
        let id = dublicatedId;
        let doubleIdCount = 0;
        if (api) {
            if (!api.panels.find((p) => p.id === id))
                return id;
            while (api.panels.find((p) => p.id === id) && doubleIdCount < 15) {
                doubleIdCount += 1;
                id = id + `_${doubleIdCount}`;
            }
            if (doubleIdCount >= 15) {
                console.warn('detected tab with existing ID, max doubles count reached');
                return undefined;
            }
            else {
                console.warn('detected tab with existing ID, added bypass suffix');
                return id;
            }
        }
        return undefined;
    }
    // Срабатывает при загрузке компонента
    const onReady = (event) => {
        setApi(event.api);
        if (context) {
            Object.assign(context, { api: event.api });
        }
        /* event.api.onDidAddPanel(updateOverflow);
        event.api.onDidRemovePanel(updateOverflow); */
        let tabs = GetSavedTabs();
        if (localStorage.getItem('isSingleTabMode') === 'true' && tabs.length > 1) {
            localStorage.setItem('SavedTabs', JSON.stringify(tabs.slice(1)));
            tabs = tabs.slice(1);
        }
        if (!tabs || tabs.length === 0) {
            SaveTab('MainPage', 'MainPage', "", api, GetPageTitle(routes ?? [], 'MainPage'));
        }
        else {
            tabs.forEach(e => {
                if (components[e.type] && e.type != startItem?.component.typeName) {
                    const newId = generateUniqueId(e.id, event.api);
                    if (newId) {
                        event.api.addPanel({
                            id: e.id,
                            component: e.type,
                            title: GetPageTitle(routes ?? [], e.type)
                        });
                    }
                }
                else {
                    console.warn(`can't find page with type ${e.type}, skip`);
                }
            });
        }
        if (startItem && startItem.component && event.api) {
            let id = startItem.id ?? 'RoutePage';
            id = generateUniqueId(id, event.api);
            if (!id)
                return;
            let canAddStartTab = true;
            if (event.api.panels.some(p => p.params?.type && p.params.type === startItem.component.typeName)) {
                if (!GetManyPageSupport(routes ?? [], startItem.component.typeName)) {
                    console.info("Tab with this type already exists");
                    canAddStartTab = false;
                }
            }
            if (canAddStartTab) {
                SaveTab(id, startItem.component.typeName, JSON.stringify({
                    canDublicate: startItem.canDublicate
                }), event.api, startItem.name, {
                    ...startItem.component.componentProps,
                    type: startItem.component.typeName
                });
            }
        }
    };
    api?.onDidActivePanelChange((event) => {
        console.log('active panel changed -> ' + event?.title);
        const route = routes?.find(r => r.component?.typeName === event?.api.component);
        if (route) {
            window.history.pushState({}, '', route.patch);
        }
        else if (event?.api.component === 'MainPage') {
            window.history.pushState({}, '', '/main');
        }
        else if (event?.api.component === '404Error') {
            window.history.pushState({}, '', '/not-found');
        }
    });
    // Срабатывает при закрытии вкладки
    api?.onDidRemovePanel((event) => {
        if (localStorage.getItem('isSingleTabMode') === 'true')
            return;
        updateOverflow();
        if (api?.panels.length === 0) {
            RemoveSavedTab(event.api.id);
            SaveTab('MainPage', 'MainPage', "", api, GetPageTitle(routes ?? [], 'MainPage'), {
                type: 'MainPage',
            });
        }
        else {
            RemoveSavedTab(event.api.id);
        }
    });
    useEffect(() => {
        if (!api) {
            return;
        }
        const updateTabWidths = () => {
            const tabs = document.querySelectorAll('.dv-tab');
            if (!tabs.length)
                return;
            // Находим самую длинную вкладку
            let maxWidth = 0;
            tabs.forEach(tab => {
                const width = tab.scrollWidth;
                maxWidth = Math.max(maxWidth, width);
            });
            // Ограничиваем максимальную ширину
            const finalWidth = Math.min(Math.max(maxWidth, 120), 250);
            tabWidthRef.current = finalWidth;
            // Применяем одинаковую ширину ко всем вкладкам
            tabs.forEach(tab => {
                tab.style.width = `${finalWidth}px`;
            });
        };
        const disposables = [
            api.onDidAddPanel(updateTabWidths),
            api.onDidRemovePanel(updateTabWidths),
            // Разрешаем перетаскивание только внутри группы
            api.onWillDragPanel((e) => {
                const sourceGroup = e.panel.group;
                // Добавляем данные о группе в объект перетаскивания
                e.nativeEvent.dataTransfer?.setData('sourceGroupId', sourceGroup.id);
            }),
            // Предотвращаем отображение оверлея для неразрешенных зон
            api.onWillShowOverlay((e) => {
                const sourceGroupId = e.nativeEvent.dataTransfer?.getData('sourceGroupId');
                const targetGroup = e.group;
                // Если целевая группа отличается от исходной - отменяем
                if (sourceGroupId && targetGroup && sourceGroupId !== targetGroup.id) {
                    e.preventDefault();
                }
                // Запрещаем все позиции кроме center/within
                if (!['center', 'within'].includes(e.position)) {
                    e.preventDefault();
                }
            }),
            // Отключаем перетаскивание групп полностью
            api.onWillDragGroup((e) => {
                e.nativeEvent.preventDefault();
            }),
        ];
        // Очистка обработчиков при размонтировании
        return () => {
            disposables.forEach(disposable => disposable.dispose());
        };
    }, [api]);
    // Срабатывает при переходе по ссылке
    useEffect(() => {
        // Возможно удалить 
        if (api && localStorage.getItem('isSingleTabMode') === 'true' && api?.panels.length > 1) {
            const activePanel = api.activePanel;
            api.panels.forEach(panel => {
                if (panel.api.id !== activePanel?.api.id) {
                    /* RemoveSavedTab(panel.id); */
                    api.removePanel(panel);
                }
            });
        }
        const componentInfo = routes ? routes
            .find(v => matchPath(v.patch, location.pathname) ||
            matchPath(v.patch, location.hash?.length > 1 ? location.hash.substring(1) : location.hash))
            : undefined;
        /* const componentInfo = routes?.find(v =>
            matchPath(v.patch, currentLocation.pathname) ||
            matchPath(v.patch, currentLocation.hash?.length > 1 ? currentLocation.hash.substring(1) : currentLocation.hash)
        ); */
        if (componentInfo) {
            if (componentInfo.removePreviousTab === true && api?.activePanel !== undefined) {
                RemoveSavedTab(api.activePanel.id);
                api?.removePanel(api.activePanel);
            }
            if (localStorage.getItem('isSingleTabMode') === 'true') {
                if (api?.activePanel) {
                    RemoveSavedTab(api.activePanel.id);
                    api.removePanel(api.activePanel);
                    let id = generateUniqueId(componentInfo.id ? componentInfo.id : (componentInfo.component.typeName), api);
                    if (id) {
                        SaveTab(id, componentInfo.component.typeName, JSON.stringify({
                            canDublicate: componentInfo.canDublicate
                        }), api, componentInfo.name, {
                            ...componentInfo.component.componentProps,
                            type: componentInfo.component.typeName
                        });
                    }
                    return;
                }
            }
            const existPage = api?.panels?.find(p => p.params?.type && p.params.type === componentInfo.component.typeName && (!componentInfo.canDublicate));
            if (existPage) {
                if (!GetManyPageSupport(routes ?? [], componentInfo.component.typeName)) {
                    console.info("Tab with this type already exists, switch to it");
                    existPage.group.setActive(true);
                    existPage.group.setVisible(true);
                    existPage.api.setActive();
                    // Ломает режим одной вкладки
                    /* existPage.api.moveTo({
                        group: existPage.group,
                        position: "center",
                        index: 0
                    }); */
                }
                return;
            }
            else {
                let newId = generateUniqueId(componentInfo.id ? componentInfo.id : (componentInfo.component.typeName), api);
                if (newId) {
                    SaveTab(newId, componentInfo.component.typeName, JSON.stringify({
                        canDublicate: componentInfo.canDublicate
                    }), api, componentInfo.name, {
                        ...componentInfo.component.componentProps,
                        type: componentInfo.component.typeName
                    });
                }
                else {
                    console.warn("can't generate unique id for tab", componentInfo);
                }
            }
        }
        else {
            console.warn('component associated with this location not found', currentLocation);
            if (api && api?.activePanel && localStorage.getItem('isSingleTabMode') === 'true') {
                api?.removePanel(api.activePanel);
            }
            let newId = generateUniqueId('404', api);
            if (newId && api && (!(localStorage.getItem('isSingleTabMode') === 'true') ||
                (localStorage.getItem('isSingleTabMode') === 'true' && (api.panels.length < 1 || GetSavedTabs().length < 1)))) {
                SaveTab(newId, '404Error', "", api, 'Страница не найдена', undefined);
            }
            else {
                console.warn("can't generate 404");
            }
        }
        const tabsContainer = document.querySelector('.tabs-and-actions-container') || document.querySelector('.dv-tabs-and-actions-container');
        if (tabsContainer) {
            if (localStorage.getItem('isTabsUnderHeader') === 'true') {
                tabsContainer.classList.remove('tabs-and-actions-container-titlebar');
            }
            else {
                tabsContainer.classList.add('tabs-and-actions-container-titlebar');
            }
        }
    }, [currentLocation, isTabsUnderHeader]);
    const BootstrapTooltip = styled(({ className, ...props }) => (jsx(Tooltip, { ...props, arrow: true, classes: { popper: className } })))(() => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: '#3A3A3A',
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#3A3A3A',
            marginTop: '0px !important',
        }
    }));
    function WindowControls() {
        return (jsxs("div", { style: { background: localStorage.getItem('isUsedDesktop') === 'true' ? '#00824A' : '#FFF' }, className: 'window-controls', children: [header && header({}), jsx(BootstrapTooltip, { sx: { marginTop: '5px !important' }, title: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438", children: jsx("button", { className: "titlebar-button settings", onClick: (e) => setSettingsAnchorEl(e.currentTarget), children: jsxs("svg", { width: "20", height: "20", viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", fill: "white", children: [jsx("title", {}), jsx("path", { d: "M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" }), jsx("path", { d: "M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" })] }) }) }), jsx("button", { className: "titlebar-button", onClick: () => ipcRenderer?.send('window-minimize'), children: jsx("svg", { width: "10", height: "1", viewBox: "0 0 10 1", children: jsx("path", { d: "M0 0h10v1H0z", fill: "currentColor" }) }) }), jsx("button", { className: "titlebar-button", onClick: () => ipcRenderer?.send('window-maximize'), children: jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", children: jsx("path", { d: "M0 0v10h10V0H0zm9 9H1V1h8v8z", fill: "currentColor" }) }) }), jsx("button", { className: "titlebar-button close", onClick: () => ipcRenderer.send('window-close'), children: jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", children: jsx("path", { d: "M9.1 1.1L8.9 0.9C8.7 0.7 8.3 0.7 8.1 0.9L5 4L1.9 0.9C1.7 0.7 1.3 0.7 1.1 0.9L0.9 1.1C0.7 1.3 0.7 1.7 0.9 1.9L4 5L0.9 8.1C0.7 8.3 0.7 8.7 0.9 8.9L1.1 9.1C1.3 9.3 1.7 9.3 1.9 9.1L5 6L8.1 9.1C8.3 9.3 8.7 9.3 8.9 9.1L9.1 8.9C9.3 8.7 9.3 8.3 9.1 8.1L6 5L9.1 1.9C9.3 1.7 9.3 1.3 9.1 1.1Z", fill: "currentColor" }) }) })] }));
    }
    const LeftHeader = () => {
        return (jsx("div", { style: { display: 'flex', alignItems: 'center', height: '45px', borderRight: !isActiveArrows.current && localStorage.getItem('isTabsUnderHeader') === 'true' ? '1px solid var(--bars-gray-mid1)' : 'none', }, children: !isActiveArrows.current ? jsx(Fragment, {}) :
                jsx(Button, { disabled: !isActiveArrows.current, sx: { minHeight: '35px', minWidth: '35px', marginLeft: '5px', marginRight: '5px', '-webkit-app-region': 'no-drag', backgroundColor: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#FFF' : '#00824A',
                        '&:hover': { backgroundColor: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#E8F5E9' : 'rgba(0, 0, 0, 0.23)' } }, onClick: () => {
                        const tabsContainer = document.querySelector('.dv-tabs-container');
                        if (tabsContainer) {
                            tabsContainer.scrollTo({
                                left: tabsContainer.scrollLeft - tabWidthRef.current,
                                behavior: 'smooth'
                            });
                        }
                    }, children: jsx("svg", { width: "16", height: "16", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10 12L6 8L10 4", stroke: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#00824A' : '#FFF', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) }));
    };
    const RightHeader = () => {
        return (jsxs("div", { style: { display: 'flex', height: '45px', alignItems: 'center', borderLeft: !isActiveArrows.current && localStorage.getItem('isTabsUnderHeader') === 'true' ? '1px solid var(--bars-gray-mid1)' : 'none' }, children: [!isActiveArrows.current ? jsx(Fragment, {}) :
                    jsx(Button, { disabled: !isActiveArrows.current, sx: { minHeight: '35px', minWidth: '35px', marginLeft: '10px', '-webkit-app-region': 'no-drag', backgroundColor: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#FFF' : '#00824A',
                            '&:hover': { backgroundColor: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#E8F5E9' : 'rgba(0, 0, 0, 0.23)' } }, onClick: () => {
                            const tabsContainer = document.querySelector('.dv-tabs-container');
                            if (tabsContainer) {
                                tabsContainer.scrollTo({
                                    left: tabsContainer.scrollLeft + tabWidthRef.current,
                                    behavior: 'smooth'
                                });
                            }
                        }, children: jsx("svg", { width: "16", height: "16", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M4 12L8 8L4 4", stroke: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#00824A' : '#FFF', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), jsx(Button, { sx: { cursor: 'pointer', minWidth: '35px', width: '35px', height: '35px', margin: '0 5px', borderRadius: '50%', '-webkit-app-region': 'no-drag', '&:hover': { backgroundColor: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#E8F5E9' : 'rgba(0, 0, 0, 0.23)' } }, onClick: (event) => setAnchorEl(event.currentTarget), children: jsxs("svg", { width: "35", height: "35", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("circle", { cx: "7", cy: "3", r: "1.2", fill: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#000' : '#FFF' }), jsx("circle", { cx: "7", cy: "8", r: "1.2", fill: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#000' : '#FFF' }), jsx("circle", { cx: "7", cy: "13", r: "1.2", fill: localStorage.getItem('isTabsUnderHeader') === 'true' ? '#000' : '#FFF' })] }) }), localStorage.getItem('isTabsUnderHeader') !== 'true' && jsx("div", { style: { width: '1px', height: '45px', backgroundColor: '#FFF', marginRight: '10px' } }), localStorage.getItem('isTabsUnderHeader') !== 'true' && WindowControls()] }));
    };
    return (jsxs("div", { className: styles.Dockview, style: { height: localStorage.getItem('isTabsUnderHeader') === 'true' ? 'calc(100vh - 45px)' : '100vh' }, children: [localStorage.getItem('isTabsUnderHeader') === 'true' &&
                WindowControls(), jsx(DockviewReact, { components: components, onReady: onReady, rightHeaderActionsComponent: RightHeader, prefixHeaderActionsComponent: LeftHeader, className: `dockview-theme-vs`, rootOverlayModel: {
                    size: { value: 0, type: 'pixels' }, // Отключаем оверлей корневого уровня
                    activationSize: { value: 0, type: 'percentage' },
                } }), jsx(BarsMenu, { anchorElement: anchorEl, setAnchorElement: setAnchorEl, children: jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [jsx(Button, { color: 'success', disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                if (api) {
                                    api.panels.forEach(panel => {
                                        api.removePanel(panel);
                                    });
                                }
                            }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438" }), jsx(Button, { color: "success", disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                if (api && api.activePanel) {
                                    api.removePanel(api.activePanel);
                                }
                            }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0432\u043A\u043B\u0430\u0434\u043A\u0443" }), jsx(Button, { color: 'success', disabled: localStorage.getItem('isSingleTabMode') === 'true', className: styles.menuButtonTabs, onClick: () => {
                                if (api && api.activePanel) {
                                    api.panels.forEach(panel => {
                                        if (panel.id !== api.activePanel?.id) {
                                            api.removePanel(panel);
                                        }
                                    });
                                }
                            }, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438, \u043A\u0440\u043E\u043C\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439" }), jsx("div", { style: { width: '90%', height: '1px', backgroundColor: '#EFEFEF',
                                borderRadius: '10px', margin: '6px 0' } }), jsxs("div", { style: { display: 'flex', alignItems: 'center', marginRight: '10px' }, children: [jsx(IOSSwitch, { sx: { m: 1 }, checked: isTabsUnderHeader, onChange: (e) => {
                                        localStorage.setItem('isTabsUnderHeader', e.target.checked.toString());
                                        handleTabModeChange(e);
                                    } }), jsx("span", { children: "\u0412\u043A\u043B\u0430\u0434\u043A\u0438 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435" })] })] }) }), jsxs(Menu$1, { anchorEl: settingsAnchorEl, open: !!settingsAnchorEl, onClose: () => setSettingsAnchorEl(null), sx: {
                    '& .MuiMenu-paper': {
                        position: 'absolute !important',
                        right: '155px !important',
                        left: 'auto !important',
                        top: '35px !important',
                        marginTop: '10px',
                        boxShadow: "none",
                        border: "1px solid #C4C4C4"
                    },
                }, MenuListProps: { sx: { display: 'flex', flexDirection: 'column' } }, children: [jsx(Button, { color: 'success', className: 'menuButtonSettings', onClick: () => {
                            window.location.reload();
                        }, children: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C" }), jsx(Button, { color: 'success', className: 'menuButtonSettings', children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 2" })] }), jsxs(Menu$1, { anchorEl: menuAnchorEl, open: !!menuAnchorEl, onClose: () => setMenuAnchorEl(null), sx: {
                    '& .MuiMenu-paper': {
                        marginTop: '5px',
                        marginLeft: '5px',
                        boxShadow: "none",
                        border: "1px solid #C4C4C4"
                    },
                }, MenuListProps: { sx: { display: 'flex', flexDirection: 'column' } }, children: [jsx(Button, { color: 'success', className: 'menuButtonMenu', children: "\u041A\u043D\u043E\u043F\u043A\u0430 1" }), jsx(Button, { color: 'success', className: 'menuButtonMenu', children: "\u041A\u043D\u043E\u043F\u043A\u0430 2" })] })] }));
};

function DockviewRouter({ routes, menuSections, startItem, authService, disbleAuth, entryPointAddress, customEntryPointClient, ipcRenderer }) {
    const isLogged = localStorage.getItem('isLoggedIn') == 'true';
    const isAuth = disbleAuth == true ? true : isLogged;
    return (jsx(Fragment, { children: isAuth ? (jsxs(DockviewContext.Provider, { value: { api: undefined }, children: [" ", jsx(Menu, { sections: menuSections, children: localStorage.getItem('isUsedDesktop') === 'true' ?
                        localStorage.getItem('isTabsUnderHeader') === 'true' ?
                            jsx(DockviewTitleBar, { routes: routes, startItem: startItem, header: () => jsx(Header, { authService: authService }), ipcRenderer: ipcRenderer }) :
                            jsx(DockviewTitleBar, { routes: routes, startItem: startItem, header: () => jsx(Header, { authService: authService }), ipcRenderer: ipcRenderer })
                        :
                            jsx(Dockview, { routes: routes, startItem: startItem, header: () => jsx(Header, { authService: authService }) }) })] })) : (jsx(LoginPage, { authService: authService, entryPointAddress: entryPointAddress, customEntryPointClient: customEntryPointClient, ipcRenderer: ipcRenderer })) }));
}

function MapRoutes(routes, menuSections, ipcRenderer, disableAuth, authService, entryPointAddress, customEntryPointClient) {
    return [
        {
            path: '/*',
            errorElement: InternalErrorPage(),
            element: DockviewRouter({
                startItem: {
                    patch: '*',
                    component: {
                        customComponent: NotFoundPage,
                        typeName: '404Error'
                    },
                    name: 'Страница не найдена',
                    canDublicate: true
                },
                menuSections: menuSections,
                entryPointAddress: entryPointAddress,
                customEntryPointClient: customEntryPointClient,
                routes: routes,
                authService: authService,
                disbleAuth: disableAuth,
                ipcRenderer: ipcRenderer
            }),
        },
        {
            path: '/main',
            errorElement: InternalErrorPage(),
            element: DockviewRouter({
                startItem: {
                    patch: '/main',
                    component: {
                        customComponent: MainPage,
                        typeName: 'MainPage',
                    },
                    removePreviousTab: true,
                    name: 'Главная страница',
                    canDublicate: false
                },
                menuSections: menuSections,
                entryPointAddress: entryPointAddress,
                customEntryPointClient: customEntryPointClient,
                routes: routes,
                authService: authService,
                disbleAuth: disableAuth,
                ipcRenderer: ipcRenderer
            }),
        },
        {
            path: '/web',
            errorElement: InternalErrorPage(),
            element: DockviewRouter({ startItem: {
                    patch: '/web',
                    component: {
                        customComponent: MainPage,
                        typeName: 'MainPage',
                    },
                    removePreviousTab: true,
                    name: 'Главная страница',
                    canDublicate: false
                },
                menuSections: menuSections,
                entryPointAddress: entryPointAddress,
                customEntryPointClient: customEntryPointClient,
                routes: routes,
                authService: authService,
                disbleAuth: disableAuth,
                ipcRenderer: ipcRenderer
            }),
        },
        {
            path: '/',
            errorElement: InternalErrorPage(),
            element: DockviewRouter({ routes: routes, menuSections: menuSections,
                disbleAuth: disableAuth, authService: authService, entryPointAddress: entryPointAddress, customEntryPointClient: customEntryPointClient, ipcRenderer: ipcRenderer }),
        }, ...routes.map((v) => {
            return {
                path: v.patch,
                errorElement: InternalErrorPage(),
                element: DockviewRouter({ routes: routes, menuSections: menuSections,
                    startItem: v, authService: authService, disbleAuth: disableAuth, entryPointAddress: entryPointAddress, customEntryPointClient: customEntryPointClient, ipcRenderer: ipcRenderer })
            };
        })
    ];
}

function BarsCore({ routes, menuSections, themeSettings, dateLocale, muiTheme, disableAuth, authService, authServiceAddress, entryPointAddress, customEntryPointClient, ipcRenderer }) {
    if (authServiceAddress && authServiceAddress?.length > 0) {
        sessionStorage.setItem('customAuthService', authServiceAddress);
    }
    const customTheme = createTheme({
        palette: {
            primary: {
                main: themeSettings?.PrimaryColor ?? '#00824A'
            },
            secondary: {
                main: themeSettings?.SecondaryColor ?? '#3AE099'
            }
        },
        typography: {
            fontFamily: themeSettings?.FontFamily ?? 'Rubik, system-ui, Arial, sans-serif',
            button: {
                textTransform: 'none',
                fontSize: '16px'
            }
        }
    });
    const router = createBrowserRouter(MapRoutes(routes, menuSections, ipcRenderer, disableAuth, authService, entryPointAddress, customEntryPointClient));
    return (jsx(ThemeProvider, { theme: muiTheme ?? customTheme, children: jsxs(LocalizationProvider, { dateAdapter: AdapterDayjs, adapterLocale: dateLocale ?? 'ru', children: [jsx(RouterProvider, { router: router }), jsx(Snackbar, {})] }) }));
}

export { BarsCore };
