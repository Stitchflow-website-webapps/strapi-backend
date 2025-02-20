// import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

// export default class CustomWidget extends Plugin {
//     init() {
//         const editor = this.editor;

//         editor.ui.componentFactory.add('customWidget', locale => {
//             const button = new ButtonView(locale);

//             button.set({
//                 label: 'Custom Widget',
//                 withText: true,
//             });

//             button.on('execute', () => {
//                 editor.model.change(writer => {
//                     const insertText = writer.createText('This is a custom widget!');
//                     editor.model.insertContent(insertText);
//                 });
//             });

//             return button;
//         });
//     }
// }