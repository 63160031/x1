$(() => {
    // Initial table display
    showDataTable();

    function showDataTable() {
        const apiUrl = 'http://127.0.0.1/api/Stock_info/show_tablelstock';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].item_no}</td>
                    <td><i></i>${data[i].itf_item_name}</td>
                    <td><i></i>${data[i].is_location}</td>
                    <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlDetail" id="btnDetail" data-id="${data[i].is_id}"><i class="bx bxs-detail"></i></a></td>
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
    }

    // Function to update the table based on the selected location
    function updateTableByLocation(selectedLocation) {
        const apiUrl = 'http://127.0.0.1/api/Stock_info/show_tablelstock'; // Replace with your endpoint

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    // Check if the location matches the selected one
                    if (data[i].is_location === selectedLocation) {
                        html += `<tr>
                        <td><i></i> <strong>${i + 1}</strong></td>
                        <td><i></i>${data[i].item_no}</td>
                        <td><i></i>${data[i].itf_item_name}</td>
                        <td><i></i>${data[i].is_location}</td>
                        <td class=""></li></ul></div><a href="" class="tblEditBtn btn btn-sm btn-icon item-edit" data-bs-toggle="modal" data-bs-target="#mdlDetail" id="btnDetail" data-id="${data[i].is_id}"><i class="bx bxs-detail"></i></a></td>
                    </tr>`;
                    }
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
    }

    // Event listener for dropdown change
    $('.selLoation').on('change', function () {
        const selectedLocation = $(this).val();
        if (selectedLocation) {
            updateTableByLocation(selectedLocation);
        } else {
            showDataTable();
        }
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
                var url = API_URL + "upstatus/update_flg";
                $.ajax({
                    url: base_url('StockInfo/callApiUpdateStatus?url=') + url,
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

// //-------------------------- Dorpdown ----------------------------------

$(document).ready(function () {
    function showDropdown() {
        var dropdown = $('.selLoation');
        var addedLocations = {}; // To keep track of added locations

        $.ajax({
            method: "get",
            url: "http://127.0.0.1/api/Stock_info/show_DDlocation",
            dataType: 'Json',
            success: (response) => {
                console.log(response);
                for (let i = 0; i < response.length; i++) {
                    const item = response[i];

                    // Check if the location is not already added
                    if (!addedLocations[item.is_location]) {
                        dropdown.append(`<option value="${item.is_location}">${item.is_location}</option>`);
                        addedLocations[item.is_location] = true; // Mark as added
                    }
                }
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    // Call the showDropdown function when the DOM is ready
    showDropdown();
});


// //-------------------------- Detail ----------------------------------
var data_dtl;
var subId;

$(document).on('click', '.tblEditBtn', function () {
    let id = $(this).attr('data-id');
    subId = id
    var url = API_URL + "Stock_info/show_tablelstock";
    $.ajax({
        url: 'http://127.0.0.1/api/Stock_info/show_tablelstock',
        type: 'POST',
        dataType: 'json',
        success: (response) => {
            for (let i = 0; i < response.length; i++) {
                const data = response[i];
                if (data.is_id == subId) {
                    $('#dtlpartNo').val(data.item_no)
                    $('#dtldate').val(data.plan_date)
                    $('#dtllotNo').val(data.lot_no)
                    $('#dtlbox').val(data.box)
                    $('#dtllocation').val(data.is_location)
                    $('#dtlqty').val(data.is_qty)
                }
            }



        }
    });
});