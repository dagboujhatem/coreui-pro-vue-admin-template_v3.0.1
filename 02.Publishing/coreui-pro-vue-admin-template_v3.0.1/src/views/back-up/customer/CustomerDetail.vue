<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">Customer Details</h1>
        <b-tabs class="detail-cnt">
            <b-tab active>
                <template slot="title">
                    <i class="icons cui-justify-left mr-1"></i> Basic Information
                </template>
                <b-form>
                    <b-form-group label="Customer Name(EN)" label-for="customerNameEn" :label-cols="3" label-class="required">
                        <b-form-input type="text" id="customerNameEn" required placeholder="Customer Name(EN)을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="customerNameEn">
                            Customer Name(EN)을 입력해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Customer Name(KR)" label-for="customerNameKr" :label-cols="3" label-class="required">
                        <b-form-input type="text" id="customerNameKr" required placeholder="Customer Name(KR)을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="customerNameKr">
                            Customer Name(KR)을 입력해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <!--<b-form-group label="Cloud Service Provider" label-for="cloudServiceProviderGoogle" :label-cols="3">
                        <div class="d-flex align-items-center justify-content-between">
                            <img src="img/img_logo_gcs.png" width="22" height="22" alt="Google Clould System Logo" class="mx-1">
                            <b-form-input type="text" id="cloudServiceProviderGoogleAccount" placeholder="Account ID" class="mx-1" style="width: 40%;"></b-form-input>
                            <b-form-input type="text" id="cloudServiceProviderGoogleAlias" placeholder="Alias" style="width: 60%;"></b-form-input>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <img src="img/img_logo_aws.png" width="22" alt="Amazon Web System Logo" class="mx-1">
                            <b-form-input type="text" id="cloudServiceProviderAwsAccount" placeholder="Account ID" class="mx-1" style="width: 40%;"></b-form-input>
                            <b-form-input type="text" id="cloudServiceProviderAwsAlias" placeholder="Alias" style="width: 60%;"></b-form-input>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <img src="img/img_logo_cloud.png" width="22" alt="Cloud Z Logo" class="mx-1">
                            <b-form-input type="text" id="cloudServiceProviderCloudZAccount" placeholder="Account ID" class="mx-1" style="width: 40%;"></b-form-input>
                            <b-form-input type="text" id="cloudServiceProviderCloudZAlias" placeholder="Alias" style="width: 60%;"></b-form-input>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <img src="img/img_logo_ibm.png" width="22" alt="IBM Logo" class="mx-1">
                            <b-form-input type="text" id="cloudServiceProviderIBMAccount" placeholder="Account ID" class="mx-1" style="width: 40%;"></b-form-input>
                            <b-form-input type="text" id="cloudServiceProviderIBMAlias" placeholder="Alias" style="width: 60%;"></b-form-input>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <img src="img/img_logo_azure.png" width="22" alt="Azure Logo" class="mx-1">
                            <b-form-input type="text" id="cloudServiceProviderAzureAccount" placeholder="Account ID" class="mx-1" style="width: 40%;"></b-form-input>
                            <b-form-input type="text" id="cloudServiceProviderAzureAlias" placeholder="Alias" style="width: 60%;"></b-form-input>
                        </div>
                    </b-form-group>-->
                </b-form>
                <div class="tab-bottom-btn">
                    <router-link :to="{ path: '/customer/' }">
                        <b-button variant="warning" class="left"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                    <b-button variant="primary" class="right"><i class="icon-check"></i> 저장</b-button>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-cloud-download mr-1"></i> Cloud Service Accounts
                </template>
                <b-form-group>
                    <b-button variant="success" size="sm" class="mr-2" v-b-modal.cloud-service-accounts-add-modal><i class="icon-plus"></i> Cloud Service Accounts 추가</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="cloud_fields" :items="cloud_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'cloud_number' ? '5%' : '' }">
                        </template>
                        <template slot="cloud_id" slot-scope="data">
                            <b-link v-b-modal.cloud-service-accounts-add-modal>{{data.item.cloud_id}}</b-link>
                        </template>
                        <template slot="cloud_service" slot-scope="item">
                            <img :src="item.value.url" width="22" alt="" class="mx-1">
                        </template>
                        <template slot="cloud_actions" slot-scope="data">
                            <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                
                <!-- modal : Cloud Service Accounts 추가 -->
                <b-modal id="cloud-service-accounts-add-modal" size="mg" scrollable title="Cloud Service Accounts" centered>
                    <b-form>
                        <b-form-group label="Cloud Service" label-for="cloudService" :label-cols="3" label-class="required">
                            <b-form-select id="cloudService" :plain="true" :options="['선택', 'AWS', 'Azure', 'Cloud Z', 'GCP', 'IBM']" value="선택" required></b-form-select>
                            <b-form-invalid-feedback id="cloudService">
                                Cloud Service를 선택해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="Account ID" label-for="accountId" :label-cols="3">
                            <b-form-input type="text" id="accountId" placeholder="Account ID를 입력해주세요."></b-form-input>
                        </b-form-group>
                        <b-form-group label="Account Alias" label-for="accountAlias" :label-cols="3">
                            <b-form-input type="text" id="accountAlias" placeholder="Account Alias를 입력해주세요."></b-form-input>
                        </b-form-group>
                    </b-form>
                    <template v-slot:modal-footer="{ ok, cancel }">
                        <b-button variant="secondary" @click="cancel()">취소</b-button>
                        <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                    </template>
                </b-modal>
                <!-- // modal : Customer 추가 -->
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-folder-alt mr-1"></i> Projects
                </template>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="projects_fields" :items="projects_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'projects_number' ? '5%' : '' }">
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/customer/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icon-layers mr-1"></i> Clusters
                </template>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="clusters_fields" :items="clusters_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'clusters_number' ? '5%' : '' }">
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/customer/' }">
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
            projects_fields: [
                { key: 'projects_number', label: 'No', tdClass: 'text-center' },
                { key: 'projects_name', label: 'Project', tdClass: 'text-center' },
                { key: 'projects_status', label: 'Status', tdClass: 'text-center' },
                { key: 'projects_dev', label: 'Dev. Period', tdClass: 'text-center' },
                { key: 'projects_date', label: 'Launching Date', tdClass: 'text-center' },
                { key: 'projects_stakeholder', label: 'Stakeholder', tdClass: 'text-center' }
            ],
            projects_items: [
                { projects_number: '1', projects_name: 'BiOK', projects_status: 'Operation', projects_dev: '~', projects_date: '2019-09-26', projects_stakeholder: '' },
                { projects_number: '2', projects_name: 'SHE Portal', projects_status: 'Development', projects_dev: '~', projects_date: '2019-09-26', projects_stakeholder: '' }
            ],
            clusters_fields: [
                { key: 'clusters_number', label: 'No', tdClass: 'text-center' },
                { key: 'clusters_provider', label: 'Cloud Service Provider', tdClass: 'text-center' },
                { key: 'clusters_id', label: 'Cluset ID', tdClass: 'text-center' },
                { key: 'clusters_name', label: 'Cluster Name' },
                { key: 'clusters_age', label: 'Age', tdClass: 'text-center' },
                { key: 'clusters_environment', label: 'Environment', tdClass: 'text-center' },
                { key: 'clusters_rel', label: 'Rel. Projects', tdClass: 'text-center' },
                { key: 'clusters_k8s', label: 'k8s version', tdClass: 'text-center' },
                { key: 'clusters_pm', label: 'Next. PM', tdClass: 'text-center' },
                { key: 'clusters_node', label: 'Node Information (Mgmt/ZDB/Worker/Edge)', tdClass: 'text-center' }
            ],
            clusters_items: [
                { clusters_number: '1', clusters_provider: 'IBM', clusters_id: '098735343234', clusters_name: 'cloudzcp-ski-dev', clusters_age: '2019-09-26', clusters_environment: 'dev', clusters_rel: '1', clusters_k8s: '1.13.4', clusters_pm: '2019-12', clusters_node: '2/4/4/2' },
                { clusters_number: '2', clusters_provider: 'Azure', clusters_id: '89347693493', clusters_name: 'cloudzcp-ski-united-dev', clusters_age: '2019-09-26', clusters_environment: 'dev', clusters_rel: '3', clusters_k8s: '1.14.8', clusters_pm: '2020-12', clusters_node: '2/4/4/0' }
            ],
            cloud_fields: [
                { key: 'cloud_number', label: 'No', tdClass: 'text-center' },
                { key: 'cloud_service', label: 'Cloud Service', tdClass: 'text-center' },
                { key: 'cloud_id', label: 'Account ID' },
                { key: 'cloud_alias', label: 'Account Alias' },
                { key: 'cloud_date', label: 'Created Date', tdClass: 'text-center' },
                { key: 'cloud_actions', label: 'Actions', tdClass: 'text-center' }
            ],
            cloud_items: [
                { cloud_number: '1', cloud_service: { url: 'img/img_logo_gcs.png' }, cloud_id: 'account 123', cloud_alias: 'cloudzcp-ski-dev', cloud_date: '2019-09-26', cloud_actions: '' },
                { cloud_number: '2', cloud_service: { url: 'img/img_logo_aws.png' }, cloud_id: 'account 123', cloud_alias: 'cloudzcp-ski-dev', cloud_date: '2019-09-26', cloud_actions: '' },
                { cloud_number: '3', cloud_service: { url: 'img/img_logo_cloud.png' }, cloud_id: 'account 123', cloud_alias: 'cloudzcp-ski-dev', cloud_date: '2019-09-26', cloud_actions: '' },
                { cloud_number: '4', cloud_service: { url: 'img/img_logo_ibm.png' }, cloud_id: 'account 123', cloud_alias: 'cloudzcp-ski-dev', cloud_date: '2019-09-26', cloud_actions: '' },
                { cloud_number: '5', cloud_service: { url: 'img/img_logo_azure.png' }, cloud_id: 'account 123', cloud_alias: 'cloudzcp-ski-dev', cloud_date: '2019-09-26', cloud_actions: '' }
            ]
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>