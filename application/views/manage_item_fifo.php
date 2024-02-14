<div class="content-wrapper">
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Manage Item Fifo</h4>
    <div class="card">
      <div class="card-body">
        <div class="row py-2 mt-2">
          <div class="head-label text-left" style="padding: 0px 0px 0px 35px;">
            <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
            <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Item Fifo</span>
            <button type="button" class="btn btn btn-primary" style="letter-spacing: 2px; margin: 0px 28px;float: right;" id="btnAddItem" data-bs-toggle="modal" data-bs-target="#mdlAdd">Register Item Fifo </button>
          </div>
        </div>
        <br>
        <div class="table-responsive text-nowrap">
          <div class="card-datatable table-responsive pt-0">
            <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblMainMenu">
              <thead>
                <tr>
                  <th class="text-center">NO.</th>
                  <th class="text-center">ITEM NO</th>
                  <th class="text-center">ITEM NAME</th>
                  <th class="text-center">STATUS</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody id="tbody">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Add-->
    <div class="modal fade" id="mdlAdd" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title " id="exampleModalLabel1">Register Item Fifo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" id="add">
              <div class="row g-2">
                <div class="col mb-3">
                  <label for="inpItemNo" class="form-label">Item no.</label>
                  <input type="text" class="form-control" id="inpItemNo" placeholder="Enter Item no.">
                </div>
              </div>
              <div class="row g-2">
                <div class="col mb-3">
                  <label for="inpItemName" class="form-label">Item name.</label>
                  <input type="text" class="form-control" id="inpItemName" placeholder="Item name." readonly>
                </div>
              </div>
              <div class="row g-2">
                <label for="inpItemName" class="form-label">Condition</label>
                <div class="col mb-12">
                  <!-- <div class="col mb-6"> -->
                  <input style="margin-left: 5px;" type="checkbox" id="ckFifo" name="FIFO" value="1">
                  <label style="margin-left: 5px;" for="ckFifo">FIFO </label>
                  <input style="margin-left: 5px;" type="checkbox" id="ckCKN" name="CKN" value="1">
                  <label style="margin-left: 5px;" for="ckCKN">CKD</label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
            <button type="button" class="btn btn-primary" id="btnSaveAdd">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mdledit" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">Edit Item Fifo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="add">
              <div class="row g-2">
                <div class="col mb-3">
                  <label for="edtItemno" class="form-label">Item no.</label>
                  <input type="text" class="form-control" id="edtItemno" placeholder="Enter Item no.">
                </div>
              </div>
              <div class="row g-2">
                <div class="col mb-3">
                  <label for="edtItemname" class="form-label">Item name.</label>
                  <input type="text" class="form-control" id="edtItemname" placeholder="Item name." readonly>
                </div>
              </div>
              <label for="inpItemName" class="form-label">Condition</label>
              <div class="col mb-12">
                <input style="margin-left: 5px;" type="checkbox" id="edtItemfifo" name="FIFO" value="1">
                <label style="margin-left: 5px;" for="edtItemfifo">FIFO </label>
                <input style="margin-left: 5px;" type="checkbox" id="edtItemckd" name="CKN" value="1">
                <label style="margin-left: 5px;" for="edtItemckd">CKD</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
            <button type="button" class="btn btn-primary" id="btnSaveEdit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>