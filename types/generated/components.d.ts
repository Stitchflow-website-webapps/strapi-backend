import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_about_heroes';
  info: {
    description: '';
    displayName: 'About Hero';
  };
  attributes: {
    AboutDescription: Schema.Attribute.Text;
    AboutHeading: Schema.Attribute.RichText & Schema.Attribute.Required;
    AboutHeroLogo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface AboutAboutPargraph extends Struct.ComponentSchema {
  collectionName: 'components_about_about_pargraphs';
  info: {
    description: '';
    displayName: 'About Pargraph';
  };
  attributes: {
    AboutParagraph: Schema.Attribute.RichText;
  };
}

export interface AboutAboutRoles extends Struct.ComponentSchema {
  collectionName: 'components_about_about_roles';
  info: {
    description: '';
    displayName: 'About Roles';
  };
  attributes: {
    RolesHeading: Schema.Attribute.String;
    RolesList: Schema.Attribute.Component<'about.roles-list', true>;
    Rolestittle: Schema.Attribute.String;
  };
}

export interface AboutAboutValues extends Struct.ComponentSchema {
  collectionName: 'components_about_about_values';
  info: {
    description: '';
    displayName: 'About Values';
  };
  attributes: {
    ValuesHeading: Schema.Attribute.String;
    ValuesList: Schema.Attribute.Component<'about.value-section', true>;
    ValuesTittle: Schema.Attribute.String;
  };
}

export interface AboutRolesList extends Struct.ComponentSchema {
  collectionName: 'components_about_roles_lists';
  info: {
    description: '';
    displayName: 'Roles List';
  };
  attributes: {
    RolesLink: Schema.Attribute.String;
    RolesListHeading: Schema.Attribute.String;
    RolesListImage: Schema.Attribute.Media<'images' | 'files'>;
    RolesListLocation: Schema.Attribute.String;
  };
}

export interface AboutValueSection extends Struct.ComponentSchema {
  collectionName: 'components_about_value_sections';
  info: {
    description: '';
    displayName: 'Value Section';
  };
  attributes: {
    ValuesImage: Schema.Attribute.Media<'images' | 'files'>;
    ValuesListDescription: Schema.Attribute.Text;
    ValuesListHeading: Schema.Attribute.String;
  };
}

export interface SharedCallScheduleButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_schedule_buttons';
  info: {
    description: '';
    displayName: 'Call Schedule Button';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedCallScheduleDemo extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_schedule_demos';
  info: {
    displayName: 'Call Schedule Demo';
  };
  attributes: {
    CallScheduleDescription: Schema.Attribute.Text;
    CallScheuleHeading: Schema.Attribute.String;
    ScheduleButton: Schema.Attribute.Component<
      'shared.call-schedule-button',
      false
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedScheduleButtonImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedule_button_images';
  info: {
    displayName: 'Schedule Button Images';
  };
  attributes: {
    ButtonImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-hero': AboutAboutHero;
      'about.about-pargraph': AboutAboutPargraph;
      'about.about-roles': AboutAboutRoles;
      'about.about-values': AboutAboutValues;
      'about.roles-list': AboutRolesList;
      'about.value-section': AboutValueSection;
      'shared.call-schedule-button': SharedCallScheduleButton;
      'shared.call-schedule-demo': SharedCallScheduleDemo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.schedule-button-images': SharedScheduleButtonImages;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
