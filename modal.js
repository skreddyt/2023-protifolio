$(document).ready(function(){

  // MODAL
  var modalText = {
    Cigna: {
      title: 'Cigna',
      tag: 'LadyBird',
      detail: 'The scope of Strategic Frontend Program will include design, development of components for the mentioned projects in the cloudscape platform, for Cigna Supplemental Benefits. Beneficiary will have the following responsibilities for this program. Equotes application is to generate web pages for Agent operations. This application uses the configuration provided by Underwriting for building web pages. This application is designed to be a single sign on application so Agent View Portal login will provide access to Equotes as well. Logged-in agents are allowed to perform activities like campaign selection, applicant search/registration, product search and selection, quote generation, and policy Enrollment. This application is designed to handle incomplete (partially filled) applications as well. A logged-in Agent is allowed to fill in the insurance application in single/multiple interactions through phone or personal meeting. Agents can start a fresh new application or they can search for existing incomplete applications, if any. If an incomplete application is selected, pre-population process of this application takes care of populating available applicants and already selected products(if any) details with updated rates. For incomplete application, agents are provided an option to start from the page where they left it, in their last interaction. Major responsibilities of the Beneficiary for this project, are listed below',
      
    },
    USAA: {
      title: 'USAA',
      tag:'Shared PQ & The Bulk Attribute Tool(BAT)',
      detail: ' USAA call centre receives numerous calls per day, all dialed-in customer information is stored in 3P file format in different locations respectively in referent databases. This application works as a translation layer to process these 3P files saves in different databases. These 3P files reached to the system on a scheduled manner and stores in OADB Databases, Shared PQ JSR Batch gathers this data from different databases and stores in centralized QA Report Database, Share PQ handles the burden in removing the redundant 3p records and reprocessing 3P files in its business defined manner USAA The Bulk Attribute Tool(BAT) is used to alter the attributes of agents both in bulk and individually. An Attribute identify a call routing requirement, such as language, location, or Agent expertise. Here we using Tool React and redux for design and connecting API. We are using React for Design Single pages and Redux we are using for API connecting We are creating our Own components not using the other components'    ,
    },
    DTE1: {
      title: 'YETI',
      tag: '',
      detail: 'The scope of Fusion will include design, development of components for the mentioned projects in the Salesforces platform, for Yeti coolers. It is a Customer Facing application where the user can directly access the application to get the quote for the products. This application can also be accessed by dealers to get the quotes for bulk products. This application is designed to handle the operations performed by the customer service. A user can contact the customer service or go the web page to get the quote for the products. The advantage of the using the website to get the quote is that customer can upload their custom logo on the products. All the information that is taken from the customer is validated by the customer service agents and will provide sample images to the customer which has the custom logo product. The customer can make changes or approve the products. If the customer approves the custom product it will proceed to the credit card department for further processing. Once the credit card payment is done customer will be directed to the order status page which has all the tracking details about the ordered products. The customer can see the tracking details by clicking on the tracking number provided in the order status page. Each product will have a status whether the product is shipped or delivered. The dealer will have the same view as the customer except the dealer has to provide some additional details about their organization and the purpose of the purchase. This application uses HTML, CSS, JavaScript, TypeScript, jQuery and salesforce lighting components.   ',
    },
    DTE: {
      title: 'COT',
      tag: 'Snapwork',
      detail: 'ABC project is about Kentucky Alcohol beverage control which is a licensing portal for applying for licenses for alcohol sales and production in this project we are working on building an online portal where citizens and public can go and apply for the licenses in order to do the business legally. In this process the user can apply for new applications and renewal of applications additional requests that are needed to run their business ',
       },
    ATT: {
      title: 'ATT',
      tag: 'Snapwork',
      detail: 'ABC project is about Kentucky Alcohol beverage control which is a licensing portal for applying for licenses for alcohol sales and production in this project we are working on building an online portal where citizens and public can go and apply for the licenses in order to do the business legally. In this process the user can apply for new applications and renewal of applications additional requests that are needed to run their business ',
       },
    
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        backgroundImage: "url('img/slides/" + id + '-' + index + ".jpg') no-repeat",
        backgroundSize: 'cover'
      });
              
    });
  }
})
