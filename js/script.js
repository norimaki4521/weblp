// *************************
// ハンバーガーメニュー(jQuery)
// *************************
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// *************************
// ハンバーガーメニュー（リンククリックでドロワーを閉じる）
// *************************
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// *************************
// スムーススクロール
// *************************
jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  const targetId = jQuery(this).attr("href").substring(1);
  const targetElement = jQuery("#" + targetId);
  if (targetElement.length) {
    const offsetTop = targetElement.offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: offsetTop,
      },
      500
    );
  }
});
