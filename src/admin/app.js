// import { CustomEditOptionPlugin } from "./ckeditor-plugins/custom-edit-option.js";

// export default {
//     config: {
//         locales: ["en"],
//         ckeditor: {
//             plugin: {
//                 addPlugin: [CustomEditOptionPlugin],
//             },
//         },
//     },
//     bootstrap(app) {
//         console.log("Custom CKEditor Plugin Loaded in Strapi v5");
//     },
// };

export default {
    config: {
        locales: ["en"],
    },
    bootstrap(app) {
        console.log("Admin panel is loaded");
    },
};  