$(function () {
    var pageTitle = $('.sub-page__header');
        $(".touren, .tickets, .faq, .kontakt").hide();
        
        $("#app, #touren, #tickets, #faq, #kontakt").bind("click", function (e) {
        e.preventDefault();
          //$("#app, #touren").hide();
          if ($(this).attr("id") == "app")
          {
            pageTitle.text('Die App');
            $("#app").addClass('main-menu--active');
            $("#touren, #tickets, #faq, #kontakt").removeClass('main-menu--active');
            $(".app").show();
            $(".touren").hide();
            $(".tickets").hide();
            $(".faq").hide();
            $(".kontakt").hide();
          }
          else if ($(this).attr("id") == "touren")
            { 
              pageTitle.text('Die Touren');
              $("#touren").addClass('main-menu--active');
              $("#app, #tickets, #faq, #kontakt").removeClass('main-menu--active');
              $(".app").hide();
              $(".faq").hide();
              $(".touren").show();
              $(".kontakt").hide();
              $(".tickets").hide();
            }
            else if ($(this).attr("id") == "tickets")
                {
                  pageTitle.text('Das Tickets');
                  $("#tickets").addClass('main-menu--active');
                  $("#app, #touren, #faq, #kontakt").removeClass('main-menu--active');
                  $(".app").hide();
                  $(".faq").hide();
                  $(".touren").hide();
                  $(".kontakt").hide();
                  $(".tickets").show();
                }
                else if ($(this).attr("id") == "faq")
                    { 
                      pageTitle.text('Die Fragen und Antworten');
                      $("#faq").addClass('main-menu--active');
                      $("#app, #touren, #tickets, #kontakt").removeClass('main-menu--active');
                      $(".app").hide();
                      $(".faq").show();
                      $(".touren").hide();
                      $(".kontakt").hide();
                      $(".tickets").hide();
                    }
            else {
                pageTitle.text('Der Kontakt');
                $("#kontakt").addClass('main-menu--active');
                $("#app, #touren, #faq, #tickets").removeClass('main-menu--active');
                $(".app").hide();
                $(".faq").hide();
                $(".touren").hide();
                $(".kontakt").show();
                $(".tickets").hide();
            }
        });
    
    });