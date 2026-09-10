// Biểu thức chính quy kiểm tra định dạng email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 1. XỬ LÝ XÁC THỰC EMAIL
const btnSubmit = document.querySelector("#btn-submit");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector(".email-error");

btnSubmit.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    emailError.textContent = "Vui lòng không để trống email!";
  } else if (!regex.test(emailValue)) {
    emailError.textContent = "Email không đúng định dạng!";
  } else {
    // Ẩn form nhập email và hiện thông tin cá nhân
    document.querySelector(".info-form").classList.add("hide");
    document.querySelector("#info .section-content").classList.remove("hide");
    document.querySelector("#info .icon").classList.remove("hide");
  }
});

// 2. XỬ LÝ ẨN/HIỆN NỘI DUNG TỪ EXPERIENCE ĐẾN SKILL
const sections = document.querySelectorAll(".container-2 .section");

sections.forEach((section) => {
  const btn = section.querySelector(".view-more");
  const content = section.querySelector(".section-content");

  // Đổi trạng thái hiển thị nội dung và nhãn nút khi click
  btn.addEventListener("click", function () {
    const isHidden = content.classList.contains("hide");

    if (isHidden) {
      content.classList.remove("hide");
      btn.textContent = "▲ VIEW LESS";
      btn.classList.add("is-active");
    } else {
      content.classList.add("hide");
      btn.textContent = "▼ VIEW MORE";
      btn.classList.remove("is-active");
    }
  });
});
