<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">Projects Details</h1>
        <b-tabs class="detail-cnt">
            <b-tab active>
                <template slot="title">
                    <i class="icons cui-justify-left mr-1"></i> Basic Information
                </template>
                <b-form>
                    <b-form-group label="Customer" label-for="customer" :label-cols="3" label-class="required">
                        <b-form-select id="customer" :plain="true" :options="['선택', 'SKI', 'SKN']" value="선택" required></b-form-select>
                        <b-form-invalid-feedback id="customer">
                            Customer를 선택해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Cloud Account" label-for="cloudAccount" :label-cols="3" label-class="required">
                        <div class="d-flex align-items-center justify-content-between">
                            <b-form-select id="cloudAccount" :plain="true" :options="['선택', 'AWS', 'Azure', 'Cloud Z', 'GCP', 'IBM']" value="선택" class="mr-2" required style="width: 30%;"></b-form-select>
                            <b-form-select id="cloudAccountId" :plain="true" :options="['선택', 'account id 1', 'account id 2']" value="선택" required></b-form-select>
                            <b-form-invalid-feedback id="cloudAccount">
                                Cloud Account를 선택해주세요.
                            </b-form-invalid-feedback>
                            <b-form-invalid-feedback id="cloudAccountId">
                                Cloud Account 항목을 선택해주세요.
                            </b-form-invalid-feedback>
                        </div>
                    </b-form-group>
                    <b-form-group label="Project Name" label-for="projectName" :label-cols="3" label-class="required">
                        <b-form-input type="text" id="projectName" required placeholder="Project Name을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="projectName">
                            Project Name을 입력해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Status" label-for="status" :label-cols="3" label-class="required">
                        <b-form-select id="status" :plain="true" :options="['선택', 'Development', 'Operation']" value="선택" required></b-form-select>
                        <b-form-invalid-feedback id="status">
                            Status를 선택해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Development Period" label-for="developmentPeriodStart" :label-cols="3">
                        <div class="d-flex align-items-center justify-content-between">
                            <b-form-input type="number" id="developmentPeriodStart"></b-form-input>
                            <span class="mx-2">~</span>
                            <b-form-input type="number" id="developmentPeriodEnd"></b-form-input>
                        </div>
                    </b-form-group>
                    <b-form-group label="Launching Date" label-for="launchingDate" :label-cols="3">
                        <b-form-input type="date" id="launchingDate"></b-form-input>
                    </b-form-group>
                    <b-form-group label="원가견적 여부" label-for="costEstimate" :label-cols="3">
                        <b-form-radio-group id="costEstimate" v-model="selected" name="costEstimate" class="mt-1">
                            <b-form-radio value="yes">Yes</b-form-radio>
                            <b-form-radio value="no">No</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <template v-if="selected === 'no'">
                        <b-form-group label="원가견적 상위 프로젝트" label-for="costEstimateProject" :label-cols="3">
                            <b-form-select id="costEstimateProject" :plain="true" :options="['선택']" value="선택">
                            </b-form-select>
                        </b-form-group>
                    </template>
                    <b-form-group label="Slack Channel" label-for="slackChannel" :label-cols="3">
                        <b-form-input type="text" id="slackChannel"></b-form-input>
                    </b-form-group>
                </b-form>
                <div class="tab-bottom-btn">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning" class="left"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                    <b-button variant="primary" class="right"><i class="icon-check"></i> 저장</b-button>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-list mr-1"></i> Environment Information
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" class="mr-2" v-b-modal.environment-modal><i class="icon-plus"></i> Environment 추가</b-button>
                    <b-button variant="secondary" size="sm" class="mr-2" v-b-modal.environment-modal><i class="icon-reload"></i> Environment 수정</b-button>
                    <b-button variant="danger" size="sm" class="mr-2" disabled><i class="icon-close"></i> Environment 삭제</b-button>
                    <b-button variant="success" size="sm" v-b-modal.product-modal><i class="icon-plus"></i> Product 추가</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <table class="table table-sm table-bordered">
                        <colgroup>
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: *;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Environment Type</th>
                                <th>Status</th>
                                <th>Billing YN</th>
                                <th>Billing Start Date</th>
                                <th>Product</th>
                                <th>Contract Size</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowspan="2" class="bg-dark">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" id="prod" value="1">
                                        <label class="custom-control-label" for="prod">prod</label>
                                    </div>
                                </th>
                                <td rowspan="2" class="text-center">Operation</td>
                                <td rowspan="2" class="text-center">Y</td>
                                <td rowspan="2" class="text-center">2020-01-01</td>
                                <td class="text-center">ZCP</td>
                                <td class="text-center">4GB</td>
                                <td class="text-center">2019-10-30</td>
                                <td class="text-center">
                                    <b-button variant="secondary" size="sm" class="mr-1" v-b-modal.product-modal><i class="fa fa-pencil"></i></b-button>
                                    <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">ZDB</td>
                                <td class="text-center">10GB</td>
                                <td class="text-center">2019-10-30</td>
                                <td class="text-center">
                                    <b-button variant="secondary" size="sm" class="mr-1" v-b-modal.product-modal><i class="fa fa-pencil"></i></b-button>
                                    <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                                </td>
                            </tr>
                            <tr>
                                <th class="bg-dark">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" id="dev" value="2">
                                        <label class="custom-control-label" for="dev">dev</label>
                                    </div>
                                </th>
                                <td class="text-center">Developemnt</td>
                                <td class="text-center">N</td>
                                <td class="text-center">2020-01-01</td>
                                <td class="text-center">ZCP</td>
                                <td class="text-center">4GB</td>
                                <td class="text-center">2019-10-30</td>
                                <td class="text-center">
                                    <b-button variant="secondary" size="sm" class="mr-1" v-b-modal.product-modal><i class="fa fa-pencil"></i></b-button>
                                    <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </VuePerfectScrollbar>
                
                <!-- modal : Environment -->
                <b-modal id="environment-modal" title="Environment" centered>
                    <b-form>
                        <b-form-group label="Environment" label-for="environment" :label-cols="4" label-class="required">
                            <b-form-select id="environment" :plain="true" :options="['선택', 'dev', 'qa', 'stage', 'prod', 'combination']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="environment">
                                Environment를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Status" label-for="environmentStatus" :label-cols="4" label-class="required">
                            <b-form-select id="environmentStatus" :plain="true" :options="['선택', 'Development', 'Operation']" value="선택" required></b-form-select>
                            <b-form-invalid-feedback id="environmentStatus">
                                Status를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Billing YN" label-for="billingYn" :label-cols="4">
                            <b-form-radio-group id="billingYn" v-model="billingSelected" name="billingYn" class="mt-1">
                                <b-form-radio value="yes">Yes</b-form-radio>
                                <b-form-radio value="no">No</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                        <b-form-group label="Billing Start Date" label-for="billingStartDate" :label-cols="4">
                            <b-form-input type="date" id="billingStartDate"></b-form-input>
                        </b-form-group>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Environment -->
                
                <!-- modal : Product -->
                <b-modal id="product-modal" title="Product" centered>
                    <b-form>
                        <b-form-group label="Product" label-for="product" :label-cols="4" label-class="required">
                            <b-form-select id="product" :plain="true" :options="['선택', 'ZCP', 'ZDB']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="product">
                                Product를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Contract Size" label-for="contractSize" :label-cols="4">
                            <b-input-group>
                                <b-form-input type="number" id="contractSize"></b-form-input>
                                <b-input-group-append><b-input-group-text>GB</b-input-group-text></b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Product -->

                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-people mr-1"></i> Stakeholders
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" v-b-modal.stakeholders-add-modal><i class="icon-plus"></i> Stakeholders 추가</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="stakeholders_fields" :items="stakeholders_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'stakeholders_number' ? '5%' : '' }">
                        </template>
                        <template slot="stakeholders_name" slot-scope="data">
                            <b-link v-b-modal.stakeholders-add-modal>{{ data.item.stakeholders_name }}</b-link>
                        </template>
                        <template slot="stakeholders_action">
                            <b-button variant="danger" size="sm" class="mr-1"><i class="fa fa-close"></i></b-button>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
                
                <!-- modal : Stakeholders Add -->
                <b-modal id="stakeholders-add-modal" size="lg" title="Stakeholders" centered>
                    <b-form>
                        <b-form-group label="Role" label-for="stakeholdersRole" :label-cols="3" label-class="required">
                            <b-form-select id="stakeholdersRole" :plain="true" :options="['선택']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="stakeholdersRole">
                                Role을 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>                        
                        <b-form-group label="User Name" label-for="stakeholdersUserName" :label-cols="3" label-class="required">
                            <b-form-input type="text" id="stakeholdersUserName" placeholder="User Name을 입력하세요." required></b-form-input>
                            <b-list-group class="mb-3">
                                <b-list-group-item href="#">Awesome link</b-list-group-item>
                                <b-list-group-item href="#">Link with active state</b-list-group-item>
                                <b-list-group-item href="#">Action links are easy</b-list-group-item>
                                <b-list-group-item href="#">Disabled link</b-list-group-item>
                            </b-list-group>
                        </b-form-group>
                        <b-form-group label="Company" label-for="stakeholdersCompany" :label-cols="3">
                            <b-form-input type="text" id="stakeholdersCompany" placeholder="Company를 입력하세요."></b-form-input>
                        </b-form-group>
                        <b-form-group label="Org" label-for="stakeholdersOrg" :label-cols="3">
                            <b-form-input type="text" id="stakeholdersOrg" placeholder="Org를 입력하세요."></b-form-input>
                        </b-form-group>
                        <b-form-group label="Email" label-for="stakeholdersEmail" :label-cols="3">
                            <b-form-input type="email" id="stakeholdersEmail" placeholder="Email을 입력하세요."></b-form-input>
                        </b-form-group>
                        <b-form-group label="Mobile" label-for="stakeholdersMobile" :label-cols="3">
                            <b-form-input type="tel" id="stakeholdersMobile" placeholder="Mobile을 입력하세요."></b-form-input>
                        </b-form-group>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Stakeholders Add -->
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-calculator mr-1"></i> Estimate Sheet
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-basket mr-1"></i> Orders
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-doc mr-1"></i> Contract
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-layers mr-1"></i> Clusters
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" class="mr-2" v-b-modal.cluster-add-modal><i class="icon-plus"></i> Cluster 추가</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <table class="table table-sm table-bordered">
                        <colgroup>
                            <col style="width: *;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                            <col style="width: 12.5%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Cluster</th>
                                <th>Environment Type</th>
                                <th>Product</th>
                                <th>Contract Size</th>
                                <th>Billing YN</th>
                                <th>Billing Start Date</th>
                                <th>Created Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowspan="2" class="bg-dark">
                                    <b-link v-b-modal.cluster-add-modal>cluster-abc</b-link>
                                </th>
                                <td rowspan="2">prod</td>
                                <td class="text-center">Cloud Z CP</td>
                                <td class="text-center">4GB</td>
                                <td class="text-center">Y</td>
                                <td class="text-center">2020-01-01</td>
                                <td class="text-center">2019-10-30</td>
                            </tr>
                            <tr>
                                <td class="text-center">Cloud Z DB</td>
                                <td class="text-center">10GB</td>
                                <td class="text-center">N</td>
                                <td class="text-center">2020-01-01</td>
                                <td class="text-center">2019-10-30</td>
                            </tr>
                            <tr>
                                <th class="bg-dark">
                                    <b-link v-b-modal.cluster-add-modal>cluster-def</b-link>
                                </th>
                                <td>dev</td>
                                <td class="text-center">ZCP</td>
                                <td class="text-center">4GB</td>
                                <td class="text-center">Y</td>
                                <td class="text-center">2020-01-01</td>
                                <td class="text-center">2019-10-30</td>
                            </tr>
                        </tbody>
                    </table>
                </VuePerfectScrollbar>
                
                <!-- modal : Cluster Add -->
                <b-modal id="cluster-add-modal" size="lg" title="Cluster" centered>
                    <b-form>
                        <b-form-group label="Environment Type" label-for="environmentType" :label-cols="3" label-class="required">
                            <b-form-select id="environmentType" :plain="true" :options="['선택', 'dev', 'stg', 'qa', 'prod']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="environmentType">
                                Environment Type을 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Cluster" label-for="cluster" :label-cols="3" label-class="required">
                            <b-form-select id="cluster" :plain="true" :options="['선택', 'cluster-dev', 'cluster-stg', 'cluster-qa', 'cluster-prod']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="cluster">
                                Cluster를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-row>
                            <b-col sm="3">
                                <label for="product" class="col-form-label">Product</label>
                                <div>
                                    <b-button variant="success" size="sm"><i class="icon-plus"></i> 추가</b-button>
                                </div>
                            </b-col>
                            <b-col>
                                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                                    <table class="table table-sm table-bordered">
                                        <colgroup>
                                            <col style="width: *;">
                                            <col style="width: 15%;">
                                            <col style="width: 12%;">
                                            <col style="width: 15%;">
                                            <col style="width: 10%;">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Contract Size</th>
                                                <th>Billing YN</th>
                                                <th>Billing Start Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b-form-select id="productSelect" :plain="true" :options="['선택', 'Cloud Z CP', 'Cloud Z DB']" value="선택">
                                                    </b-form-select>
                                                </td>
                                                <td>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <b-form-input type="text" id="inputContractSize"></b-form-input>
                                                        <span class="mx-1">GB</span>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <label class="mx-1 mb-0 switch switch-label switch-success">
                                                        <input class="switch-input" type="checkbox" checked="">
                                                        <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <b-form-input type="date" id="inputBillingStartDate"></b-form-input>
                                                </td>
                                                <td class="text-center">
                                                    <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </VuePerfectScrollbar>
                            </b-col>
                        </b-form-row>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Cluster Add -->
                
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/project/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { Switch as cSwitch } from '@coreui/vue'

