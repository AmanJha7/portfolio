$(document).ready(function() {
    // Toggle dark mode
    $('#themeToggle').change(function() {
      $('body').toggleClass('dark');
    });
  });

  $(document).ready(function() {
// Check the toggle button state on page load
if ($("#themeToggle").is(":checked")) {
showSun();
} else {
showMoon();
}

// Toggle button state change event
$("#themeToggle").change(function() {
if ($(this).is(":checked")) {
  showSun();
} else {
  showMoon();
}
});

// Function to show the sun icon
function showSun() {
$(".slider").removeClass("fa fa-moon-o").addClass("fa fa-sun-o");
}

// Function to show the moon icon
function showMoon() {
$(".slider").removeClass("fa fa-sun-o").addClass("fa fa-moon-o");
}
});

function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}


// JavaScript
$(document).ready(function() {
  // Check the toggle button state on page load
  if ($("#themeToggle").is(":checked")) {
    showSun();
  } else {
    showMoon();
  }

  // Toggle button state change event
  $("#themeToggle").change(function() {
    if ($(this).is(":checked")) {
      showSun();
      additionalFunctionOnToggleOn();
    } else {
      showMoon();
      additionalFunctionOnToggleOff();
    }
  });

  // Function to show the sun icon
  function showSun() {
    $(".slider").removeClass("fa fa-moon-o").addClass("fa fa-sun-o");
  }

  // Function to show the moon icon
  function showMoon() {
    $(".slider").removeClass("fa fa-sun-o").addClass("fa fa-moon-o");
  }

  // Additional function when toggle is ON
  function additionalFunctionOnToggleOn() {
    // Add your additional actions here when the toggle is ON
    console.log("Toggle is ON. Additional actions here...");
  }

  // Additional function when toggle is OFF
  function additionalFunctionOnToggleOff() {
    // Add your additional actions here when the toggle is OFF
    console.log("Toggle is OFF. Additional actions here...");
  }
});



const brandsSection = document.querySelector('.brands-section');
const brandImages = document.querySelectorAll('.brands-section img');

const circleRadius = 250; // Change this value to adjust the circle's radius
const rotationSpeed = 2; // Change this value to adjust the rotation speed (in degrees per interval)
const centerX = 0; // X-coordinate of the center of the circle
const centerY = circleRadius - 40 ; // Y-coordinate of the center of the circle
const numBrands = brandImages.length;

let angle = 0;

function updateBrandPositions() {
  const angleIncrement = 360 / numBrands;

  for (let i = 0; i < numBrands; i++) {
    const brandImage = brandImages[i];
    const brandAngle = (angle + angleIncrement * i) % 360;

    const left = centerX + circleRadius * Math.cos(brandAngle * (Math.PI / 180));
    const top = centerY + circleRadius * Math.sin(brandAngle * (Math.PI / 180));

    brandImage.style.left = left + 'px';
    brandImage.style.top = top + 'px';
  }

  angle = (angle + rotationSpeed) % 360;
}

// Update the brand positions every 50 milliseconds (adjust the interval as needed)
setInterval(updateBrandPositions, 50);
