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

export interface BlogsBlogsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blogs_blogs_hero_sections';
  info: {
    description: '';
    displayName: 'Blogs Hero Section';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images' | 'files'>;
    heading: Schema.Attribute.String;
    postedDate: Schema.Attribute.Date;
    urlSlug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogsContentSection extends Struct.ComponentSchema {
  collectionName: 'components_blogs_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    contentTextOrImage: Schema.Attribute.Component<'blogs.text-editor', true>;
    heading: Schema.Attribute.Component<'blogs.text-box', true>;
  };
}

export interface BlogsTextBox extends Struct.ComponentSchema {
  collectionName: 'components_blogs_text_boxes';
  info: {
    description: '';
    displayName: 'Text Box';
  };
  attributes: {
    heading: Schema.Attribute.RichText;
  };
}

export interface BlogsTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_blogs_text_editors';
  info: {
    displayName: 'Text Editor';
  };
  attributes: {
    textOrImage: Schema.Attribute.RichText;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
  };
  attributes: {
    FooterPageLink: Schema.Attribute.String;
    FooterPageText: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    FooterSocialMediaImage: Schema.Attribute.Media<'images' | 'files'>;
    FooterSocialMediaLink: Schema.Attribute.String;
  };
}

export interface HeaderHeaderCompany extends Struct.ComponentSchema {
  collectionName: 'components_header_header_companies';
  info: {
    displayName: 'HeaderCompany';
  };
  attributes: {
    HeaderCompanyPageText: Schema.Attribute.String;
  };
}

export interface HeaderHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_header_links';
  info: {
    displayName: 'HeaderLinks';
  };
  attributes: {
    HeaderPageLink: Schema.Attribute.String;
    HeaderPageText: Schema.Attribute.String;
  };
}

export interface HeaderHeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_header_logos';
  info: {
    description: '';
    displayName: 'HeaderLogo';
  };
  attributes: {
    HeaderLogoIcon: Schema.Attribute.Media<'images' | 'files'>;
    HeaderLogoImage: Schema.Attribute.Media<'images' | 'files'>;
    HeaderLogoLink: Schema.Attribute.String;
  };
}

