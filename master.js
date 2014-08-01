// Window load event used just in case window height is dependant upon images
var $jq = jQuery.noConflict(true);

function stickyFoot() {
	var bodyHeight = $jq("body.yui-skin-sam").height();
	var vwptHeight = $jq(window).height();
	var footHeight = 45;
	var headerHeight = $jq("#header").height();
	$jq("#main-table").css("min-height",vwptHeight-footHeight-headerHeight);
}

function sidePanelFix() {
	$jq("a:contains('Previous Build')").prev().addClass("bg-arrow-left-icon");
	$jq("a:contains('Next Build')").prev().addClass("bg-arrow-right-icon");
}

$jq(document).ready(function() {
  stickyFoot();
  sidePanelFix();
});

$jq(window).resize(function() {
  stickyFoot();
});

$jq(document).scroll(function() {
  stickyFoot();
});

