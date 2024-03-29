$(() => {


    // Function to show Main Menu
    function showGroupDetail() {
        var url = API_URL + "Manage_permis_detail/show_group";
        $.ajax({
            method: "get",
            url: base_url("ManagePermission/callApiShowData?url=" + url),
            dataType: 'Json',


            success: (response) => {
                for (let i = 0; i < response.length; i++) {
                    const data = response[i];
                    $('.selGroup').append(`<option value="${data.spg_id}">${data.spg_name}</option>`);
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


function loadData() {
    MainmenuDropdown();
    SubmenuDropdown();
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
        var y = document.getElementById("inpPermissionDetail");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
        }
        var url = API_URL + "Manage_permis_detail/show_tb?permisId=" + permisId;
        $.ajax({
            method: "POST",
            url: base_url("ManagePermission/callApiShowTable?url=" + url),
            data: {
                permisId: permisId,
            },
            dataType: 'Json',
            success: function(data) {
                $("#loadingPage").attr("style", "display: inline;");
              },
              error: function(xhr, status, error) {
                // เกิดข้อผิดพลาดในการโหลดข้อมูล
                console.error('Error:', error);
              },
              complete: function() {
            
              },
            success: (data) => {
                var html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `
                                    <tr>
                <td class="text-center"><strong>${i + 1}</strong></td>
                <td class="text-center"><strong>${data[i].smm_name}</strong></td>
                <td class="text-center"><strong>${data[i].ssm_name}</strong></td>
                <td class="text-center">${data[i].spd_updated_date}</td>
                <td class="text-center">${data[i].FullName}</td>
                <td class="text-center">
                    <button class="btnStatus btn badge bg-label-${data[i].spd_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].spd_id}" value="${data[i].spd_status_flg}">
                    ${data[i].spd_status_flg == 1 ? 'Enable' : 'Disable'}
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


function MainmenuDropdown() {
    var dropdown = $('.selMenuGroupName');

    // เรียก API
    $.ajax({
        method: "get",
        url: "http://127.0.0.1/api/Manage_permis_detail/drop_main",
        dataType: 'json',
        success: (response) => {
            console.log(response); // ดูข้อมูลที่ได้รับจาก API ใน Console Log

            // ล้างค่าเดิมทั้งหมดใน dropdown ก่อน


            // วนลูปเพื่อเพิ่ม options เข้าไปใน dropdown
            for (let i = 0; i < response.length; i++) {
                const menu = response[i];
                dropdown.append(`<option value="${menu.smm_id}">${menu.smm_name}</option>`);
            }

        },
        error: (err) => {
            console.log(err);
        },
    });
}



function SubmenuDropdown() {
    var dropdown = $('.selSubMenuName');

    // เรียก API
    $.ajax({
        method: "get",
        url: "http://127.0.0.1/api/Manage_permis_detail/drop_sub",
        dataType: 'json',
        success: (response) => {
            console.log(response); // ดูข้อมูลที่ได้รับจาก API ใน Console Log

            // ล้างค่าเดิมทั้งหมดใน dropdown ก่อน

            // วนลูปเพื่อเพิ่ม options เข้าไปใน dropdown
            for (let i = 0; i < response.length; i++) {
                const menu = response[i];
                dropdown.append(`<option value="${menu.ssm_id}">${menu.ssm_name}</option>`);
            }
        },
        error: (err) => {
            console.log(err);
        },
    });
}



var dropdown = $('.edtMainmenu');

// เรียก API
$.ajax({
    method: "get",
    url: "http://127.0.0.1/api/Manage_permis_detail/drop_main",
    dataType: 'json',
    success: (response) => {
        console.log(response); // ดูข้อมูลที่ได้รับจาก API ใน Console Log

        // ล้างค่าเดิมทั้งหมดใน dropdown ก่อน


        // วนลูปเพื่อเพิ่ม options เข้าไปใน dropdown
        for (let i = 0; i < response.length; i++) {
            const menu = response[i];
            dropdown.append(`<option value="${menu.smm_id}">${menu.smm_name}</option>`);
        }

    },
    error: (err) => {
        console.log(err);
    },
});

//-------------------------- Update flg status ----------------------------------

$(document).on('click', '.btnStatus', function () {
    const detailId = $(this).data('sa-id');
    var newStatus = $(this).closest('td').find('.btnStatus').val();

    if (newStatus == 1) {
        newStatus = 0;
    } else if (newStatus == 0) {
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
            var url = API_URL + "Manage_permis_detail/update_flg";
            $.ajax({
                url: base_url('ManagePermission/callApiUpdateStatus?url=') + url,
                type: 'POST',
                data: {
                    detailId: detailId,
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



//-------------------------- add Permiss ----------------------------------
// var dropdown1 = $("#selSubMenuName");
$('#selMenuGroupName').on('change', function () {
    var mainId = $("#selMenuGroupName").val();
    $.ajax({
        url: "http://127.0.0.1/api/Manage_permis_detail/getSubMenu",
        type: 'POST',
        data: {
            mainId: mainId,
        },
        dataType: 'json',
        success: (response) => {
            console.log(response); // ดูข้อมูลที่ได้รับจาก API ใน Console Log
            var row = '';
            row = '<option value="" selected disabled>Choose Sub Menu</option>';
            for (let i = 0; i < response.length; i++) {
                const menu = response[i];
                row += '<option value="' + response[i].ssm_id + '">' + response[i].ssm_name + '</option>';
                $("#selSubMenuName").html(row);
            }
        },
    });
});
$(document).ready(function () {
    $("#loadingPage").attr("style", "display: none;");
    $('#btnSaveAddPer').on('click', function () {
        var arrDataAdd = [];
        var PermisID = $('#selGroup').val();
        var MenuGroup = $('#selMenuGroupName').val();
        var SubMenu = $('#selSubMenuName').val();
        if (MenuGroup == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please choose Menu Group code',
            })
        } else if (SubMenu == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please choose SubMenu',
            })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to add it",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add Permission!'
            }).then((result) => {
                if (result.isConfirmed) {
                    var url = API_URL + 'Manage_permis_detail/insert_permiss';
                    const formData = new FormData()
                    formData.append('PermisID', PermisID);
                    formData.append('MenuGroup', MenuGroup);
                    formData.append('SubMenu', SubMenu);

                    $.ajax({
                        url: base_url('ManagePermission/callApiAddPermiss'),
                        type: 'POST',
                        data: formData,
                        processData: false,
                        contentType: false,
                        cache: false,
                        dataType: 'json',
                        success: function (res) {
                            console.log(res);
                            if (res == 1) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success !',
                                    html: 'Add Permission success',
                                    timer: 2500,
                                }).then(() => {
                                    // $('#btnBack').trigger('click');
                                    $('#selMenuGroupName').val('');
                                    $('#selSubMenuName').val('');
                                    shDataTable()

                                });
                            } else if (res == 9) {
                                Swal.fire({

                                    icon: 'warning',
                                    title: 'Ooops...',
                                    html: 'This permission already exists.',
                                }).then(() => {
                                    $('#selMenuGroupName').val('');
                                    $('#selSubMenuName').val('');
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Ooops...',
                                    html: 'A system error has occurred.',
                                });
                                $('#selMenuGroupName').val('');
                                $('#selSubMenuName').val('');
                            }
                        }
                    });
                }
            });
        }
    });
});


//-------------------------- Update Account ----------------------------------
var data_mmn;
var mmnId;

$(document).on('click', '.tblEditBtn', function () {


    let id = $(this).attr('data-id');
    mmnId = id
    var url = API_URL + "Manage_permis_detail/show_show_edit";
    $.ajax({
        // url: base_url('ManageAccount/callApiEditAccount'),
        url: API_URL + "Manage_permis_detail/show_show_edit",
        type: 'POST',
        data: {
            id: id,
        },
        dataType: 'json',
        success: (response) => {


            data_mmn = response.data

            // accId = response
            // for (let i = 0; i < response.length; i++) {
            //     const data = response[i];

            $('#edtMainmenu').val(response.data.smm_name)

            $('#edtSubEdit').val(response.data.ssm_name)


            // }
        }
    });
});