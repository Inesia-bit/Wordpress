!function(t){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.editor=redux.field_objects.editor||{},t(document).ready(function(){}),redux.field_objects.editor.init=function(e){setTimeout(function(){if("undefined"!=typeof tinymce)for(var e=0;e<tinymce.editors.length;e++)redux.field_objects.editor.onChange(e)},1e3)},redux.field_objects.editor.onChange=function(e){tinymce.editors[e].on("change",function(e){0!==jQuery(e.target.contentAreaContainer).parents(".redux-container-editor:first").length&&redux_change(t(".wp-editor-area"))})}}(jQuery);