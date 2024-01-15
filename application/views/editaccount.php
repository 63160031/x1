<div class="container-xxl flex-grow-1 container-p-y">
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Profile Settings /</span> Profile</h4>
                  <div class="card mb-4">
                  <h5 class="card-header text-center">Profile</h5>
                    <!-- Account -->
                    <div class="card-body d-flex justify-content-center">
                      <div class="d-flex align-items-start align-items-sm-center gap-4">
                      <img src="http://192.168.161.207/tbkk_shopfloor/asset/img_emp/<?php echo $this->session->userdata('userName');?>.jpg"
                          alt="user-avatar"
                          class="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                      </div>
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                    <form id="formAccountSettings" method="POST" onsubmit="return false">
    <div class="row">
        <div class="mb-3 col-md-6">
            <label for="edtEmpCode" class="form-label">Employee Code</label>
            <input
                class="form-control"
                type="text"
                id="edtEmpCode"
                name="employeeCode"
                value=""
                readonly=""

            />
        </div>
        <div class="mb-3 col-md-6">
            <label for="edtMpc" class="form-label">MPC ID</label>
            <input
                class="form-control"
                type="text"
                id="edtMpc"
                name="mpcId"
                value=""
                readonly=""
                
            />
        </div>
        <!-- Add the following fields -->
        <div class="mb-3 col-md-6">
            <label for="edtfName" class="form-label">First Name</label>
            <input
                class="form-control"
                type="text"
                id="edtfName"
                name="firstName"
                value=""
              
            />
        </div>
        <div class="mb-3 col-md-6">
            <label for="edtlName" class="form-label">Last Name</label>
            <input
                class="form-control"
                type="text"
                id="edtlName"
                name="lastName"
                value=""
               
            />
        </div>
        <div class="mb-3 col-md-6">
            <label for="edtEmail" class="form-label">Email</label>
            <input
                class="form-control"
                type="email"
                id="edtEmail"
                name="email"
                value=""
              
            />
        </div>
        <button type="button" id="btnSaveEdit" class="btn btn-primary">Save</button>
            <button type="button" id="btnCancelEdit" class="btn btn-secondary">Cancel</button>
       </div>
</form>

                    </div>
                  </div>
                </div>