/* @ds-bundle: {"format":4,"namespace":"TiagoFavariDesignSystem_4ee071","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"PhotoFrame","sourcePath":"components/media/PhotoFrame.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"9d276a371027","components/core/Badge.jsx":"5597b24bd7c1","components/core/Button.jsx":"8406709c1ac2","components/core/Divider.jsx":"143380469399","components/core/Tag.jsx":"b8b6988f3995","components/forms/Field.jsx":"f955ceb2d45f","components/media/PhotoFrame.jsx":"7537fc142c3f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TiagoFavariDesignSystem_4ee071 = window.TiagoFavariDesignSystem_4ee071 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Logo
 * Type-built brand marks (no image dependency), so they stay crisp at
 * any size and travel into any project. Variants:
 *   monogram  — overlapping "TF"
 *   stack     — "TF" over FOTOGRAFIA
 *   wordmark  — Tiago / Favari (upright + italic)
 *   seal      — circular est. mark (SVG textPath)
 */
function Logo({
  variant = "stack",
  tone = "ink",
  size = 96,
  layout = "stack",
  style = {},
  ...rest
}) {
  const fg = tone === "onInk" || tone === "light" ? "var(--paper)" : "var(--ink-900)";
  const muted = tone === "onInk" || tone === "light" ? "var(--ink-300)" : "var(--ink-500)";
  if (variant === "monogram" || variant === "stack") {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        color: fg,
        lineHeight: 1,
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: size,
        letterSpacing: "-0.08em",
        lineHeight: 0.9
      }
    }, "TF"), variant === "stack" && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: size * 0.12,
        letterSpacing: "0.34em",
        textTransform: "uppercase",
        color: muted,
        marginTop: size * 0.08,
        paddingLeft: "0.34em"
      }
    }, "Fotografia"));
  }
  if (variant === "wordmark") {
    const inline = layout === "inline";
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: fg,
        lineHeight: 0.95,
        ...style
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: size,
        letterSpacing: "-0.01em"
      }
    }, "Tiago", inline ? " " : "", inline && /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: "italic",
        fontWeight: 400
      }
    }, "Favari")), !inline && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: size,
        letterSpacing: "-0.01em"
      }
    }, "Favari"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: size * 0.16,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: muted,
        marginTop: size * 0.18
      }
    }, "Fotografia \xB7 SP"));
  }

  // seal
  const id = React.useId().replace(/:/g, "");
  const r = 92;
  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 220 220",
    width: size,
    height: size,
    style: {
      display: "block",
      ...style
    },
    role: "img",
    "aria-label": "Tiago Favari \u2014 Fotografia"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: `ring-${id}`,
    d: `M110,110 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "104",
    fill: "none",
    stroke: fg,
    strokeWidth: "1",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("text", {
    fill: fg,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "13px",
      letterSpacing: "0.32em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#ring-${id}`,
    startOffset: "0%"
  }, "TIAGO FAVARI \xB7 FOTOGRAFIA \xB7 EST \xB7 2013 \xB7 ")), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "118",
    textAnchor: "middle",
    fill: fg,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "58px",
      letterSpacing: "-0.06em"
    }
  }, "TF"), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "150",
    textAnchor: "middle",
    fill: muted,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "11px",
      letterSpacing: "0.3em",
      textTransform: "uppercase"
    }
  }, "Fotografia"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Badge
 * Small status/meta marker. Outline by default (hairline), or solid.
 * Squared corners to match the brand's print-frame language.
 */
