

function openNav() {
    if (window.innerWidth >= 767) {
        document.getElementById("mySidebar").style.width = "60vh";
    } else {
        document.getElementById("mySidebar").style.width = "40vh";
    }
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}


function openRightNav() {
    if (window.innerWidth >= 767) {
        document.getElementById("myRightSidebar").style.width = "60vh";
    } else {
        document.getElementById("myRightSidebar").style.width = "40vh";
    }
    document.getElementById("rightOverlay").style.display = "block";
}

function closeRightNav() {
    document.getElementById("myRightSidebar").style.width = "0";
    document.getElementById("rightOverlay").style.display = "none";
}

//right sidebar
function toggleSections() {
    var loginSection = document.getElementById('loginSection');
    var signupSection = document.getElementById('signupSection');
    var signupForm = document.getElementById('signupForm');

    if (loginSection.style.display === 'block') {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
        signupForm.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
        signupForm.style.display = 'none';
    }
}

//owl carousel

$('#mind').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    }
})

$('#kolkata').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


$('#featured').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


  // Reference to the Owl Carousel instance
  var owl = $('#mind');
  var owl2 = $('#kolkata');

  // Next button event
  $('.next1').on('click', function(){
    owl.trigger('next.owl.carousel');
  });

  // Prev button event
  $('.prev1').on('click', function(){
    owl.trigger('prev.owl.carousel');
  });

// Next button event for the second carousel
  $('.next2').on('click', function(){
    owl2.trigger('next.owl.carousel');
  });

  // Prev button event for the second carousel
  $('.prev2').on('click', function(){
    owl2.trigger('prev.owl.carousel');
  });


