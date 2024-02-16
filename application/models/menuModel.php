<?php
defined('BASEPATH') or exit('No direct script access allowed');

class menuModel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    public function subMenu() {
        $permisGroup = $this->input->post($this->session->userdata('perMissionGroup'));
        var_dump($permisGroup); exit();



        // $result = $this->apimd->get_menu($sess);
        // echo json_encode($result);
    }
}
