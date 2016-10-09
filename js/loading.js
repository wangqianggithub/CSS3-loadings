var _interval;
$('.loading_31').mouseover(function()
{
    clearInterval(_interval);
    $('.loading_border_light_31').stop().animate(
        {
            width: '158px'
        },2000);

    _interval = setInterval(function()
    {
        $('.loading_font_31').text(parseInt(parseInt($('.loading_border_light_31').css('width'))/158*100)+'%');
    }, 50);

})
$('.loading_31').mouseout(function()
{
    clearInterval(_interval);
    $('.loading_border_light_31').stop();
    $('.loading_border_light_31').css('width','20px');
    $('.loading_font_31').text(0+'%');
});
$('.loading_32').mouseover(function()
{
    clearInterval(_interval);
    $('.loading_border_light_32').stop().animate(
        {
            width: '158px'
        },2000);

    _interval = setInterval(function()
    {
        $('.loading_font_32').text(parseInt(parseInt($('.loading_border_light_32').css('width'))/158*100)+'%');
    }, 50);

})
$('.loading_32').mouseout(function()
{
    clearInterval(_interval);
    $('.loading_border_light_32').stop();
    $('.loading_border_light_32').css('width','20px');
    $('.loading_font_32').text(0+'%');
});
$('.loading_33').mouseover(function()
{
    clearInterval(_interval);
    $('.loading_border_light_33').stop().animate(
        {
            width: '158px'
        },2000);
    $('.loading_font_33').stop().animate(
        {
            left: '128px'
        },2000);
    _interval = setInterval(function()
    {
        $('.loading_font_33').text(parseInt(parseInt($('.loading_border_light_33').css('width'))/158*100)+'%');
    }, 50);
})
$('.loading_33').mouseout(function()
{
    clearInterval(_interval);
    $('.loading_border_light_33').stop();
    $('.loading_font_33').stop();
    $('.loading_border_light_33').css('width','20px');
    $('.loading_font_33').css('left','0px');
    $('.loading_font_33').text(0+'%');
});
$('.loading_34').mouseover(function()
{
    clearInterval(_interval);
    $('.loading_border_light_34').stop().animate(
        {
            width: '140px'
        },2000);
    $('.loading_font_34').stop().animate(
        {
            left: '154px'
        },2000);
    _interval = setInterval(function()
    {
        $('.loading_font_in_34').text(parseInt(parseInt($('.loading_border_light_34').css('width'))/140*100)+'%');
    }, 50);
})
$('.loading_34').mouseout(function()
{
    clearInterval(_interval);
    $('.loading_border_light_34').stop();
    $('.loading_font_34').stop();
    $('.loading_border_light_34').css('width','0px');
    $('.loading_font_34').css('left','15px');
    $('.loading_font_in_34').text(0+'%');
});