function toggleDropdown(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// تشغيل الفيديو عند الضغط على الزر
document.addEventListener("DOMContentLoaded", function () {
    let videoButtons = document.querySelectorAll(".video-btn");
    let pdfButtons = document.querySelectorAll(".pdf-btn");

    videoButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("تشغيل الفيديو...");
            // يمكنك هنا فتح نافذة تشغيل الفيديو الفعلي
        });
    });

    pdfButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("تحميل ملف PDF...");
            // يمكنك هنا وضع رابط تحميل فعلي
        });
    });
});
