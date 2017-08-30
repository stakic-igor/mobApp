$(function () {
    
        $(".touren, .tickets, .faq, .kontakt").hide();
        
        $("#app, #touren, #tickets, #faq, #kontakt").bind("click", function (e) {
    e.preventDefault();
          //$("#app, #touren").hide();        
            
          if ($(this).attr("id") == "app")
          {
            $(".app").show();
            $(".touren").hide();
            $(".tickets").hide();
            $(".faq").hide();
            $(".kontakt").hide();
          }
          else if ($(this).attr("id") == "touren")
            { 
              $(".app").hide();
              $(".faq").hide();
              $(".touren").show();
              $(".kontakt").hide();
              $(".tickets").hide();
            }
            else if ($(this).attr("id") == "tickets")
                { 
                  $(".app").hide();
                  $(".faq").hide();
                  $(".touren").hide();
                  $(".kontakt").hide();
                  $(".tickets").show();
                }
                else if ($(this).attr("id") == "faq")
                    { 
                      $(".app").hide();
                      $(".faq").show();
                      $(".touren").hide();
                      $(".kontakt").hide();
                      $(".tickets").hide();
                    }
            else {
                $(".app").hide();
                $(".faq").hide();
                $(".touren").hide();
                $(".kontakt").show();
                $(".tickets").hide();
            }
        });
    
    });