<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Manage Account </h4>
<style>
    /* ตัวอย่าง CSS ที่ใช้กับ DataTable */
    .dataTables_scrollBody {
        overflow: hidden !important;
        /* ซ่อน scrollbar */
    }

    .datatable-container {
        padding: 500px;
    }
</style>

<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <h5 class="card-header">Manage Account</h5>
                <div class="card-body">
                    <div class="table-responsive text-nowrap">
                        <div class="card-datatable table-responsive pt-0">
                            <table class="order-column table" id="tblManageAccount">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Employee Details</th>
                                        <th>Permis Group</th>
                                        <th>Email</th>
                                        <th>CREATE DATE</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody class="table-border-bottom-0" id="tbody">
                                    <!-- Add rows dynamically here if needed -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>