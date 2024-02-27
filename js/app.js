$(document).ready(function () {
  $(".burger").click(function () {
    $(".menu").addClass("active");
    $(".overlay").show();
  });
  $(".overlay").click(function () {
    $(".menu").removeClass("active");
    $(".overlay").hide();
    $(".addReview").hide();
    $(".reviewOpen").hide();
  });
  $(".menu__close").click(function () {
    $(".menu").removeClass("active");
    $(".overlay").hide();
  });
  $(".reviews__slider").owlCarousel({
    loop: true,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false,
    URLhashListener: false,
    dots: true,
    autoplay: false,
    margin: 18,
    center: true,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      576: {
        items: 2,
      },
      768: {
        center: false,
        items: 2,
      },
      992: {
        center: false,
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });
  $(".addReview__add-file").click(function () {
    $(".addReview__add-file_hidden").click();
  });
  var dropZone = document.getElementById("dropZone");

  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", function () {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    var files = e.dataTransfer.files;
    // Обрабатываем загруженные файлы
  });
  $(".addReview__heading svg, .close_popup").click(function () {
    $(".addReview").hide();
    $(".overlay").hide();
  });
  $(".add_rev").click(function () {
    $(".addReview").show();
    $(".overlay").show();
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

   // Получаем текущую дату
   var currentDate = new Date();
   // Добавляем один день
   currentDate.setDate(currentDate.getDate() + 1);
   // Форматируем дату в виде 'День.Месяц.Год'
   var formattedDate = currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear();
   // Выводим результат на страницу
   $('.date').text(formattedDate);

   if($(window).width() < 769) {
    $(".menu__item").click(function() {
      $(".menu__close").click();
    });
   };

   $('form[name="form"]').submit(function(e) {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    // Получаем значения полей формы
    var name = $('input[name="name"]').val();
    var phone = $('input[name="phone"]').val();
    var email = $('input[name="email"]').val();
    
    // Проверяем, заполнены ли все поля
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        // Добавляем красную рамку к незаполненным полям
        if (!name.trim()) {
            $('input[name="name"]').css('border-color', 'red');
        }
        if (!phone.trim()) {
            $('input[name="phone"]').css('border-color', 'red');
        }
        if (!email.trim()) {
            $('input[name="email"]').css('border-color', 'red');
        }
        
        return;
    }
    
    // Если все поля заполнены, можно отправить форму
    this.submit();
   });
   $('form[name="form__review"]').submit(function(e) {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    // Получаем значения полей формы
    var rev_name = $('input[name="rev_name"]').val();
    var rev_phone = $('input[name="rev_phone"]').val();
    var rev_email = $('input[name="rev_mail"]').val();
    var rev_rev = $('textarea[name="rev_rev"]').val();
    
    // Проверяем, заполнены ли все поля
    if (rev_name.trim() === '' || rev_phone.trim() === '' || rev_email.trim() === '' || rev_rev.trim() === '') {
        // Добавляем красную рамку к незаполненным полям
        if (!rev_name.trim()) {
            $('input[name="rev_name"]').css('border-color', 'red');
        }
        if (!rev_phone.trim()) {
            $('input[name="rev_phone"]').css('border-color', 'red');
        }
        if (!rev_email.trim()) {
            $('input[name="rev_mail"]').css('border-color', 'red');
        }
        if (!rev_rev.trim()) {
            $('textarea[name="rev_rev"]').css('border-color', 'red');
        }
        
        return;
    }
    localStorage.setItem('rev_name', rev_name)
    localStorage.setItem('rev_phone', rev_phone)
    localStorage.setItem('rev_email', rev_email)
    localStorage.setItem('rev_rev', rev_rev)
    // Если все поля заполнены, можно отправить форму
    this.submit();
   });

  // Обработчик события input и focus для полей ввода
  $('input[type="text"], input[type="tel"], input[type="email"], textarea').on('input', function() {
      $(this).css('border-color', ''); // Убираем красную рамку при фокусировке на поле
  });

  
  $(".reviews__item_custom .reviews__quote").text(localStorage.getItem("rev_phone"));
  $(".reviews__item_custom .reviews__date").text(currentDate.getDate());
  $(".reviews__item_custom .reviews__name").text(localStorage.getItem("rev_name"));
  $(".reviews__item_custom .reviews__quote").text(localStorage.getItem("rev_rev"));
  $(".reviews__item_custom .reviews__avatar img").attr("src", "images/ava1.png");


  $(".reviews__link").click(function() {
    $(".overlay").show();
    $(".reviewOpen").show();
  });
  $(".close").click(function() {
    $(".overlay").hide();
    $(".reviewOpen").hide();
  });
});
