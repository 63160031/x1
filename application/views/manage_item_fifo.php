<div class="content-wrapper">
  <!-- Content -->

  <div class="container-xxl flex-grow-1 container-p-y">
    <!-- Bordered Table -->
    <h5 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Manage Item Fifo</h5>
    <div class="card">
      <div class="card-body">
        <div class="row py-2 mt-2">
          <span class="fs-5 fw-bold text-primary-emphasis">Manage Item Fifo</span>
          <div class="col-md-6 col-sm-10 col-5">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col">
                
              </div>
            </div>
          </div>
          <div class="col-md-5 col-sm-2 col-7">
            <div class="row container">
              <div class="col-lg-5 p-t-20"></div>
              <div class="col-lg-6" style="display: grid; grid-template-columns: auto auto;">
  
              </div>
            
            </div>
          </div>
          <div class="col justify-content-start ms-1">
            <div id="errMegadd" style="color: red; display: none;">Please enter in English only.</div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-2 pr-2">
        <button type="button" class="btn btn-circle btn-primary" id="btnAddItem" data-bs-toggle="modal" data-bs-target="#mdlAdd" style="
    margin-right: 27px; margin-top: 14px;">Add Item<i class="fa fa-plus"></i></button>
      </div>
      <br>
        <div class="table-responsive text-nowrap">
          <div class="card-datatable table-responsive pt-0">
            <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100 table" id="tblMainMenu">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>ITEM NO</th>
                  <th>ITEM NAME</th>
                  <th>STATUS</th>
                  <th>Action</th>
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
        <h5 class="modal-title" id="exampleModalLabel1">Add Item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="" id="add">
          <div class="row g-2">
            <div class="col mb-3">
              <label class="form-label">Item no.</label>
              <input type="text" id="inpItemNo" class="form-control" placeholder="" oninput="InputAddpersonal(this)">
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-3">
              <label class="form-label">Item name.</label>
              <input type="text" id="inpItemName" class="form-control" placeholder="" oninput="InputAddpersonal(this)">
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-3">
            <input type="checkbox" id="ckFifo" name="FIFO" value="1">
              <label for="ckFifo">FIFO </label><br>
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-3">
            <input type="checkbox" id="ckCKN" name="CKN" value="1">
              <label for="ckCKN">CKD</label><br>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <div class="container col justify-content-start">
          <div id="errMegadd" style="display: none; color: red;">Please enter in English only.</div>
          <div id="errAddempcode" style="display: none; color: red;">Please enter Employee Code as (a-z ,A-Z ,0-9) only.</div>
          <div id="errAddpersonal" style="display: none; color: red;">Please enter Firstname or Lastname as (a-z ,A-Z) only.</div>
        </div>
        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal" id="btnBack">Back</button>
        <button type="button" class="btn btn-primary" id="btnSaveAdd">Save</button>
      </div>
    </div>
  </div>
</div>

<!-- End Modal Add-->
    <!--/ Bordered Table -->



  </div>
</div>