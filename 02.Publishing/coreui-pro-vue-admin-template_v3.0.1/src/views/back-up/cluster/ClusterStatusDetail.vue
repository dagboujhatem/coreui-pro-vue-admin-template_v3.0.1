<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">Cluster Details</h1>
        <b-tabs class="detail-cnt">
            <b-tab active>
                <template slot="title">
                    <i class="icons cui-justify-left mr-1"></i> Basic Information
                </template>
                <b-form>
                    <b-form-group label="Cluster ID" label-for="clusterId" :label-cols="3" label-class="required">
                        <b-form-input type="text" id="clusterId" required placeholder="Cluster ID를 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="clusterId">
                            Cluster ID를 입력해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Cluster Name" label-for="clusterName" :label-cols="3" label-class="required">
                        <b-form-input type="text" id="clusterName" required placeholder="Cluster Name을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="clusterName">
                            Cluster Name을 입력해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Environment Type" label-for="environmentType" :label-cols="3" label-class="required">
                        <b-form-select id="environmentType" :plain="true" :options="['선택', 'dev', 'qa', 'stage', 'prod', 'combination']" value="선택" required></b-form-select>
                        <b-form-invalid-feedback id="environmentType">
                            Environment Type을 선택해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Network Architecture Type" label-for="networkArchitectureType" :label-cols="3">
                        <b-form-select id="networkArchitectureType" :plain="true" :options="['선택', 'Private Only', 'Private + Public']" value="선택"></b-form-select>
                    </b-form-group>
                    <b-form-group label="SRE Integration" label-for="sreIntegration" :label-cols="3">
                        <b-form-radio-group id="sreIntegration" v-model="selected" name="sreIntegration" class="mt-1">
                            <b-form-radio value="yes">Yes</b-form-radio>
                            <b-form-radio value="no">No</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Multi Tenant" label-for="multiTenant" :label-cols="3">
                        <b-form-radio-group id="multiTenant" v-model="multiTenantSelected" name="multiTenant" class="mt-1">
                            <b-form-radio value="yes">Yes</b-form-radio>
                            <b-form-radio value="no">No</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Installation Account" label-for="installationAccount" :label-cols="3">
                        <b-form-input type="number" id="installationAccount"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Installation Completed Date" label-for="installationCompletedDate" :label-cols="3">
                        <b-form-input type="date" id="installationCompletedDate"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Installation Auditor" label-for="installationAuditor" :label-cols="3">
                        <b-form-input type="text" id="installationAuditor"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Cloud Service Provider" label-for="cloudServiceProvider" :label-cols="3">
                        <b-form-select id="cloudServiceProvider" :plain="true" :options="['선택', 'IBM', 'AWS', 'Azure', 'GCP']" value="선택"></b-form-select>
                    </b-form-group>
                    <b-form-group label="Managed Kubernetes Version" label-for="managedKubernetesVersion" :label-cols="3">
                        <b-form-input type="number" id="managedKubernetesVersion"></b-form-input>
                    </b-form-group>
                </b-form>
                <div class="tab-bottom-btn">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning" class="left"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                    <b-button variant="primary" class="right"><i class="icon-check"></i> 저장</b-button>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-doc mr-1"></i> Contract
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-folder-alt mr-1"></i> Projects
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" class="mr-2" v-b-modal.project-modal><i class="icon-plus"></i> Project 추가</b-button>
                    <b-button variant="danger" size="sm"><i class="icon-close"></i> Project 삭제</b-button>
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
                                <th>Project</th>
                                <th>Environment Type</th>
                                <th>Cluster</th>
                                <th>Product</th>
                                <th>Contract Size</th>
                                <th>Billing YN</th>
                                <th>Billing Start Date</th>
                                <th>Created Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowspan="4" class="bg-dark">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" id="BiOk" value="">
                                        <label class="custom-control-label" for="BiOk">BiOk</label>
                                    </div>
                                </th>
                                <td rowspan="2" class="text-center">
                                    <b-link v-b-modal.project-modal>prod</b-link>
                                </td>
                                <td rowspan="2" class="text-center">cluster-abc</td>
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
                                <td rowspan="2" class="text-center">
                                    <b-link v-b-modal.project-modal>dev</b-link>
                                </td>
                                <td rowspan="2" class="text-center">cluster-abc</td>
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
                                <th rowspan="2" class="bg-dark">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        <input type="checkbox" class="custom-control-input" id="BiOk_itsm" value="">
                                        <label class="custom-control-label" for="BiOk_itsm">ITSM</label>
                                    </div>
                                </th>
                                <td rowspan="2" class="text-center">
                                    <b-link v-b-modal.project-modal>prod</b-link>
                                </td>
                                <td rowspan="2" class="text-center">cluster-def</td>
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
                        </tbody>
                    </table>
                </VuePerfectScrollbar>
                                
                <!-- modal : Project -->
                <b-modal id="project-modal" size="lg" title="Project" centered>
                    <b-form>
                        <b-form-group label="Project" label-for="project" :label-cols="3" label-class="required">
                            <b-form-select id="project" :plain="true" :options="['선택', 'BiOk', 'ITSM']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="project">
                                Project를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Environment Type" label-for="environmentType" :label-cols="3" label-class="required">
                            <b-form-select id="environmentType" :plain="true" :options="['선택', 'dev', 'stg', 'qa', 'prod']" value="선택" required>
                            </b-form-select>
                            <b-form-invalid-feedback id="environmentType">
                                Environment Type을 선택해주세요.
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
                        <b-button variant="danger"><i class="icon-close"></i> 삭제</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Project -->
                
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-calculator mr-1"></i> Estimate Sheet
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-basket mr-1"></i> Orders
                </template>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-book-open mr-1"></i> Credentials
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" class="mr-2" v-b-modal.credentials-add-modal><i class="icon-plus"></i> Credentials 추가</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="credentials_fields" :items="credentials_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'credentials_number' ? '5%' : '' }">
                        </template>
                        <template slot="credentials_name" slot-scope="data">
                            <b-link v-b-modal.credentials-add-modal>{{data.item.credentials_name}}</b-link>
                        </template>
                        <template slot="credentials_actions" slot-scope="data">
                            <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                
                <!-- modal : Credentials 추가 -->
                <b-modal id="credentials-add-modal" size="lg" title="Credential" centered>
                    <b-form>
                        <b-form-group label="Account Type" label-for="accountType" :label-cols="3" label-class="required">
                            <b-form-select id="accountType" :plain="true" :options="['선택', 'Users', 'User Group', 'Service Account']" value="선택" required></b-form-select>
                            <b-form-invalid-feedback id="accountType">
                                Account Type을 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Name" label-for="credentialName" :label-cols="3" label-class="required">
                            <b-form-input type="text" id="credentialName" required placeholder="Name을 입력해주세요."></b-form-input>
                            <b-form-invalid-feedback id="credentialName">
                                Name을 입력해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Token" label-for="credentialToken" :label-cols="3" label-class="required">
                            <b-form-input type="password" id="credentialToken" required placeholder="Token을 입력해주세요."></b-form-input>
                            <b-form-invalid-feedback id="credentialToken">
                                Token을 입력해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Service Account Name" label-for="serviceAccountName" :label-cols="3">
                            <b-form-input type="text" id="serviceAccountName" placeholder="Service Account Name을 입력해주세요."></b-form-input>
                        </b-form-group>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="warning"><i class="icon-badge"></i> 토큰검증</b-button>
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Credentials 추가 -->

                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-options-vertical mr-1"></i> Nodes
                </template>
                <div class="text-right mb-3">
                    <b-button variant="primary" class="mr-2"><i class="icon-refresh"></i> Refresh</b-button>
                    <b-button v-b-toggle.collapseNodes variant="secondary"><i class="fa fa-filter"></i> 검색상세</b-button>
                </div>
                <div>
                    <b-collapse id="collapseNodes">
                        <b-card class="bg-dark">
                            <b-form class="row">
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="nodesName">Name</label>
                                        <b-form-input type="text" id="nodesName" placeholder="Name을 입력하세요."></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="nodesRoles">Roles</label>
                                        <b-form-select id="nodesRoles" :plain="true" :options="['All', 'logging', 'management', 'worker', 'edge', 'zdb']" value="All"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="nodesStatus">Status</label>
                                        <b-form-select id="nodesStatus" :plain="true" :options="['All', 'Ready', 'NotReady', 'Unknown']" value="All"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="12">
                                    <b-button variant="primary" block><i class="fa fa-search"></i> 검색</b-button>
                                </b-col>
                            </b-form>
                        </b-card>
                    </b-collapse>
                </div>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="nodes_fields" :items="nodes_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'nodes_number' ? '5%' : '' }">
                        </template>
                        <template slot="nodes_name" slot-scope="data">
                            <b-link :to="{ path: '/cluster/nodesdetail' }">{{data.item.nodes_name}}</b-link>
                        </template>
                        <template slot="nodes_cpu_requests" slot-scope="item">
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>{{item.value.value}}%</strong>
                                </div>
                            </div>
                            <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
                        </template>
                        <template slot="nodes_cpu_limits" slot-scope="item">
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>{{item.value.value}}%</strong>
                                </div>
                            </div>
                            <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
                        </template>
                        <template slot="nodes_memory_requests" slot-scope="item">
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>{{item.value.value}}%</strong>
                                </div>
                            </div>
                            <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
                        </template>
                        <template slot="nodes_memory_limits" slot-scope="item">
                            <div class="clearfix">
                                <div class="float-left">
                                    <strong>{{item.value.value}}%</strong>
                                </div>
                            </div>
                            <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
                        </template>
                        <template slot="nodes_status" slot-scope="data">
                            <b-badge :variant="variantResult(data.item.nodes_status)">{{data.item.nodes_status}}</b-badge>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-loop mr-1"></i> Persistent Volumes
                </template>
                <div class="text-right mb-3">
                    <b-button variant="primary" class="mr-2"><i class="icon-refresh"></i> Refresh</b-button>
                    <b-button v-b-toggle.collapsePersistent variant="secondary"><i class="fa fa-filter"></i> 검색상세</b-button>
                </div>
                <div>
                    <b-collapse id="collapsePersistent">
                        <b-card class="bg-dark">
                            <b-form class="row">
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="persistentName">Name</label>
                                        <b-form-input type="text" id="persistentName" placeholder="Name을 입력하세요."></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="persistentAccessModes">Access Modes</label>
                                        <b-form-select id="persistentAccessModes" :plain="true" :options="['All', 'ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany']" value="All"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="4">
                                    <b-form-group>
                                        <label for="persistentStatus">Status</label>
                                        <b-form-select id="persistentStatus" :plain="true" :options="['All', 'Available', 'Bound', 'Released', 'Failed']" value="All"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="12">
                                    <b-button variant="primary" block><i class="fa fa-search"></i> 검색</b-button>
                                </b-col>
                            </b-form>
                        </b-card>
                    </b-collapse>
                </div>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="persistent_fields" :items="persistent_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'persistent_number' ? '5%' : '' }">
                        </template>
                        <template slot="persistent_name" slot-scope="data">
                            <b-link :to="{ path: '/cluster/persistentdetail' }">{{data.item.persistent_name}}</b-link>
                        </template>
                        <template slot="persistent_status" slot-scope="data">
                            <b-badge :variant="variantResult(data.item.persistent_status)">{{data.item.persistent_status}}</b-badge>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-tag mr-1"></i> Namespaces
                </template>
                <div class="text-right mb-3">
                    <b-button variant="primary" class="mr-2"><i class="icon-refresh"></i> Refresh</b-button>
                    <b-button v-b-toggle.collapseNamespaces variant="secondary"><i class="fa fa-filter"></i> 검색상세</b-button>
                </div>
                <div>
                    <b-collapse id="collapseNamespaces">
                        <b-card class="bg-dark">
                            <b-form class="row">
                                <b-col lg="6">
                                    <b-form-group>
                                        <label for="namespacesName">Name</label>
                                        <b-form-input type="text" id="namespacesName" placeholder="Name을 입력하세요."></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="6">
                                    <b-form-group>
                                        <label for="namespacesStatus">Status</label>
                                        <b-form-select id="namespacesStatus" :plain="true" :options="['All', 'Active', 'Terminating']" value="All"></b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col lg="12">
                                    <b-button variant="primary" block><i class="fa fa-search"></i> 검색</b-button>
                                </b-col>
                            </b-form>
                        </b-card>
                    </b-collapse>
                </div>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="namespaces_fields" :items="namespaces_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'namespaces_number' ? '5%' : '' }">
                        </template>
                        <template slot="namespaces_name" slot-scope="data">
                            <b-link :to="{ path: '/cluster/namespacesdetail' }">{{data.item.namespaces_name}}</b-link>
                        </template>
                        <template slot="namespaces_status" slot-scope="data">
                            <b-badge :variant="variantResult(data.item.namespaces_status)">{{data.item.namespaces_status}}</b-badge>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/cluster/' }">
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
            project_fields: [
                { key: 'project_name', label: 'Project' },
                { key: 'project_zcp', label: 'ZCP', tdClass: 'text-center' },
                { key: 'project_zdb', label: 'ZDB', tdClass: 'text-center' },
                { key: 'project_actions', label: 'Actions', tdClass: 'text-center' }
            ],
            project_items: [
                { project_name: '', project_zcp: '', project_zdb: '', project_actions: '' },
                { project_name: '', project_zcp: '', project_zdb: '', project_actions: '' }
            ],
            credentials_fields: [
                { key: 'credentials_number', label: 'No', tdClass: 'text-center' },
                { key: 'credentials_account', label: 'Account Type', tdClass: 'text-center' },
                { key: 'credentials_name', label: 'Name' },
                { key: 'credentials_service_name', label: 'Service Account Name' },
                { key: 'credentials_token', label: 'Token Vaild', tdClass: 'text-center' },
                { key: 'credentials_created', label: 'Created' },
                { key: 'credentials_created_date', label: 'Created Date', tdClass: 'text-center' },
                { key: 'credentials_actions', label: 'Actions', tdClass: 'text-center' },
            ],
            credentials_items: [
                { credentials_number: '1', credentials_account: 'Service Account', credentials_name: 'zcp-system-service-sccount', credentials_service_name: 'zcp-system-service-sccount-zm', credentials_token: 'Y', credentials_created: 'account1', credentials_created_date: '2020-05-06', credentials_actions: '' },
                { credentials_number: '2', credentials_account: 'Service Account', credentials_name: 'zcp-system-service-sccount', credentials_service_name: '-', credentials_token: 'Y', credentials_created: 'account2', credentials_created_date: '2020-05-06', credentials_actions: '' }
            ],
            nodes_fields: [
                { key: 'nodes_number', label: 'No', tdClass: 'text-center' },
                { key: 'nodes_name', label: 'Name' },
                { key: 'nodes_node_pool_name', label: 'Node Pool Name' },
                { key: 'nodes_type', label: 'Type' },
                { key: 'nodes_roles', label: 'Roles' },
                { key: 'nodes_status', label: 'Status', tdClass: 'text-center' },
                { key: 'nodes_cpu_requests', label: 'CPU Requests', tdClass: 'text-center' },
                { key: 'nodes_cpu_limits', label: 'CPU Limits', tdClass: 'text-center' },
                { key: 'nodes_memory_requests', label: 'Memory Requests', tdClass: 'text-center' },
                { key: 'nodes_memory_limits', label: 'Memory Limits', tdClass: 'text-center' },
                { key: 'nodes_version', label: 'Version' },
                { key: 'nodes_age', label: 'Age', tdClass: 'text-center' }
            ],
            nodes_items: [
                { nodes_number: '1', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'logging, edge', nodes_status: 'Ready', nodes_cpu_requests: { value: 98 }, nodes_cpu_limits: { value: 53 }, nodes_memory_requests: { value: 12 }, nodes_memory_limits: { value: 43 }, nodes_version: 'v1.15.5+IKS', nodes_age: '11d' },
                { nodes_number: '2', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'management', nodes_status: 'NotReady', nodes_cpu_requests: { value: 76 }, nodes_cpu_limits: { value: 64 }, nodes_memory_requests: { value: 22 }, nodes_memory_limits: { value: 43 }, nodes_version: 'v1.15.5+IKS', nodes_age: '11d' },
                { nodes_number: '4', nodes_name: '10.174.27.196', nodes_node_pool_name: 'zcp_8_32_shared', nodes_type: 'b3c.4x16.encrypted', nodes_roles: 'edge', nodes_status: 'Unknown', nodes_cpu_requests: { value: 80 }, nodes_cpu_limits: { value: 68 }, nodes_memory_requests: { value: 12 }, nodes_memory_limits: { value: 43 }, nodes_version: 'v1.15.5+IKS', nodes_age: '11d' }
            ],
            persistent_fields: [
                { key: 'persistent_number', label: 'No', tdClass: 'text-center' },
                { key: 'persistent_name', label: 'Name' },
                { key: 'persistent_capacity', label: 'Capacity', tdClass: 'text-center' },
                { key: 'persistent_access_modes', label: 'Access Modes', tdClass: 'text-center' },
                { key: 'persistent_reclaim_policy', label: 'Reclaim Policy', tdClass: 'text-center' },
                { key: 'persistent_status', label: 'Status', tdClass: 'text-center' },
                { key: 'persistent_claim', label: 'Claim' },
                { key: 'persistent_storage_class', label: 'Storage Class', tdClass: 'text-center' },
                { key: 'persistent_iops', label: 'IOPS', tdClass: 'text-right' },
                { key: 'persistent_age', label: 'Age', tdClass: 'text-center' }
            ],
            persistent_items: [
                { persistent_number: '1', persistent_name: 'pvc-017c8241-5f2d-4d2e-9fc3-8db757387e19', persistent_capacity: '2Gi', persistent_access_modes: 'ReadWriteOnce', persistent_reclaim_policy: 'Delete', persistent_status: 'Available', persistent_claim: 'mongodb/data-my-replica-set-2', persistent_storage_class: 'ibmc-file-bronze', persistent_iops: '2', persistent_age: '11d' },
                { persistent_number: '2', persistent_name: 'pvc-017c8241-5f2d-4d2e-9fc3-8db757387e19', persistent_capacity: '2Gi', persistent_access_modes: 'ReadWriteOnce', persistent_reclaim_policy: 'Delete', persistent_status: 'Bound', persistent_claim: 'mongodb/data-my-replica-set-2', persistent_storage_class: 'ibmc-file-bronze', persistent_iops: '2', persistent_age: '11d' },
                { persistent_number: '3', persistent_name: 'pvc-017c8241-5f2d-4d2e-9fc3-8db757387e19', persistent_capacity: '2Gi', persistent_access_modes: 'ReadWriteOnce', persistent_reclaim_policy: 'Delete', persistent_status: 'Released', persistent_claim: 'mongodb/data-my-replica-set-2', persistent_storage_class: 'ibmc-file-bronze', persistent_iops: '2', persistent_age: '11d' },
                { persistent_number: '4', persistent_name: 'pvc-017c8241-5f2d-4d2e-9fc3-8db757387e19', persistent_capacity: '2Gi', persistent_access_modes: 'ReadWriteOnce', persistent_reclaim_policy: 'Delete', persistent_status: 'Failed', persistent_claim: 'mongodb/data-my-replica-set-2', persistent_storage_class: 'ibmc-file-bronze', persistent_iops: '2', persistent_age: '11d' }
            ],
            namespaces_fields: [
                { key: 'namespaces_number', label: 'No', tdClass: 'text-center' },
                { key: 'namespaces_name', label: 'Name' },
                { key: 'namespaces_status', label: 'Status', tdClass: 'text-center' },
                { key: 'namespaces_age', label: 'Age', tdClass: 'text-center' }
            ],
            namespaces_items: [
                { namespaces_number: '1', namespaces_name: 'argocd', namespaces_status: 'Active', namespaces_age: '11d' },
                { namespaces_number: '2', namespaces_name: 'zdb-system', namespaces_status: 'Terminating', namespaces_age: '8d' }
            ],
            selected: 'yes',
            multiTenantSelected: 'yes',
            billingSelected: 'yes',
            projectBillingSelected: 'yes'
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        },
        variant (value) {
            let $variant
            if (value <= 25) {
                $variant = 'info'
            } else if (value > 25 && value <= 50) {
                $variant = 'success'
            } else if (value > 50 && value <= 75) {
                $variant = 'warning'
            } else if (value > 75 && value <= 100) {
                $variant = 'danger'
            }
            return $variant
        },
        variantResult (status) {
            let $variantStatus
            
            if(status == 'Ready' || status == 'Released') {
                $variantStatus = 'primary' // 파랑
            }else if(status == 'NotReady' || status == 'Bound') {
                $variantStatus = 'warning' // 노랑
            }else if(status == 'Unknown') {
                $variantStatus = 'secondary' // 회색
            }else if(status == 'Available' || status == 'Active') {
                $variantStatus = 'success' // 초록
            }else if(status == 'Failed' || status == 'Terminating') {
                $variantStatus = 'danger' // 빨강
            }
            return $variantStatus
        }
    }
}
</script>