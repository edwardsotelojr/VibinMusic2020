console.log("users sdfsd");
    widthOfOneHeader = document.getElementById('leftHeader').offsetWidth;
    widthOfAvatar = document.getElementById('avatar');
    heightOfImages = (widthOfOneHeader / 4.47666667) * 2;
    $('#header').css("height", heightOfImages);
    $('.LeftHeader').css("height", heightOfImages);
    $('.RightHeader').css("height", heightOfImages);
    if (widthOfOneHeader * 2 > 700) {
        $('#header').css("height", heightOfImages);
        $('.LeftHeader').css("height", heightOfImages - 6);
        $('.RightHeader').css("height", heightOfImages - 6);
        $('.Avatar').css("height", heightOfImages * 0.55);
        $('.Avatar').css("width", heightOfImages * 0.55);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', heightOfImages * 0.2);
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    } else if (widthOfOneHeader > 267) {
        $('#header').css("height", heightOfImages);
        $('.LeftHeader').css("height", heightOfImages - 6);
        $('.RightHeader').css("height", heightOfImages - 6);
        $('.Avatar').css("height", heightOfImages * 0.5);
        $('.Avatar').css("width", heightOfImages * 0.5);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', (heightOfImages * 0.15));
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    } else {
        $('.Avatar').css("height", heightOfImages * 0.6);
        $('.Avatar').css("width", heightOfImages * 0.6);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', (heightOfImages * 0.15));
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    }
$(window).resize(function () {
    widthOfOneHeader = document.getElementById('leftHeader').offsetWidth;
    widthOfAvatar = document.getElementById('avatar');
    heightOfImages = (widthOfOneHeader / 4.47666667) * 2;
    $('#header').css("height", heightOfImages);
    $('.LeftHeader').css("height", heightOfImages);
    $('.RightHeader').css("height", heightOfImages);
    if (widthOfOneHeader * 2 > 700) {
        $('#header').css("height", heightOfImages);
        $('.LeftHeader').css("height", heightOfImages - 6);
        $('.RightHeader').css("height", heightOfImages - 6);
        $('.Avatar').css("height", heightOfImages * 0.55);
        $('.Avatar').css("width", heightOfImages * 0.55);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', heightOfImages * 0.2);
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    } else if (widthOfOneHeader > 267) {
        $('#header').css("height", heightOfImages);
        $('.LeftHeader').css("height", heightOfImages - 6);
        $('.RightHeader').css("height", heightOfImages - 6);
        $('.Avatar').css("height", heightOfImages * 0.5);
        $('.Avatar').css("width", heightOfImages * 0.5);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', (heightOfImages * 0.15));
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    } else {
        $('.Avatar').css("height", heightOfImages * 0.6);
        $('.Avatar').css("width", heightOfImages * 0.6);
        $('.Avatar').css("left", widthOfOneHeader - widthOfAvatar.offsetWidth / 2);
        $('.Avatar').css('top', (heightOfImages * 0.15));
        $("#badge1").css('top', (heightOfImages * 0.2));
        $('#badge1').css('width', widthOfOneHeader * 0.5);
        $("#badge1").css('left', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
        $("#badge2").css('top', (heightOfImages * 0.2));
        $('#badge2').css('width', widthOfOneHeader * 0.5);
        $("#badge2").css('right', (widthOfOneHeader / 2) - (widthOfOneHeader * 0.5) / 2);
    }
});