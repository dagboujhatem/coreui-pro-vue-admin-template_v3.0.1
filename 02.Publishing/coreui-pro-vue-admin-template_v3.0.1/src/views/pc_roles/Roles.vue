<template>
    <div class="animated fadeIn">
        <div class="mb-3">
            <b-form-group label-for="perPageSelect" class="mb-0">
                <b-form-select v-model="perPage" id="perPageSelect" :options="pageOptions" class="w-auto"></b-form-select>
                
                <div class="float-right">
                    <b-button variant="success" class="mr-2" v-b-modal.cluster-add-modal><i class="icon-plus"></i> Cluster 추가</b-button>
                </div>
            </b-form-group>
        </div>
        <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
            <div class="content-box-area">
                <b-table striped hover bordered :fields="cluster_fields" :items="cluster_items">
                    <template v-slot:table-colgroup="scope">
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'cluster_number' ? '4%' : '' }">
                    </template>
                    <template slot="cluster_activation" slot-scope="data">
                        <label class="mx-1 mb-0 switch switch-label switch-success">
                            <input class="switch-input" type="checkbox" checked="">
                            <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                        </label>
                    </template>
                    <template slot="cluster_actions" slot-scope="data">
                        <router-link :to="{ path: '/cluster/clusterdetail' }">
                            <b-button variant="secondary" size="sm" class="mr-1"><i class="fa fa-pencil"></i></b-button>
                        </router-link>
                        <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                    </template>
                </b-table>
            </div>
        </VuePerfectScrollbar>
        <div>
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" size="sm" class="my-0"></b-pagination>
        </div>

        <!-- modal : Cluster 추가 -->
        <b-modal id="cluster-add-modal" size="lg" title="Cluster" centered scrollable>
            <b-form>
                <b-form-group label="Cluster ID" label-for="clusterId" :label-cols="4" label-class="required">
                    <b-form-input type="text" id="clusterId" required placeholder="Cluster ID를 입력해주세요."></b-form-input>
                    <b-form-invalid-feedback id="clusterId">
                        Cluster ID를 입력해주세요.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Cluster Name" label-for="clusterName" :label-cols="4" label-class="required">
                    <b-form-input type="text" id="clusterName" required placeholder="Cluster Name을 입력해주세요."></b-form-input>
                    <b-form-invalid-feedback id="clusterName">
                        Cluster Name을 입력해주세요.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Environment Type" label-for="environmentType" :label-cols="4" label-class="required">
                    <b-form-select id="environmentType" :plain="true" :options="['선택', 'dev', 'qa', 'stage', 'prod', 'combination']" value="선택" required></b-form-select>
                    <b-form-invalid-feedback id="environmentType">
                        Environment Type을 선택해주세요.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Network Architecture Type" label-for="networkArchitectureType" :label-cols="4">
                    <b-form-select id="networkArchitectureType" :plain="true" :options="['선택', 'Private Only', 'Private + Public']" value="선택"></b-form-select>
                </b-form-group>
                <b-form-group label="SRE Integration" label-for="sreIntegration" :label-cols="4">
                    <b-form-radio-group id="sreIntegration" v-model="selected" name="sreIntegration" class="mt-1">
                        <b-form-radio value="yes">Yes</b-form-radio>
                        <b-form-radio value="no">No</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
                <b-form-group label="Multi Tenant" label-for="multiTenant" :label-cols="4">
                    <b-form-radio-group id="multiTenant" v-model="multiTenantSelected" name="multiTenant" class="mt-1">
                        <b-form-radio value="yes">Yes</b-form-radio>
                        <b-form-radio value="no">No</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
                <b-form-group label="Installation Account" label-for="installationAccount" :label-cols="4">
                    <b-form-input type="number" id="installationAccount"></b-form-input>
                </b-form-group>
                <b-form-group label="Installation Completed Date" label-for="installationCompletedDate" :label-cols="4">
                    <b-form-input type="date" id="installationCompletedDate"></b-form-input>
                </b-form-group>
                <b-form-group label="Installation Auditor" label-for="installationAuditor" :label-cols="4">
                    <b-form-input type="text" id="installationAuditor"></b-form-input>
                </b-form-group>
                <b-form-group label="Cloud Service Provider" label-for="cloudServiceProvider" :label-cols="4">
                    <b-form-select id="cloudServiceProvider" :plain="true" :options="['선택', 'IBM', 'AWS', 'Azure', 'GCP']" value="선택"></b-form-select>
                </b-form-group>
                <b-form-group label="Managed Kubernetes Version" label-for="managedKubernetesVersion" :label-cols="4">
                    <b-form-input type="number" id="managedKubernetesVersion"></b-form-input>
                </b-form-group>
            </b-form>
            <template v-slot:modal-footer="{ ok, cancel }">
                <b-button variant="secondary" @click="cancel()">취소</b-button>
                <b-button variant="primary" @click="ok()"><i class="icon-check"></i> 저장</b-button>
            </template>
        </b-modal>
        <!-- // modal : Cluster 추가 -->
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
            cluster_fields: [
                { key: 'cluster_number', label: 'No', tdClass: 'text-center' },
                { key: 'cluster_id', label: 'Cluset ID', tdClass: 'text-center' },
                { key: 'cluster_name', label: 'Cluster Name' },
                { key: 'cluster_environment', label: 'Environment', tdClass: 'text-center' },
                { key: 'cluster_arch', label: 'n/w arch', tdClass: 'text-center' },
                { key: 'cluster_sre', label: 'SRE 연동', tdClass: 'text-center' },
                { key: 'cluster_k8s', label: 'k8s version', tdClass: 'text-center' },
                { key: 'cluster_created_date', label: 'Created date', tdClass: 'text-center' },
                { key: 'cluster_activation', label: 'Activation', tdClass: 'text-center' },
                { key: 'cluster_actions', label: 'Actions', tdClass: 'text-center' }
            ],
            cluster_items: [
                { cluster_number: '1', cluster_id: '25fce58d262a45379589d86a16d09f02', cluster_name: 'cloudzcp-ski-dev', cluster_environment: 'Prod', cluster_arch: 'Private', cluster_sre: 'Y', cluster_k8s: '1.13.4', cluster_created_date: '2019-10-28', cluster_activation: '', cluster_actions: '' },
                { cluster_number: '2', cluster_id: '25fce58d262a45379589d86a16d09f02', cluster_name: 'cloudzcp-ski-dev', cluster_environment: 'Dev', cluster_arch: 'Public + Private', cluster_sre: 'Y', cluster_k8s: '1.13.4', cluster_created_date: '2019-10-28', cluster_activation: '', cluster_actions: '' }
            ],
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
            selected: 'yes',
            multiTenantSelected: 'yes',
            activationSelected: 'all',
            sreConnectSelected: 'all',
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