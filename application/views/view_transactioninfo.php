<?php
$toDayDate = date("Y-m-d");
?>
<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <!-- Bordered Table -->
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Transaction info</h4>

        <div class="card">
            <div class="head-label text-left" style="    padding: 20px 0px 0px 20px; margin-bottom: -25px;">
                <i class="bx bxs-select-multiple mb-2" style="margin-top: 1px;color: #2c3a4a;"></i>
                <span style="font-size: 17px;font-weight: 700;color: #0f1f31;margin-left: 5px;">Select Transaction Info</span>
                <!-- <div class="d-flex justify-content-end mt-2 pr-2"> -->
                <!-- </div> -->
            </div>
            <div class="card-body">
                <div class="row py-2">
                    <div class="mb-3 col-md-3">
                        <label for="inpStartDate" class="form-label">Start date<span class="red-text">*</span></label>

                        <input class="form-Date form-control" type="date" id="inpStartDate" value="<?= $toDayDate ?>">
                        <!-- <input class="form-Date form-control" type="text" id="inpStartDate"  > -->
                    </div>
                    <div class="mb-3 col-md-3">
                        <label for="inpEndDate" class="form-label">End date <span class="red-text">*</span></label>
                        <input class="form-Date form-control" type="date" id="inpEndDate" value="<?= $toDayDate ?>">
                    </div>
                    <div class="mb-3 col-md-3">
                        <label for="inpItemNo" class="form-label">Item no.</label>
                        <input type="text" class="form-control" id="inpItemNo" placeholder="Enter Item no.">
                        <ul class="typeahead dropdown-menu"></ul>
                    </div>
                    <div class="mb-2 col-md-2">
                        <button id="tblTransBtn" type="button" class="btn btn-primary" style="letter-spacing: 2px; margin-top: 47px">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="display: none;" id="content">
            <div class="card mt-4">
                <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
                    <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
                    <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Transaction Info</span>
                </div>
                <div class="card-body">
                    <div class="table-responsive text-nowrap mb-0">
                        <div class="card-datatable table-responsive pt-0">
                            <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblTransaction">
                                <thead>
                                    <tr>
                                        <th class="text-center">No.</th>
                                        <th class="text-center">item no</th>
                                        <th class="text-center">item name</th>
                                        <th class="text-center">QTY</th>
                                        <th class="text-center">Location</th>
                                        <th class="text-center">Update DATE</th>
                                        <th class="text-center">Update By</th>
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
</div>