$(() => {
    shDataTable();

    function shDataTable() {
        $(document).ready(function () {
            // URL of the API
            var apiUrl = 'http://127.0.0.1/api/Manage_permis_group/show_group_name';

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
                                <td><i></i> <strong>${i + 1}</strong></td>
                                <td><i></i> <strong>${data[i].spg_name}</strong></td>
                                <td class="">${data[i].spg_updated_date}</td>
                                <td class="">${data[i].FullName}</td>
                                <td>
                                    <button class="btnStatus btn badge bg-label-${data[i].spg_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].spg_id}" value="${data[i].spg_status_flg}">
                                        ${data[i].spg_status_flg == 1 ? 'Enable' : 'Disable'}
                                    </button>
                                </td>
                                <td class="">
                                    </li>
                                </ul>
                                </div>
                                <a href="" class="tblEditBtn btn btn-warning btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlEdit" id="btnEdit" data-id="${data[i].spg_id}">
                                    <i class="bx bxs-edit"></i>
                                </a>
                                </td>`;
                    }

                    $('#tblPermisGP').dataTable().fnDestroy();
                    $("#tbody")
                        .html(html)
                        .promise()
                        .done(() => {
                            $("#tblPermisGP").DataTable({
                                scrollX: true,
                            });
                        });
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        });
    }

    //-------------------------- Update flg status ----------------------------------

    $(document).on('click', '.btnStatus', function () {
        const smId = $(this).data('sa-id');
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
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var url = API_URL + "Manage_permis_group/update_flg";
                $.ajax({
                    url: base_url('PermisionGroup/callApiUpdateStatus?url=') + url,
                    type: 'POST',
                    data: {
                        smId: smId,
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
                                shDataTable();
                            });
                        } else if (response == false) {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Warning!',
                                html: 'Change status Fail',
                                timer: 2500,
                            });
                        }
                    },
                    error: function (error) {

                    }
                });
            }
        });
    });

    //-------------------------- Show Update Account ----------------------------------
    var data_mpg;
    var mgpId;

    $(document).on('click', '.tblEditBtn', function () {
        let id = $(this).attr('data-id');
        mgpId = id;
        var url = API_URL + "Manage_permis_group/show_show_mpg";

        $.ajax({
            url: url,
            type: 'POST',
            data: {
                id: id,
            },
            dataType: 'json',
            success: (response) => {
                console.log(response);
                $('#edtGroup').val(response[0].spg_name);
                $('#edtspgid').val(response[0].spg_id);
            },

        });
    });

    //-------------------------- Save Edit ----------------------------------

    $(document).ready(function () {
        $('#btnSaveEdit').on('click', function () {
            var arrDataAdd = [];
            var ManagePergname = $('#edtGroup').val();
            var edtspgid = $('#edtspgid').val();
            if (data_mpg && data_mpg.spg_name && data_mpg.spg_name == ManagePergname) {
                Swal.fire({
                    icon: 'success',
                    title: 'Not changed !',
                    html: 'The information has not changed.',
                    timer: 2500,
                }).then(() => {
                    $('#mdlEdit').modal('hide');
                    $('#btnBack').trigger('click');
                });
            } else if (ManagePergname == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter Permission Group ',
                });
            } else if (!isThaiLanguage(ManagePergname)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter in English only.',
                });
            } else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you want to edit permission group?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, edit it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // ตรวจสอบว่า data_mpg ถูกตั้งค่าแล้วและมี spg_name หรือไม่
                        // และดำเนินการต่อไป
                        var url = API_URL + 'Manage_permis_group/update_mpg_name';
                        const formData = new FormData();
                        formData.append('ManagePergname', ManagePergname);
                        formData.append('mgpId', edtspgid);

                        $.ajax({
                            url: base_url('PermisionGroup/callApiSaveEdit'),
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            dataType: 'json',
                            success: function (res) {
                                if (res == 1) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success !',
                                        html: 'Add account success',
                                        timer: 2500,
                                    }).then(() => {
                                        $('#mdlEdit').modal('hide');
                                        shDataTable();
                                    });
                                } else if (res == 9) {
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

    //-------------------------- add Permis Group ----------------------------------

    $(document).ready(function () {
        $('#btnSaveAdd').on('click', function () {
            var arrDataAdd = [];
            var ManagePersGroup = $('#inpPermisGroup').val();

            if (ManagePersGroup == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter Permission Group',
                });
            } else if (!isThaiLanguage(ManagePersGroup)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter in English only.',
                });
            } else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Do you want to add Permission Group",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes,add!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        var url = API_URL + 'Manage_permis_group/insert_permis_group';
                        const formData = new FormData();
                        formData.append('ManagePersGroup', ManagePersGroup);

                        $.ajax({
                            url: base_url('PermisionGroup/callApiAddPermisGroup'),
                            type: 'POST',
                            data: formData,
                            processData: false,
                            contentType: false,
                            cache: false,
                            dataType: 'json',
                            success: function (res) {
                                if (res.result == 1) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success !',
                                        html: 'Add account success',
                                        timer: 2500,
                                    }).then(() => {
                                        // $('#btnBack').trigger('click');
                                        $('#inpPermisGroup').val('');
                                        shDataTable();
                                    });
                                } else if (res.result == 9) {
                                    Swal.fire({

                                        icon: 'warning',
                                        title: 'Ooops...',
                                        html: 'This Permission Group already exists.',
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
});