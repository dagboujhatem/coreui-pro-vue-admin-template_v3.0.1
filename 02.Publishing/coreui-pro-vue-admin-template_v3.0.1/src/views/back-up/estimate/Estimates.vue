<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">
            Estimates <b-badge class="m-1" variant="danger">4</b-badge>
            <div class="float-right">
                <b-button variant="success" class="mr-2"><i class="icon-plus"></i> 견적서 추가</b-button>
                <b-button v-b-toggle.collapse1 variant="secondary"><i class="fa fa-filter"></i> 검색상세</b-button>
            </div>
        </h1>
        <div>
            <b-collapse id="collapse1">
                <b-card>
                    <b-form class="row">
                        <b-col lg="4">
                            <b-form-group>
                                <label for="estName">Name</label>
                                <b-form-input type="text" id="estName"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col lg="4">
                            <b-form-group>
                                <label for="contractCloud">계약 Cloud</label>
                                <b-form-select id="contractCloud" :plain="true" :options="['전체']" value="전체"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col lg="4">
                            <b-form-group>
                                <label for="estimateActivation">Activation</label>
                                <div>
                                    <b-form-radio-group id="estimateActivation" v-model="selected" name="estimateActivation" class="mt-1">
                                        <b-form-radio value="all">All</b-form-radio>
                                        <b-form-radio value="yes">Yes</b-form-radio>
                                        <b-form-radio value="no">No</b-form-radio>
                                    </b-form-radio-group>
                                </div>
                            </b-form-group>
                        </b-col>
                        <b-col lg="12">
                            <b-button variant="primary" block><i class="fa fa-search"></i> 검색</b-button>
                        </b-col>
                    </b-form>
                </b-card>
            </b-collapse>
        </div>
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
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'number' ? '4%' : '' }">
                    </template>
                    <template slot="name" slot-scope="data">
                        <router-link :to="{ path: '/estimate/estdetail' }">{{data.item.name}}</router-link>
                    </template>
                    <template slot="cloud" slot-scope="data">
                        <b-link><img :src="variantUrl(data.item.cloud)" width="22" height="22" :alt="variantAlt(data.item.cloud)" class="mx-1"></b-link>
                    </template>
                    <template slot="est_cloud" slot-scope="data">
                        <b-link><img src="img/img_logo_gcs.png" width="22" height="22" alt="Google Clould System Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_aws.png" width="22" alt="Amazon Web System Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_cloud.png" width="22" alt="Cloud Z Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_ibm.png" width="22" alt="IBM Logo" class="mx-1"></b-link>
                        <b-link><img src="img/img_logo_azure.png" width="22" alt="Azure Logo" class="mx-1"></b-link>
                    </template>
                    <template slot="project_count" slot-scope="data">
                        <b-link v-b-modal.project-info-modal>{{data.item.project_count}}</b-link>
                    </template>
                    <template slot="activate" slot-scope="data">
                        <label class="mx-1 mb-0 switch switch-label switch-success">
                            <input class="switch-input" type="checkbox" checked="">
                            <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                        </label>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
            
            <!-- modal : Project Count -->
            <b-modal id="project-info-modal" title="Project List" centered>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <table class="table table-sm table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">POG ZCP 프로젝트</td>
                            </tr>
                            <tr>
                                <td class="text-left">POG ZDB 프로젝트</td>
                            </tr>
                        </tbody>
                    </table>
                </VuePerfectScrollbar>
                <template v-slot:modal-footer="{ ok }">
                    <b-button variant="secondary" @click="ok()"><i class="icon-close"></i> 닫기</b-button>
                </template>
            </b-modal>
            <!-- // modal : Project Count -->
        </b-card>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    components: {
        VuePerfectScrollbar
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
                { key: 'name', label: 'Name' },
                { key: 'cloud', label: '계약 Cloud', tdClass: 'text-center' },
                { key: 'est_cloud', label: '견적 Clouds', tdClass: 'text-center' },
                { key: 'project_count', label: 'Project Count', tdClass: 'text-center' },
                { key: 'customer', label: 'Customer', tdClass: 'text-center' },
                { key: 'created_date', label: 'Estimate Sheet Created Date', tdClass: 'text-center' },
                { key: 'last_date', label: 'Estimate Sheet Last Update', tdClass: 'text-center' },
                { key: 'activate', label: 'Activate', tdClass: 'text-center' }
            ],
            items: [
                { number: '1', name: 'POG ZCP 견적', cloud: 'gcs', est_cloud: '', project_count: '2', customer: 'SK C&C', created_date: '2019-09-03 17:54:12', last_date: '2019-09-03 17:54:12', activate: '' },
                { number: '2', name: 'SK 네트웍스 견적', cloud: 'cloudz', est_cloud: '', project_count: '1', customer: 'SK 네트웍스', created_date: '2019-09-03 17:54:12', last_date: '2019-09-03 17:54:12', activate: '' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 20, 30, 50, 100],
            selected: 'yes'
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        },
        variantUrl (cloud) {
            let $variantUrl
            
            if(cloud == 'gcs') {
                $variantUrl = 'img/img_logo_gcs.png'
            }else if(cloud == 'aws') {
                $variantUrl = 'img/img_logo_aws.png'
            }else if(cloud == 'cloudz') {
                $variantUrl = 'img/img_logo_cloud.png'
            }else if(cloud == 'ibm') {
                $variantUrl = 'img/img_logo_ibm.png'
            }else if(cloud == 'azure') {
                $variantUrl = 'img/img_logo_azure.png'
            }
            return $variantUrl
        },
        variantAlt (cloud) {
            let $variantAlt
            
            if(cloud == 'gcs') {
                $variantAlt = 'Google Clould System Logo'
            }else if(cloud == 'aws') {
                $variantAlt = 'Amazon Web System Logo'
            }else if(cloud == 'cloudz') {
                $variantAlt = 'Cloud Z Logo'
            }else if(cloud == 'ibm') {
                $variantAlt = 'IBM Logo'
            }else if(cloud == 'azure') {
                $variantAlt = 'Azure Logo'
            }
            return $variantAlt
        }
    }
}
</script>