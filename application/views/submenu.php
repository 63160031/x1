          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->
            <div class="container-xxl flex-grow-1 container-p-y">
              <!-- Bordered Table -->
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Administrator /</span> Manage Sub Menu</h4>
              <div class="row py-1">
                <div class="col-1" style="margin-top: 10px;">
                  Main Menu
                </div>
                <div class="col">
                  <select class="form-control selMainMenu" id="selMainMenu">
                    <option value="" selected disabled>Choose main menu</option>

                  </select>
                  <span style="color: red;font-size: 13px; font-weight: 600;">* Please Select Main Menu</span>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-circle btn-primary" style="letter-spacing: 2px;" id="btnSerchMain"><span class="tf-icons bx bx-search me-1"></span>Search</button>
                </div>
              </div>
              <br>
              <div class="card" style="display: none;" id="inpSubmenu">
                <div class="card-body">
                  <div class="row py-2">
                    <div class="col-12">
                      <div class="head-label text-left" style="padding: 1px 0px 10px 7px;">
                        <i class="bx bxs-select-multiple mb-2" style="margin-top: 1px;color: #2c3a4a;"></i>
                        <span style="font-size: 17px;font-weight: 700;color: #0f1f31;margin-left: 5px;">Register Sub Menu</span>
                        <!-- <div class="d-flex justify-content-end mt-2 pr-2"> -->
                        <!-- </div> -->
                      </div>
                      <div class="row ">
                        <div class="col-md-4">
                          <div class="row ">
                            <div class="col-lg-3 p-t-20">
                              <span>Sub Menu</span><span class="red-text"> *</span>
                            </div>
                            <div class="col-lg">
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <input class="form-control" type="text" id="inpSubMenuName" oninput="InputAdd(this)">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="row ">
                            <div class="col-lg-5 p-t-20">
                              <span>Sub Menu controller</span><span class="red-text"> *</span>
                            </div>
                            <div class="col-lg">
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <input class="form-control" type="text" id="inpSubMenuCon" oninput="InputAdd(this)">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <button type="button" class="btn btn-primary btn-py " style="letter-spacing: 2px;" id="btnSaveAdd"><span class="tf-icons bx bx-add-to-queue me-1"></span>Register</button>
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 justify-content-start">
                        <div id="errMegadd" style="color: red; display: none;">Please enter in English only.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card" style="display: none;" id="content">
                <div class="col-sm-12 mt-3">
                  <div class="row ">
                    <div class="col-md-12">
                      <div class="card container">
                        <div class="row py-2 mt-2">
                          <div class="head-label text-left" style="padding: 35px 0px 0px 35px;">
                            <i class="bx bx bx-table me-2" style="margin-top:-4px;color: #2c3a4a;"></i>
                            <span style="font-size: 17px;font-weight: 700;color: #0f1f31;">List Sub Menu</span>
                          </div>
                          <div class="card-body">
                            <div class="table-responsive text-nowrap">
                              <div class="card-datatable table-responsive pt-0">
                                <table class="table card-table table-striped table-bordered table-hover table-checkable order-column w-100" id="tblSubMenu">
                                  <thead>
                                    <tr>
                                      <th class="text-center">No.</th>
                                      <th class="text-center">Sub Menu</th>
                                      <th class="text-center">Menu Controller</th>
                                      <th class="text-center">Update Date</th>
                                      <th class="text-center">Update By</th>
                                      <th class="text-center">Stasus</th>
                                      <th class="text-center">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody class="table-border-bottom-0" id="tbody">
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--/ Bordered Table -->
                        <!-- Modal -->
                        <div class="modal fade" id="mdlEdit" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropEdit">Edit Mainmenu</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="edtSubMenu" class="form-label">Sub Menu</label>
                                    <input type="text" id="edtSubMenu" class="form-control" placeholder="Enter Main Menu">
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="edtController" class="form-label">Menu Controller</label>
                                    <input type="text" id="edtController" class="form-control" placeholder="Enter Main Menu Icon">
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="edtOrderNo" class="form-label">Sub Menu</label>
                                    <input type="text" id="edtOrderNo" class="form-control" placeholder="Enter Main Menu">
                                  </div>
                                </div>

                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" id="btnSaveEdit">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>