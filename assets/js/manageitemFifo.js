$(() => {
    shDataTable();

    function shDataTable() {
        $(document).ready(function () {
            // URL of the API
            var apiUrl = 'http://127.0.0.1/api/Manage_item_fifo/show_tablel';

            // Perform Ajax request
            $.ajax({
                url: apiUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // Get the menu container


                    var html = "";
                    // Loop through the data and append menu items
                    for (var i = 0; i < data.length; i++) {

                        html += `<tr>
                            <td><i></i> <strong>${data[i].itf_id}</strong></td>
                            <td><i></i>${data[i].itf_item_no}</td>
                            <td><i></i>${data[i].itf_item_name}</td>
                            <td><button class="btnStatus btn badge bg-label-${data[i].itf_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].itf_id}" value="${data[i].itf_status_flg}">${data[i].itf_status_flg == 1 ? 'Enable' : 'Disable'}</button></td> 
                            <td class=""> </li> </ul> </div> <a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlEdit" id="btnEdit" data-id="${data[i].itf_id}"> <i class="bx bxs-edit"></i> </a></td>
                             </tr>`;

                    }
                    $('#tblMainMenu').dataTable().fnDestroy();
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




//     //-------------------------- add Menu ----------------------------------

$(document).ready(function () {
    $('#btnSaveAdd').on('click', function () {
        var itemNo = $('#inpItemNo').val();
        var itemname = $('#inpItemName').val();
        var CKN = $('#ckCKN').prop('checked');
        var CKNval = CKN ? $('#ckCKN').val() : '0';
        var FIFO = $('#ckFifo').prop('checked');
        var FIFOval = FIFO ? $('#ckFifo').val() : '0';
        console.log(CKNval);
        console.log(FIFOval);
        if (itemNo == '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please enter Item No.',
            })   
        } else if (!chkAdditem(itemNo)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please enter Item no. only.',
            })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to Item No.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add account!'
            }).then((result) => {
                if (result.isConfirmed) {
                    var url = API_URL + 'Manage_item_fifo/insert_additem';
                    const formData = new FormData()
                    formData.append('itemNo', itemNo);
                    formData.append('FIFO', FIFOval);
                    formData.append('CKN', CKNval);

                    $.ajax({
                        url: base_url('ManageItemFifo/callApiAddAccount'),
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



    //-------------------------- Update flg status ----------------------------------

    $(document).on('click', '.btnStatus', function () {
        const smId = $(this).data('sa-id');
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
                var url = API_URL + "Manage_item_fifo/upstatus";
                $.ajax({
                    url: base_url('ManageItemFifo/callApiUpdateStatus?url=') + url,
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
});


// //-------------------------- Update Account ----------------------------------
// var data_mmn;
// var mmnId;

// $(document).on('click', '.tblEditBtn', function () {


//     let id = $(this).attr('data-id');
//     mmnId = id
//     var url = API_URL + "Manage_mainmenu/show_show_mmn";
//     $.ajax({
//         // url: base_url('ManageAccount/callApiEditAccount'),
//         url: API_URL + "Manage_mainmenu/show_show_mmn",
//         type: 'POST',
//         data: {
//             id: id,
//         },
//         dataType: 'json',
//         success: (response) => {


//             data_mmn = response.data

//             // accId = response
//             // for (let i = 0; i < response.length; i++) {
//             //     const data = response[i];
//             $('#edtMainMenu').val(response.data.smm_name)
//             // $('#edtEmpPassword').val(response.data.sa_emp_password)
//             $('#edtMainIcon').val(response.data.smm_icon)
//             $('#edtOrderNo').val(response.data.smm_order_no)

//             // }
//         }
//     });
// });


// //-------------------------- Save Edit ----------------------------------

// $(document).ready(function () {
//     $('#btnSaveEdit').on('click', function () {
//         var MainMenuName = $('#edtMainMenu').val();
//         var MainMenuIcon = $('#edtMainIcon').val();
//         var OrderNo = $('#edtOrderNo').val();

//         if (data_mmn && data_mmn.smm_name && data_mmn.smm_icon == MainMenuIcon && data_mmn.smm_order_no == OrderNo) {
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Not changed!',
//                 html: 'The information has not changed.',
//                 timer: 2500,
//             }).then(() => {
//                 $('#mdlEdit').modal('hide');
//                 $('#btnBack').trigger('click');
//             });
//         } else if (MainMenuName == '' || MainMenuIcon == '' || OrderNo == '') {
//             Swal.fire({
//                 icon: 'warning',
//                 title: 'Oops...',
//                 text: 'Please fill in all the required fields.',
//             });
//         } else if (!isThaiLanguage(MainMenuName) || !isThaiLanguage(MainMenuIcon) || !isThaiLanguage(OrderNo)) {
//             Swal.fire({
//                 icon: 'warning',
//                 title: 'Oops...',
//                 text: 'Please enter in English only.',
//             });
//         } else {
//             Swal.fire({
//                 title: 'Are you sure?',
//                 text: 'Do you want to save edit?',
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Yes, save!'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     var url = API_URL + 'Manage_mainmenu/edit_main_menu';
//                     const formData = new FormData()
//                     formData.append('MainMenuName', MainMenuName);
//                     formData.append('MainMenuIcon', MainMenuIcon);
//                     formData.append('OrderNo', OrderNo);
//                     formData.append('mmnId', mmnId);

//                     $.ajax({
//                         url: base_url('MainMenu/callApiSaveEdit'),
//                         type: 'POST',
//                         data: formData,
//                         processData: false,
//                         contentType: false,
//                         cache: false,
//                         dataType: 'json',
//                         success: function (res) {
//                             console.log("sssssjd=>>", res);
//                             if (res.result == 1) {
//                                 Swal.fire({
//                                     icon: 'success',
//                                     title: 'Success!',
//                                     html: 'Edit main menu success',
//                                     timer: 2500,
//                                 }).then(() => {
//                                     $('#mdlEdit').modal('hide');
//                                     shDataTable();
//                                 });
//                             } else if (res.result == 2) {
//                                 Swal.fire({
//                                     icon: 'warning',
//                                     title: 'Oops...',
//                                     text: 'Duplicate value!!',
//                                 });
//                             } else {
//                                 Swal.fire({
//                                     icon: 'error',
//                                     title: 'Oops...',
//                                     html: 'A system error has occurred.',
//                                 });
//                             }
//                         }
//                     });
//                 }
//             });
//         }
//     });
// });
