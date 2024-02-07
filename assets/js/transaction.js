$(() => {
    showDataTable();
});


function showDataTable(startDate, endDate) {
    const apiUrl = 'http://127.0.0.1/api/Transaction_info/show_Transaction';

    $.ajax({
        url: apiUrl,
        type: 'GET',
        data: { startDate: startDate, endDate: endDate },
        dataType: 'json',
        success: function (data) {
            let html = "";
            for (let i = 0; i < data.length; i++) {
                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].item_no}</td>
                    <td><i></i>${data[i].itf_item_name}</td>
                    <td><i></i>${data[i].is_qty}</td>
                    <td><i></i>${data[i].is_location}</td>
                    <td><i></i>${data[i].is_created_date}</td>
                    <td><button class="btnStatus btn badge bg-label-${data[i].is_status_flg == 1 ? 'success' : 'danger'}
                    me-1" id="flgStatus" data-sa-id="${data[i].is_id}" value="${data[i].is_status_flg}">${data[i].is_status_flg == 1 ? 'Stock in' : data[i].is_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
                </tr>`;
            }
            $('#tblTransaction').dataTable().fnDestroy();
            $("#tbody")
                .html(html)
                .promise()
                .done(() => {
                    $("#tblTransaction").DataTable({
                        scrollX: true,
                    });
                });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

// //-------------------------- Begin-end ----------------------------------
var data_dtl;
var tclId;

$(document).on('click', '#tblTransBtn', function () {
    var beginDate = $('#selDateStart').val();
    var endDate = $('#selDateEnd').val();
    if (beginDate == '' && endDate == '') {
        Swal.fire({
            icon: 'warning',
            title: 'Ooops..',
            html: 'Please choose begin and end date',
        });
    } else {
        $('#tblTransaction').dataTable().fnDestroy();
        $.ajax({
            url: base_url('Transactioninfo/callApiDate'),
            type: 'POST',
            data: {
                beginDate: beginDate,
                endDate: endDate

            },
            dataType: 'json',
            success: (data) => {
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `<tr>
                        <td><i></i> <strong>${i + 1}</strong></td>
                        <td><i></i>${data[i].item_no}</td>
                        <td><i></i>${data[i].itf_item_name}</td>
                        <td><i></i>${data[i].is_qty}</td>
                        <td><i></i>${data[i].is_location}</td>
                        <td><i></i>${data[i].is_created_date}</td>
                        <td><button class="btnStatus btn badge bg-label-${data[i].is_status_flg == 1 ? 'success' : 'danger'}
                        me-1" id="flgStatus" data-sa-id="${data[i].is_id}" value="${data[i].is_status_flg}">${data[i].is_status_flg == 1 ? 'Stock in' : data[i].is_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
                    </tr>`;
                }
                $("#tbody")
                    .html(html)
                    .promise()
                    .done(() => {
                        $("#tblTransaction").DataTable({
                            scrollX: true,
                        });
                    });

            }
        });
    }

});