export interface HomeHomeActionSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_action_secs';
  info: {
    displayName: 'HomeActionSec';
  };
  attributes: {
    ActionHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeAfterHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_after_heroes';
  info: {
    displayName: 'HomeAfterHero';
  };
  attributes: {
    AfterHeroTitle: Schema.Attribute.Text;
    AfterHeroTurningImg: Schema.Attribute.Media<'images' | 'files'>;
    CambridgeImage: Schema.Attribute.Media<'images' | 'files'>;
    RulaImage: Schema.Attribute.Media<'images' | 'files'>;
    SpotImage: Schema.Attribute.Media<'images' | 'files'>;
    StradaImage: Schema.Attribute.Media<'images' | 'files'>;
    UteesImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomeBenifitHiddenSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_benifit_hidden_secs';
  info: {
    displayName: 'HomeBenifitHiddenSec';
  };
  attributes: {
    HiddenContent1: Schema.Attribute.Text;
    HiddenContent2: Schema.Attribute.Text;
    HiddenIcon: Schema.Attribute.Media<'images' | 'files'>;
    HiddenTitle: Schema.Attribute.Text;
  };
}

export interface HomeHomeBenifitSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_benifit_secs';
  info: {
    displayName: 'HomeBenifitSec';
  };
  attributes: {
    BenifitSecHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_hero_images';
  info: {
    displayName: 'HomeHeroImage';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<'images' | 'files'>;
    HeroImageLink: Schema.Attribute.String;
    HeroMobileImage: Schema.Attribute.Media<'images' | 'files'>;
    HeroPlayIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomeManualSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_manual_secs';
  info: {
    displayName: 'HomeManualSec';
  };
  attributes: {
    ManualOktaImage: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecHeading: Schema.Attribute.Text;
    ManualSecKandjiImg: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecOkta2Img: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecTitle1: Schema.Attribute.Text;
    ManualSecTitle2: Schema.Attribute.Text;
    ManualSecTitle3: Schema.Attribute.Text;
    ManualSecZoomImg: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pages';
  info: {
    description: '';
    displayName: 'HomePage';
  };
  attributes: {
    HeroImageSection: Schema.Attribute.Component<'home.home-hero-image', false>;
    HeroSectionHeading: Schema.Attribute.Text;
    HeroSectionPara1: Schema.Attribute.Blocks;
    HeroSectionPara2: Schema.Attribute.Blocks;
  };
}

export interface HomeHomePreciseSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_precise_secs';
  info: {
    displayName: 'HomePreciseSec';
  };
  attributes: {
    PreciseHeading: Schema.Attribute.Text;
    PreciseImage: Schema.Attribute.Media<'images' | 'files'>;
    PreciseTitle1: Schema.Attribute.Text;
    PreciseTitle2: Schema.Attribute.Text;
    PreciseTitle3: Schema.Attribute.Text;
  };
}

export interface HomeHomePricingSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pricing_secs';
  info: {
    displayName: 'HomePricingSec';
  };
  attributes: {
    PricingAppImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingBillableImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingExecutiveImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeStichWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_home_stich_works';
  info: {
    description: '';
    displayName: 'HomeStichWorks';
  };
  attributes: {
    StichWorkImage: Schema.Attribute.Media<'images' | 'files'>;
    StichWorkPara1: Schema.Attribute.Blocks;
    StichWorkPara2: Schema.Attribute.Blocks;
    StitchWorkHeading: Schema.Attribute.Text;
  };
}

export interface IntegrationCategory extends Struct.ComponentSchema {
  collectionName: 'components_integration_categories';
  info: {
    description: '';
    displayName: 'Category';
  };
  attributes: {
    CategoryList: Schema.Attribute.String;
  };
}

export interface IntegrationConnectorImage extends Struct.ComponentSchema {
  collectionName: 'components_integration_connector_images';
  info: {
    description: '';
    displayName: 'ConnectorImage';
  };
  attributes: {
    CategoryType: Schema.Attribute.Enumeration<
      [
        'Networking',
        'Entitlements',
        'Productivity',
        'Devices',
        'Identity',
        'Ticketing',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Networking'>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageText: Schema.Attribute.String;
    ImageTitle: Schema.Attribute.String;
  };
}

export interface IntegrationIntegration extends Struct.ComponentSchema {
  collectionName: 'components_integration_integrations';
  info: {
    description: '';
    displayName: 'Integration';
  };
  attributes: {
    BannerImage: Schema.Attribute.Media<'images' | 'files'>;
    BannerImage2: Schema.Attribute.Media<'images' | 'files'>;
    Description: Schema.Attribute.Text;
    HeroHeading: Schema.Attribute.Text;
  };
}

export interface PlatformFeatureSec extends Struct.ComponentSchema {
  collectionName: 'components_platform_feature_secs';
  info: {
    description: '';
    displayName: 'FeatureSec';
  };
  attributes: {
    FeatureHeading: Schema.Attribute.String;
    FeatureTitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface PlatformPlatform extends Struct.ComponentSchema {
  collectionName: 'components_platform_platforms';
  info: {
    displayName: 'Platform';
  };
  attributes: {
    HeroDescription: Schema.Attribute.Text;
    HeroTitle: Schema.Attribute.String;
  };
}

export interface ResourceBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_resource_blog_sections';
  info: {
    displayName: 'BlogSection';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<['Blog', 'Case Study']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Blog'>;
    SubCategory: Schema.Attribute.Enumeration<
      ['Product', 'Company', 'SaaS Management']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Product'>;
  };
}

export interface ResourceResource extends Struct.ComponentSchema {
  collectionName: 'components_resource_resources';
  info: {
    description: '';
    displayName: 'Resource';
  };
  attributes: {
    ContentSec: Schema.Attribute.Blocks;
    ResourceHeading: Schema.Attribute.Text;
  };
}

export interface ResourceResourceAfterHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_resource_resource_after_hero_secs';
  info: {
    description: '';
    displayName: 'ResourceAfterHeroSec';
  };
  attributes: {
    BlogLink: Schema.Attribute.String;
    CaseStudyLink: Schema.Attribute.String;
    CaseStudyText: Schema.Attribute.String;
    ResourceBlogIcon: Schema.Attribute.Media<'images' | 'files'>;
    ResourceBlogText: Schema.Attribute.String;
    ResourceCaseStudyIcon: Schema.Attribute.Media<'images' | 'files'>;
    ResourceCategory: Schema.Attribute.Enumeration<['Blog', 'CaseStudies']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Blog'>;
  };
}

export interface SecuritySecurity extends Struct.ComponentSchema {
  collectionName: 'components_security_securities';
  info: {
    displayName: 'Security';
  };
  attributes: {
    CCPAImage: Schema.Attribute.Media<'images' | 'files'>;
    GDPRImage: Schema.Attribute.Media<'images' | 'files'>;
    SecurityDescription: Schema.Attribute.String;
    SecurityHeading: Schema.Attribute.String;
    SOCImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SecuritySecurityAfterHeroSec extends Struct.ComponentSchema {
  collectionName: 'components_security_security_after_hero_secs';
  info: {
    displayName: 'SecurityAfterHeroSec';
  };
  attributes: {
    CardTitle: Schema.Attribute.String;
    Content1: Schema.Attribute.String;
    Content2: Schema.Attribute.String;
    Content3: Schema.Attribute.String;
    TickIcon: Schema.Attribute.Media<'files' | 'images'>;
    TickIcon2: Schema.Attribute.Media<'images' | 'files'>;
    TickIcon3: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SecuritySecurityFeatureSec extends Struct.ComponentSchema {
  collectionName: 'components_security_security_feature_secs';
  info: {
    description: '';
    displayName: 'SecurityFeatureSec';
  };
  attributes: {
    Dot: Schema.Attribute.String;
    FeatureSecHeading: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
    LinkText: Schema.Attribute.String;
  };
}

export interface SecuritySecuritySubProcessor extends Struct.ComponentSchema {
  collectionName: 'components_security_security_sub_processors';
  info: {
    displayName: 'SecuritySubProcessor';
  };
  attributes: {
    Content1: Schema.Attribute.String;
    Content2: Schema.Attribute.String;
    Content3: Schema.Attribute.String;
    Content4: Schema.Attribute.String;
    Content5: Schema.Attribute.String;
    ProcessorHeading: Schema.Attribute.String;
    TickIcon1: Schema.Attribute.Media<'images' | 'files'>;
    TickIcon2: Schema.Attribute.Media<'images' | 'files'>;
    TickIcon3: Schema.Attribute.Media<'images' | 'files'>;
    TickIcon4: Schema.Attribute.Media<'images' | 'files'>;
    TickIcon5: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SecurityWhitePaperSec extends Struct.ComponentSchema {
  collectionName: 'components_security_white_paper_secs';
  info: {
    description: '';
    displayName: 'WhitePaperSec';
  };
  attributes: {
    ArrowIcon: Schema.Attribute.Media<'images' | 'files'>;
    DownloadLink: Schema.Attribute.String;
    DownloadTitle: Schema.Attribute.String;
    WhitePaperHeading: Schema.Attribute.String;
  };
}

export interface SharedBenifitCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_benifit_cards';
  info: {
    description: '';
    displayName: 'HomeBenifitCard';
  };
  attributes: {
    CardContent1: Schema.Attribute.Text;
    CardContent2: Schema.Attribute.Text;
    CardContent3: Schema.Attribute.Text;
    CardTitle: Schema.Attribute.Text;
    IconImage: Schema.Attribute.Media<'images' | 'files'>;
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
    description: '';
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

export interface SharedHomeActionCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_action_cards';
  info: {
    displayName: 'HomeActionCard';
  };
  attributes: {
    ActionContent: Schema.Attribute.Blocks;
    ActionIcon: Schema.Attribute.Media<'images' | 'files'>;
    ActionTitle: Schema.Attribute.Text;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    LogoImage: Schema.Attribute.Media<'images' | 'files'>;
    LogoLink: Schema.Attribute.String;
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

export interface SharedPlatFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_plat_feature_cards';
  info: {
    displayName: 'PlatFeatureCard';
  };
  attributes: {
    FeatureContent: Schema.Attribute.Text;
    FeatureIcon: Schema.Attribute.Media<'images' | 'files'>;
    FeatureTitle: Schema.Attribute.String;
  };
}

export interface SharedPlatFeatureImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_plat_feature_images';
  info: {
    description: '';
    displayName: 'PlatFeatureImage';
  };
  attributes: {
    ContentImage: Schema.Attribute.Media<'images' | 'files'>;
    ContentLink: Schema.Attribute.String;
    ContentTitle: Schema.Attribute.Blocks;
    PlatIcon: Schema.Attribute.Media<'images' | 'files'>;
    PlatIconTitle: Schema.Attribute.String;
  };
}

export interface SharedPlatformTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_platform_titles';
  info: {
    description: '';
    displayName: 'PlatformTitle';
  };
  attributes: {
    PlatformTitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    googleVerification: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
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

export interface TermsAndPrivacyContentListComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_terms_and_privacy_content_list_components';
  info: {
    description: '';
    displayName: 'Content List Component';
  };
  attributes: {
    listHeading: Schema.Attribute.RichText & Schema.Attribute.Required;
    paragraphList: Schema.Attribute.Component<
      'terms-and-privacy.paragraph-list',
      true
    >;
  };
}

export interface TermsAndPrivacyContentListSection
  extends Struct.ComponentSchema {
  collectionName: 'components_terms_and_privacy_content_list_sections';
  info: {
    description: '';
    displayName: 'Content List Section';
  };
  attributes: {
    contentDate: Schema.Attribute.String;
    contentDetail: Schema.Attribute.RichText;
    contentHeading: Schema.Attribute.RichText & Schema.Attribute.Required;
    listOfContent: Schema.Attribute.Component<
      'terms-and-privacy.content-list-component',
      true
    >;
  };
}

export interface TermsAndPrivacyHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_terms_and_privacy_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heroHeading: Schema.Attribute.String;
  };
}

export interface TermsAndPrivacyParagraphList extends Struct.ComponentSchema {
  collectionName: 'components_terms_and_privacy_paragraph_lists';
  info: {
    displayName: 'paragraphList';
  };
  attributes: {
    Paragraph: Schema.Attribute.RichText;
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
      'blogs.blogs-hero-section': BlogsBlogsHeroSection;
      'blogs.content-section': BlogsContentSection;
      'blogs.text-box': BlogsTextBox;
      'blogs.text-editor': BlogsTextEditor;
      'footer.footer-links': FooterFooterLinks;
      'footer.social-media': FooterSocialMedia;
      'header.header-company': HeaderHeaderCompany;
      'header.header-links': HeaderHeaderLinks;
      'header.header-logo': HeaderHeaderLogo;
      'home.home-action-sec': HomeHomeActionSec;
      'home.home-after-hero': HomeHomeAfterHero;
      'home.home-benifit-hidden-sec': HomeHomeBenifitHiddenSec;
      'home.home-benifit-sec': HomeHomeBenifitSec;
      'home.home-hero-image': HomeHomeHeroImage;
      'home.home-manual-sec': HomeHomeManualSec;
      'home.home-page': HomeHomePage;
      'home.home-precise-sec': HomeHomePreciseSec;
      'home.home-pricing-sec': HomeHomePricingSec;
      'home.home-stich-works': HomeHomeStichWorks;
      'integration.category': IntegrationCategory;
      'integration.connector-image': IntegrationConnectorImage;
      'integration.integration': IntegrationIntegration;
      'platform.feature-sec': PlatformFeatureSec;
      'platform.platform': PlatformPlatform;
      'resource.blog-section': ResourceBlogSection;
      'resource.resource': ResourceResource;
      'resource.resource-after-hero-sec': ResourceResourceAfterHeroSec;
      'security.security': SecuritySecurity;
      'security.security-after-hero-sec': SecuritySecurityAfterHeroSec;
      'security.security-feature-sec': SecuritySecurityFeatureSec;
      'security.security-sub-processor': SecuritySecuritySubProcessor;
      'security.white-paper-sec': SecurityWhitePaperSec;
      'shared.benifit-card': SharedBenifitCard;
      'shared.call-schedule-button': SharedCallScheduleButton;
      'shared.call-schedule-demo': SharedCallScheduleDemo;
      'shared.home-action-card': SharedHomeActionCard;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.plat-feature-card': SharedPlatFeatureCard;
      'shared.plat-feature-image': SharedPlatFeatureImage;
      'shared.platform-title': SharedPlatformTitle;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'terms-and-privacy.content-list-component': TermsAndPrivacyContentListComponent;
      'terms-and-privacy.content-list-section': TermsAndPrivacyContentListSection;
      'terms-and-privacy.hero-section': TermsAndPrivacyHeroSection;
      'terms-and-privacy.paragraph-list': TermsAndPrivacyParagraphList;
    }
  }
}
