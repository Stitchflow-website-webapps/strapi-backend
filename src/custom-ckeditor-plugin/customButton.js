function CustomButtonPlugin(editor) {
    editor.ui.componentFactory.add('customButton', locale => {
        const view = new editor.ui.button.ButtonView(locale);

        view.set({
            label: 'Custom Button',
            tooltip: true
        });

        view.on('execute', () => {
            editor.model.change(writer => {
                const insertText = writer.createText('This is a custom button action!');
                editor.model.insertContent(insertText);
            });
        });

        return view;
    });
}

export default CustomButtonPlugin;