function Badge({
  children,
  variant = "outline",
  tone = "neutral",
  style = {},
  ...rest
}) {
  const toneColor = {
    neutral: "var(--ink-700)",
    positive: "var(--status-positive)",
    warning: "var(--status-warning)",
    danger: "var(--status-danger)"
  }[tone];
  const variants = {
    outline: {
      background: "transparent",
      color: toneColor,
      border: `1px solid ${toneColor === "var(--ink-700)" ? "var(--border-strong)" : toneColor}`
    },
    solid: {
      background: toneColor,
      color: "var(--paper)",
      border: "1px solid transparent"
    },
    soft: {
      background: "var(--ink-100)",
      color: "var(--ink-700)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      padding: "4px 9px",
      borderRadius: "var(--radius-xs)",
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Button
 * Editorial, square-cornered. Label text is uppercase, widely tracked
 * (the brand's "BAIXAR" download-button style).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconRight = null,
  iconLeft = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "10px",
      letterSpacing: "0.2em"
    },
    md: {
      padding: "12px 24px",
      fontSize: "11px",
      letterSpacing: "0.22em"
    },
    lg: {
      padding: "16px 34px",
      fontSize: "12px",
      letterSpacing: "0.24em"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.7em",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: 1,
    border: "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    WebkitTapHighlightColor: "transparent",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--ink-900)",
      color: "var(--paper)",
      borderColor: "var(--ink-900)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ink-900)",
      borderColor: "var(--ink-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-900)",
      borderColor: "transparent"
    },
    onInk: {
      background: "var(--paper)",
      color: "var(--ink-900)",
      borderColor: "var(--paper)"
    },
    onInkOutline: {
      background: "transparent",
      color: "var(--paper)",
      borderColor: "var(--paper-veil-72)"
    }
  };
  const hovers = {
    primary: {
      background: "var(--ink-700)",
      borderColor: "var(--ink-700)"
    },
    secondary: {
      background: "var(--ink-900)",
      color: "var(--paper)"
    },
    ghost: {
      background: "var(--ink-veil-12)"
    },
    onInk: {
      background: "var(--white)"
    },
    onInkOutline: {
      background: "var(--paper-veil-12)",
      borderColor: "var(--paper)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({}, rest, {
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : {}),
      ...style
    }
  }), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Divider
 * A thin brand rule. Optional centered middot or label set in the gap.
 */
function Divider({
  label = null,
  tone = "default",
  style = {},
  ...rest
}) {
  const color = tone === "onInk" ? "var(--border-on-ink)" : "var(--border-hairline)";
  const textColor = tone === "onInk" ? "var(--text-on-ink-muted)" : "var(--text-muted)";
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
      style: {
        border: "none",
        borderTop: `1px solid ${color}`,
        margin: 0,
        ...style
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: textColor,
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Tag
 * The wide-tracked uppercase label used as a category marker
 * (RETRATOS · EDITORIAL · CORPORATIVO). Optional leading rule.
 */
function Tag({
  children,
  tone = "default",
  rule = false,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--text-secondary)"
    },
    ink: {
      color: "var(--ink-900)"
    },
    onInk: {
      color: "var(--paper)"
    },
    muted: {
      color: "var(--text-muted)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.7em",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      ...tones[tone],
      ...style
    }
  }), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: "24px",
      height: "1px",
      background: "currentColor",
      opacity: 0.5,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — Field
 * Underline text input with a tracked uppercase label. Editorial,
 * minimal — no boxes. Works for text, email, textarea and selects.
 */
function Field({
  label,
  as = "input",
  hint = null,
  required = false,
  id,
  style = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const Control = as;
  const controlStyle = {
    width: "100%",
    border: "none",
    borderBottom: `1.5px solid ${focus ? "var(--ink-900)" : "var(--border-strong)"}`,
    background: "transparent",
    fontFamily: as === "select" ? "var(--font-sans)" : "var(--font-display)",
    fontSize: as === "textarea" ? "16px" : "20px",
    color: "var(--text-primary)",
    padding: "6px 0",
    outline: "none",
    borderRadius: 0,
    transition: "border-color var(--dur-fast) var(--ease-standard)",
    resize: as === "textarea" ? "vertical" : undefined,
    appearance: as === "select" ? "none" : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "10px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger)",
      marginLeft: "0.4em"
    }
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: controlStyle
  }, rest), children), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiago Favari — PhotoFrame
 * A framed image in the brand's print language: square-ish corners,
 * soft "print lift" shadow, optional index number and tracked caption.
 * When no `src` is given it renders a tasteful warm placeholder.
 */
function PhotoFrame({
  src = null,
  alt = "",
  ratio = "4 / 5",
  index = null,
  caption = null,
  meta = null,
  elevated = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: src ? "var(--ink-100)" : "repeating-linear-gradient(135deg, #d8d2c6 0 22px, #cfc8ba 22px 44px)",
      boxShadow: elevated ? "var(--shadow-print)" : "none",
      border: "1px solid var(--border-hairline)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "10px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, "Fotografia"), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "20px",
      color: "var(--paper)",
      textShadow: "0 1px 8px rgba(11,11,11,0.5)"
    }
  }, String(index).padStart(2, "0"))), (caption || meta) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      color: "var(--text-primary)"
    }
  }, caption), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "10px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, meta)));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

})();
