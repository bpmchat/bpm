<template>
    <b-modal class="scripts-list" ref="modal" size="lg" @hidden="onHidden" title="Scripts" hide-footer>
        <div class="form-group">
            <div class="d-flex justify-content-between">
                <input v-model="filter" class="form-control  col-sm-3" placeholder="Search..." @keyup="fetch">
                <button type="button" class="btn btn-secondary" @click="onCreate()"><i class="fas fa-plus fa-md"></i> Create</button>
            </div>
            <div class="data-table">
                <vuetable :dataManager="dataManager" :sortOrder="sortOrder" :css="css" :api-mode="false"
                          @vuetable:pagination-data="onPaginationData" :fields="fields" :data="data" data-path="data"
                          pagination-path="meta">
                    <template slot="actions" slot-scope="props">
                        <div class="actions">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="popout">
                                <b-btn variant="action" @click="onEdit(props.rowData, props.rowIndex)"
                                       v-b-tooltip.hover title="Edit"><i class="fas fa-edit"></i></b-btn>
                                <b-btn variant="action" @click="onDelete(props.rowData, props.rowIndex)"
                                       v-b-tooltip.hover title="Remove"><i class="fas fa-trash-alt"></i></b-btn>
                            </div>
                        </div>
                    </template>
                </vuetable>
                <pagination single="Script" plural="Scripts" :perPageSelectEnabled="true" @changePerPage="changePerPage"
                            @vuetable-pagination:change-page="onPageChange" ref="pagination"></pagination>
            </div>
        </div>

    </b-modal>
</template>

<script>
    import dataTableMixin from "../../../components/common/mixins/datatable";
    import Pagination from "../../../components/common/Pagination";

    export default {
        components: {Pagination},
        mixins: [dataTableMixin],
        props: ['processUid'],
        data() {
            return {
                items: [],
                filter: '',
                orderBy: "title",

                sortOrder: [
                    {
                        field: "title",
                        sortField: "title",
                        direction: "asc"
                    }
                ],
                fields: [
                    {
                        title: "Title",
                        name: "title",
                        sortField: "title"
                    },
                    {
                        title: "Description",
                        name: "description",
                        sortField: "description"
                    },
                    {
                        title: "Type",
                        name: "type",
                        sortField: "type"
                    },
                    {
                        name: "__slot:actions",
                        title: ""
                    }
                ],
                data: []
            };
        },
        methods: {
            onCreate() {
                this.$parent.openAddDialog('scripts');
            },
            onHidden() {
                this.$emit('hidden')
            },
            onCancel() {
                this.$refs.modal.hide()
            },
            onEdit(data, index) {
                window.location.href =
                "/processes/" + this.processUid + "/script/" + data.uid;
            },
            onDelete(data, index) {
                let that = this;
                ProcessMaker.confirmModal('Caution!', '<b>Are you sure to delete the Script </b>' + data.title + '?', '', function () {
                    ProcessMaker.apiClient
                        .delete('process/' + that.processUid + '/script/' + data.uid)
                        .then(response => {
                            ProcessMaker.alert('Script successfully eliminated', 'success');
                            that.fetch();
                        })
                });
            },
            fetch() {
                this.loading = true;
                const CancelToken = ProcessMaker.apiClient.CancelToken;
                ProcessMaker.apiClient
                    .get('process/' +
                        this.processUid +
                        '/scripts?page=' +
                        this.page +
                        '&per_page=' +
                        this.perPage +
                        '&filter=' +
                        this.filter +
                        '&order_by=' +
                        this.orderBy +
                        '&order_direction=' +
                        this.orderDirection,
                        {
                            cancelToken: new CancelToken(c => {
                                this.cancelToken = c;
                            })
                        }
                    )
                    .then(response => {
                        this.data = this.transform(response.data);
                    })
            }
        },
        mounted() {
            this.$refs.modal.show();
        }
    };

</script>
