$(() => {
    $('#mdlAdd').on('hidden.bs.modal', function () {
        $('#errMegadd').css('display', 'none');
        $('#errAddempcode').css('display', 'none');
        $('#errAddpersonal').css('display', 'none');
        $('#inpEmpCode').val('');
        $('#inpFirstName').val('');
        $('#inpEmpPassword').val('');
        $('#inpLastName').val('');
        $('#inpEmail').val('');
        $('#selPermissionAdd').val('');
        $('#selPlantAdd').val('');
    });
    shDataTable()
    function shDataTable() {

        // **************************************************************************************// 
        $(document).ready(function () {

            // URL of the API
            var apiUrl = 'Manage_Account/show_user';
            // Perform Ajax request
            $.ajax({
                url: API_URL + apiUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // Get the menu container
                    var html = "";
                    for (var i = 0; i < data.length; i++) {
                        let statusFlag = data[i].sa_status_flg == 1;
                        let statusText = statusFlag ? 'Enable' : 'Disable';

                        html += `
                        <tr>
                            <td><i></i> <strong>${i + 1}</strong></td>
                            
                            <td>
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="avatar-wrapper">
                                        <div class="avatar me-2">
                                            <img src="http://192.168.161.207/tbkk_shopfloor_sys/asset/img_emp/${data[i].sa_emp_code.substring(2)}.jpg" alt="Avatar" class="rounded-circle" onerror="this.onerror=null; this.src='${base_url('assets/img/pf/PF.webp')}';">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <span class="emp_name text-truncate">${data[i].sa_firstname} ${data[i].sa_lastname}</span>
                                        <small class="emp_post text-truncate text-muted">${data[i].sa_emp_code}</small>
                                    </div>
                                </div>
                            </td>
                        
                            <td><i></i> <strong>${data[i].spg_name}</strong></td>
                            <td><i></i>${data[i].sa_email}</td>
                            <td class="" style="">${data[i].sa_created_date}</td>
                        
                            <td>
                                <button class="badge btnStatus btn ${statusFlag ? 'bg-label-success' : 'bg-label-secondary'}" id="btnStatus_${data[i].sa_id}" data-sa-id="${data[i].sa_id}" value="${data[i].sa_status_flg}">
                                    ${statusText}
                                </button>
                            </td>
                        </tr>`;
                        // ...




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
    }



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
                var url = API_URL + "Manage_Account/upstatus";
                $.ajax({
                    url: base_url('ManageAccount/callApiUpdateStatus?url=') + url,
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
    //============================== edit+updateStatus =====================================
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
})