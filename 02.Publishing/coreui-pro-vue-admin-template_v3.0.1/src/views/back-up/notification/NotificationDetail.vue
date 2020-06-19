<template>
    <div class="animated fadeIn">
        <h1 class="display-tit mb-3">Notification Details</h1>
        <b-tabs class="detail-cnt">
            <b-tab active>
                <template slot="title">
                    <i class="icons cui-inbox mr-1"></i> Message
                </template>
                <b-form>
                    <b-form-group label="Type" label-for="channelType" :label-cols="3">
                        <b-form-select id="channelType" :plain="true" :options="['선택', 'Start', 'End']" value="선택"></b-form-select>
                    </b-form-group>
                    <b-form-group label="Title" label-for="channelTitle" :label-cols="3">
                        <b-form-input type="text" id="channelTitle" placeholder="Title을 입력해주세요."></b-form-input>
                    </b-form-group>
                    <b-form-group label="Message" label-for="channelMessage" :label-cols="3">
                        <b-form-textarea rows="10" id="channelMessage" placeholder="Message를 입력해주세요."></b-form-textarea>
                    </b-form-group>
                </b-form>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/notification/' }">
                        <b-button variant="warning"><i class="icon-list"></i> 목록</b-button>
                    </router-link>
                </div>
            </b-tab>
            <b-tab>
                <template slot="title">
                    <i class="icons cui-tablet mr-1"></i> Channels
                </template>
                <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
                    <b-table striped hover small bordered :fields="channel_fields" :items="channel_items">
                        <template v-slot:table-colgroup="scope">
                            <col v-for="field in scope.fields" :key="field.key" :style="{ width: field.key === 'channel_number' ? '5%' : '' }">
                        </template>
                        <template slot="channel_result" slot-scope="data">
                            <b-badge pill :variant="variantResult(data.item.channel_result)">{{data.item.channel_result}}</b-badge>
                        </template>
                        <template slot="channel_resend" slot-scope="data">
                            <template v-if="data.item.channel_result === 'failure'">
                                <b-button variant="primary" size="sm"><i class="fa fa-envelope-o"></i> {{data.item.channel_resend}}</b-button>
                            </template>
                        </template>
                        <template slot="channel_actions" slot-scope="data">
                            <b-button variant="danger" size="sm"><i class="fa fa-close"></i></b-button>
                        </template>
                    </b-table>
                </VuePerfectScrollbar>
                <div class="tab-bottom-btn text-center">
                    <router-link :to="{ path: '/notification/' }">
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
            channel_fields: [
                { key: 'channel_number', label: 'No', tdClass: 'text-center' },
                { key: 'channel_name', label: 'Channel Name' },
                { key: 'channel_id', label: 'Channel ID', tdClass: 'text-center' },
                { key: 'channel_ts_id', label: 'TS ID', tdClass: 'text-center' },
                { key: 'channel_result', label: 'Result', tdClass: 'text-center' },
                { key: 'channel_error', label: 'Error Message' },
                { key: 'channel_resend', label: 'Re-Send', tdClass: 'text-center' },
                { key: 'channel_date', label: 'Created Date', tdClass: 'text-center' },
                { key: 'channel_actions', label: 'Actions', tdClass: 'text-center' }
            ],
            channel_items: [
                { channel_number: '1', channel_name: 'management-portal', channel_id: 'CLR64CN10', channel_ts_id: '1580970872.001100', channel_result: 'success', channel_error: '', channel_resend: '', channel_date: '2020-02-10 14:20:34', channel_actions: '' },
                { channel_number: '2', channel_name: 'zcp-order', channel_id: '', channel_ts_id: '', channel_result: 'failure', channel_error: 'channel_not_found', channel_resend: '재전송', channel_date: '2020-02-10 14:20:34', channel_actions: '' },
                { channel_number: '3', channel_name: 'zcp-bp-member', channel_id: 'CQTKL5ALE', channel_ts_id: '1580970872.001101', channel_result: 'success', channel_error: '', channel_resend: '', channel_date: '2020-02-10 14:20:34', channel_actions: '' },
                { channel_number: '4', channel_name: 'zcp-order', channel_id: '', channel_ts_id: '', channel_result: 'failure', channel_error: 'channel_not_found', channel_resend: '재전송', channel_date: '2020-02-10 14:20:34', channel_actions: '' }
            ]
        }
    },
    methods: {
        scrollHandle (evt) {
            // console.log(evt)
        },
        variantResult (channel_result) {
            let $variantResult
            
            if(channel_result == 'success') {
                $variantResult = 'success'
            }else if(channel_result == 'failure') {
                $variantResult = 'danger'
            }
            return $variantResult
        }
    }
}
</script>