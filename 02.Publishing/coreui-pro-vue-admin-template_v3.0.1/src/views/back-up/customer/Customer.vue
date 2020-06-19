<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">
            Customer 
            <b-button variant="success" class="float-right" v-b-modal.customer-add-modal><i class="icon-plus"></i> Customer 추가</b-button>
        </h1>
        <b-card>
            <div class="mb-3">
                <b-form-group label-for="perPageSelect" class="mb-0 float-left">
                    <b-form-select v-model="perPage" id="perPageSelect" :options="pageOptions" class="w-auto"></b-form-select>
                </b-form-group>
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" class="my-0"></b-pagination>
            </div>
            <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                <b-table striped hover small bordered :fields="fields" :items="items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'number' ? '5%' : '' }">
                    </template>
                    <template slot="cloud_account" slot-scope="data">
                        <b-link><img src="img/img_logo_gcs.png" width="22" height="22" alt="Google Clould System Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_aws.png" width="22" alt="Amazon Web System Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_cloud.png" width="22" alt="Cloud Z Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_ibm.png" width="22" alt="IBM Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_azure.png" width="22" alt="Azure Logo" class="mx-1"></b-link>
                    </template>
                    <template slot="projects" slot-scope="data">
                        <b-link>{{data.item.projects}}</b-link>
                    </template>
                    <template slot="clusters" slot-scope="data">
                        <b-link>{{data.item.clusters}}</b-link>
                    </template>
                    <template slot="actions" slot-scope="data">
                        <router-link :to="{ path: '/customer/customerdetail' }">
                            <b-button variant="secondary" size="sm" class="mr-1"><i class="fa fa-pencil"></i></b-button>
                        </router-link>
                        <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                    </template>
                    <template slot="inactive" slot-scope="data">
                        <label class="mx-1 mb-0 switch switch-label switch-success">
                            <input class="switch-input" type="checkbox" checked="">
                            <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                        </label>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
            
            <!-- modal : Customer 추가 -->
            <b-modal id="customer-add-modal" size="lg" scrollable title="Customer" centered>
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
                <template v-slot:modal-footer="{ ok, cancel }">
                    <b-button variant="secondary" @click="cancel()">취소</b-button>
                    <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
                </template>
            </b-modal>
            <!-- // modal : Customer 추가 -->
        </b-card>
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
            fields: [
                { key: 'number', label: 'No', tdClass: 'text-center' },
                { key: 'customer_name_en', label: 'Customer Name(EN)', tdClass: 'text-center' },
                { key: 'customer_name_kr', label: 'Customer Name(KR)', tdClass: 'text-center' },
                { key: 'cloud_account', label: 'Cloud Account', tdClass: 'text-center' },
                { key: 'projects', label: 'Projecs', tdClass: 'text-center' },
                { key: 'clusters', label: 'Clusters', tdClass: 'text-center' },
                { key: 'actions', label: 'Actions', tdClass: 'text-center' },
                { key: 'inactive', label: 'Activation', tdClass: 'text-center' }
            ],
            items: [
                { number: '1', customer_name_en: 'SKI', customer_name_kr: '이노베이션', cloud_account: '', projects: '6', clusters: '10', actions: '', inactive: '' },
                { number: '2', customer_name_en: 'SKN', customer_name_kr: '네트웍스', cloud_account: '', projects: '6', clusters: '10', actions: '', inactive: '' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 20, 30, 50, 100]
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        }
    }
}
</script>