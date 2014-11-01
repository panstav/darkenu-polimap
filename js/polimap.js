// TODO: Grunt-Minify
// TODO: keen($('a'))

(function($){

	var regions = [
		{
			region: { x: 1159, y: 479 },
			irgun: false,
			color: 'orange',

			name: 'חדר מצב',
			desc: ['ערוץ תקשורת אלטרנטיבי של המאבק החברתי.','הצטרפו לחדר המצב כדי לפקוח את העיניים ולראות את המציאות סביבכם מזווית שטרם הכרתם.','אנו מפעילים מרכז מידע והנעה לפעולה בזמן אמת. תוכלו למצוא בו חדשות ועדכונים חמים מרתקים מהשטח ובלי צנזורה!','חדר המצב מאויש על ידי קבוצת פעילים, כולם בהתנדבות מלאה, המהווים יחד צוות של חדשות המחאה - מקדמים ומפיצים את המתרחש ברשת.'],
			link: 'http://www.facebook.com/j14live'
		},{
			region: { x: 760, y: 344 },
			irgun: false,
			color: 'orange',

			name: 'מגפון',
			desc: ['עיתון העיתונאים. מיזם תוכן עיתונאי אינטרנטי. הוקם ומנוהל במתכונת של קואופרטיב - בבעלות משותפת של העובדים בו כתבים, כותבים ועורכים, צלמים ומעצבים, בעלי טורים, אנשי שטח ומשרד, אנשי מסחר ומודעות ועוד.'],
			link: 'http://www.megafon-news.co.il/'
		},{
			region: { x: 937, y: 142 },
			irgun: false,
			color: 'orange',

			name: 'רשת שידורים חיים מהשטח',
			desc: ['עיתונות אזרחית. ערוצי שידור ustream מרחבי הארץ'],
			link: 'http://j14.org.il/j14live'
		},{
			region: { x: 877, y: 71 },
			irgun: true,
			color: 'orange',

			name: 'הטלויזיה החברתית',
			desc: ['ארגון לשינוי חברתי הפועל כגוף תקשורת אזרחי - עצמאי לקידום סדר יום חברתי בישראל'],
			link: 'http://tv.social.org.il/'
		},{
			region: { x: 1021, y: 177 },
			irgun: false,
			color: 'orange',

			name: 'כנסת פתוחה',
			desc: ['אתר שנועד להעצים את האזרחים בישראל ולאפשר לכל אזרח להשתתף באורח פעיל יותר בפעילות הכנסת.','האתר מציג את המידע על מה שקורה בכנסת בצורה נוחה וברורה למשתמש ומאפשר דיון של גורמים מקצועיים ואזרחים מן השורה בנושאים של שולחן המחוקקים.','האתר מנגיש את המידע בכדי שכל אזרח ואזרחית יידעו על מה הם רוצים להשפיע ועוזר לאזרחים להשפיע על-ידי יצירת פלטפורמה לדיאלוג בין הציבור לנציגיו בכנסת'],
			link: 'http://oknesset.org/'
		},{
			region: { x: 735, y: 268 },
			irgun: false,
			color: 'orange',

			name: 'PolitiWatch',
			desc: ['פלטפורמה אינטרנטית העוקבת אחר הפעילות הפוליטית ומנגישה את המידע באופן ברור, אמין וחסר פניות לציבור'],
			link: 'http://www.politiwatch.co.il/'
		},{
			region: { x: 788, y: 93 },
			irgun: false,
			color: 'orange',

			name: 'העוקץ',
			desc: ['במה עצמאית לדיון ביקורתי בחברה בישראל, בה מאות כותבות וכותבים מפרסמים בו מאמרים מקצועיים ומקוריים בנושאי כלכלה, פוליטיקה, פילוסופיה, אמנות, מוזיקה, קולנוע, פמיניזם, אקטיביזם, זכויות אדם ועוד. ניסיון להוות אלטרנטיבה לתקשורת הממוסדת.'],
			link: 'http://www.haokets.org/'
		},{
			region: { x: 1183, y: 296 },
			irgun: false,
			color: 'orange',

			name: 'עבודה שחורה',
			desc: ['אתר אינטרנט הפועל למען שמירת אופיה של מדינת ישראל כמדינת רווחה סוציאל-דמוקרטית.'],
			link: 'http://www.blacklabor.org/'
		},{
			region: { x: 1112, y: 146 },
			irgun: true,
			color: 'orange',
			name: 'התנועה לחופש המידע',
			desc: ['תנועה הפועלת לקידום שקיפות במוסדות ציבוריים, להגברת הפיקוח על פעילותן של רשויות ציבוריות, ולעידוד הציבור לעשות שימוש בזכותו למידע.','אנו מאמינים כי קידומן של מטרות אלה יוביל ליצירתה של חברה פתוחה, דמוקרטית וצודקת יותר בישראל.'],
			link: 'http://www.meida.org.il/'
		},{
			region: { x: 1103, y: 334 },
			irgun: false,
			color: 'orange',

			name: 'הכלכלה האמיתית',
			desc: ['אתר א-פוליטי ועצמאי אשר שם לעצמו למטרה להעביר בצורה אוביקטיבית ככל האפשר את המתרחש בעולם הכלכלי בו אנו נמצאים.','המאמרים והעובדות שמוצגים באתר מובאים ללא פילטרים, הגבלות או הוראות מלמעלה תוך התמקדות בנושאים שהמדיה המרכזית נמנעת מלגעת בהם מסיבות השמורות עימה. כל המקורות שלנו חשופים ושקופים ככל הניתן ,תחת התנית אישור המקור.','פעילות האתר נעשית על בסיס התנדבותי בלבד ואינה קשורה או ממומנת על ידי אף מפלגה או ארגון.'],
			link: 'http://kalkala-amitit.blogspot.co.il/'
		},{
			region: { x: 759, y: 182 },
			irgun: false,
			color: 'orange',

			name: 'המקום הכי חם בגיהנום',
			desc: ['מגזין עיתונות הדבק בעקרונות של דמוקרטיה, שיוויון וצדק חברתי. עיתונות שלא מפחדת לקחת צד. ששומרת על פרופורציות, שאינה מתלהמת, שנצמדת לעובדות ולסטנדרטים מקצועיים, סקרנית וחוקרת, אבל אינה שקועה עד צוואר בביצת הנייטראליות הדביקה והמזויפת.','נביא כאן סיפורים שמוצנעים בתקשורת הממוסדת, או אינם מתפרסמים כלל, בגלל שאינם תואמים את האינטרס של המו"ל, או שאינם עונים על מדדי אטרקטיביות מלאכותיים שקבעו כלי תקשורת אחרים. נטפל בתופעות שקשורות ליחידים או לקבוצות, במאבקים ציבוריים, בסיפורים החברתיים, התרבותיים והפוליטיים. נפרסם פרופילים, ראיונות ודעות שונות ולא נפסיק לשאול שאלות על המקום שאנחנו חיים בו','.אולי קשה לשנות את העולם, אבל בעזרת הסיפור העיתונאי אפשר לעשות שינוי. בשביל זה אנחנו כאן. באנו להפר את השקט.'],
			link: 'http://www.ha-makom.co.il/'
		},{
			region: { x: 1180, y: 387 },
			irgun: false,
			color: 'orange',

			name: 'מרפסת',
			desc: ['מגזין תל אביבי אלטרנטיבי בקצב יומיומי, בנושאי תרבות, מעורבות והתפר ביניהם.'],
			link: 'http://mirpeset-tlv.com/'
		},{
			region: { x: 1087, y: 425 },
			irgun: false,
			color: 'orange',

			name: 'Mike & Natalie News',
			desc: ['מגזין חדשות חברתיות ביוטיוב.'],
			link: 'https://www.facebook.com/mikenatalinews'
		},{
			region: { x: 1071, y: 527 },
			irgun: false,
			color: 'orange',

			name: 'העולם אחרת',
			desc: ['מגזין חדשות הסוקר את המאבק החברתי העולמי עם ביקורת מזווית אחרת ופרשנות בועטת. הפגנות ענק, קריסת בנקים, חשיפת שחיתויות, שינויים חברתיים היסטוריים.'],
			link: 'https://www.facebook.com/HaolamAceret'
		},{
			region: { x: 996, y: 461 },
			irgun: false,
			color: 'orange',

			name: 'WeShare',
			desc: ['מגזין אלטרנטיבי על כלכלה שיתופית, פתרונות ירוקים חדשניים, צרכנות חברתית ועוד. נוסד ב-2014 כמגזין של קהילת מטבע o-share.'],
			link: 'http://www.weshare.org.il/weshare-media'
		},{
			region: { x: 1012, y: 80 },
			irgun: true,
			color: 'orange',

			name: 'החדשות מהירקון שבעים',
			desc: ['מהדורת חדשות עצמאית, הפועלת לצמצום הפערים החברתיים, הכלכליים, הסביבתיים והלאומיים בישראל. מדי יום א בערב בסינמטק תל אביב ובאינטרנט.','החדשות מהירקון שבעים מופקות באופן עצמאי על ידי קבוצת אנשי תקשורת ותרבות, במטרה להשפיע על השיח בישראל ולחתור לחברה שוויונית וצודקת.'],
			link: 'http://www.hayarkon70.org/'
		},{
			region: { x: 852, y: 190 },
			irgun: true,
			color: 'orange',

			name: 'אוטופיה שלי- תקשורת ומידע',
			desc: ['ערוץ תקשורת ומדיה באינטרנט הנותן מענה לאירועי חברה, תרבות ופנאי של הקהילה האתיופית בדגש מתן במה לאמנים יוצרים להתבטא בכל תחומים וכך לעשות שינוי בקרב צעירי הקהילה.'],
			link: 'http://www.myutopiachannel.com/'
		},{
			region: { x: 1269, y: 264 },
			irgun: false,
			color: 'orange',

			name: 'אנו',
			desc: ['מיזוג של שלושה ארגונים לשינוי חברתי אג\'נדה השדרה ועורו. אנו הוא ארגון לשינוי חברתי, הפועל לחיזוק הדמוקרטיה הישראלית, קידום סוגיות חברתיות וכלכליות והעשרת השיח הציבורי, באמצעות אקטיביזם תקשורתי ודיגיטלי'],
			link: 'http://www.anu.org.il/'
		},{
			region: { x: 836, y: 285 },
			irgun: false,
			color: 'orange',

			name: 'השעה ה-25',
			desc: ['השעה ה-25 מביאים אליכם הרצאות במקומות בילוי, ערבי ג\'ם ויצירה אומנותית פתוחים לכל האוכלוסייה, מתוך אהבה, רצון להנעה וראייה קדימה'],
			link: 'https://www.facebook.com/the25hour'
		},{
			region: { x: 853, y: 375 },
			irgun: false,
			color: 'orange',

			name: 'עמק השווה',
			desc: ['סדרת מפגשי עיון ודיון של קהילת הצדק החברתי ברחובות'],
			link: 'https://www.facebook.com/emekhashave'
		},{
			region: { x: 1022, y: 369 },
			irgun: false,
			color: 'orange',

			name: 'הסדנא לידע ציבורי',
			desc: ['עמותה פועלת להגברת השתתפות ציבורית בישראל, על ידי איסוף, פתיחה והנגשה של מידע שמצוי ברשותם של גופי ממשל ומגזר ציבורי. באמצעות טכנולוגיות מתקדמות וקוד פתוח, מפתחת קהילת המתנדבים והפעילים שלנו מגוון כלים המאפשרים להפוך את המידע לידע ובכך להעצים את החברה האזרחית ואת נציגי הציבור.'],
			link: 'http://www.hasadna.org.il/'
		},{
			region: { x: 1199, y: 202 },
			irgun: false,
			color: 'orange',

			name: 'קהילת יזמות חברתית',
			desc: ['קבוצה הפועלת במטרה לחבר בין יזמים חברתיים, מתנדבים, ומי שרוצה להיות כזה, וליצור מסגרת מעצימה ומחוללת השראה. קהילת יזמות חברתית שמה לה למטרה לחבר בין יזמים חברתיים, מתנדבים, ומי שרוצה להיות כזה, וליצור מסגרת מעצימה ומחוללת השראה.'],
			link: 'http://www.facebook.com/groups/yazmut'
		},{
			region: { x: 1110, y: 240 },
			irgun: false,
			color: 'orange',

			name: 'הכסא המתנדנדו',
			desc: ['קבוצה ששמה לה למטרה להוסיף לאירועי מחאה פן יצירתי, הם לרב לא מארגנים אירועים משלהם אלא מגיעים לאירועים שארגנו אחרים מצוידים במסכות, שלטים שנונים, פסלים ועושים במקום מעין מיצג.'],
			link: 'http://www.facebook.com/pages/%D7%94%D7%9B%D7%A1%D7%90-%D7%94%D7%9E%D7%AA%D7%A0%D7%93%D7%A0%D7%93/116612265102476'
		}
	];

	var zoom = 0.1;
	var zoomingDevice = false;
	var offset_y = 0;
	var offset_x = 0;
	var mouse_x = 0;
	var mouse_y = 0;
	var is_dragging = false;
	var mouse_down = false;
	var over_link = false;

	function setContentEvents(toggle){

		if (toggle){

			interactElem = $(document);

			interactElem.on('mousewheel', function(event, delta){

				zoomingDevice = true;

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
			});
			interactElem.on('mousemove', function(e){
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
			interactElem.on('mousedown', function(e){
				mouse_down = true;
				$(document).css("cursor", "url('images/cursor/grab.cur'),move");

				e.preventDefault();
			});
			interactElem.on('mouseup', function(e){
				
				mouse_down = false;
				if (is_dragging){ is_dragging = false } else {

					if ($(e.toElement).is('img#map')){
						var eRegion = {};

						if (!zoomingDevice){
							var offset = $('img#map').offset();
							var x = e.clientX - offset.left;
							var y = e.clientY - offset.top;

							eRegion = get_hovered_region(x,y)
						} else {
							eRegion = get_hovered_region();
						}

						if (eRegion){

							var modalHTML = '<div class="close">סגור</div>';
							modalHTML += '<h3 class="' + eRegion.color + '">' + eRegion.name + '</h3>';
							modalHTML += '<div class="innerWrap">';

							$.each(eRegion.desc, function(){
								modalHTML += '<p class="desc">' + this + '</p>';
							});

							if (eRegion.link){
								var facebook = eRegion.link.indexOf('www.facebook') >= 0;
								var type = eRegion.irgun ? 'אירגון' : 'יוזמה';

								modalHTML += '<a href="' + eRegion.link + '" target="_blank" ';
								modalHTML += 'class="link ' + eRegion.color + ' ' + (facebook ? 'facebook' : 'homepage') + '">';
								modalHTML += (facebook ? 'לעמוד ה' : 'לאתר ה') + type;
								modalHTML += '</a>'
							}

							modalHTML += '</div>';

							var modalElem = $('.modal');

							setContentEvents(false);
							modalElem.html(modalHTML).modal(
								{
									fadeDuration: 500,
									fadeDelay: 0.5,
									escapeClose: false,
									clickClose: false,
									showClose: false
								}
							);

							modalElem.find('.close').on('click', function(){
								setContentEvents(true);
								$.modal.close();
							});
						}
					}
				}

			});
		} else {
			interactElem.off('mousewheel');
			interactElem.off('mousemove');
			interactElem.off('mousedown');
			interactElem.off('mouseup');
		}
	}

	function init()
	{
		// First - hide the content and move the "loading" tag to the center
		$("#content").css("visibility", "hidden");
		center_loading_tag();

		// Hide the scroll bars
		$("body").css("overflow", "hidden");

		// Set the cursor to be regular (IE again... arggggg...)
		$(document).css("cursor", "url('images/cursor/cursor.ico'),auto");

		setContentEvents(true);

		var img = $('<img />').attr({ 	'id': 'map',
			                            'src': 'images/map3.jpg',
																	'usemap': '#a',
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

	function get_hovered_region(x, y){
		var regionDefaults = { w: 70, h: 70 };

		if (x && y){

			var imgMap = $('img#map');
			var ratio = imgMap.data('original-width') / imgMap.width();

			var rationedX = x * ratio;
			var rationedY = y * ratio;

			var corespondingRegion = undefined;

			$.each(regions, function(){
				var sizedRegionX = this.region.x + regionDefaults.w;
				var sizedRegionY = this.region.y + regionDefaults.h;

				if (this.region.x < rationedX && rationedX < sizedRegionX){
					if (this.region.y < rationedY && rationedY < sizedRegionY){
						corespondingRegion = this;
						return false
					}
				}
			});

			return corespondingRegion || null

		} else {
			var relative_x = (mouse_x - offset_x
				                 )/zoom;
			var relative_y = (mouse_y - offset_y
				                 )/zoom;

			var factor = 1;

			for (var i = 0; i < regions.length; i++){
				var currentRegion = $.extend({}, regionDefaults, regions[i].region);

				if (relative_x > currentRegion.x*factor && relative_x < (currentRegion.x + currentRegion.w
					                                                        )*factor && relative_y > currentRegion.y*factor &&
				    relative_y < (currentRegion.y + currentRegion.h
					                 )*factor){
					return regions[i]
				}
			}
		}
	}

	function get_link(){
		var hovered = get_hovered_region();

		// $("#debug").html(relative_x + ", " + relative_y + "<br>" + ((hovered_region == null) ? "&lt;none&gt" : hovered_region.orgname));

		return (hovered == null) ? null : hovered.link;
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

	$(document).ready(init);

})(jQuery);