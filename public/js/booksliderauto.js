function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
        document.querySelector(".book .next").focus({
            preventScroll: true
          });
        document.querySelector(".book .next").click();
        document.querySelector(".book .next").blur();
    }, 4000);
}
requestAnimationFrame(animate);