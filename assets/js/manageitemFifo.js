$(() => {
    shDataTable();

    function shDataTable() {
        $(document).ready(function () {
            const apiUrl = 'http://127.0.0.1/api/Manage_item_fifo/show_tablel';
    
            $.ajax({
                url: apiUrl,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    let html = "";
                    for (let i = 0; i < data.length; i++) {
                        html += `<tr>
                            <td><i></i> <strong>${data[i].itf_id}</strong></td>
                            <td><i></i>${data[i].itf_item_no}</td>
                            <td><i></i>${data[i].itf_item_name}</td>
                            <td><button class="btnStatus btn badge bg-label-${data[i].itf_status_flg == 1 ? 'success' : 'danger'} me-1" id="flgStatus" data-sa-id="${data[i].itf_id}" value="${data[i].itf_status_flg}">${data[i].itf_status_flg == 1 ? 'Enable' : 'Disable'}</button></td> 
                            <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlEdit" id="btnEdit" data-id="${data[i].itf_id}"><i class="bx bxs-edit"></i></a></td>
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

            if (itemNo == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter Item No.',
                });
            } else if (itemname == '') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter Item No.',
                });
            
            } else if (!isThaiLanguage(itemname)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please enter in English only.',
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
                        formData.append('itemname', itemname);

                        $.ajax({
                            url: base_url('ManageItemFifo/callApiAddItem'),
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
                                        $('#mdlAdd').modal('hide')
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
var item;
var Iditem;
var $checkboxFifo = $('#edtItemfifo');
var $checkboxCkd = $('#edtItemckd');

$(document).on('click', '.tblEditBtn', function () {


    let id = $(this).attr('data-id');
    Iditem = id
    var url = API_URL + "Manage_item_fifo/show_edit_menu";
    $.ajax({
        url: API_URL + "Manage_item_fifo/show_edit_menu",
        type: 'POST',
        data: {
            id: id,
        },
        dataType: 'json',
        success: (response) => {
            item = response.data;
        
            $('#edtItemno').val(response.data.itf_item_no);
            $('#edtItemname').val(response.data.itf_item_name);
        
            // Set checkbox states based on the response data
            $checkboxFifo.prop('checked', response.data.itf_fifo_flg == '1');
            $checkboxCkd.prop('checked', response.data.itf_ckd_flg == '1');
        }
    });
});


// //-------------------------- Save Edit ----------------------------------

$(document).ready(function () {
    $('#btnSaveEdit').on('click', function () {
        var itemNo = $('#edtItemno').val();
        var Itemname = $('#edtItemname').val();
        var Ckd = $('#edtItemckd').prop('checked') ? '1' : '0';  // แก้ไขตรงนี้
        var Fifo = $('#edtItemfifo').prop('checked') ? '1' : '0'; // แก้ไขตรงนี้

        if (
            item &&
            item.itf_item_no === itemNo &&
            item.itf_item_name === Itemname &&
            item.itf_fifo_flg === Fifo &&
            item.itf_ckd_flg === Ckd
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
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to edit the item?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, edit it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    var url = API_URL + 'Manage_item_fifo/edit_main_menu';
                    const formData = new FormData()
                    formData.append('itemNo', itemNo);
                    formData.append('FIFO', Fifo);
                    formData.append('CKD', Ckd);
                    formData.append('itemname', Itemname);
                    formData.append('Iditem', Iditem);

                    $.ajax({
                        url: base_url('ManageItemFifo/callApieditII'),
                        type: 'POST',
                        data: formData,
                        processData: false,
                        contentType: false,
                        cache: false,
                        dataType: 'json',
                        success: function (res) {
                            console.log(res);
                            if (res.result == 1) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success !',
                                    html: 'Edit Menu success',
                                    timer: 2500,
                                }).then(() => {
                                    $('#mdlEdit').modal('hide');
                                    shDataTable();
                                });
                            } else if (res.result == 9) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success!',
                                    html: 'The information has not changed.',
                                }).then(() => {
                                    // nothing to do
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


