<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
  }

  section {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#231d3f87, rgb(8 7 18)), url(../assets/img/backgrounds/BG2.jpg);
    background-size: cover;
    background-position: center;
  }

  .container {
  position: absolute;
  top: 50%;
  left: 47.5%;
  transform: translate(-50%, -50%);
  width: 340px;
  text-align: center;
}

.login-form {
  position: relative;
  box-sizing: border-box;
  padding: 60px 30px;
  transition: 0.5s;
}

.login-form:hover {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.login-form h1 {
  margin: 0 0 20px;
  color: white;
  font-size: 30px;
  text-transform: uppercase;
}

.login-form input {
  display: block;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 25px;
  outline: none;
  font-size: 14px;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  border: none;
  background-color: rgb(0 0 0);
  font-family: 'Roboto Condensed', sans-serif;
}

.login-form input::placeholder {
  color: white;
}

.login-form input[type="submit"] {
  color: white;
  background-color: #ff0000d9;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.login-form input[type="submit"]:hover {
  background-color: #b13b3bd9;
}

.login-form a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

</style>
<!DOCTYPE html>
<html lang="en" class="light-style customizer-hide" dir="ltr" data-theme="theme-default" data-assets-path="<?php echo base_url() ?>/assets/assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>Login Inventory Management</title>

  <meta name="description" content="" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="<?php echo base_url() ?>/assets/img/logo/inventory.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <!-- Icons. Uncomment required icon fonts -->
  <link rel="stylesheet" href="<?php echo base_url() ?>/assets/vendor/fonts/boxicons.css" />

  <!-- Core CSS -->
  <!-- <link rel="stylesheet" href="<?php echo base_url() ?>/assets/css/core.css" class="template-customizer-core-css" />
  <link rel="stylesheet" href="<?php echo base_url() ?>/assets/css/theme-default.css" class="template-customizer-theme-css" />
  <link rel="stylesheet" href="<?php echo base_url() ?>/assets/css/demo.css" /> -->

  <!-- Vendors CSS -->
  <link rel="stylesheet" href="<?php echo base_url() ?>/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

  <!-- Page CSS -->

  <!-- Helpers -->
  <script src="<?php echo base_url() ?>/assets/vendor/js/helpers.js"></script>

  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
  <script src="<?php echo base_url() ?>/assets/js/config.js"></script>
</head>

<body>
  <!-- Content -->
  <section>
    <div class="container">
      <div class="login-form">
        <div class="app-brand justify-content-center">
          <img src="<?php echo base_url() ?>/assets/img/logo/Lo1.png" class="card-img-top logo-img" alt="Logo" style="width: 250px; height: 150px; magin-top: 40px; margin-left: 10 px;  ">
        </div>
        <br>
        <form>
          <input type="text" name="username" placeholder="EMPLOYEE CODE" id="username">
          <input type="password" name="password" placeholder="PASSWORD" id="password">
          
        </form>
        <div class="login-btn">
        <input type="submit" name="" value="Login" id="btnLogin">
        </div>
        
        <div class="mb-2 mb-md-0 fw-bold" style="font-size: 8px;">
          <a>© 2024 TBK Technology (Thailand) Company Limited. All rights reserved.<a>
        </div>
      </div>
    </div>
  </section>

  <!-- / Content -->



  <!-- Core JS -->
  <!-- build:js assets/vendor/js/core.js -->
  <script src="<?php echo base_url() ?>/assets/vendor/libs/jquery/jquery.js"></script>
  <script src="<?php echo base_url() ?>/assets/vendor/libs/popper/popper.js"></script>
  <script src="<?php echo base_url() ?>/assets/vendor/js/bootstrap.js"></script>
  <script src="<?php echo base_url() ?>/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

  <script src="<?php echo base_url() ?>/assets/vendor/js/menu.js"></script>

  <script src="<?php echo base_url() ?>/assets/js/login.js"></script>
  <!-- endbuild -->

  <!-- Vendors JS -->

  <!-- Main JS -->
  <script src="<?php echo base_url() ?>/assets/js/main.js"></script>

  <!-- Page JS -->

  <!-- Place this tag in your head or just before your close body tag. -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <script>
    function base_url(url) {
      return '<?php echo $base_url; ?>' + url;
    }
  </script>
</body>

</html>