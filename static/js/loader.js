var sliderTransactions,sliderTransactionsMobile,sliderExpertiseMobile,sliderNewsMobile,sliderQuotes;function initEqualHeight(e){e=void 0!==e?e:"body",setTimeout((function(){$(".equal-height-title",$(e)).not("[style]").matchHeight(),$(".equal-height",$(e)).not("[style]").matchHeight()}),200)}function initBxSliders(){sliderTeam=$(".bxslider-team").bxSlider({controls:!1,pager:!0,pagerSelector:".bxslider-team-pager",stopAutoOnClick:!0,touchEnabled:!1,auto:!1,useCSS:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-team-wrapper").css("visibility","visible")}}),sliderTeam=$(".bxslider-mobile-team").bxSlider({controls:!0,nextText:'<i class="flaticon-next hide-on-desktop"></i>',prevText:'<i class="flaticon-prev hide-on-desktop"></i>',pager:!1,touchEnabled:!1,pagerSelector:".bxslider-mobile-pager",stopAutoOnClick:!0,auto:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-team-wrapper").css("visibility","visible")}}),sliderTransactions=$(".bxslider-transactions").bxSlider({controls:!1,pager:!0,pagerSelector:".bxslider-pager",stopAutoOnClick:!0,touchEnabled:!1,auto:!1,useCSS:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-transactions-wrapper").css("visibility","visible")}}),sliderTransactionsMobile=$(".bxslider-mobile-transactions").bxSlider({controls:!0,nextText:'<i class="flaticon-next hide-on-desktop"></i>',prevText:'<i class="flaticon-prev hide-on-desktop"></i>',pager:!1,touchEnabled:!1,pagerSelector:".bxslider-mobile-pager",stopAutoOnClick:!0,auto:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-transactions-wrapper").css("visibility","visible")}}),sliderExpertiseMobile=$(".bxslider-mobile-expertise").bxSlider({controls:!0,nextText:'<i class="flaticon-next"></i>',prevText:'<i class="flaticon-prev"></i>',pager:!1,touchEnabled:!1,pagerSelector:".bxslider-mobile-pager",stopAutoOnClick:!0,auto:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-expertise-wrapper").css("visibility","visible")}}),sliderNewsMobile=$(".bxslider-mobile-news").bxSlider({controls:!0,nextText:'<i class="flaticon-next"></i>',prevText:'<i class="flaticon-prev"></i>',pager:!1,touchEnabled:!1,pagerSelector:".bxslider-mobile-pager",stopAutoOnClick:!0,auto:!1,autoHover:!0,onSliderLoad:function(){$(".bxslider-news-wrapper").css("visibility","visible")}}),sliderQuotes=$(".bxslider-quotes").bxSlider({captions:!0,controls:!0,pager:!1,touchEnabled:!1,nextText:'<i class="flaticon-next"></i>',prevText:'<i class="flaticon-prev"></i>',randomStart:!0,auto:!0,pause:1e4,onSliderLoad:function(){$(".bxslider-quotes-wrapper").css("visibility","visible")}})}function reloadBxSliders(){"function"==typeof sliderTransactions.reloadSlider&&sliderTransactions.reloadSlider(),"function"==typeof sliderTransactionsMobile.reloadSlider&&sliderTransactionsMobile.reloadSlider(),"function"==typeof sliderExpertiseMobile.reloadSlider&&sliderExpertiseMobile.reloadSlider(),"function"==typeof sliderNewsMobile.reloadSlider&&sliderNewsMobile.reloadSlider(),"function"==typeof sliderTeam.reloadSlider&&sliderTeam.reloadSlider()}function initMenuScrollActions(){var e=0,t=$(".header-wrapper").outerHeight();function i(){var i=$(this).scrollTop();Math.abs(e-i)<=5||(i>e&&i>t?($(".header-wrapper").removeClass("nav-down").addClass("nav-up"),$(".cfi-logo-holder").removeClass("icon-holder")):i+$(window).height()<$(document).height()&&($(".header-wrapper").removeClass("nav-up").addClass("nav-down"),$(".cfi-logo-holder").addClass("icon-holder")),i<t&&($(".header-wrapper").removeClass("nav-down").removeClass("nav-up"),$(".cfi-logo-holder").removeClass("icon-holder")),e=i)}$(window).scroll((function(e){i(),$(".search-input").removeClass("open-search-input"),$("#dd").removeClass("active")})),$("a").each((function(){var t=$(this).attr("href");void 0!==t&&!1!==t&&"#"==t.substr(0,1)&&t.length>1&&$(this).unbind("click").click((function(o){$(window).unbind("scroll"),e=0,$("html, body").animate({scrollTop:$(t).offset().top-150},1e3,(function(){$(window).scroll((function(e){i(),$(".search-input").removeClass("open-search-input"),$("#dd").removeClass("active")}))}))}))}))}function initCounters(){$(".counter").counterUp({delay:10,time:1500})}function initMobileMenu(){$(".navbar-toggle").click((function(){$(".navbar-toggle").toggleClass("navbar-on"),$("nav").fadeToggle(),$("nav").removeClass("nav-hide"),$("body").toggleClass("noscroll")}))}function initSearch(){$(".flaticon-search").on("click",(function(e){e.preventDefault(),""==$(".search-input").val()?($(".search-input").toggleClass("open-search-input"),$(".search-input").hasClass("open-search-input")&&$(".search-input").focus()):$(".search-container form").submit()}))}function initLanguageMenu(){$("#dd").click((function(){$(this).toggleClass("active")}))}function initAutoPost(){$(".autopost").each((function(){var e=$(this);$("select,input",e).change((function(){"true"==$(e).attr("singleselect")&&$("select,input",e).not(this).val(""),e.submit()}))}))}function initLoadMore(){$(".btn-loadmore").each((function(){$(this).click((function(e){if(e.preventDefault(),$(this).blur(),"true"!=$(this).attr("load")){$(this).attr("load","true");var t=$(this),i=$(this).attr("next"),o=$(this).attr("total"),n=$(this).attr("base")+".page"+i+".cache.html",a=$(this).attr("target");return $.get(n,(function(e){$(a).append(e),initEqualHeight(a),initPhoneTooltip(),(i=parseInt(i)+1)>parseInt(o)?$(t).remove():($(t).attr("next",i),$(t).attr("load","false"))})),!1}})).show()}))}function initGeoContent(){$(".contact-section").each((function(){var e=$(this),t=$(this).attr("location"),i=$(this).attr("forceip"),o=$("body").attr("blog"),n=$("body").attr("lang");$.post(t+"/ajax/contact/index.php?unique="+(new Date).toLocaleString()+"&ip="+i+"&blog="+o+"&lang="+n,(function(t){if($(e).html(t),"en"!==n){var i=$("a.calltoaction-but",$(e)).eq(0);$(i).attr("href",$(i).attr("href")+"?lang="+n)}initFeedbackLabel(),$(".feedback-label").addClass("show")}))})),$("#local-adviser").each((function(){var e=$(this),t=$(this).attr("location"),i=$(this).attr("sector"),o=$(this).attr("country"),n=$(this).attr("heading"),a=$(this).attr("forceip"),s=$("body").attr("blog"),l=$("body").attr("lang");$.post(t+"/ajax/adviser/index.php?unique="+(new Date).toLocaleString()+"&ip="+a+"&blog="+s+"&lang="+l,{sector:i,country:o},(function(t){""!==t?($(e).html('<h3 class="margb20">'+n+"</h3>"+t+"<br />"),initPhoneTooltip()):$(e).html("")}))}))}function initPhoneTooltip(){$('a[href^="tel:"]').not("tipped").addClass("tipped").myTooltip()}function initFeedbackLabel(){$(".feedback-label").addClass("show"),$(".feedback-label").click((function(e){e.preventDefault(),$(".feedback-label").removeClass("show"),$(".feedback-panel").addClass("show")})),$(".feedback-close").click((function(e){e.preventDefault(),$(".feedback-label").addClass("show"),$(".feedback-panel").removeClass("show")}))}function initTawkTo(){if(Tawk_API.onLoad=function(){Tawk_API.hideWidget()},null===sessionStorage.getItem("visitorSession")){var e=parseInt(localStorage.getItem("visitsCounter")||0);localStorage.setItem("visitsCounter",e+1)}parseInt(localStorage.getItem("visitsCounter"))>=3&&setTimeout((function(){Tawk_API.showWidget()}),2e3),sessionStorage.setItem("visitorSession","true")}$((function(){$("select").niceSelect(),initEqualHeight(),initBxSliders(),initMenuScrollActions(),initMobileMenu(),initSearch(),initLanguageMenu(),initAutoPost(),initLoadMore(),initGeoContent(),initPhoneTooltip(),initTawkTo(),$(".industries-item a").hover((function(){$(".industries-item a").not(this).addClass("child-active")}),(function(){$(".industries-item a").not(this).removeClass("child-active")})),$("html").hasClass("no-touch")||$(".flip-hover").hover((function(){$(this).addClass("flip")}),(function(){$(this).removeClass("flip")})),$(".mainNav").navAccordion({expandButtonText:'<i class="mobile-menu-icon"></i>',collapseButtonText:'<i class="mobile-menu-icon turned"></i>'})})),$(window).resize((function(e){reloadBxSliders()})),$.fn.myTooltip=function(){$(this).mouseenter((function(){$(".tooltip-phone",$(this).parent()).html($(this).attr("href").slice(4)).fadeIn(100)})).mouseleave((function(){$(".tooltip-phone").stop(!0,!0).fadeOut(500)}))};