export default {
    components: {
        VuePerfectScrollbar,
        cSwitch
    },
    computed: {
        psSettings: () => {
            return {
                maxScrollbarLength: 200,
                minScrollbarLength: 40,
                suppressScrollY: true,
                wheelPropagation: true,
                useBothWheelAxes: true
            }
        }
    },
    data()  {
        return {
            stakeholders_fields: [
                { key: 'stakeholders_number', label: 'No', tdClass: 'text-center' },
                { key: 'stakeholders_role', label: 'Role', tdClass: 'text-center' },
                { key: 'stakeholders_name', label: 'Name', tdClass: 'text-center' },
                { key: 'stakeholders_company', label: 'Company', tdClass: 'text-center' },
                { key: 'stakeholders_org', label: 'Org' },
                { key: 'stakeholders_email', label: 'E-mail' },
                { key: 'stakeholders_mobile', label: 'Mobile Number', tdClass: 'text-center' },
                { key: 'stakeholders_date', label: 'Created Date', tdClass: 'text-center' },
                { key: 'stakeholders_action', label: 'Actions', tdClass: 'text-center' }
            ],
            stakeholders_items: [
                { stakeholders_number: '1', stakeholders_role: 'Project Manager', stakeholders_name: '홍길동', stakeholders_company: 'SKI', stakeholders_org: '플랫폼 오퍼레이션', stakeholders_email: 'honggildong@sk.com', stakeholders_mobile: '010-1548-7895', stakeholders_date: '2019-12-03 11:45:20', stakeholders_action: '' },
                { stakeholders_number: '2', stakeholders_role: 'Project Manager', stakeholders_name: '홍길동', stakeholders_company: 'SK C&C', stakeholders_org: '플랫폼 오퍼레이션', stakeholders_email: 'honggildong@sk.com', stakeholders_mobile: '010-1548-7895', stakeholders_date: '2019-12-03 11:45:20', stakeholders_action: '' }
            ],
            selected: 'no',
            billingSelected: 'no'
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>