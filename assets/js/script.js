/* Author: 

*/
$(document).ready(function() {

    // Hamburger menu start
    var cross = $(".cross");
    var hamburger = $(".hamburger");
    var html_tag = $("html");
    var header_tag = $("header");
    var navbar = $(".navbar");
    var nav_tag = $(".nav:first-of-type");
    var captcha =$(".captcha-fig");
    cross.hide();
    hamburger.click(function () {
      cross.show();
      $(this).hide();
      navbar.toggleClass("hide-menu-item");
      navbar.toggleClass("hamburger-menu");
      header_tag.toggleClass("header-effect");
      html_tag.toggleClass("no-scroll");
      nav_tag.slideToggle("slow");
      captcha.toggleClass("hide-element");
    });
  
    cross.click(function () {
      cross.hide();
      hamburger.show();
      navbar.toggleClass("hamburger-menu");
      navbar.toggleClass("hide-menu-item");
      header_tag.toggleClass("header-effect");
      html_tag.toggleClass("no-scroll");
      nav_tag.slideToggle("slow");
      captcha.toggleClass("hide-element");
    });   
    // Hamburger menu end
  
  // form validation 1

  var form = $(".contact-form");
  form.on('submit', validateForm);
  var form_ip=$('.form-ip');
  var inputs=['fname','lname','subject','email','message'];
  var persons= {};
  var emailerr;
  var re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  form_ip.each(function(){
      $(this).on("input",validateField);
  });

  function validateField() {
      var input_data = $(this).val();
      console.log("this inp="+input_data);
      var data_attr=$(this).attr("data-attr");
      console.log("data attr "+data_attr);
      if(data_attr=="email")
      {
          var is_email=re_email.test(input_data);
          var err_class='.'+data_attr+'-error';
          var err_span=$(err_class);
          if(!is_email) {
              err_span.html("Please enter "+data_attr); //ch1
              err_span.addClass('show-element');
              $(this).addClass('outline-red');
              emailerr=1;                  
          }
          else {
              emailerr=0;

              if(err_span.hasClass('show-element'))
              {
                err_span.removeClass('show-element');
                err_span.addClass('hide-element');                  
              }
              if($(this).hasClass("outline-red"))
              {
                  $(this).removeClass("outline-red");
              }

          }
      }

      if(input_data=="")
      {
          var err_class='.'+data_attr+'-error';
          var err_span=$(err_class);
          err_span.html("Please enter "+data_attr); 
          err_span.addClass('show-element')
          $(this).addClass('outline-red');
      }
  }

  function validateForm(event) {
      event.preventDefault();
      form_ip.each(function(index){
          persons[inputs[index]]=$(this).val();
      });
      var formFlag=0;

      for(var i = 0 ; i < inputs.length; i++)
      {   
          if(persons[inputs[i]]=="")
          {
              var err_class='.'+inputs[i]+'-error';
              var err_span=$(err_class);
              err_span.html("Please enter "+inputs[i]); 
              err_span.addClass('show-element');
              var current_form_ip=$('.form-ip:nth-of-type('+i+')');
              current_form_ip.addClass('outline-red');
              formFlag=1; 
          }
      }
      submitform();

      function submitform(){

          if((formFlag===0)&&(emailerr===0)) 
          {
            var span_err_shown=$(".span-error");
            var form_ip=$('.form-ip');
            span_err_shown.each(function(){
              if($(this).hasClass('show-element'))
              {
                  $(this).removeClass('show-element');
                  $(this).addClass('hide-element');                  
              }
          });
          form_ip.each(function(){
              if($(this).hasClass('outline-red'))
              {
                  $(this).removeClass('outline-red');
              }
          });
            var form_ip=$('.form-ip');
          form_ip.each(function(){
              $(this).val("");
          });

          }
      }
    }
  // end of form validation

  // Tab filter starts here

  var window_obj=$(window);
  window_obj.on("load",function(e) { 
      // on load filter settings = monday
      var tabitem=$(".dayitem");
      var default_sel="monday";
      $.each(tabitem,function(i,image){
          if(!$(this).hasClass(default_sel)) {
            $(this).addClass("hide-element");
        }
    });
  });

    


      var filter=$(".day-filters");
      filter.on("click", function(e) {
      if(e.target && e.target.nodeName == "SPAN") {
      var x = $(".tabs");    
      if(x.hasClass("bg-green"))
      {
      x.removeClass("bg-green");        
      x.addClass("bg-black");
      }
        
        var tabitem=$(".dayitem");
        
        tabitem.each(function(){
          if($(this).hasClass("show-element"))
          {
            $(this).removeClass("show-element");
          }
          $(this).fadeOut(3000).addClass("hide-element");
        });


      var classname_sel=e.target.className;
      $.each(tabitem,function(i,image){
        if($(this).hasClass(classname_sel)) {
          if($(this).hasClass("hide-element")){
            $(this).removeClass("hide-element");
            $(this).addClass("show-element").fadeIn(5000);
        }
        }
    });

    if( $(e.target).parent().hasClass("bg-black"))
        {
          $(e.target).parent().removeClass("bg-black");
          $(e.target).parent().addClass("bg-green");
        }
      }  
  });
  
  // Tab filter ends here
  
  // sliders 
  $('.featurelist').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMargin: '40px',
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.class-list').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMargin: '40px',
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 997,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true
        }
      }
    ]
  });
  
  
  
  
});
  
















