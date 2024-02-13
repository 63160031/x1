<h4 class="fw-bold py-4 mb-4" style="margin-left: 25px;"><span class="text-muted fw-light">Administrator /</span> Manage App Account </h4>
<div class="container">
  <div class="row">
  <div class="col-12">
    <div class="card">
      <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
        <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
        <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List App Account</span>
        <button type="button" class="btn btn btn-primary" style="letter-spacing: 2px; margin: 0px 40px;float: right;" id="callmodelAdd" data-bs-toggle="modal" data-bs-target="#mdlAdd">Register New Account </button>
      </div>
      <div class="card-body">
        <div class="table-responsive text-nowrap">
          <!-- Removed scrollBody -->
          <div class="card-datatable table-responsive pt-0">
            <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblManageAccount">
              <thead>
                <tr>
                  <th class="text-center">No.</th>
                  <th class="text-center">Employee Code</th>
                  <th class="text-center">Permis Group</th>
                  <th class="text-center">Name</th>
                  <th class="text-center">lastName</th>
                  <th class="text-center">Plant</th>
                  <th class="text-center">CREATE DATE</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Edit</th>
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
<!-- End Edit Modal -->