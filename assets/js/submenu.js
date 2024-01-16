$(document).ready(function () {
    // URL of the API
    var apiUrl = 'http://127.0.0.1/api/Api_Controller/show_Menu';
  
    // Perform Ajax request
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Get the menu container
            var menuContainer = $('#sideBar_menu');
  
            // Loop through the data and append menu items
            for (var i = 0; i < data.length; i++) {
                var menuItem = data[i];
                var menuItemHtml = `         
                <li class="menu-item">
                  <a href="" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx ${menuItem.smm_icon}"></i>
                    <div data-i18n="${menuItem.smm_name}">${menuItem.smm_name}</div>
                  </a>
                  <ul class="menu-sub">
                    <li class="menu-item">
                      <a href="`+`${base_url(menuItem.ssm_controller)}`+`" class="menu-link">
                        <div data-i18n="${menuItem.ssm_name}">${menuItem.ssm_name}</div>
                      </a>
                    </li>
                  </ul>
              </li>
                `;
                menuContainer.append(menuItemHtml);
            }
            const fullUrl = window.location.href;
            $(`a[href="${fullUrl}"]`).closest('li').addClass('active')
            $(`a[href="${fullUrl}"]`).closest('ul.menu-sub').css('display','block')
            $(`a[href="${fullUrl}"]`).parents().eq(2).addClass('active')
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
  });
  
  
  
   
    var permis = []
    var plant = []
    var url = API_URL + "Api_Controller/show_Menu";
    $.ajax({
        url: base_url('Login/callApiDropDown?url=' + url),
        type: 'POST',
        dataType: 'Json',
        success: (response) => {
            // console.log(response);
            permis = response.permis
            plant = response.plant
            for (let i = 0; i < permis.length; i++) {
                const data = permis[i];
                // console.log(data);
                $('.selPermission').append(`<option value="${data.spg_id}">${data.spg_name}</option>`)
            }
            for (let i = 0; i < plant.length; i++) {
                const data = plant[i];
                // console.log(data);
                $('.selPlant').append(`<option value="${data.mpc_id}">${data.mpc_name}</option>`)
            }
        }
    });
  
  
  // })