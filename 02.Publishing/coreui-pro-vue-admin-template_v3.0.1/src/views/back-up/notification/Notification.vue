<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">
            Notifications <b-badge class="m-1" variant="danger">4</b-badge>
            <div class="float-right">
                <b-button variant="success" class="mr-2" v-b-modal.send-message-modal><i class="icon-plus"></i> Send Notification Message</b-button>
            </div>
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
                        <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'number' ? '4%' : '' }">
                    </template>
                    <template slot="title" slot-scope="data">
                        <router-link :to="{ path: '/notification/notificationdetail' }">{{data.item.title}}</router-link>
                    </template>
                    <template slot="channels" slot-scope="data">
                        <router-link :to="{ path: '/notification/notificationdetail' }">{{data.item.channels}}</router-link>
                    </template>
                    <template slot="actions" slot-scope="data">
                        <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                    </template>
                </b-table>
            </VuePerfectScrollbar>
            
            <!-- modal : Send Notification Message -->
            <b-modal id="send-message-modal" title="Send Notification Message" size="xl" scrollable centered>
                <b-form>
                    <b-form-group label="Channels" label-for="channelName" label-class="required">
                        <b-form-input type="text" id="channelName" required placeholder="Customer, Project Name을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="channelName">
                            Customer, Project Name을 입력하세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-form>
                <b-form-group>
                    <b-button variant="warning" size="sm" class="float-right" v-b-modal.cloud-service-accounts-add-modal><i class="icon-check"></i> 전체선택 / 해제</b-button>
                </b-form-group>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettingsY" @ps-scroll-y="scrollHandle" style="max-height: 300px;">
                    <b-table striped hover small bordered :fields="channel_fields" :items="channel_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'channel_check' ? '10%' : '' }">
                        </template>
                        <template slot="channel_check" slot-scope="data">
                            <label class="mx-1 mb-0 switch switch-label switch-success">
                                <input type="checkbox" class="switch-input" checked>
                                <span class="switch-slider" data-checked="✓" data-unchecked="✕"></span>
                            </label>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <hr>
                <b-form>
                    <b-form-group label="Type" label-for="channelType" label-class="required">
                        <b-form-select id="channelType" :plain="true" :options="['선택', 'Start', 'End']" value="선택" required></b-form-select>
                        <b-form-invalid-feedback id="channelType">
                            Type을 선택해주세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Title" label-for="channelTitle" label-class="required">
                        <b-form-input type="text" id="channelTitle" required placeholder="Title을 입력해주세요."></b-form-input>
                        <b-form-invalid-feedback id="channelTitle">
                            Title을 입력하세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Message" label-for="channelMessage" label-class="required">
                        <b-form-textarea rows="10" id="channelMessage" required placeholder="Message를 입력해주세요."></b-form-textarea>
                        <b-form-invalid-feedback id="channelMessage">
                            Message를 입력하세요.
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-form>
                <template v-slot:modal-footer="{ ok, cancel }">
                    <b-button variant="secondary" @click="cancel()">취소</b-button>
                    <b-button variant="primary" @click="ok()"><i class="fa fa-envelope-o"></i> 전송</b-button>
                </template>
            </b-modal>
            <!-- // modal : Send Notification Message -->
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
        },
        psSettingsY: () => {
            return {
                maxScrollbarLength: 200,
                minScrollbarLength: 40,
                suppressScrollX: true,
                wheelPropagation: true,
                useBothWheelAxes: true
            }
        }
    },
    data()  {
        return {
            fields: [
                { key: 'number', label: 'No', tdClass: 'text-center' },
                { key: 'type', label: 'Notification Type', tdClass: 'text-center' },
                { key: 'title', label: 'Title' },
                { key: 'channels', label: 'Channels', tdClass: 'text-right' },
                { key: 'succeed', label: 'Succeed', tdClass: 'text-right' },
                { key: 'failed', label: 'Failed', tdClass: 'text-right' },
                { key: 'created', label: 'Created', tdClass: 'text-center' },
                { key: 'created_date', label: 'Created Date', tdClass: 'text-center' },
                { key: 'actions', label: 'Actions', tdClass: 'text-center' }
            ],
            items: [
                { number: '1', type: 'Start', title: 'Cloud Z CP 작업 시작 공지 메세지', channels: '14', succeed: '12', failed: '2', created: 'cloudzcp-admin', created_date: '2019-09-03 17:54:12', actions: '' },
                { number: '2', type: 'End', title: 'Cloud Z CP 작업 완료 공지 메세지', channels: '14', succeed: '14', failed: '0', created: 'cloudzcp-admin', created_date: '2019-09-03 17:54:12', actions: '' }
            ],
            channel_fields: [
                { key: 'channel_customer', label: 'Customer' },
                { key: 'channel_project_name', label: 'Project Name' },
                { key: 'channel_name', label: 'Channel Name' },
                { key: 'channel_check', label: 'Actions', tdClass: 'text-center' }
            ],
            channel_items: [
                { channel_customer: 'SK C&C', channel_project_name: '사내 시스템 통합 AMS', channel_name: 'management-portal', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' },
                { channel_customer: 'SK이노베이션(주)', channel_project_name: 'SKE - 쿠폰관리 시스템', channel_name: 'general', channel_check: '' }
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