var btnSubmit_onclick=function(t){var n=$(this),o=n.parents("form");o.attr("method",n.data("method")),o.attr("action",n.data("action")),o.submit(),n.off().prop("disable",!0),o.on("submit",!1)},document_onready=function(t){$("input[type='submit']").on("click",btnSubmit_onclick)};$(document).ready(document_onready);