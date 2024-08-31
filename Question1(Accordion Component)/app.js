document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelectorAll(".heading");

    header.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                document.querySelectorAll(".content").forEach(item => {
                    item.style.maxHeight = null;
                });
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
