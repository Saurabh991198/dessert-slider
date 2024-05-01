import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";


const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },

    // {
    //     path: "/app",
    //     name: "app",
    //     redirect: "/app",
    //     children: [
    //         // ware house
    //         {
    //             path: "warehouse/dash-board",
    //             name: "dash-board",
    //             component: Home,
    //         },

    //         {
    //             path: "warehouse/product",
    //             name: "product",
    //             component: Product,
    //         },
    //         {
    //             path: "warehouse/order",
    //             name: "order",
    //             component: Order,
    //         },

    //         {
    //             path: "warehouse/product-view/:id/:tabName",
    //             name: "productview",
    //             component: Productview,
    //         },
    //         {
    //             path: "warehouse/product/new",
    //             name: "productForm",
    //             component: ProductForm,
    //         },
    //         {
    //             path: "warehouse/product/:id/edit",
    //             name: "productFormEdit",
    //             component: ProductForm,
    //         },
    //         {
    //             path: "warehouse/inbound/:tabName",
    //             name: "inbound",
    //             component: Inbound,
    //         },
    //         {
    //             path: "warehouse/inbound/new-pda",
    //             name: "SubmitPDA",
    //             component: SubmitPDA,
    //         },
    //         {
    //             path: "warehouse/inbound/viewPDA/:id",
    //             name: "viewpda",
    //             component: ViewPDA,
    //         },
    //         {
    //             path: "warehouse/configuration/:tabName",
    //             name: "wareconfiguration",
    //             component: WareConfiguration,
    //         },

    //         // crm
    //         {
    //             path: "crm/client",
    //             name: "/app/crm/client",
    //             component: Clients,
    //         },
    //         {
    //             path: "crm/invoice",
    //             name: "/app/crm/invoice",
    //             component: Invoice,
    //         },
    //         {
    //             path: "crm/supplier",
    //             name: "/app/crm/supplier",
    //             component: Supplier,
    //         },
    //         {
    //             path: "crm/coming-soon",
    //             name: "Coming soon",
    //             component: Comingsoon,
    //         },
    //         {
    //             path: "crm/client-manage/:id/:tabName",
    //             name: "manage",
    //             component: Manage,
    //         },
    //         {
    //             path: "crm/supplier/12345/:tabName",
    //             name: "supplier-manage",
    //             component: SupplierManage,
    //         },
    //         {
    //             path: "crm/supplier/:id/:tabName",
    //             name: "supplier-manage",
    //             component: SupplierManage,
    //         },
    //         {
    //             path: "crm/estimates",
    //             name: "/app/crm/estimates",
    //             component: Estimates,
    //         },
    //         {
    //             path: "crm/estimates/view-estimates/:id",
    //             name: "view-estimate",
    //             component: ViewEstimate,
    //         },
    //         {
    //             path: "crm/jobs",
    //             name: "crm-Jobs",
    //             component: Jobs,
    //         },
    //         {
    //             path: "crm/test",
    //             name: "crm-test",
    //             component: Comobox,
    //         },
    //         {
    //             path: "crm/jobs/view-jobs/:id",
    //             name: "view-job",
    //             component: ViewJobs,
    //         },

    //         {
    //             path: "crm/configuration/:tabName/:subTabName",
    //             name: "configuration",
    //             component: Configuration,
    //         },
    //         {
    //             path: "crm/configuration/company/user/manage-role",
    //             name: "UserManageRole",
    //             component: UserManageRoles,
    //         },
    //         {
    //             path: "crm/configuration/system_template/new_estimate/new",
    //             name: "newTemplate",
    //             component: NewTemplate,
    //         },
    //         {
    //             path: "crm/configuration/system_template/save_estimate/:id",
    //             name: "editTemplate",
    //             component: NewTemplate,
    //         },
    //     ],
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;