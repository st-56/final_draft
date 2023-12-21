document.addEventListener("DOMContentLoaded", function() {
    var adContainer = document.getElementById("ad-container");

    window.addEventListener("scroll", function() {
        // 根据需要调整滚动触发广告显示的位置
        if (window.scrollY > 200) {
            adContainer.style.display = "block";
        } else {
            adContainer.style.display = "none";
        }
    });
});
