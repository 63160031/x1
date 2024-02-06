<style>
    td,
    a {
        text-align: center;
    }

    th {
        text-align: center;
    }
</style>
<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <!-- Bordered Table -->
        <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Transaction info</h5>
        <br><br>
        <div class="card">
            <div class="card-body">
                <h4>Transaction info</h4>
                <div class="row py-2 mt-2" style="display: flex; align-items: center;">
                    <input class="form-Date" type="date" id="selDateStart">
                    <input class="form-Date" type="date" id="selDateEnd">
                    <button id="tblTransBtn" type="button" class="btnSC btn-success">Search</button>
                </div>
            </div>

            <div class="table-responsive text-nowrap mb-0">
                <div class="card-datatable table-responsive pt-0">
                    <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblTransaction">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>item no</th>
                                <th>item name</th>
                                <th>QTY</th>
                                <th>Location</th>
                                <th>PLANDATE</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                        <tbody class="table-border-bottom-0" id="tbody">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>