jQuery(document).ready(function($){"use strict";var $=jQuery;var screenRes=$(window).width(),screenHeight=$(window).height(),html=$('html');var menuItemWidth,submenuItemWidth;jQuery(".fw-nav-menu > li").hover(function(){var $this=$(this);$this.children('ul').prepend('<li class="arrow-dropdown"></li>');menuItemWidth=$this.innerWidth();submenuItemWidth=$this.children("ul").innerWidth();$this.children("ul").css('left',(menuItemWidth-submenuItemWidth)/2)},function(){jQuery('.arrow-dropdown').remove()});jQuery(".fw-nav-menu li").hover(function(){var $this=$(this);if($this.hasClass('parent')){var dropdown=$this.children('ul'),dropdownWidth=dropdown.outerWidth(),dropdownOffset=parseInt(dropdown.offset().left,10);if(dropdownWidth+dropdownOffset>screenRes){dropdown.addClass('left')}else{dropdown.removeClass('left')}}});if(html.hasClass("ie7")){$("body").empty().html('Please, Update your Browser to at least IE8')}
$("[href='#']").click(function(event){event.preventDefault()});$(".body-wrap").css("min-height",screenHeight);$(window).resize(function(){screenHeight=$(window).height();$(".body-wrap").css("min-height",screenHeight)});$("a, input, textarea").attr("hideFocus","true").css("outline","none");if(jQuery('select[class*="select-"]').length>0){jQuery('select[class*="select-"]').selectize({create:!0,sortField:'text'})}
if($(".input-styled").length){$(".input-styled input").customInput()}
if(screenRes<=767){var horizontal_padding=20;var allow_expand=!1}else{var horizontal_padding=100;var allow_expand=!0}
if($('a').is('[data-rel]')){$('a[data-rel]').each(function(){$(this).attr('rel',$(this).data('rel'))});$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:!1,theme:'dark_square',deeplinking:!1,counter_separator_label:' / ',allow_expand:allow_expand,horizontal_padding:horizontal_padding,overlay_gallery:!1,markup:'<div class="pp_pic_holder"> \
                    <div class="ppt">&nbsp;</div> \
                    <div class="pp_top"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                        <a class="pp_close" href="#">Close</a> \
                    </div> \
                    <div class="pp_content_container"> \
                        <div class="pp_left"> \
                        <div class="pp_right"> \
                            <div class="pp_content"> \
                                <div class="pp_loaderIcon"></div> \
                                <div class="pp_fade"> \
                                    <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                    <div class="pp_hoverContainer"> \
                                        <a class="pp_next" href="#"><span>'+FwPhpVars.next+'</span></a> \
                                        <a class="pp_previous" href="#"><span>'+FwPhpVars.previous+'</span></a> \
                                    </div> \
                                    <div id="pp_full_res"></div> \
                                    <div class="pp_details"> \
                                        <div class="pp_nav"> \
                                            <a href="#" class="pp_arrow_previous"><span>'+FwPhpVars.previous+'</span></a> \
                                            <p class="currentTextHolder">0/0</p> \
                                            <a href="#" class="pp_arrow_next"><span>'+FwPhpVars.next+'</span></a> \
                                        </div> \
                                        <p class="pp_description"></p> \
                                        <div class="pp_social">{pp_social}</div> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                        </div> \
                    </div> \
                    <div class="pp_bottom"> \
                        <div class="pp_left"></div> \
                        <div class="pp_middle"></div> \
                        <div class="pp_right"></div> \
                    </div> \
                </div> \
                <div class="pp_overlay"></div>',changepicturecallback:function(){setupSwipe()}});var setupSwipe=function(){$(".pp_pic_holder").swipe({swipeLeft:function(){$.prettyPhoto.changePage('next')},swipeRight:function(){$.prettyPhoto.changePage('previous')},min_move_x:20,min_move_y:20,preventDefaultEvents:!0})}}(function($){var
props=['Width','Height'],prop;while(prop=props.pop()){(function(natural,prop){$.fn[natural]=(natural in new Image())?function(){return this[0][natural]}:function(){var
node=this[0],img,value;if(node.tagName.toLowerCase()==='img'){img=new Image();img.src=node.src,value=img[prop]}
return value}}('natural'+prop,prop.toLowerCase()))}}(jQuery));var carousels_on_page=$('.carousel-inner').length,carouselWidth,carouselHeight,ratio,imgWidth,imgHeight,imgRatio,imgMargin,this_image,images_in_carousel;for(var i=1;i<=carousels_on_page;i++){$('.carousel-inner').eq(i-1).addClass('id'+i)}
function imageSize(){setTimeout(function(){for(var i=1;i<=carousels_on_page;i++){carouselWidth=$('.carousel-inner.id'+i+' .item').width();carouselHeight=$('.carousel-inner.id'+i+' .item').height();ratio=carouselWidth/carouselHeight;images_in_carousel=$('.carousel-inner.id'+i+' .item img').length;for(var j=1;j<=images_in_carousel;j++){this_image=$('.carousel-inner.id'+i+' .item img').eq(j-1);imgWidth=this_image.naturalWidth();imgHeight=this_image.naturalHeight();imgRatio=imgWidth/imgHeight;if(ratio<=imgRatio){imgMargin=parseInt((carouselHeight/imgHeight*imgWidth-carouselWidth)/2,10);this_image.css("cssText","height: "+carouselHeight+"px; margin-left:-"+imgMargin+"px;")}else{imgMargin=parseInt((carouselWidth/imgWidth*imgHeight-carouselHeight)/2,10);this_image.css("cssText","width: "+carouselWidth+"px; margin-top:-"+imgMargin+"px;")}}}},0)}
$(window).load(function(){imageSize()});$(window).resize(function(){imageSize()});function adjustIframes(){$('iframe').each(function(){var
$this=$(this),proportion=$this.data('proportion'),w=$this.attr('width'),actual_w=$this.width();if(!proportion){proportion=$this.attr('height')/w;$this.data('proportion',proportion)}
if(actual_w!=w){$this.css('height',Math.round(actual_w*proportion)+'px')}})}
$(window).on('resize load',adjustIframes);function detectIframeClick(){var overiFrame=-1;jQuery('.myCarousel').find('iframe').hover(function(){overiFrame=1},function(){overiFrame=-1});$(window).on('blur',function(){if(overiFrame!=-1){jQuery('.myCarousel').carousel('pause')}});jQuery('.carousel-control, .carousel-indicators li').click(function(){jQuery('.myCarousel').carousel('cycle')})}
detectIframeClick();var totalHeight=0;jQuery('.column-height').each(function(){var info_height=$(this).outerHeight();if(info_height>totalHeight){totalHeight=info_height}});jQuery('.column-height').css('height',totalHeight);if(jQuery('#datepicker').length>0){jQuery('#datepicker').datetimepicker({timepicker:!1,format:'d.m.Y',closeOnDateSelect:!0,minDate:0})}
function assignCalendar(id){$('<div class="calendar-datepicker" />').insertAfter($(id)).multiDatesPicker({dateFormat:'yy-mm-dd',minDate:new Date(),maxDate:'+1y',altField:id,firstDay:1,showOtherMonths:!1}).prev().hide()}
if(jQuery('#calendar-datepicker').length>0){assignCalendar('#calendar-datepicker')}
if(jQuery('.wrap-contact-form').length>0){jQuery('.hide-open-form').click(function(){if($(this).parent('.wrap-contact-form').hasClass('open')){$(this).parent('.wrap-contact-form').removeClass('open',1000).addClass('close',1000);jQuery('.hide-open-form[data-toggle="tooltip"]').attr('data-original-title','Open Form');jQuery('.hide-open-form i').removeClass('tficon-close').addClass('tficon-row-up')}else{$(this).parent('.wrap-contact-form').removeClass('close',1000).addClass('open',1000);jQuery('.hide-open-form[data-toggle="tooltip"]').attr('data-original-title','Hide Form');jQuery('.hide-open-form i').removeClass('tficon-row-up').addClass('tficon-close')}
return!1})}
if(jQuery("[data-toggle='tooltip']").length>0){jQuery("[data-toggle='tooltip']").tooltip()}
if(screenRes>1000){var $sidebar=jQuery('.fw-content-area');if($sidebar.length){var $content=jQuery('.fw-sidebar');setTimeout(function(){var sidebarHeight=$sidebar.outerHeight(),contentHeight=$content.outerHeight();if(sidebarHeight>contentHeight){$content.css('height',sidebarHeight)}else{$sidebar.css('height',contentHeight)}},0)}}
if(jQuery('.fw-contact-form-absolute .wrap-forms').length>0){var height_wrap_form=jQuery('.fw-contact-form').addClass('open').outerHeight();jQuery('.fw-contact-form.open').css('height',height_wrap_form);jQuery('.fw-contact-form.open').append('<a href="#" class="hide-open-form" data-toggle="tooltip" title="" data-original-title="Hide Form"><i class="tficon-close"></i></a>');jQuery('.hide-open-form').click(function(){if($(this).parent('.fw-contact-form').hasClass('open')){$(this).parent('.fw-contact-form').removeClass('open').addClass('close');jQuery('.hide-open-form[data-toggle="tooltip"]').attr('data-original-title','Open Form');jQuery('.hide-open-form i').removeClass('tficon-close').addClass('tficon-row-up')}else{$(this).parent('.fw-contact-form').removeClass('close').addClass('open');jQuery('.hide-open-form[data-toggle="tooltip"]').attr('data-original-title','Hide Form');jQuery('.hide-open-form i').removeClass('tficon-row-up').addClass('tficon-close')}
return!1})}
jQuery(".scroll-to").click(function(){var selected=$(this).attr('href');$.scrollTo(selected,1000);return!1});function recalculateHomePostList(){setTimeout(function(){var $elements=$('.post-list .element'),heights=[],maxHeight;$elements.removeAttr('style').each(function(){heights.push($(this).outerHeight())});maxHeight=Math.max.apply(null,heights);$elements.css('height',maxHeight)},0)}
recalculateHomePostList();$(window).resize(recalculateHomePostList);if(jQuery('body.fw-header-sticky').length>0&&screenRes>991){jQuery('.fw-header').clone().addClass('fw-sticky-menu').prependTo('div.site');var height_original_header=jQuery('header.fw-header').not('header.fw-header .fw-sticky-menu').outerHeight();$(window).on('scroll',function(){if(height_original_header>300){var intermediate_height=height_original_header+250}else{var intermediate_height=400}
if($(window).scrollTop()>intermediate_height){$('.fw-header.fw-sticky-menu').addClass('fw-sticky-menu-open')}else{$('.fw-header.fw-sticky-menu').removeClass('fw-sticky-menu-open')}});jQuery('.fw-header .fw-search-form .fw-input-search').on("keyup",function(){var search_input=jQuery(this).val();jQuery('.fw-header .fw-search-form .fw-input-search').val(search_input)})}
var Mobile_Menu=function(){var $menu=jQuery('#mobile-menu');$menu.find('.mega-menu-col').each(function(){var megaMenuCol=$(this);megaMenuCol.find('a[href="#"]').parent().addClass('linkBlank');$('.linkBlank').each(function(){var linkBlank=$(this);if(linkBlank.children().length===1){linkBlank.addClass('removeItem');linkBlank.parent().addClass('removeItem')}});$('ul.removeItem').each(function(){var removeItem=$(this);removeItem.find('li.removeItem').remove();removeItem.children().length===0?removeItem.remove():null})});$('.linkBlank').removeClass('linkBlank');$('.removeItem').removeClass('removeItem');$menu.mmenu({counters:!0,offCanvas:{position:"right"}},{classNames:{selected:"current-menu-item"}})};if(screenRes<991){Mobile_Menu()}
$(window).on('resize',function(){var screenRes=$(window).width()
if(screenRes<991){Mobile_Menu()}});var searchCloseOpen=function(){$('.fw-buton-icon').on('click',function(event){event.preventDefault();$('.fw-wrap-search-form').fadeToggle(300,function(){$(this).parent().toggleClass('opened')});$(this).children('.fw-buton-icon i.fa').toggleClass('fa-search fa-close')})};searchCloseOpen();$('.toggle-link').click(function(){$(this).parents('.toggle').removeClass('collapsed');if(!$(this).hasClass('collapsed')){$(this).parents('.toggle').addClass('collapsed')}});$(".opened").find(".panel-collapse").addClass("in");$(".panel-toggle").click(function(){$(this).closest(".toggleitem").toggleClass("opened")});function tablePriceInit(){$(".fw-price-table").each(function(){var this_table_width=$(this).width();var this_table_cols=$(this).children().size();var this_col_width=(this_table_width/this_table_cols);$(this).children(".fw-price-col").css('width',this_col_width-1);var table_col_height=0;var this_col_row=$(this).children().find(".fw-price-row");this_col_row.each(function(){table_col_height=table_col_height>$(this).height()?table_col_height:$(this).height()});this_col_row.each(function(){$(this).height(table_col_height)})})}
if($('.fw-price-table').length){tablePriceInit();$(window).on('resize',function(){tablePriceInit()})}
fw_ajax_post_love_it();jQuery(function($){function leftSide(elem){return elem.offset().left}
function rightSide(elem){return elem.offset().left+elem.width()}
function columns(mega){var columns=0;mega.children('.mega-menu-row').each(function(){columns=Math.max(columns,$(this).children('.mega-menu-col').length)});return columns}
function megaMenu(megaMenuSelector){$(megaMenuSelector).each(function(){var a=$(this);var nav=a.closest('.fw-container');var mega=a.find('.mega-menu');var offset=rightSide(nav)-leftSide(a);var col_width=280+2;var col_width2=a.closest('.fw-container').width()/columns(mega);if(columns(mega)<4){mega.width(Math.min(rightSide(nav),columns(mega)*col_width));mega.children('.mega-menu-row').each(function(){$(this).children('.mega-menu-col').css('width',col_width)})}else{mega.width(Math.min(rightSide(nav),columns(mega)*col_width2));mega.children('.mega-menu-row').each(function(){$(this).children('.mega-menu-col').css('width',col_width2,'important')})}
mega.css('left',(Math.min(0,offset-mega.width()))+15)})}
if($('.fw-header .menu-item-has-mega-menu').length){megaMenu('.fw-site-navigation .menu-item-has-mega-menu')}
$('.fw-header .menu-item-has-mega-menu').hover(function(){var $this=$(this);$this.find('.mega-menu').css('display','block');var offset_arrow=leftSide($this)-leftSide($this.find('.sub-menu'))+$this.width()/2-8;$this.find('.mega-menu').children('.sub-menu').prepend('<li class="arrow-dropdown"></li>');$('.arrow-dropdown').css('margin-left',offset_arrow)},function(){$(this).find('.mega-menu').css('display','none')});var FFMac=!(window.mozInnerScreenX==null),msie10=window.navigator.userAgent.indexOf("MSIE"),msie11=!!navigator.userAgent.match(/Trident.*rv\:11\./);if((FFMac&&navigator.platform.indexOf('Mac')>=0)||msie10>0||msie11>0){var megaMenuSelect=$(".fw-header .menu-item-has-mega-menu .mega-menu select");megaMenuSelect.on('click',function(eventAddClassMegaMenu){$(this).parents('.mega-menu').addClass('mega-menu-select');$('.site').on('click',function(){$('.mega-menu').removeClass("mega-menu-select")});eventAddClassMegaMenu.stopPropagation()})}
$(window).on('resize',function(){if($('.fw-header .menu-item-has-mega-menu').length){megaMenu('.fw-site-navigation .menu-item-has-mega-menu')}})})});function fw_ajax_post_love_it(){"use strict";var love_post=jQuery(".fw-js-love-post");love_post.on('click',function(){var _this=jQuery(this);var id=_this.attr('data-post-id');var ajax_data="action=fw_ajax_post_love_it&id="+id;jQuery.ajax({type:"POST",url:FwPhpVars.ajax_url,data:ajax_data,success:function(rsp){var obj=jQuery.parseJSON(rsp);console.log(obj);if(obj.success=='post-is-loved'){}else if(obj.success){_this.removeClass('fw-love-post').addClass('fw-loved');_this.find('span').html(obj.count)}else{}}})});return!1}
jQuery(function($){"use strict";var formErrorMessageClass='form-error',formErrorHideEventNamespace='.form-error-hide',errorTemplate='<p class="'+formErrorMessageClass+'" style="color: red;">{message}</p>';function showFormError($form,inputName,message){var inputSelector='[name="'+inputName+'"]',$input=$form.find(inputSelector).last(),$message=$(errorTemplate.replace('{message}',message));if($input.length){$input.parent().after($message);$form.one('focusout'+formErrorHideEventNamespace,inputSelector,function(){$message.slideUp(function(){$(this).remove()})})}else{$form.prepend($message)}}
function themeGenerateFlashMessagesHtml(types){var html=[],typeHtml=[];$.each(types,function(type,messages){typeHtml=[];$.each(messages,function(messageId,messageData){typeHtml.push(messageData)});if(typeHtml.length){html.push('<ul class="flash-messages-'+type+'">'+'    <li>'+typeHtml.join('</li><li>')+'</li>'+'</ul>')}});if(html.length){return html.join('')}else{return'<p>Success</p>'}}
do{if(typeof _fw_form_invalid=='undefined'){break}
var $form=$('form.fw_form_'+_fw_form_invalid.id).first();if(!$form.length){console.error('Form not found on the page');break}
$.each(_fw_form_invalid.errors,function(inputName,message){showFormError($form,inputName,message)})}while(!1);{$(document.body).on('submit','form[data-fw-ext-forms-type="contact-forms"]',function(e){e.preventDefault();var $form=$(this);jQuery.ajax({type:"POST",url:FwPhpVars.ajax_url,data:$(this).serialize(),dataType:'json'}).done(function(r){if(r.success){$form.on('submit',function(e){e.preventDefault();e.stopPropagation()});$form.html(themeGenerateFlashMessagesHtml(r.data.flash_messages))}else{$form.off(formErrorHideEventNamespace).find('.'+formErrorMessageClass).remove();$.each(r.data.errors,function(inputName,message){showFormError($form,inputName,message)})}}).fail(function(){})})}});(function(){var tId=setInterval(function(){if(document.readyState=="complete")onComplete()},11);function onComplete(){clearInterval(tId);var parent=jQuery('.fw-main-row-top'),child=jQuery('.fw-heading');if(parent.find(child).length>0){var t=jQuery('.fw-main-row-top');t.addClass("fw-middle-align")}}})()