<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <!-- Bordered Table -->
        <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Transaction info</h5>
        <br><br>
        <div class="card">
            <div class="card-body">
                <h4>Transaction info</h4>
                <div class="row py-2">
                    <div class="mb-3 col-md-4">
                        <label for="inpStartDate" class="form-label">Start date<span class="red-text">*</span></label>
                        <input class="form-Date form-control" type="date" id="inpStartDate">
                    </div>
                    <div class="mb-3 col-md-4">
                        <label for="inpEndDate" class="form-label">End date <span class="red-text">*</span></label>
                        <input class="form-Date form-control" type="date" id="inpEndDate">
                    </div>
                    <div class="mb-3 col-md-8">
                        <button id="tblTransBtn" type="button" class="btn btn-circle btn-dark">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body">
                <div class="table-responsive text-nowrap mb-0">
                    <div class="card-datatable table-responsive pt-0">
                        <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblTransaction">
                            <thead>
                                <tr>
                                    <th class="text-center">No.</th>
                                    <th class="text-center">item no</th>
                                    <th class="text-center">item name</th>
                                    <th class="text-center">QTY</th>
                                    <th class="text-center">Location</th>
                                    <th class="text-center">DATE</th>
                                    <th class="text-center">Status</th>
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