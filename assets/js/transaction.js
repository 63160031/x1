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
                // Convert plan_date to "dd/mm/yy" format
                const planDate = data[i].plan_date;
                // const autualDate = data[i].autual_date;
                const formattedPlanDate = formatDate(planDate);
                // const formattedAUTUALDate = formatDate(autualDate);

                html += `<tr>
                    <td><i></i> <strong>${i + 1}</strong></td>
                    <td><i></i>${data[i].item_no}</td>
                    <td><i></i>${data[i].itf_item_name}</td>
                    <td><i></i>${data[i].itc_qty}</td>
                    <td><i></i>${data[i].itc_location}</td>
                    <td><i></i>${formattedPlanDate}</td>
                    <td><button class="btnStatus btn badge bg-label-${data[i].itc_status_flg == 1 ? 'success' : 'danger'}
                    me-1" id="flgStatus" data-sa-id="${data[i].itc_id}" value="${data[i].itc_status_flg}">${data[i].itc_status_flg == 1 ? 'Stock in' : data[i].itc_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
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

function formatDate(planDate) {
    // Extract day, month, and year from the "yyyymmdd" format
    const day = planDate.substring(6, 8);
    const month = planDate.substring(4, 6);
    const year = planDate.substring(0, 4);

    // Format date as "dd/mm/yy"
    return `${day}/${month}/${year}`;
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
                    // Convert plan_date to "dd/mm/yy" format
                    const planDate = data[i].plan_date;
                    const formattedPlanDate = formatDate(planDate);
                    html += `<tr>
                        <td><i></i> <strong>${i + 1}</strong></td>
                        <td><i></i>${data[i].item_no}</td>
                        <td><i></i>${data[i].itf_item_name}</td>
                        <td><i></i>${data[i].itc_qty}</td>
                        <td><i></i>${data[i].itc_location}</td>
                        <td><i></i>${formattedPlanDate}</td>
                        <td><button class="btnStatus btn badge bg-label-${data[i].itc_status_flg == 1 ? 'success' : 'danger'}
                        me-1" id="flgStatus" data-sa-id="${data[i].itc_id}" value="${data[i].itc_status_flg}">${data[i].itc_status_flg == 1 ? 'Stock in' : data[i].itc_status_flg == 2 ? 'Stock out' : 'Pending'}</button></td>
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
