!function(u){"use strict";redux.field_objects=redux.field_objects||{},redux.field_objects.button_set=redux.field_objects.button_set||{},u(document).ready(function(){if(void 0!==u.fn.button.noConflict){var t=u.fn.button.noConflict();u.fn.btn=t}}),redux.field_objects.button_set.init=function(t){t||(t=u(document).find(".redux-group-tab:visible").find(".redux-container-button_set:visible")),u(t).each(function(){var t=u(this),e=t;t.hasClass("redux-field-container")||(e=t.parents(".redux-field-container:first")),e.is(":hidden")||e.hasClass("redux-field-init")&&(e.removeClass("redux-field-init"),t.find(".buttonset").each(function(){u(this).is(":checkbox")&&u(this).find(".buttonset-item").button(),u(this).buttonset()}),t.find(".buttonset-item.multi").on("click",function(t){var e="",n="",i=u(this).attr("id"),s=u(this).parent().find(".buttonset-empty"),d=s.attr("data-name"),o=!1;u(this).parent().find(".buttonset-item").each(function(){u(this).is(":checked")&&(o=!0)}),o?s.attr("name",""):s.attr("name",d),u(this).is(":checked")&&(e=u(this).attr("data-val"),n=d+"[]"),u(this).parent().find("#"+i+"-hidden.buttonset-check").val(e),u(this).parent().find("#"+i+"-hidden.buttonset-check").attr("name",n),redux_change(u(this))}))})}}(jQuery);