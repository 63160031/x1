$(() => {


    // Function to show Main Menu
    function showGroupDetail() {
        var url = API_URL + "App_Manage_permis_detail/show_group";
        $.ajax({
            method: "get",
            url: base_url("AppPermissionDetail/callApiShowPerGroup?url=" + url),
            dataType: 'Json',

            success: (response) => {
                for (let i = 0; i < response.length; i++) {
                    const data = response[i];
                    $('.selGroup').append(`<option value="${data.spga_id}">${data.spga_name}</option>`);
                }
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    // Show Main Menu on page load
    showGroupDetail();

    // Event handler for clicking the search button
    $(document).on('click', '#btnSerchMain', function () {
        loadData();
    });
})

$(document).ready(function () {
    $('#btnSaveAddPer').on('click', function () {
        
        var arrDataAdd = [];
        var selGroup = $('#selGroup').val();
        // alert(selGroup);
        var mainMenuID = $('#selMenuGroupName').val();
        // alert(mainMenuID);
        // var AppMenu = $('#selMenuGroupName').val();
        if (mainMenuID == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please choose App Menu ',
            })
        }  else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to register app menu",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Register App Menu!'
            }).then((result) => {
                if (result.isConfirmed) {
                    var url = API_URL + 'App_Manage_permis_detail/RegisterAppMenu';
                    const formData = new FormData()
                    formData.append('mainMenuID', mainMenuID);
                    formData.append('selGroup', selGroup);
                    $.ajax({
                        url: base_url('AppPermissionDetail/callApiRegisterAppMenu'),
                        type: 'POST',
                        data: formData,
                        processData: false,
                         contentType: false,
                         cache: false,
                        dataType: 'json',
                        success: function(res) {
                            console.log(res);
                            if (res == 1) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success !',
                                    html: 'Register App Menu success',
                                    timer: 2500,
                                }).then(() => {
                                    // $('#btnBack').trigger('click');
                                    $('#selMenuGroupName').val('');
                                    shDataTable()
                                    
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Ooops...',
                                    html: 'A system error has occurred.',
                                });
                                $('#selMenuGroupName').val('');
                            }
                        }
                    });
                }
            });
        }
    });
});

function loadData() {
    // MainmenuDropdown();
    MenuDropdown();
    shDataTable(); // เรียกเพื่อโหลดข้อมูลในตารางเมื่อหน้าเว็บโหลด
}

function shDataTable() {
    var permisId = $('#selGroup').val();

    if (permisId == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Ooops..',
            html: 'Please choose Main Menu',
        });
    } else {
        var x = document.getElementById("content");
        var y = document.getElementById("inpAppPermissionDetail");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
        }
        var url = API_URL + "App_Manage_permis_detail/show_tb?permisId=" + permisId;
        $.ajax({
            method: "POST",
            url: base_url("AppPermissionDetail/callApiShowTable?url=" + url),
            data: {
                permisId: permisId,
            },
            dataType: 'Json',
            success: (data) => {
                var html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `
                    <tr>
                <td class="text-center"><strong>${i + 1}</strong></td>
                <td class="text-center"><strong>${data[i].sma_name}</strong></td>
                <td class="text-center">${data[i].spda_updated_date}</td>
                <td class="text-center">${data[i].FullName }</td>
                <td class="text-center">
                    <button class="btnStatus btn badge bg-label-${data[i].spda_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].spda_id}" value="${data[i].spda_status_flg}">
                    ${data[i].spda_status_flg == 1 ? 'Enable' : 'Disable'}
                    </button>
                </td>
                </tr>

                  `;
                }
                $('#tblPermis').dataTable().fnDestroy();
                $("#tbody")
                    .html(html)
                    .promise()
                    .done(() => {
                        $("#tblPermis").DataTable({
                            scrollX: true,
                        });
                    });
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
}




function MenuDropdown() {
    var dropdown = $('#selMenuGroupName');
    var permisId = $('#selGroup').val();

    // เรียก API
    var url = API_URL + "App_Manage_permis_detail/drop_menu?permisId=" + permisId;
    $.ajax({
        method: "POST",
        url: base_url("AppPermissionDetail/callApiShowMenuDrop?url=" + url),
        data: {
            permisId: permisId,
        },
        dataType: 'json',
        success: (response) => {
            console.log(response); // ดูข้อมูลที่ได้รับจาก API ใน Console Log

            // ล้างค่าเดิมทั้งหมดใน dropdown ก่อน
            dropdown.val('').empty();

            // เพิ่ม option แรก
            dropdown.append('<option value="">Choose Main menu</option>');

            // วนลูปเพื่อเพิ่ม options เข้าไปใน dropdown
            for (let i = 0; i < response.length; i++) {
                const menu = response[i];
                dropdown.append(`<option value="${menu.sma_id}">${menu.sma_name}</option>`);
            }

        },
        error: (err) => {
            console.log(err);
        },
    });
}
$(document).on('click', '#flgStatus', function () {
    const appId = $(this).data('sa-id');
    var newStatus = $(this).closest('td').find('.btnStatus').val();
    // alert(appId);
    if  (newStatus == 1) {
        newStatus = 0;
    } else if 
        (newStatus == 0) {
        newStatus = 1;
    }

    Swal.fire({
        title: 'Are you Sure',
        text: "You want to Changed Status ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, edit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            var url = API_URL + "App_Manage_permis_detail/update_flg";
            $.ajax({
                url: base_url('AppPermissionDetail/callApiupdate_flg?url=') + url,
                type: 'POST',
                data: {
                    appId : appId,
                    newStatus: newStatus,
                },
                dataType: 'json',
                success: function (response) {
                    if (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            html: 'Changed Status Success!',
                            timer: 2500,
                        }).then(() => {
                            shDataTable();
                        });
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Warning!',
                            html: 'Change status Fail',
                            timer: 2500,
                        });
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
});