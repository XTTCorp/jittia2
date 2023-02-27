$(function() {
    var $el = $("#masterslider");
    if ($el.length) {
        var slider = new MasterSlider();
        slider.setup("masterslider", {
            width: 1e3,
            height: 400,
            space: 5,
            autoplay: true,
            speed: 10,
            loop: true
        });
        slider.control("arrows", {
            autohide: false
        });
        slider.control("bullets", {
            autohide: false,
            dir: "h",
            align: "bottom"
        });
    }
});

$(function() {
    var $el = $(".productnavigation");
    if ($el.length) {
        smoothScroll.init({
            speed: 500,
            easing: "linear",
            offset: 140,
            updateURL: true,
            callbackBefore: function(toggle, anchor) {},
            callbackAfter: function(toggle, anchor) {}
        });
    }
});

$(function() {
    var $el = $(".landing_hero");
    if ($el.length) {
        smoothScroll.init({
            speed: 500,
            easing: "linear",
            offset: 140,
            updateURL: true,
            callbackBefore: function(toggle, anchor) {},
            callbackAfter: function(toggle, anchor) {}
        });
    }
});

$(function() {
    var $el = $(".membership-benefits");
    if ($el.length) {
        smoothScroll.init({
            speed: 500,
            easing: "linear",
            updateURL: true,
            callbackBefore: function(toggle, anchor) {},
            callbackAfter: function(toggle, anchor) {}
        });
    }
});

$(function() {
    var $el = $("#accordion");
    if ($el.length) {
        $("#accordion").jqueryAccordion({
            interval: 600,
            fadeContent: true,
            open: false,
            defaultOpenIndex: 1
        });
    }
});

$(function() {
    var $el = $(".basictable");
    if ($el.length) {
        $(".basictable").ResponsiveTables({
            smallPaddingCharNo: 50,
            mediumPaddingCharNo: 50,
            largePaddingCharNo: 50
        });
    }
});

_affirm_config = {
    public_api_key: "ZSOCNZQ6PG0IVHIT",
    script: "https://cdn1.affirm.com/js/v2/affirm.js"
};

(function(l, g, m, e, a, f, b) {
    var d, c = l[m] || {}, h = document.createElement(f), n = document.getElementsByTagName(f)[0], k = function(a, b, c) {
        return function() {
            a[b]._.push([ c, arguments ]);
        };
    };
    c[e] = k(c, e, "set");
    d = c[e];
    c[a] = {};
    c[a]._ = [];
    d._ = [];
    c[a][b] = k(c, a, b);
    a = 0;
    for (b = "set add save post open empty reset on off trigger ready setProduct".split(" "); a < b.length; a++) d[b[a]] = k(c, e, b[a]);
    a = 0;
    for (b = [ "get", "token", "url", "items" ]; a < b.length; a++) d[b[a]] = function() {};
    h.async = !0;
    h.src = g[f];
    n.parentNode.insertBefore(h, n);
    delete g[f];
    d(g);
    l[m] = c;
})(window, _affirm_config, "affirm", "checkout", "ui", "script", "ready");

