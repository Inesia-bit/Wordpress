!function(o){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.background=redux.field_objects.background||{},redux.field_objects.background.init=function(e){e||(e=o(document).find(".redux-group-tab:visible").find(".redux-container-background:visible")),o(e).each(function(){var a=o(this),e=a;if(a.hasClass("redux-field-container")||(e=a.parents(".redux-field-container:first")),!e.is(":hidden")&&e.hasClass("redux-field-init")){e.removeClass("redux-field-init"),a.find(".redux-remove-background").unbind("click").on("click",function(e){return e.preventDefault(),redux.field_objects.background.removeImage(o(this).parents(".redux-container-background:first")),!1}),a.find(".redux-background-upload").unbind().on("click",function(e){redux.field_objects.background.addImage(e,o(this).parents(".redux-container-background:first"))}),a.find(".redux-background-input").on("change",function(){redux.field_objects.background.preview(o(this))}),a.find(".redux-color").wpColorPicker({change:function(e,i){o(this).val(i.color.toString()),redux_change(o(this)),o("#"+e.target.id+"-transparency").removeAttr("checked"),redux.field_objects.background.preview(o(this))},clear:function(e,i){o(this).val(i.color.toString()),redux_change(o(this).parent().find(".redux-color-init")),redux.field_objects.background.preview(o(this))}}),a.find(".redux-color").on("blur",function(){var e=o(this).val(),i="#"+o(this).attr("id");"transparent"===e?(o(this).parent().parent().find(".wp-color-result").css("background-color","transparent"),a.find(i+"-transparency").attr("checked","checked")):(colorValidate(this)===e&&0!==e.indexOf("#")&&o(this).val(o(this).data("oldcolor")),a.find(i+"-transparency").removeAttr("checked"))}),a.find(".redux-color").on("focus",function(){o(this).data("oldcolor",o(this).val())}),a.find(".redux-color").on("keyup",function(){var e=o(this).val(),i=colorValidate(this),r="#"+o(this).attr("id");"transparent"===e?(o(this).parent().parent().find(".wp-color-result").css("background-color","transparent"),a.find(r+"-transparency").attr("checked","checked")):(a.find(r+"-transparency").removeAttr("checked"),i&&i!==o(this).val()&&o(this).val(i))}),a.find(".color-transparency").on("click",function(){if(o(this).is(":checked"))a.find(".redux-saved-color").val(o("#"+o(this).data("id")).val()),a.find("#"+o(this).data("id")).val("transparent"),a.find("#"+o(this).data("id")).parent().parent().find(".wp-color-result").css("background-color","transparent");else if("transparent"===a.find("#"+o(this).data("id")).val()){var e=o(".redux-saved-color").val();""===e&&(e=o("#"+o(this).data("id")).data("default-color")),a.find("#"+o(this).data("id")).parent().parent().find(".wp-color-result").css("background-color",e),a.find("#"+o(this).data("id")).val(e)}redux.field_objects.background.preview(o(this)),redux_change(o(this))});var i={width:"resolve",triggerChange:!0,allowClear:!0},r=a.find(".select2_params");if(0<r.size()){var t=r.val();t=JSON.parse(t),i=o.extend({},i,t)}a.find(" .redux-background-repeat, .redux-background-clip, .redux-background-origin, .redux-background-size, .redux-background-attachment, .redux-background-position").select2(i)}})},redux.field_objects.background.preview=function(e){var i=o(e).parents(".redux-container-background:first"),r=o(i).find(".background-preview");if(r){var a=!0,t="height:"+r.height()+"px;";o(i).find(".redux-background-input").each(function(){var e=o(this).serializeArray();(e=e[0])&&-1!=e.name.indexOf("[background-")&&""!==e.value&&(a=!1,e.name=e.name.split("[background-"),e.name="background-"+e.name[1].replace("]",""),"background-image"==e.name?t+=e.name+':url("'+e.value+'");':t+=e.name+":"+e.value+";")}),a?r.slideUp():r.attr("style",t).fadeIn()}},redux.field_objects.background.addImage=function(e,d){var n;e.preventDefault();var i=o(this);n||(n=wp.media({multiple:!1,library:{},title:i.data("choose"),button:{text:i.data("update")}})).on("select",function(){var e=n.state().get("selection").first();if(n.close(),"image"===e.attributes.type){d.find(".upload").val(e.attributes.url),d.find(".upload-id").val(e.attributes.id),d.find(".upload-height").val(e.attributes.height),d.find(".upload-width").val(e.attributes.width),redux_change(o(d).find(".upload-id"));var i=e.attributes.url;if(void 0!==e.attributes.sizes&&void 0!==e.attributes.sizes.thumbnail)i=e.attributes.sizes.thumbnail.url;else if(void 0!==e.attributes.sizes){var r=e.attributes.height;for(var a in e.attributes.sizes){var t=e.attributes.sizes[a];t.height<r&&(r=t.height,i=t.url)}}else i=e.attributes.icon;d.find(".upload-thumbnail").val(i),d.find(".upload").hasClass("noPreview")||d.find(".screenshot").empty().hide().append('<img class="redux-option-image" src="'+i+'">').slideDown("fast"),d.find(".redux-remove-background").removeClass("hide"),d.find(".redux-background-input-properties").slideDown(),redux.field_objects.background.preview(d.find(".upload"))}}),n.open()},redux.field_objects.background.removeImage=function(e){e.find(".redux-remove-background").addClass("hide")&&(e.find(".redux-remove-background").addClass("hide"),e.find(".upload").val(""),e.find(".upload-id").val(""),e.find(".upload-height").val(""),e.find(".upload-width").val(""),redux_change(o(e).find(".upload-id")),e.find(".redux-background-input-properties").hide(),e.find(".screenshot").slideUp(),e.find(".remove-file").unbind(),0<o(".section-upload .upload-notice").length&&o(".redux-background-upload").remove())}}(jQuery);