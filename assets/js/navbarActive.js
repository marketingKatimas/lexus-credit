// // Get all the navigation links
// const navLinks = document.querySelectorAll('.nav-link');

// // Add a click event listener to each navigation link
// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         // Remove the 'active' class from all links
//         navLinks.forEach(link => link.classList.remove('active'));
        
//         // Add the 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  
