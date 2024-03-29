
$(() => {
    showdropdown()
    $('#mdlAdd').on('hidden.bs.modal', function () {
        $('#errMegadd').css('display', 'none');
        $('#errAddempcode').css('display', 'none');
        $('#errAddpersonal').css('display', 'none');
        $('#inpEmpCode').val('');
        $('#inpName').val('');
        $('#inpLastName').val('');
        $('#selPermissionAdd').val('');
        $('#selPlantAdd').val('');
    });


    $('#mdlEdit').on('hidden.bs.modal', function () {
        $('#errMegedit').css('display', 'none');
        $('#errEditempcode').css('display', 'none');
        $('#errEditpersonal').css('display', 'none');
        $('#edtEmpPassword').val('')
    });


    function chkAddEmpcode(text) {
        // ตรวจสอบว่า text เป็น null หรือไม่
        if (text === null) {
            return false;
        }
        // ตรวจสอบว่า text เป็นช่องว่างหรือไม่
        var trimmedText = text.trim();
        if (trimmedText === '') {
            return false;
        }
        var Pattern = /^(?:[a-zA-Z0-9\s]+|)$/;
        return Pattern.test(text);
    }

    function chkAddpersonal(text) {
        // ตรวจสอบว่า text เป็น null หรือไม่
        if (text === null) {
            return false;
        }
        // ตรวจสอบว่า text เป็นช่องว่างหรือไม่
        var trimmedText = text.trim();
        if (trimmedText === '') {
            return false;
        }
        var Pattern = /^(?:[a-zA-Z0-9\s]+|)$/;
        return Pattern.test(text);
    }

    function chkEditpersonal(text) {
        // ตรวจสอบว่า text เป็น null หรือไม่
        if (text === null) {
            return false;
        }
        // ตรวจสอบว่า text เป็นช่องว่างหรือไม่
        var trimmedText = text.trim();
        if (trimmedText === '') {
            return false;
        }
        var Pattern = /^(?:[a-zA-Z\s]+|)$/;
        return Pattern.test(text);
    }

    function showdropdown() {
        var url = API_URL + "App_Manage_account/show_drop_down";
        $.ajax({
            method: "get",
            url: base_url("AppManageAccount/callApi?url=" + url),
            dataType: 'Json',
            success: (response) => {
                console.log(response.permission);
                var permis = response.permission
                var plant = response.plantcode
                for (let i = 0; i < permis.length; i++) {
                    const data = permis[i];
                    $('.selPermissionAdd').append(`<option value="${data.spga_id}">${data.spga_name}</option>`)
                    $('.edtPermission').append(`<option value="${data.spga_id}">${data.spga_name}</option>`)
                }
                for (let i = 0; i < plant.length; i++) {
                    const data = plant[i];
                    $('.selPlantAdd').append(`<option value="${data.mpc_id}">${data.mpc_name}</option>`)
                    $('.edtPlantEdit').append(`<option value="${data.mpc_id}">${data.mpc_name}</option>`)
                }
            },
            error: (err) => {
                console.log(err);
            },
        });
    };
    function handleMenuItemSelection() {
        // Remove 'selected' class from all menu items
        $('.sidebar li').removeClass('active');

        // Add 'selected' class to the clicked menu item
        $(this).addClass('active');
    }

    // Add click event listener to each menu item
    $('.sidebar li').on('click', handleMenuItemSelection);
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    shDataTable()
    function shDataTable() {

        $(document).ready(function () {
            // URL of the API
            var apiUrl = 'http://127.0.0.1/api/App_Manage_account/show_user';
            // Perform Ajax request
            $.ajax({
                url: apiUrl,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    $("#loadingPage").attr("style", "display: inline;");
                  },
                  error: function(xhr, status, error) {
                    // เกิดข้อผิดพลาดในการโหลดข้อมูล
                    console.error('Error:', error);
                  },
                  complete: function() {
                    $("#loadingPage").attr("style", "display: none;");
                  },
                success: function (data) {
                    // Get the menu container
                    var html = "";
                    // Loop through the data and append menu items
                    for (var i = 0; i < data.length; i++) {
                        html += `
                    <tr>
                    <td class="text-center"><i></i> <strong>${i + 1}</strong></td>
                    <td><div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">
                            <span class="emp_name text-truncate"> </span><small class="emp_post text-truncate text-muted">${data[i].swa_employee_code}</small></div></div></td>
                    <td class="text-center"><i></i> <strong>${data[i].spga_name}</strong></td>
                    <td class="text-center"><i></i>${data[i].swa_name}</td>
                    <td class="text-center"><i></i>${data[i].swa_lastname}</td>
                    <td class="text-center"><i></i> <strong>${data[i].mpc_name}</strong></td>
                    <td class="text-center"><i></i>${data[i].swa_created_date}</td>
                    <td class="text-center" style="">
                    <button class="btnStatus btn badge bg-label-${data[i].swa_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].swa_id}" value="${data[i].swa_status_flg}">
                    ${data[i].swa_status_flg == 1 ? 'Enable' : 'Disable'}
                  </button>
                    </td>
                    <td class="text-center" style="">
                    <a href="" class="tblEditBtn btn btn-warning btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlEdit" id="btnEdit" data-id="${data[i].swa_id}">
                      <i class="bx bxs-edit"></i>
                    </a>
                  </td>
                  </tr>
                  `;
                    }
                    $('#tblManageAccount').dataTable().fnDestroy()
                    $("#tbody")
                        .html(html)
                        .promise()
                        .done(() => {
                            $("#tblManageAccount").DataTable({
                                scrollX: true,
                            });
                        });
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                }
            });

        });

        //-------------------------- Update flg status ----------------------------------

        $(document).on('click', '.btnStatus', function () {
            const saId = $(this).data('sa-id');
            var newStatus = $(this).closest('td').find('.btnStatus').val();

            if (newStatus == 1) {
                newStatus = 0

            } else if (newStatus == 0) {
                newStatus = 1
            }
            Swal.fire({
                title: 'Are you Sure',
                text: "You want to Changed Status ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    var url = API_URL + "App_Manage_account/upstatus";
                    $.ajax({
                        url: base_url('AppManageAccount/callApiUpdateStatus?url=') + url,
                        type: 'POST',
                        data: {
                            saId: saId,
                            newStatus: newStatus,
                        },
                        dataType: 'json',
                        success: function (response) {
                            if (response == true) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success!',
                                    html: 'Changed Status Success!',
                                    timer: 2500,
                                }).then(() => {
                                    shDataTable()
                                    // location.reload();
                                })
                            } else if (response == false) {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Warning!',
                                    html: 'Change status Fail',
                                    timer: 2500,
                                })
                            }


                        },
                        error: function (error) {

                        }
                    });

                }
            })

        });
    }

    //-------------------------- add Account ----------------------------------

    $(document).ready(function () {
        $('#btnSaveAdd').on('click', function () {
            var arrDataAdd = [];
            var EmpCode = $('#inpEmpCode').val();
            var Name = $('#inpFirstName').val();
            var LastName = $('#inpLastName').val();
            var Permission = $('#selPermissionAdd').val();
            var Plant = $('#selPlantAdd').val();


            if (EmpCode == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter employee code',
                })
            } else if (Name == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter FirstName',
                })
            } else if (LastName == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter FirstName',
                })
            } else if (Permission == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please choose Permission',
                })
            } else if (Plant == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please choose Plant',
                })
            } else if (!isThaiLanguage(EmpCode)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter in English only.',
                })
            } else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you want to add Account",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, add account!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        var url = API_URL + 'App_Manage_account/insert_user';
                        const formData = new FormData()
                        formData.append('EmpCode', EmpCode);
                        formData.append('EmpName', Name);
                        formData.append('EmpLastname', LastName);
                        formData.append('EmpPermission', Permission);
                        formData.append('Plant', Plant);

                        $.ajax({
                            url: base_url('AppManageAccount/callApiAddAccount'),
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            dataType: 'json',
                            success: function (res) {
                                if (res.result == 1) {

                                    $('#add')[0].reset()
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success !',
                                        html: 'Add account success',
                                        timer: 2500,
                                    }).then(() => {
                                        // $('#btnBack').trigger('click');
                                        $('#mdlAdd').modal('hide') //show
                                        shDataTable()

                                    });
                                } else if (res.result == 9) {
                                    Swal.fire({

                                        icon: 'warning',
                                        title: 'Ooops...',
                                        html: 'This employee code already exists.',
                                    }).then(() => {

                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Ooops...',
                                        html: 'A system error has occurred.',
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    });



    //-------------------------- Update Account ----------------------------------
    var data_acc
    var accId
    $(document).on('click', '.tblEditBtn', function () {


        let id = $(this).attr('data-id');
        accId = id
        var url = API_URL + "App_Manage_account/show_show_acc";
        $.ajax({
            // url: base_url('ManageAccount/callApiEditAccount'),
            url: API_URL + "App_Manage_account/show_show_acc",
            type: 'POST',
            data: {
                id: id,
            },
            dataType: 'json',
            success: (response) => {
                // เพิ่มบรรทัดนี้เพื่อดูข้อมูลที่ได้รับกลับมา

                data_acc = response.data;
                console.log(data_acc.swa_name);
                $('#edtEmpCode').val(data_acc.swa_employee_code);
                $('#edtName').val(data_acc.swa_name);
                $('#edtLastName').val(data_acc.swa_lastname);
                $('#edtPermission').val(data_acc.spga_id);
                $('#edtPlantEdit').val(data_acc.mpc_id);
            }
        });
    })



    //-------------------------- Save Edit ----------------------------------
    $(document).ready(function () {
        $('#btnSaveEdit').on('click', function () {

            var arrDataAdd = [];
            var EmpCode = $('#edtEmpCode').val();
            var Name = $('#edtName').val();
            var LastName = $('#edtLastName').val();
            var Permission = $('#edtPermission').val();
            var Plant = $('#edtPlantEdit').val();


            if (
                data_acc &&
                data_acc.swa_employee_code == EmpCode &&
                data_acc.spga_id == Permission &&
                data_acc.swa_name == Name &&
                data_acc.swa_lastname == LastName &&
                data_acc.mpc_id == Plant
            ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Not changed !',
                    html: 'The information has not changed.',
                    timer: 2500,
                }).then(() => {
                    $('#mdlEdit').modal('hide');
                    $('#btnBack').trigger('click');
                });

            } else if (Name == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter FirstName',
                })
            } else if (Permission == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please choose Permission',
                })
            } else if (Plant == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please choose Plant',
                })
            } else if (!chkAddEmpcode(EmpCode)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter Employee Code as (a-z ,A-Z ,0-9) only.',
                })
            } else {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you want to add Account",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, add account!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        var url = API_URL + 'App_Manage_account/update_user';
                        const formData = new FormData()
                        formData.append('EmpCode', EmpCode);
                        formData.append('EmpFirstName', Name);
                        formData.append('EmpLastName', LastName);
                        formData.append('EmpPermission', Permission);
                        formData.append('EmpPlantCode', Plant);

                        $.ajax({
                            url: base_url('AppManageAccount/callApiUpdateAccount'),
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            dataType: 'json',
                            success: function (res) {
                                if (res.result == 1) {

                                    $('#add')[0].reset()
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success !',
                                        html: 'Add account success',
                                        timer: 2500,
                                    }).then(() => {

                                        $('#mdlEdit').modal('hide') //show
                                        shDataTable()
                                    });
                                } else if (res.result == 9) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success!',
                                        html: 'The information has not changed.',
                                    }).then(() => {

                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Ooops...',
                                        html: 'A system error has occurred.',
                                    });
                                }

                            }
                        });

                    }
                });
            }
        });
    });


})
