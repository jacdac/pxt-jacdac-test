"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8368],{

/***/ 58368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DrawerSearchInput; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(47167);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js


function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiInputAdornment', slot);
}
const inputAdornmentClasses = (0,generateUtilityClasses/* default */.Z)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ var InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js


var _span;
const _excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];













const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${(0,capitalize/* default */.Z)(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
const useUtilityClasses = ownerState => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${(0,capitalize/* default */.Z)(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${(0,capitalize/* default */.Z)(size)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  height: '0.01em',
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: '2em',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  color: (theme.vars || theme).palette.action.active
}, ownerState.variant === 'filled' && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]: {
    marginTop: 16
  }
}, ownerState.position === 'start' && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, ownerState.position === 'end' && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, ownerState.disablePointerEvents === true && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: 'none'
}));
const InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiInputAdornment'
  });
  const {
      children,
      className,
      component = 'div',
      disablePointerEvents = false,
      disableTypography = false,
      position,
      variant: variantProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const muiFormControl = (0,useFormControl/* default */.Z)() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default.Provider */.Z.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, (0,esm_extends/* default */.Z)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      ref: ref
    }, other, {
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "text.secondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ? /* notranslate needed while Google Translate will not fix zero-width space issue */_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          children: "\u200B"
        })) : null, children]
      })
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var InputAdornment_InputAdornment = (InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Clear.js
var Clear = __webpack_require__(63343);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
;// CONCATENATED MODULE: ./src/components/shell/DrawerSearchInput.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
function DrawerSearchInput(props){var{searchQuery,setSearchQuery}=props;var{0:focused,1:setFocused}=(0,react.useState)(false);var textId=(0,react.useId)();var handleChange=event=>(0,react.startTransition)(()=>setSearchQuery(event.target.value));var handleClear=()=>setSearchQuery("");var handleFocus=()=>setFocused(true);var handleBlur=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){yield (0,utils/* delay */.gw)(200);setFocused(false);});return function handleBlur(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:textId,label:"Search",margin:"normal",variant:"outlined",type:"search",size:"small","aria-label":"Search documentation",value:searchQuery,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur,InputProps:focused?{endAdornment:/*#__PURE__*/react.createElement(InputAdornment_InputAdornment,{position:"end"},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{trackName:"search.clear",title:"clear",size:"small",onClick:handleClear},/*#__PURE__*/react.createElement(Clear/* default */.Z,null)))}:undefined});}

/***/ })

}]);
//# sourceMappingURL=8368-742a851dfbb3819cbe73.js.map