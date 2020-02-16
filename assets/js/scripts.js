function loadScripts()
{
	var interval = setInterval(function() {
		if (document.querySelectorAll('.loader').length < 1) {
            // page ready, start loading scripts
            clearInterval(interval);

            // close (mobile) navigation bar on navigate
            closeMainNavigationOnNavigate();

			// initialize image zooming
            loadLumosScripts();

            // initiliaze code highlighting
            loadHighlightScripts();
		}
	}, 250);
}

// This will be triggered on the first load, when loading the index.html
// Navigation events will be handled in the MainLayout and re-trigger this function
loadScripts();

function closeMainNavigationOnNavigate() {
    $('#navigation .nav-link').on('click', function () {
        $('#navigation').collapse('hide');
    });
}

// -- Lumos : Image Zooming
function loadLumosScripts() {
	var blogPostImages = $('.blog-post-body img:not(.img-banner),blog-post-body .imgfluid');
	blogPostImages.attr('data-action', 'lumos');
	
    initLumos();
}

// -- Highlight.js: Code block styling
function loadHighlightScripts() {  
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
}
