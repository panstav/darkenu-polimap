var zoom = 0.1;
var offset_y = 0;
var offset_x = 0;
var mouse_x = 0;
var mouse_y = 0;
var is_dragging = false;
var mouse_down = false;
var over_link = false;

function init()
{
	// First - hide the content and move the "loading" tag to the center
	$("#content").css("visibility", "hidden");
	center_loading_tag();

	// Hide the scroll bars
	$("body").css("overflow", "hidden");
	
	// Set the scroll handlers
	$(document).mousewheel(
		function(event, delta)
		{
			// Set the zoom factor
			var zoom_factor = 1.09;
			if (delta < 0) zoom_factor = 1 / zoom_factor;

			if (zoom * zoom_factor > 1.5 ||
				zoom * zoom_factor < 0.1)
				return;
			
			// Calculate new view paramters
			offset_x = mouse_x * (1 - zoom_factor) + zoom_factor * offset_x;
			offset_y = mouse_y * (1 - zoom_factor) + zoom_factor * offset_y;
			zoom *= zoom_factor;

			// Redraw
			zoom_images();
			event.preventDefault();
		}
	);
	
	// Set the cursor to be regular (IE again... arggggg...)
	$(document).css("cursor", "url('images/cursor/cursor.ico'),auto");
	
	// Set the function to save the last mouse x,y
	$(document).on("mousemove", function(e)
								{
									if (mouse_down)
									{
										is_dragging = true;
										offset_x += e.pageX - mouse_x;
										offset_y += e.pageY - mouse_y;
										move_images();
									}
									mouse_x = e.pageX;
									mouse_y = e.pageY;
									
									var link = get_link();
									if ((link == null || link == "") && (over_link))
									{
										over_link = false;
										$("body").css("cursor", "default");
									}
									else if (link != null && link != "" && !over_link)
									{
										over_link = true;
										$("body").css("cursor", "pointer");
									}
								});
	$(document).on("mousedown", function(e)
								{
									mouse_down = true;
									$(document).css("cursor", "url('images/cursor/grab.cur'),move");
									
									e.preventDefault();
								});
	$(document).on("mouseup", function(e)
	{
		mouse_down = false;
		if (is_dragging)
		{
			is_dragging = false;
		}
		else
		{
			var link = get_link();
			if (link != "" && link != null)
			{
				window.location = link;
			}
		}
	});
	
	var img = $('<img />').attr({ 	'id': 'map',
									'src': 'images/map2.png',
									'data-x': 0,
									'data-y': 0
									}).appendTo($('#content'));
	$("#map").css("position", "absolute");

	$("#map").on("load", function()
						{
							$(this).attr({ 'data-original-width':  $(this).width(),
										   'data-original-height': $(this).height() });	
							complete_init();
						});	
}

function get_link()
{
	var relative_x = (mouse_x - offset_x) / zoom;
	var relative_y = (mouse_y - offset_y) / zoom;

	var hovered_region = null;
	var factor = 1;
	for (var i = 0; i < regions.length; i++)
	{
		var r = regions[i].region;
		if (relative_x > r.x * factor &&
		    relative_x < (r.x + r.w) * factor &&
			relative_y > r.y * factor &&
			relative_y < (r.y + r.h) * factor)
		{
			hovered_region = regions[i];
			break;
		}
	}
	
	// $("#debug").html(relative_x + ", " + relative_y + "<br>" + ((hovered_region == null) ? "&lt;none&gt" : hovered_region.orgname));
	
	return (hovered_region == null) ? null : hovered_region.link;
}

function complete_init()
{
	var viewport_width = $("#map").data("original-width");
	var viewport_height = $("#map").data("original-height");

	// Set parameters to center the viewport
	zoom = Math.min($(window).width() / viewport_width,
	                $(window).height() / viewport_height);
	
	offset_x = ($(window).width() - (viewport_width * zoom)) / 2;
	offset_y = ($(window).height() - (viewport_height * zoom)) / 2;

	// We're done initializing - prepare display
	relocate_images();
	
	// Now - we are only left to remove the "loading" and show our content!
	$("#loading").remove();
}

function zoom_images()
{
	var image_object = $("#map");
	image_object.stop();
	image_object.animate( {	left: image_object.data("x") * zoom + offset_x,
							top:  image_object.data("y") * zoom + offset_y,
							width: zoom * image_object.data("original-width"),
							height: zoom * image_object.data("original-height") } );
}

function move_images()
{
	var image_object = $("#map");
	image_object.offset({left: image_object.data("x") * zoom + offset_x,
						top:  image_object.data("y") * zoom + offset_y});
}

function relocate_images()
{
	var image_object = $("#map");

	image_object.offset({left: image_object.data("x") * zoom + offset_x,
						top:  image_object.data("y") * zoom + offset_y});
	image_object.width(zoom * image_object.data("original-width"));
	image_object.height(zoom * image_object.data("original-height"));
	
	$("#content").css("visibility", "visible");	
	
}

function center_loading_tag()
{
	$("#loading").offset({ top:  ($(document).height() - $("#loading").height()) / 2,
						   left: ($(document).width() - $("#loading").width()) / 2 });
}
