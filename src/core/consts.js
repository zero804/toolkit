{
  const SUPPORTED_EVENTS = [
    // clipboard events
    'onCopy',
    'onCut',
    'onPaste',
    // composition events
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    // keyboard events
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    // focus events
    'onFocus',
    'onBlur',
    // form events
    'onChange',
    'onInput',
    'onSubmit',
    // mouse events
    'onAuxClick',
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    // selection events
    'onSelect',
    // touch events
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    // UI events
    'onScroll',
    // wheel events
    'onWheel',
    // media events
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    // image events
    'onLoad',
    'onError',
    // animation events
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    // transition events
    'onTransitionEnd',
  ];

  const SUPPORTED_ATTRIBUTES = [
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'challenge',
    'charSet',
    'checked',
    'cite',
    'classID',
    // 'class',
    'colSpan',
    'cols',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'disabled',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'label',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'nonce',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'profile',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'reversed',
    'role',
    'rowSpan',
    'rows',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    // 'style',
    'summary',
    'tabIndex',
    'target',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap ',
  ];

  const SUPPORTED_STYLES = Object.keys(document.documentElement.style);

  const SUPPORTED_FILTERS = [
    'blur',
    'brightness',
    'contrast',
    'dropShadow',
    'grayscale',
    'hueRotate',
    'invert',
    'opacity',
    'sepia',
    'saturate'
  ];

  const SUPPORTED_TRANSFORMS = [
    'matrix',
    'matrix3d',
    'translate',
    'translate3d',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scale3d',
    'scaleX',
    'scaleY',
    'scaleZ',
    'rotate',
    'rotate3d',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
    'perspective'
  ];

  const Consts = {
    SUPPORTED_ATTRIBUTES,
    SUPPORTED_EVENTS,
    SUPPORTED_STYLES,
    SUPPORTED_FILTERS,
    SUPPORTED_TRANSFORMS
  };

  module.exports = Consts;
}
