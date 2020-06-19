<template>
    <div>
        <CCard>
            <CCardBody>
                <CRow class="form-group mb-0">
                    <CCol sm="12">
                        <CInput class="mb-0" placeholder="Realm Name">
                            <template #prepend-content>
                                <CIcon class="mr-2" name="cil-center-focus"/>
                                <label class="col-form-label p-0">Realm Name</label>
                            </template>
                            <template #append>
                                <CButton color="primary">
                                    <CIcon class="mr-1" name="cil-asterisk-circle"/> Create
                                </CButton>
                            </template>
                        </CInput>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
        <CScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-x="scrollHandle">
            <CDataTable 
                hover 
                striped
                :fields="fields" 
                :items="items">
                <template #Name="data">
                    <td>
                        <CLink to="/pl_realms/pl_realms_details">{{ data.item.Name }}</CLink>
                    </td>
                </template>
                <template #Active="data">
                    <td class="text-center">
                        <label class="c-switch c-switch-label c-switch-success mx-1 mb-0">
                            <input class="c-switch-input" type="checkbox" checked="">
                            <span class="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
                        </label>
                    </td>
                </template>
                <template #Actions="data">
                    <td class="text-center">
                        <CButton color="danger" size="sm">
                            <CIcon class="m-0" name="cil-x-circle"/><span class="icon-text ml-1">Delete</span>
                        </CButton>
                    </td>
                </template>
            </CDataTable>
        </CScrollbar>
    </div>
</template>

<script>
    import CScrollbar from '@coreui/vue/src/components/scrollbar/CScrollbar'
    
    const fields = [
        { key: 'Name', _style: 'width: 30%' },
        { key: 'Users', _style: 'width: 20%; text-align: center;' },
        { key: 'Roles', _style: 'width: 20%; text-align: center;' },
        { key: 'Active', _style: 'width: 15%; text-align: center;' },
        { key: 'Actions', _style: 'width: 15%; text-align: center;' }
    ]
    const items = [
        { 
            Name: 'ske', 
            Users: '2', 
            Roles: '3', 
            Active: '', 
            Actions: '', 
            _cellClasses: { 
                Users: 'text-center', 
                Roles: 'text-center'
            } 
        },
        { 
            Name: 'ski', 
            Users: '2', 
            Roles: '3', 
            Active: '', 
            Actions: '', 
            _cellClasses: { 
                Users: 'text-center', 
                Roles: 'text-center'
            } 
        }
    ]
    
    export default {
        components: {
            CScrollbar
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
        data () {
            return {
                items: items.map((item, id) => { return {...item, id} }),
                fields
            }
        },
        methods: {
            scrollHandle(evt) {
                console.log(evt)
            }
        }
    }
</script>