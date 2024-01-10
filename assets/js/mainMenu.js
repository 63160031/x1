
    shDataTable()
    function shDataTable() {


        $(document).ready(function () {

            // URL of the API
            var apiUrl = 'Manage_mainmanu/show_main_menu';
            // Perform Ajax request
            $.ajax({
                url: API_URL + apiUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // Get the menu container
                    var html = "";
                    for (var i = 0; i < data.length; i++) {
                        let statusFlag = data[i].smm_status_flg == 1;
                        let statusText = statusFlag ? 'Enable' : 'Disable';

                        html += `
                        <tr>
                  <td><i></i> <strong>${i + 1}</strong></td>
                  <td><i></i> <strong>${data[i].smm_name}</strong></td>
                  <td>
                  <i class='bx bx-dock-top' ></i>
                    <p class="icon-name text-capitalize text-truncate mb-0"></p>
                  </td>
                  <td><i></i>${data[i].smm_order}</td>
                  <td class="">${data[i].smm_updated_date}</td>
                  <td class="">${data[i].smm_updated_by}</td>
                  <td>
                                <button class="badge btnStatus btn ${statusFlag ? 'btn-success' : 'btn-secondary'}" id="btnStatus_ ${data[i].smm_id}" data-sa-id="${data[i].smm_id}" value="${data[i].smm_status_flg}">
                                ${statusText}
                                </button>
                            </td>
                  <td class="">
                    </li>
                    </ul>
          </div><a href="" class="btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#basicModal">
            <i class="bx bxs-edit"></i>
          </a></td>
          </tr>`;


                    }
                    $('#tblMainMenu').dataTable().fnDestroy()
                    $("#tbody")
                        .html(html)
                        .promise()
                        .done(() => {
                            $("#tblMainMenu").DataTable({
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

    //-------------------------- Updaye flg status ----------------------------------

    $(document).on('click', '.btnStatus', function () {
        const saId = $(this).data('sa-id');
        var newStatus = $(this).closest('td').find('.btnStatus').val()

        if (newStatus == 1) {
            newStatus = 0
        } else if (newStatus == 0) {
            newStatus = 1
        }
        Swal.fire({
            title: 'sure?',
            text: "you want to update your status?!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                var url = API_URL + "Manage_mainmenu/upstatus";
                $.ajax({
                    url: base_url('MainMenu/callApiUpdateStatus?url=') + url,
                    type: 'POST',
                    data: {
                        saId: saId,
                        newStatus: newStatus,
                    },
                    dataType: 'json',
                    success: function (response) {
                        if (response == true) {
                            Swal.fire(
                                'UPDATE!',
                                'The update is complete..',
                                'success'
                            ).then(() => {
                                shDataTable()
                            })
                        } else if (response == false) {
                            Swal.fire(
                                'UPDATE!!FAIL!!',
                                'The update failed..',
                                'Error'
                            )
                        }


                    },
                    error: function (error) {

                    }
                });

            }
        })

    });
    function updateStatus(saId, newStatus) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });


    }

    function sendStatusToServer(saId, newStatus) {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        // Convert newStatus to 0 or 1
        const statusValue = newStatus ? 1 : 0;

        const encodedSaId = encodeURIComponent(saId);
        const encodedStatusValue = encodeURIComponent(statusValue);


        // Make an AJAX request to update the status on the server

    }

    //{/* <td><span class="badge bg-label-${data[i].sa_status_flg == 1 ? 'success' : 'danger'} me-1">${data[i].sa_status_flg == 1 ? 'Enable' : 'Disable'}</span></td> */}

    //-------------------------- Add Main Menu ----------------------------------
    $(document).on('click', '#btnSaveAdd', function () {
        var arrDataAdd = []
        var MainMenuName = $('#inpMainMenuName').val()
        var MainMenuIcon = $('#inpMainMenuIcon').val()

        if (MainMenuName == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Plese enter main menu',
            })
        } else if (MainMenuIcon == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Plese enter main menu icon',
            })
        } else if (!isThaiLanguage(MainMenuName) || !isThaiLanguage(MainMenuIcon)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please enter in English only.',
            })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to add Main Menu",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,add!'
            }).then((result) => {
                if (result.isConfirmed) {
                    arrDataAdd.push({
                        MainMenuName: MainMenuName,
                        MainMenuIcon: MainMenuIcon,
                    })
                    var url = API_URL + "Manage_mainmenu/ins_main_menu";
                    $.ajax({
                        url: base_url("MainMenu/callApiAddMainMenu?url=" + url),
                        type: 'POST',
                        data: {
                            arrDataAdd: arrDataAdd
                        },
                        dataType: 'json',
                        success: function (res) {
                            if (res.result == 1) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success !',
                                    html: 'Add Main Menu success',
                                    timer: 2500,
                                }).then(() => {
                                    $('#inpMainMenuName').val('')
                                    $('#inpMainMenuIcon').val('')
                                    showMainMenu()
                                })
                            } else if (res.result == 9) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Ooops...',
                                    html: 'This Main Menu already exists.',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Ooops...',
                                    html: 'A system error has occurred.',
                                })
                            }
                        }
                    })
                }
            })

        }

    })
    //-------------------------- Show Main Menu ----------------------------------
    var data_main
    var mainId
    $(document).on('click', '.tblDelBtn', function () {
        let id = $(this).attr('data-id');
        mainId = id
        var url = API_URL + "Manage_mainmenu/show_upd_main_menu?main_id=" + id;
        $.ajax({
            url: base_url('MainMenu/callApiShowEdit?url=' + url),
            type: 'POST',
            data: {
                id: id,
            },
            dataType: 'Json',
            success: (response) => {
                data_main = response
                for (let i = 0; i < response.length; i++) {
                    const data = response[i];
                    $('#edtMainMenu').val(data.smm_name).trigger("change")
                    $('#edtMainIcon').val(data.smm_icon).trigger("change")
                    $('#edtOrderNo').val(data.order_no).trigger("change")
                }
            }
        });
    })


