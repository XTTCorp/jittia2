$(document).foundation({
    offcanvas: {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'overlap',
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click: true
    }
});

// STELLAR PARALLAX
//////////////////////////////////////////////////////////////////////////
$(window).stellar();

// OFF CANVAS
//////////////////////////////////////////////////////////////////////////
function selectProject(targetId) {
    $(".left-off-canvas-menu").each(function () {
        if ($(this).data("canvas-target-id") !== targetId) {
            $(this).removeClass("off-canvas-visible");
        }
    });

    $('*[data-canvas-target-id="' + targetId + '"]').addClass("off-canvas-visible");
    $('*[data-canvas-target-id="' + targetId + '"]').find('.content').height(jQuery(window).height());
}
$(document).ready(function () {
    $(".left-off-canvas-toggle").click(function () {
        var targetId = $(this).data("canvas-target-id");
        if (targetId !== null) {
            selectProject(targetId);
        }
    });

    if (window.location.hash) {
        $("a[data-canvas-target-id='" + window.location.hash.replace("#", "") + "']").click();
    }
});

var client = $('.left-off-canvas-menu');
$(document).on('resize', function () {
    // Beware with resize handlers...
    //  Throttle & consolidate #perfmatters
    client.height($(this).height());
});

// Initialize height
$(document).trigger('resize');

// HOME SCREEN GRID ROTATOR
//////////////////////////////////////////////////////////////////////////
$(function () {
    $('#ri-grid').gridrotator({
        rows: 3,
        columns: 5,
        maxStep: 1,
        interval: 2000,
        w1024: {
            rows: 3,
            columns: 4
        },
        w768: {
            rows: 3,
            columns: 4
        },
        w480: {
            rows: 3,
            columns: 4
        },
        w320: {
            rows: 3,
            columns: 3
        },
        w240: {
            rows: 3,
            columns: 3
        },
    });

});

// SMOOTH SCROLL TO ANCHORS
// excludes off canvas links and toggles
//////////////////////////////////////////////////////////////////////////
$(function () {
    $('a[href*="#"]:not(.left-off-canvas-toggle, .toggle)').click(function () {

        //if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        //    var target = $(this.hash);
        //    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //    if (target.length) {
        //        $('html, body').animate({
        //            scrollTop: target.offset().top
        //        }, 1000);
        //        return false;
        //    }
        //}
    });
});

// SUBNAV
// // ======================================
// // Helper functions
// // ======================================
// // Get section or article by href

// Get link by section or article id
function getRelatedNavigation(el) {
    return $('.nav-menu a[href=#' + $(el).attr('id') + ']');
}

// ======================================
// Waypoints
// ======================================
// Default cwaypoint settings
// - just showing
// var wpDefaults={
//   context: window,
//   continuous: true,
//   enabled: true,
//   horizontal: false,
//   offset: 0,
//   triggerOnce: false
// };       


$(document).ready(function () {
    $(window).load(function () {
        var navTrigger = $('#way-nav-menu');
        var nav = $('.nav-menu');
        navTrigger.waypoint(function (direction) {
            if (direction === 'down') {
                nav.addClass("nav-fixed");
            }
        }, {
            offset: -150

        });
        navTrigger.waypoint(function (direction) {
            if (direction === 'up') {
                nav.removeClass("nav-fixed");
            }
        }, {
            offset: -150

        });
    });
    $('section,article')
        .waypoint(function (direction) {
            getRelatedNavigation(this).toggleClass('active', direction === 'down');
        }, {
            offset: 138 // 
        })
        .waypoint(function (direction) {
            getRelatedNavigation(this).toggleClass('active', direction === 'up');
        }, {
            offset: function () {
                return -$(this).height();
            }
        });
});

// Fade in section title text, inductees and content background color
function contentAnimationControl() {
    var sectiontitle = $('.section-title');
    var sectiontext = $('.stax-text');
    var inductee = $('.bio-list');
    // Add classes
    sectiontitle.waypoint(function (direction) {
        if (direction === 'down') {
            $(this).addClass("appear");
        }
    }, {
        offset: 200
    });
    sectiontext.waypoint(function (direction) {
        if (direction === 'down') {
            $(this).addClass("curtain");
        }
    }, {
        offset: function () {
            return sectiontitle.height() - 500;
        }
    });
    inductee.waypoint(function (direction) {
        if (direction === 'down') {
            $(this).addClass("appear");
        }
    }, {
        offset: function () {
            return sectiontitle.height() - 100;
        }
    });
    // Remove classes
    sectiontitle.waypoint(function (direction) {
        if (direction === 'up') {
            $(this).removeClass("appear");
        }
    }, {
        offset: $.waypoints('viewportHeight')
    });
    sectiontext.waypoint(function (direction) {
        if (direction === 'up') {
            $(this).removeClass("curtain");
        }
    }, {
        offset: $.waypoints('viewportHeight')
    });
    inductee.waypoint(function (direction) {
        if (direction === 'up') {
            $(this).removeClass("appear");
        }
    }, {
        offset: $.waypoints('viewportHeight')
    });
}
// Run content animations
$(document).ready(function () {
    contentAnimationControl();
});

$(window).resize(function () {
    contentAnimationControl();
});


// KEYBOARD
$(function () {
    var $write = $('#InducteeSearch'),
        shift = false,
        capslock = false;

    $('#keyboard li').click(function () {
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $("#InducteeSearch").val($("#InducteeSearch").val().substr(0, $("#InducteeSearch").val().length - 1));
            $("#InducteeSearch").autocomplete("search", $("#InducteeSearch").val());
            return false;
        }

        // Special characters
        if ($this.hasClass('space')) { character = ' '; }

        // Uppercase letter
        if ($this.hasClass('uppercase')) { character = character.toUpperCase(); }

        // Add the character
        $("#InducteeSearch").val($("#InducteeSearch").val() + character);

        $("#InducteeSearch").autocomplete("search", $("#InducteeSearch").val());
    });
});

function wireEvent(trackedElement, eventId, category, label) {
    $(trackedElement).on("click", { eventId: eventId, eventCategory: category, eventLabel: label },
            function (event) {
                var eventId = event.data.eventId;
                var eventCategory = event.data.eventCategory;
                var eventLabel = event.data.eventLabel;

                window.ga("send", {
                    'hitType': "event",
                    'eventCategory': eventCategory,
                    'eventAction': "click",
                    'eventLabel': eventLabel,
                    'hitCallback': function () {
                        //alert("Sent '" + eventCategory + " > " + eventLabel + "' to GA (event id " + eventId + ")");
                    }
                });
            });
}