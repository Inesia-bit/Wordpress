!function(B){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.color_rgba=redux.field_objects.color_rgba||{},redux.field_objects.color_rgba.fieldID="",redux.field_objects.color_rgba.hexToRGBA=function(e,a){var r;null===e?r="":(e=e.replace("#",""),r="rgba("+parseInt(e.substring(0,2),16)+","+parseInt(e.substring(2,4),16)+","+parseInt(e.substring(4,6),16)+","+a+")");return r},redux.field_objects.color_rgba.init=function(e){e||(e=B(document).find(".redux-group-tab:visible").find(".redux-container-color_rgba:visible")),B(e).each(function(){var e=B(this),a=e;e.hasClass("redux-field-container")||(a=e.parents(".redux-field-container:first")),a.is(":hidden")||a.hasClass("redux-field-init")&&(a.removeClass("redux-field-init"),redux.field_objects.color_rgba.modInit(e),redux.field_objects.color_rgba.initColorPicker(e))})},redux.field_objects.color_rgba.modInit=function(e){redux.field_objects.color_rgba.fieldID=e.find(".redux-color_rgba-container").data("id")},redux.field_objects.color_rgba.initColorPicker=function(c){var e=redux.field_objects.color_rgba.fieldID,a=c.find(".redux-color-rgba"),r=a.data("current-alpha");r=Number(null==r?1:r);var t=a.data("current-color");t=""===t||"transparent"===t?"":t;var d=a.data("output-transparent");d=Boolean(""!==d&&d);var o=c.find(".redux-color-rgba-container"),l=o.data("palette");l=decodeURIComponent(l),null===(l=JSON.parse(l))&&(l=[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d9ead3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]]);var n=o.data("show-input");n=Boolean(""!==n&&n);var f=o.data("show-initial");f=Boolean(""!==f&&f);var i=o.data("show-alpha");i=Boolean(""!==i&&i);var s=o.data("allow-empty");s=Boolean(""!==s&&s);var u=o.data("show-palette");u=Boolean(""!==u&&u);var b=o.data("show-palette-only");b=Boolean(""!==b&&b);var x=o.data("show-selection-palette");x=Boolean(""!==x&&x);var p=Number(o.data("max-palette-size")),g=o.data("clickout-fires-change");g=Boolean(""!==g&&g);var h=String(o.data("choose-text")),_=String(o.data("cancel-text")),v=String(o.data("input-text")),m=o.data("show-buttons");m=Boolean(""!==m&&m);var w=String(o.data("container-class")),j=String(o.data("replacer-class"));a.spectrum({color:t,showAlpha:i,showInput:n,allowEmpty:s,className:"redux-color-rgba",showInitial:f,showPalette:u,showSelectionPalette:x,maxPaletteSize:p,showPaletteOnly:b,clickoutFiresChange:g,chooseText:h,cancelText:_,showButtons:m,containerClassName:w,replacerClassName:j,preferredFormat:"hex6",localStorageKey:"redux.color-rgba."+e,palette:l,inputText:v,change:function(e){var a,r,t;r=null===e?(a=!0===d?"transparent":null,null):(a=e.toHexString(),e.alpha),t="transparent"!=a?redux.field_objects.color_rgba.hexToRGBA(a,r):"transparent";var o=B(this).data("block-id");c.find("input#"+o+"-color").val(a),c.find("input#"+o+"-alpha").val(r),c.find("input#"+o+"-rgba").val(t),redux_change(c.find(".redux-color-rgba-container"))}})}}(jQuery);