$(function() {
    BuyOptionsChange();
    var language = $("body").attr("lang");
    UpdateBuyNowLanguage(language);
    AppendMoreBundlesCopy(language);
    $(".buy-options-cert").change(BuyOptionsChange);
    function BuyOptionsChange() {
        PopulateProductCodes();
        var selectedTableVersion = $(".buy-options-cert").find(":selected").data("table");
        if ($(this).find(":selected").text() == "CompTIA A+ 1001") {
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("A+ (220-901)", "A+ Core 1 (220-1001)").replace("A+ (220-902)", "A+ Core 1 (220-1001)").replace("A+ Core 2 (220-1002)", "A+ Core 1 (220-1001)");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("A+ (220-901)", "A+ Core 1 (220-1001)").replace("A+ (220-902)", "A+ Core 1 (220-1001)").replace("A+ Core 2 (220-1002)", "A+ Core 1 (220-1001)"));
            });
            $(".purchase-row.heading").each(function() {
                $(this).html($(this).html().replace("299", "349").replace("399", "449").replace("499", "649"));
            });
        } else if ($(this).find(":selected").text() == "CompTIA A+ 1002") {
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("A+ (220-901)", "A+ Core 2 (220-1002)").replace("A+ (220-902)", "A+ Core 2 (220-1002)").replace("A+ Core 1 (220-1001)", "A+ Core 2 (220-1002)");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("A+ (220-901)", "A+ Core 2 (220-1002)").replace("A+ (220-902)", "A+ Core 2 (220-1002)").replace("A+ Core 1 (220-1001)", "A+ Core 2 (220-1002)"));
            });
            $(".purchase-row.heading").each(function() {
                $(this).html($(this).html().replace("299", "349").replace("399", "449").replace("499", "649"));
            });
        } else if ($(this).find(":selected").text() == "CompTIA A+ 1101") {
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("A+ Core 2 (220-1102)", "A+ Core 1 (220-1101)").replace("A+ Core 1 & Core 2 (220-1101 & 220-1102)", "A+ Core 1 (220-1101)").replace("eBooks", "eBook").replace("A+ Core Series (220-1102)", "A+ Core Series (220-1101)");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("A+ Core 2 (220-1102)", "A+ Core 1 (220-1101)").replace("A+ Core 1 & Core 2 (220-1101 & 220-1102)", "A+ Core 1 (220-1101)").replace("eBooks", "eBook").replace("A+ Core Series (220-1102)", "A+ Core Series (220-1101)"));
            });
            $('.purchase-column[data-column="cmlearncmlabs"]').find(".store-price").html("$458.00");
            $('.purchase-column[data-column="cmpractice"]').find(".store-price").html("$129.00");
            $('.purchase-column[data-column="ebook"]').find(".store-price").html("$89.00");
            $('.purchase-column[data-column="basic"]').find(".store-price").html("$349.00");
            $('.purchase-column[data-column="examprep"]').find(".store-price").html("$449.00");
            $('.purchase-column[data-column="elearning"]').find(".store-price").html("$699.00");
            $('.purchase-column[data-column="complete"]').find(".store-price").html("$798.00");
        } else if ($(this).find(":selected").text() == "CompTIA A+ 1102") {
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("A+ Core 1 (220-1101)", "A+ Core 2 (220-1102)").replace("A+ Core 1 & Core 2 (220-1101 & 220-1102)", "A+ Core 2 (220-1102)").replace("eBooks", "eBook").replace("A+ Core Series (220-1101)", "A+ Core Series (220-1102)");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("A+ Core 1 (220-1101)", "A+ Core 2 (220-1102)").replace("A+ Core 1 & Core 2 (220-1101 & 220-1102)", "A+ Core 2 (220-1102)").replace("eBooks", "eBook").replace("A+ Core Series (220-1101)", "A+ Core Series (220-1102)"));
            });
            $('.purchase-column[data-column="cmlearncmlabs"]').find(".store-price").html("$458.00");
            $('.purchase-column[data-column="cmpractice"]').find(".store-price").html("$129.00");
            $('.purchase-column[data-column="ebook"]').find(".store-price").html("$89.00");
            $('.purchase-column[data-column="basic"]').find(".store-price").html("$349.00");
            $('.purchase-column[data-column="examprep"]').find(".store-price").html("$449.00");
            $('.purchase-column[data-column="elearning"]').find(".store-price").html("$699.00");
            $('.purchase-column[data-column="complete"]').find(".store-price").html("$798.00");
        } else if ($(this).find(":selected").text() == "CompTIA A+ 1101 & 1102") {
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("A+ Core 1 (220-1101)", "A+ Core 1 & Core 2 (220-1101 & 220-1102)").replace("A+ Core 2 (220-1102)", "A+ Core 1 & Core 2 (220-1101 & 220-1102)").replace("eBook", "eBooks").replace("A+ Core Series (220-1101)", "A+ Core Series (220-1101 & 220-1102)").replace("A+ Core Series (220-1102)", "A+ Core Series (220-1101 & 220-1102)");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("A+ Core 1 (220-1101)", "A+ Core 1 & Core 2 (220-1101 & 220-1102)").replace("A+ Core 2 (220-1102)", "A+ Core 1 & Core 2 (220-1101 & 220-1102)").replace("eBook", "eBooks").replace("A+ Core Series (220-1101)", "A+ Core Series (220-1101 & 220-1102)").replace("A+ Core Series (220-1102)", "A+ Core Series (220-1101 & 220-1102)"));
            });
            $('.purchase-column[data-column="cmlearncmlabs"]').find(".store-price").html("$916.00");
            $('.purchase-column[data-column="cmpractice"]').find(".store-price").html("$258.00");
            $('.purchase-column[data-column="ebook"]').find(".store-price").html("$178.00");
            $('.purchase-column[data-column="basic"]').find(".store-price").html("$699.00");
            $('.purchase-column[data-column="examprep"]').find(".store-price").html("$899.00");
            $('.purchase-column[data-column="elearning"]').find(".store-price").html("$1399.00");
            $('.purchase-column[data-column="complete"]').find(".store-price").html("$1599.00");
        } else if ($(this).find(":selected").text() == "CompTIA CASP+ CAS-004") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("CAS-003", "CAS-004"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("CAS-003", "CAS-004"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("CAS-003", "CAS-004");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Cloud+ CV0-003") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("CV0-002", "CV0-003"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("CV0-002", "CV0-003"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("CV0-002", "CV0-003");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Cloud Essentials+ CL0-002") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("CL0-001", "CL0-002"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("CL0-001", "CL0-002"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("CL0-001", "CL0-002");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA CySA+ CS0-002") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("CS0-001", "CS0-002"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("CS0-001", "CS0-002"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("CS0-001", "CS0-002");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA IT Fundamentals FC0-U61") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("U51", "U61"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("U51", "U61"));
            });
            $(".purchase-row.heading").each(function() {
                $(this).html($(this).html().replace("Deluxe", "Exam Prep").replace("Premier", "eLearning"));
            });
            $(".purchase-row.heading").each(function() {
                $(this).html($(this).html().replace("249", "349").replace("199", "249").replace("149", "199"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("U51", "U61");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Linux+ XK0-004") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("XK0-005", "XK0-004"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("XK0-005", "XK0-004"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("XK0-005", "XK0-004");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Linux+ XK0-005") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("XK0-004", "XK0-005"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("XK0-004", "XK0-005"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("XK0-004", "XK0-005");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Project+ PK0-004") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("PK0-005", "PK0-004"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("PK0-005", "PK0-004"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("PK0-005", "PK0-004");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Project+ PK0-005") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("PK0-004", "PK0-005"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("PK0-004", "PK0-005"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("PK0-004", "PK0-005");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Network+ N10-008") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("N10-007", "N10-008"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("N10-007", "N10-008"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("N10-007", "N10-008");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA PenTest+ PT0-002") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("PT0-001", "PT0-002"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("PT0-001", "PT0-002"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("PT0-001", "PT0-002");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Security+ SY0-601") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("SY0-501", "SY0-601"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("SY0-501", "SY0-601"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("SY0-501", "SY0-601");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        } else if ($(this).find(":selected").text() == "CompTIA Server+ SK0-005") {
            $("h3#buyoptions").text($("h3#buyoptions").text().replace("SK0-004", "SK0-005"));
            $(".row-heading").each(function() {
                $(this).text($(this).text().replace("SK0-004", "SK0-005"));
            });
            $(".purchase-row[data-title]").each(function() {
                var newTitle = $(this).data("title").replace("SK0-004", "SK0-005");
                $(this).data("title", newTitle);
                $(this).attr("data-title", newTitle);
            });
        }
        $(".purchase-column").find(".purchase-row").each(function() {
            var thisTableVersion = $(this).data("table");
            if (thisTableVersion != null && thisTableVersion != selectedTableVersion) $(this).hide(); else $(this).show();
        });
        $(".purchase-column").each(function() {
            var thisTableVersion = $(this).data("table");
            if (thisTableVersion != null && thisTableVersion != selectedTableVersion) $(this).hide(); else $(this).show();
        });
        UpdatePrices();
    }
    function PopulateProductCodes() {
        $(".purchase-column").each(function() {
            var variableName = "";
            if (typeof $(this).closest(".purchase-table").data("product") !== "undefined") {
                variableName += $(this).closest(".purchase-table").data("product") + "_";
            }
            if ($(".buy-options-cert").find("option:selected").val()) {
                variableName += $(".buy-options-cert").find("option:selected").val() + "_";
            }
            if (typeof $(this).data("column") !== "undefined") {
                variableName += $(this).data("column");
            }
            if (typeof window[variableName] !== "undefined") {
                $(this).find("h2.store-price").data("product-code", window[variableName]);
                $(this).find(".buybutton").attr("href", "https://store.comptia.org/auto-add-to-cart?productCode=" + window[variableName]);
            }
        });
        $(".productPriceRow").each(function() {
            var variableName = "";
            if (typeof $(this).data("product") !== "undefined") {
                variableName += $(this).data("product");
                if (typeof $(this).data("v") !== "undefined") {
                    variableName += "_" + $(this).data("v");
                }
                variableName += "_examdetails";
            }
            if (typeof window[variableName] !== "undefined") {
                $(this).find(".voucher-price").data("product-code", window[variableName]);
                if (typeof $(this).data("v") == "undefined") {
                    $(this).find(".buy-link").attr("href", "https://store.comptia.org/auto-add-to-cart?productCode=" + window[variableName]);
                }
            }
        });
    }
    function UpdatePrices() {
        $(".bundle-price, .store-price").each(function(index, item) {
            var serviceUrl = "/services/trackaction/getprice?productcode=" + $(item).data("product-code");
            var bundle = $(this);
            $.ajax({
                url: serviceUrl,
                dataType: "html",
                type: "get",
                success: function(data) {
                    var myResult = JSON.parse(data);
                    myResult = JSON.parse(myResult);
                    if (myResult.hasOwnProperty("ListPrice")) {
                        if (myResult.ListPrice[0].listPrice != null) {
                            if (myResult.ListPrice[0].salePrice != null) {
                                $(bundle).html("$" + myResult.ListPrice[0].salePrice + ".00 ");
                                $(bundle).find(".original-price").html("$" + myResult.ListPrice[0].listPrice + " ");
                                $(bundle).next(".affirm-as-low-as").attr("data-amount", myResult.ListPrice[0].salePrice + "00");
                            } else {
                                $(bundle).html("$" + myResult.ListPrice[0].listPrice + ".00 ");
                                $(bundle).next(".affirm-as-low-as").attr("data-amount", myResult.ListPrice[0].listPrice + "00");
                            }
                            waitForAffirm();
                            $(item).next(".loading").hide();
                            return;
                        }
                    }
                    $(item).next(".loading").hide();
                    $(bundle).addClass("standard").text("Click Buy Now to view price in cart");
                    $(bundle).next(".affirm-as-low-as").hide();
                }
            });
        });
    }
    function waitForAffirm() {
        if (typeof affirm !== "undefined") {
            if (!affirm.ui.ready()) {
                setTimeout(waitForAffirm, 200);
            } else {
                affirm.ui.refresh();
            }
        } else {
            setTimeout(waitForAffirm, 200);
        }
    }
    function UpdateBuyNowLanguage(lang) {
        if (lang == "en") {} else if (lang == "de") {
            $(".purchase-table a.buybutton").each(function() {
                $(this).html($(this).html().replace("Buy Now", "Jetzt kaufen"));
            });
        } else if (lang == "pt") {
            $(".purchase-table a.buybutton").each(function() {
                $(this).html($(this).html().replace("Buy Now", "Compre Agora"));
            });
        } else if (lang == "es") {
            $(".purchase-table a.buybutton").each(function() {
                $(this).html($(this).html().replace("Buy Now", "Comprar ahora"));
            });
        }
    }
    function AppendMoreBundlesCopy(lang) {
        var variableName = "";
        if (typeof $(".purchase-table").data("product") !== "undefined") {
            var product = $(".purchase-table").data("product");
            if (product.indexOf("_") > -1) {
                product = product.slice(0, product.indexOf("_"));
            }
            variableName += product + "_footer_" + lang;
        }
        if (typeof window[variableName] !== "undefined") {
            var bundleCopy = window[variableName];
            $(".purchase-table").after(bundleCopy);
        }
    }
    $(".voucher-price").each(function(index, item) {
        var serviceUrl = "/services/trackaction/getprice?productcode=" + $(item).data("product-code");
        var voucher = $(this);
        $.ajax({
            url: serviceUrl,
            dataType: "html",
            type: "get",
            success: function(data) {
                var myResult = JSON.parse(data);
                myResult = JSON.parse(myResult);
                if (myResult.hasOwnProperty("ListPrice")) {
                    if (myResult.ListPrice[0].listPrice != null) {
                        if (myResult.ListPrice[0].salePrice != null) {
                            $(voucher).html(myResult.ListPrice[0].salePrice);
                        } else {
                            $(voucher).html(myResult.ListPrice[0].listPrice);
                        }
                        $(item).next(".loading").hide();
                        return;
                    }
                }
                $(item).next(".loading").hide();
                $(voucher).closest(".buy-link").text("View price in cart");
            }
        });
    });
    $(".online-training-price").each(function(index, item) {
        var serviceUrl = "/services/trackaction/getprice?productcode=" + $(item).data("product-code");
        var voucher = $(this);
        $.ajax({
            url: serviceUrl,
            dataType: "html",
            type: "get",
            success: function(data) {
                var myResult = JSON.parse(data);
                myResult = JSON.parse(myResult);
                if (myResult.hasOwnProperty("ListPrice")) {
                    if (myResult.ListPrice[0].listPrice != null) {
                        if (myResult.ListPrice[0].salePrice != null) {
                            $(voucher).html("$" + myResult.ListPrice[0].salePrice + " <span class='small-text'>USD</span>");
                        } else {
                            $(voucher).html("$" + myResult.ListPrice[0].listPrice + " <span class='small-text'>USD</span>");
                        }
                    }
                }
                $(item).next(".loading").hide();
            }
        });
    });
});